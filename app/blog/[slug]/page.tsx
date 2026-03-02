import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ArticleJsonLd } from '@/components/seo/ArticleJsonLd'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { blogBySlug, blogPosts } from '@/lib/blog-content'
import { serviceBySlug } from '@/lib/cluster-content'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogBySlug[slug]

  if (!post) return { title: 'Artigo não encontrado' }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogBySlug[slug]

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-4xl px-4 py-16">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title },
        ]}
      />

      <ArticleJsonLd
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />
      <FaqJsonLd items={post.faq} />

      <h1 className="mt-4 text-3xl font-bold text-blue-900">{post.title}</h1>
      <p className="mt-2 text-sm text-slate-600">Publicado em {post.publishedAt}</p>

      <div className="mt-6 space-y-4 text-slate-800">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Perguntas relacionadas</h2>
        <div className="mt-4 space-y-3">
          {post.faq.map((item) => (
            <section key={item.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.answer}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Serviços indicados</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.relatedServices.map((relatedSlug) => {
            const service = serviceBySlug[relatedSlug]
            if (!service) return null
            return (
              <Link key={relatedSlug} href={`/servicos/${relatedSlug}`} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {service.title}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Leia também</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.relatedPosts.map((relatedSlug) => {
            const relatedPost = blogBySlug[relatedSlug]
            if (!relatedPost) return null
            return (
              <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {relatedPost.title}
              </Link>
            )
          })}
        </div>

        <Link
          href="/orcamento"
          className="mt-6 inline-block rounded-md bg-green-500 px-5 py-3 font-semibold text-white"
          data-event="click_cta_blog_orcamento"
        >
          Solicitar orçamento
        </Link>
      </section>
    </article>
  )
}
