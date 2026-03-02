import { LeadForm } from '@/components/ui/LeadForm'

export default function OrcamentoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Solicitar orçamento</h1>
      <p className="mt-4 text-slate-700">
        Preencha os campos abaixo para receber uma proposta de carro pipa no RJ.
      </p>

      <LeadForm
        endpoint="/api/orcamento"
        submitLabel="Solicitar orçamento"
        eventName="lead_submit_orcamento"
      />
    </section>
  )
}
