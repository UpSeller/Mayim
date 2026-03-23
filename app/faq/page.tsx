import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

const faqItems = [
  {
    question: 'Quanto custa um carro pipa no Rio de Janeiro?',
    answer:
      'O valor depende do volume solicitado, distância de entrega e nível de urgência do atendimento.',
  },
  {
    question: 'A água é potável?',
    answer:
      'Sim. A Mayim trabalha com abastecimento de água potável para diferentes tipos de uso conforme necessidade.',
  },
  {
    question: 'Vocês atendem 24h?',
    answer:
      'Sim, com operação estendida para cenários de emergência e falta d’água em residências e empresas.',
  },
  {
    question: 'Quais regiões vocês atendem?',
    answer:
      'Atendemos a cidade do Rio de Janeiro, Niterói e regiões da Baixada Fluminense com logística dedicada.',
  },
]

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <FaqJsonLd items={faqItems} />
      <h1 className="text-3xl font-bold text-blue-900">Perguntas frequentes</h1>
      <div className="mt-6 space-y-4">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-lg border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{item.question}</h2>
            <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
