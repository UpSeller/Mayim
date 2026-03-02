import { LeadForm } from '@/components/ui/LeadForm'

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Contato</h1>
      <p className="mt-4 text-slate-700">
        Fale com a equipe da Mayim para tirar dúvidas e solicitar atendimento.
      </p>

      <LeadForm
        endpoint="/api/contato"
        submitLabel="Enviar contato"
        eventName="lead_submit_contato"
      />
    </section>
  )
}
