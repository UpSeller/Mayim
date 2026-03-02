import { NextResponse } from 'next/server'
import { generateProtocol, parseLeadPayload } from '@/lib/lead'
import { logError, logInfo, logWarn } from '@/lib/observability'
import { checkRateLimit } from '@/lib/rate-limit'
import type { LeadApiResponse } from '@/types/lead'

export async function POST(request: Request) {

  const key = request.headers.get('x-forwarded-for') ?? 'local'
  const rateLimit = checkRateLimit(`${key}:/api/contato`)
  if (!rateLimit.allowed) {
    logWarn('rate_limit', 'Limite de requisições excedido', { endpoint: '/api/contato', key })
    const response: LeadApiResponse = {
      success: false,
      message: 'Muitas tentativas. Aguarde alguns instantes e tente novamente.',
    }
    return NextResponse.json(response, { status: 429 })
  }

  const body = await request.json().catch(() => null)
  const parsed = parseLeadPayload(body)

  if (!parsed.ok) {
    logWarn('validation_error', 'Payload inválido em /api/contato', {
      endpoint: '/api/contato',
      errors: parsed.errors,
    })

    const response: LeadApiResponse = {
      success: false,
      message: parsed.errors.join(' '),
    }

    return NextResponse.json(response, { status: 422 })
  }

  try {
    const protocol = generateProtocol('CNT')

    logInfo('lead_submit_success', 'Lead de contato recebido', {
      endpoint: '/api/contato',
      protocol,
      urgencia: parsed.data.urgencia,
      tipoServico: parsed.data.tipoServico,
    })

    const response: LeadApiResponse = {
      success: true,
      protocol,
      message: 'Contato enviado com sucesso. Em breve nossa equipe retornará.',
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    logError('lead_submit_error', 'Falha ao processar lead de contato', {
      endpoint: '/api/contato',
      error: error instanceof Error ? error.message : 'unknown',
    })

    const response: LeadApiResponse = {
      success: false,
      message: 'Não foi possível processar seu contato agora. Tente novamente em instantes.',
    }

    return NextResponse.json(response, { status: 500 })
  }
}
