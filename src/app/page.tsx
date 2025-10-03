import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import BlogLayout from "../components/BlogLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechBlog - Home</title>
        <meta
          name="description"
          content="Latest tech articles on JavaScript, CSS, React, and more."
        />
      </Head>

      <BlogLayout title="Latest Posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </BlogLayout>
    </>
  );
}
