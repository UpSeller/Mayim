export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  description: string
  publishedAt: string
  updatedAt: string
  keywords: string[]
  faq: Array<{ question: string; answer: string }>
  content: string[]
  relatedServices: string[]
  relatedPosts: string[]
}

