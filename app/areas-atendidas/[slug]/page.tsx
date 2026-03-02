import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { areaBySlug, areaPages, serviceBySlug } from '@/lib/cluster-content'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = areaBySlug[slug]
  if (!area) {
    return { title: 'Área não encontrada' }
  }

  return {
    title: area.title,
    description: area.description,
    keywords: [area.keyword, 'carro pipa rj', 'abastecimento de água'],
  }
}

export default async function AreaDetailsPage({ params }: Props) {
  const { slug } = await params
  const area = areaBySlug[slug]

  if (!area) {
    notFound()
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Áreas atendidas', href: '/areas-atendidas' },
          { label: area.title },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Áreas atendidas', href: '/areas-atendidas' },
          { name: area.title },
        ]}
      />
      <ServiceJsonLd name={area.title} description={area.description} />

      <h1 className="mt-4 text-3xl font-bold text-blue-900">{area.title}</h1>
      <p className="mt-3 max-w-3xl text-slate-700">{area.summary}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/orcamento" className="rounded-md bg-green-500 px-5 py-3 font-semibold text-white" data-event="click_cta_orcamento_area">
          {area.ctaText}
        </Link>
        <Link href="/contato" className="rounded-md border border-blue-700 px-5 py-3 font-semibold text-blue-700">
          Falar com atendimento
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Serviços recomendados</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {area.relatedSlugs.map((relatedSlug) => {
            const service = serviceBySlug[relatedSlug]
            if (!service) return null
            return (
              <Link key={relatedSlug} href={`/servicos/${relatedSlug}`} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {service.title}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">FAQ rápido</h2>
        <div className="mt-4 space-y-3">
          {area.faq.map((item) => (
            <article key={item.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
