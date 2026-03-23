import { JsonLd } from '@/components/seo/JsonLd'

type FaqJsonLdProps = {
  items: Array<{ question: string; answer: string }>
}

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  )
}
