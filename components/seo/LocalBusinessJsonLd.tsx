import { siteConfig } from '@/lib/site'
import { JsonLd } from './JsonLd'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, PIX, Cartão, Boleto',
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -22.9068,
      longitude: -43.1729,
    },
    areaServed: [
      { '@type': 'City', name: 'Rio de Janeiro' },
      { '@type': 'City', name: 'Niterói' },
      { '@type': 'City', name: 'Nova Iguaçu' },
      { '@type': 'City', name: 'Duque de Caxias' },
      { '@type': 'City', name: 'São Gonçalo' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.instagram.com/mayimcarropipa',
      'https://www.facebook.com/mayimcarropipa',
      `https://wa.me/${siteConfig.whatsapp}`,
    ],
    additionalType: 'https://www.wikidata.org/wiki/Q1061324',
  }

  return <JsonLd data={data} />
}
