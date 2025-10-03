"use client";
import { useState } from "react";
import BlogLayout from "../components/BlogLayout";
import FilterBar from "../components/FilterBar";
import { posts } from "../data/posts";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogLayout title="Latest Posts" posts={filteredPosts} />
    </div>
  );
}
