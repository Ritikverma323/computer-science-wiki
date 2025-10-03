import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
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
      <section className="blog-posts">
        <h2>Latest Posts</h2>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      <Sidebar />
    </>
  );
}
