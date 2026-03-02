import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { blogPosts } from '@/lib/blog-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/sobre',
    '/servicos',
    '/contato',
    '/orcamento',
    '/faq',
    '/blog',
    '/servicos/abastecimento-residencial',
    '/servicos/abastecimento-comercial',
    '/servicos/abastecimento-obras',
    '/servicos/abastecimento-piscinas',
    '/servicos/lavagem-de-ruas',
    '/servicos/umectacao-e-irrigacao',
    '/areas-atendidas',
    '/areas-atendidas/zona-sul',
    '/areas-atendidas/zona-norte',
    '/areas-atendidas/zona-oeste',
    '/areas-atendidas/barra-da-tijuca',
    '/areas-atendidas/centro',
    '/areas-atendidas/niteroi',
    '/areas-atendidas/baixada-fluminense',
  ]

  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`)

  return [...staticPages, ...blogPages].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
