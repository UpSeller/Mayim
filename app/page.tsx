import Link from 'next/link'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { siteConfig } from '@/lib/site'
import { homeAreas, homeFaq, homeServices } from '@/lib/home-content'

export default function HomePage() {
  return (
    <>
      <ServiceJsonLd
        name="Carro pipa no Rio de Janeiro"
        description="Atendimento 24h para abastecimento de água potável em residências, empresas e obras no RJ."
      />

      <section className="bg-blue-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold text-blue-900">
            Carro Pipa no Rio de Janeiro 24h
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Atendimento rápido para abastecimento de água potável em residências,
            empresas, obras e piscinas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/orcamento"
              className="rounded-md bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
              data-event="click_cta_principal"
            >
              Solicitar orçamento
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="rounded-md border border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
              data-event="click_cta_home_whatsapp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Serviços principais</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {homeServices.map((service) => (
            <article key={service.title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-blue-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
              <Link href={service.href} className="mt-3 inline-block text-sm font-semibold text-blue-700">
                Ver detalhes
              </Link>
            </article>
          ))}
        </div>
        <Link href="/servicos" className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
          Ver todos os serviços
        </Link>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900">Áreas atendidas</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {homeAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <Link href="/areas-atendidas" className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
            Ver todas as áreas atendidas
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900">Dúvidas frequentes</h2>
        <div className="mt-6 space-y-4">
          {homeFaq.map((item) => (
            <article key={item.question} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
        <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
          Ver todas as perguntas frequentes
        </Link>
      </section>

      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Precisa de água com urgência?</h2>
          <p className="mt-2 text-blue-100">
            Nossa equipe atende 24 horas para reduzir impacto da falta d&apos;água.
          </p>
          <address className="mt-4 not-italic text-sm text-blue-100">
            Atendimento Mayim • {siteConfig.address.addressLocality}/{siteConfig.address.addressRegion} •{' '}
            <a className="font-semibold text-white underline" href={`tel:${siteConfig.phone}`}>
              {siteConfig.phone}
            </a>
          </address>
        </div>
      </section>
    </>
  )
}
