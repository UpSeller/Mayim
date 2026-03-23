import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/lib/site'

type BreadcrumbItem = {
  name: string
  href?: string
}

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
  }))

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
      }}
    />
  )
}
