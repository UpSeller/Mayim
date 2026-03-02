import { BlogList } from '@/components/blog/BlogList'
import { blogPosts } from '@/lib/blog-content'

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Blog Mayim</h1>
      <p className="mt-4 text-slate-700">
        Conteúdo prático sobre falta d&apos;água, abastecimento e boas práticas para residências e empresas.
      </p>
      <BlogList posts={blogPosts} />
    </section>
  )
}
