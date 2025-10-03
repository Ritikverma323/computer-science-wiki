import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import BlogLayout from "@/components/BlogLayout";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === params.slug.toLowerCase()
  );

  if (filteredPosts.length === 0) {
    return (
      <BlogLayout title={`Category: ${params.slug}`}>
        <p>No posts found in category: {params.slug}</p>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout title={`Category: ${params.slug}`}>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </BlogLayout>
  );
}
