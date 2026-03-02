import type { LeadPayload } from '@/types/lead'

const SERVICE_OPTIONS = [
  'abastecimento-residencial',
  'abastecimento-comercial',
  'abastecimento-obras',
  'abastecimento-piscinas',
  'lavagem-de-ruas',
  'umectacao-e-irrigacao',
] as const

const URGENCY_OPTIONS = ['baixa', 'media', 'alta'] as const

function sanitize(value: unknown): string {
  return String(value ?? '').trim()
}

export function parseLeadPayload(input: unknown): {
  ok: true
  data: LeadPayload
} | {
  ok: false
  errors: string[]
} {
  const raw = (input ?? {}) as Record<string, unknown>
  const data: LeadPayload = {
    nome: sanitize(raw.nome),
    telefone: sanitize(raw.telefone),
    email: sanitize(raw.email) || undefined,
    bairro: sanitize(raw.bairro),
    tipoServico: sanitize(raw.tipoServico),
    urgencia: sanitize(raw.urgencia).toLowerCase() as LeadPayload['urgencia'],
    mensagem: sanitize(raw.mensagem),
  }

  const errors: string[] = []

  if (data.nome.length < 3) errors.push('Nome deve ter ao menos 3 caracteres.')
  if (data.telefone.length < 8) errors.push('Telefone inválido.')
  if (data.bairro.length < 2) errors.push('Bairro é obrigatório.')
  if (!SERVICE_OPTIONS.includes(data.tipoServico as (typeof SERVICE_OPTIONS)[number])) {
    errors.push('Tipo de serviço inválido.')
  }
  if (!URGENCY_OPTIONS.includes(data.urgencia)) {
    errors.push('Urgência inválida.')
  }
  if (data.mensagem.length < 8) errors.push('Mensagem deve ter ao menos 8 caracteres.')

  if (errors.length > 0) {
    return { ok: false, errors }
  }

  return { ok: true, data }
}

export function generateProtocol(prefix: 'CNT' | 'ORC') {
  const stamp = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${prefix}-${stamp}-${rand}`
}
