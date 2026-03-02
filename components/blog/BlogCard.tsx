import Link from 'next/link'
import type { BlogPost } from '@/types/blog'

type BlogCardProps = {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 p-5">
      <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
      <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
      <p className="mt-2 text-xs text-slate-500">Publicado em {post.publishedAt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block font-semibold text-blue-700"
        data-event="click_blog_card"
      >
        Ler artigo
      </Link>
    </article>
  )
}
