"use client";
import { posts } from "../data/posts";
import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import FilteredPostsView from "@/components/FilteredPostsView";

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
        <FilteredPostsView posts={posts} />
      </BlogLayout>
    </>
  );
}
