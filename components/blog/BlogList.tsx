import type { BlogPost } from '@/types/blog'
import { BlogCard } from '@/components/blog/BlogCard'

type BlogListProps = {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
