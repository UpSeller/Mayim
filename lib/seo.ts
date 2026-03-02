import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: 'Mayim | Carro Pipa RJ - Água Potável 24h no Rio de Janeiro',
      template: '%s | Mayim Carro Pipa RJ',
    },
    description: siteConfig.description,
    keywords: [
      'carro pipa rj',
      'caminhão pipa rio de janeiro',
      'água potável rj',
      'carro pipa 24h',
    ],
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: siteConfig.name,
      title: 'Mayim | Carro Pipa RJ - Água Potável 24h no Rio de Janeiro',
      description: siteConfig.description,
      url: siteConfig.url,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: siteConfig.url,
    },
  }
}
