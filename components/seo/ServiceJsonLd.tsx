import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/lib/site'

type ServiceJsonLdProps = {
  name: string
  description: string
}

export function ServiceJsonLd({ name, description }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: { '@type': 'State', name: 'Rio de Janeiro' },
    serviceType: 'Abastecimento de água potável',
  }

  return <JsonLd data={data} />
}
