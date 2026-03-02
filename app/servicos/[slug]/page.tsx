import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { areaBySlug, serviceBySlug, servicePages } from '@/lib/cluster-content'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) {
    return { title: 'Serviço não encontrado' }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [service.keyword, 'carro pipa rj', 'água potável rj'],
  }
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params
  const service = serviceBySlug[slug]

  if (!service) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: service.title },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Serviços', href: '/servicos' },
          { name: service.title },
        ]}
      />
      <ServiceJsonLd name={service.title} description={service.description} />

      <h1 className="mt-4 text-3xl font-bold text-blue-900">{service.title}</h1>
      <p className="mt-3 max-w-3xl text-slate-700">{service.summary}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/orcamento" className="rounded-md bg-green-500 px-5 py-3 font-semibold text-white" data-event="click_cta_orcamento_service">
          {service.ctaText}
        </Link>
        <Link href="/contato" className="rounded-md border border-blue-700 px-5 py-3 font-semibold text-blue-700">
          Falar com especialista
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Áreas relacionadas</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.relatedSlugs.map((relatedSlug) => {
            const area = areaBySlug[relatedSlug]
            if (!area) return null
            return (
              <Link key={relatedSlug} href={`/areas-atendidas/${relatedSlug}`} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {area.title}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">FAQ rápido</h2>
        <div className="mt-4 space-y-3">
          {service.faq.map((item) => (
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
