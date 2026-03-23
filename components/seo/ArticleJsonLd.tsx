import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/lib/site'

type ArticleJsonLdProps = {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: { '@id': `${siteConfig.url}/#organization` },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        datePublished: publishedAt,
        dateModified: updatedAt,
        mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
      }}
    />
  )
}
