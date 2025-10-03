import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import BlogLayout from '@/components/BlogLayout';
import type { Metadata } from 'next';

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const name = params.slug;
  const siteUrl = 'https://computer-science-blogs.vercel.app';
  const url = `${siteUrl}/category/${name}`;
  const desc = `Articles in the ${name} category on TechBlog.`;
  return {
    title: `Category: ${name}`,
    description: desc,
    keywords: [name, `${name} tutorials`, `${name} articles`],
    alternates: { canonical: url },
    openGraph: { title: `Category: ${name}`, description: desc, url },
    twitter: { title: `Category: ${name}`, description: desc },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();
  const filteredPosts = posts.filter((p) => p.category.toLowerCase() === slug);
  return (
    <BlogLayout title={`Category: ${params.slug}`} headingLevel={1}>
      {filteredPosts.length === 0 && <p>No posts found.</p>}
      {filteredPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </BlogLayout>
  );
}
