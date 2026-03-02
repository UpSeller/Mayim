import Link from 'next/link'
import { areaPages } from '@/lib/cluster-content'

export default function AreasAtendidasPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Áreas atendidas</h1>
      <p className="mt-4 text-slate-700">
        Atendimento local em regiões estratégicas do Rio de Janeiro e entorno.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {areaPages.map((area) => (
          <article key={area.slug} className="rounded-lg border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{area.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{area.description}</p>
            <Link href={`/areas-atendidas/${area.slug}`} className="mt-3 inline-block font-semibold text-blue-700">
              Ver atendimento na região
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/orcamento" className="rounded-md bg-green-500 px-6 py-3 font-semibold text-white" data-event="click_cta_orcamento_areas_hub">
          Solicitar orçamento
        </Link>
      </div>
    </section>
  )
}
