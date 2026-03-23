import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 text-sm text-slate-700 sm:grid-cols-3">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <address className="not-italic">
              {siteConfig.address.streetAddress} — {siteConfig.address.addressLocality}/
              {siteConfig.address.addressRegion}
            </address>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-blue-700">
                {siteConfig.phone}
              </a>{' '}
              •{' '}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-700">
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Serviços</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/servicos/abastecimento-residencial" className="hover:text-blue-700">Abastecimento residencial</Link></li>
              <li><Link href="/servicos/abastecimento-comercial" className="hover:text-blue-700">Abastecimento comercial</Link></li>
              <li><Link href="/servicos/abastecimento-obras" className="hover:text-blue-700">Abastecimento para obras</Link></li>
              <li><Link href="/servicos" className="hover:text-blue-700">Todos os serviços</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Institucional</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/sobre" className="hover:text-blue-700">Sobre a Mayim</Link></li>
              <li><Link href="/areas-atendidas" className="hover:text-blue-700">Áreas atendidas</Link></li>
              <li><Link href="/faq" className="hover:text-blue-700">Perguntas frequentes</Link></li>
              <li><Link href="/blog" className="hover:text-blue-700">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-blue-700">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
