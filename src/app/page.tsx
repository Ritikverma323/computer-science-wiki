"use client";
import { useState } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

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
        {/* 🔍 Search bar */}
        <SearchBar posts={posts} onSearch={setFilteredPosts} />

        {/* Post listing */}
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </BlogLayout>
    </>
  );
}
