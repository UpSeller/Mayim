import Link from 'next/link'
import { servicePages } from '@/lib/cluster-content'

export default function ServicosPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Serviços de carro pipa no RJ</h1>
      <p className="mt-4 text-slate-700">
        Escolha o serviço ideal para sua necessidade e solicite atendimento rápido.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {servicePages.map((service) => (
          <article key={service.slug} className="rounded-lg border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            <Link href={`/servicos/${service.slug}`} className="mt-3 inline-block font-semibold text-blue-700">
              Ver página do serviço
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/orcamento" className="rounded-md bg-green-500 px-6 py-3 font-semibold text-white" data-event="click_cta_orcamento_servicos_hub">
          Solicitar orçamento agora
        </Link>
      </div>
    </section>
  )
}
