'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { LeadApiResponse, LeadPayload } from '@/types/lead'

type LeadFormProps = {
  endpoint: '/api/contato' | '/api/orcamento'
  submitLabel: string
  eventName: string
}

const initialForm: LeadPayload = {
  nome: '',
  telefone: '',
  email: '',
  bairro: '',
  tipoServico: 'abastecimento-residencial',
  urgencia: 'media',
  mensagem: '',
}

export function LeadForm({ endpoint, submitLabel, eventName }: LeadFormProps) {
  const [form, setForm] = useState<LeadPayload>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<LeadApiResponse | null>(null)

  const onFieldChange = (
    field: keyof LeadPayload,
    value: LeadPayload[keyof LeadPayload]
  ) => {
    setForm((current: LeadPayload) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const fallbackMessage = response.ok
        ? 'Solicitação enviada com sucesso.'
        : 'Não foi possível processar sua solicitação agora. Tente novamente em instantes.'

      const json = (await response
        .json()
        .catch(() => ({ success: response.ok, message: fallbackMessage }))) as LeadApiResponse

      setFeedback(json)

      if (response.ok) {
        setForm(initialForm)
      }
    } catch {
      setFeedback({ success: false, message: 'Falha de conexão. Tente novamente em instantes.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-lg border border-slate-200 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-800">
          Nome completo
          <input
            required
            minLength={3}
            value={form.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('nome', e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Telefone / WhatsApp
          <input
            required
            minLength={8}
            value={form.telefone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('telefone', e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-800">
          E-mail (opcional)
          <input
            type="email"
            value={form.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('email', e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Bairro / Região
          <input
            required
            minLength={2}
            value={form.bairro}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onFieldChange('bairro', e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-800">
          Tipo de serviço
          <select
            value={form.tipoServico}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onFieldChange('tipoServico', e.target.value as LeadPayload['tipoServico'])}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          >
            <option value="abastecimento-residencial">Abastecimento residencial</option>
            <option value="abastecimento-comercial">Abastecimento comercial</option>
            <option value="abastecimento-obras">Abastecimento para obras</option>
            <option value="abastecimento-piscinas">Abastecimento para piscinas</option>
            <option value="lavagem-de-ruas">Lavagem de ruas</option>
            <option value="umectacao-e-irrigacao">Umectação e irrigação</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-800">
          Urgência
          <select
            value={form.urgencia}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onFieldChange('urgencia', e.target.value as LeadPayload['urgencia'])}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          >
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-800">
        Mensagem
        <textarea
          required
          minLength={8}
          rows={4}
          value={form.mensagem}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onFieldChange('mensagem', e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        data-event={eventName}
        className="rounded-md bg-green-500 px-6 py-3 font-semibold text-white disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : submitLabel}
      </button>

      {feedback ? (
        <p className={`text-sm ${feedback.success ? 'text-green-700' : 'text-red-700'}`}>
          {feedback.message} {feedback.protocol ? `Protocolo: ${feedback.protocol}` : ''}
        </p>
      ) : null}
    </form>
  )
}
