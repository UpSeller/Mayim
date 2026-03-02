export type PageFaq = {
  question: string
  answer: string
}

export type ClusterPage = {
  slug: string
  title: string
  keyword: string
  description: string
  summary: string
  ctaText: string
  faq: PageFaq[]
  relatedSlugs: string[]
}
