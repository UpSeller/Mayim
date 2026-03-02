import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-700">
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
    </footer>
  )
}
