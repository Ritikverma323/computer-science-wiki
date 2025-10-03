"use client";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import CategoryFilter from "./CategoryFilter";
import { posts } from "../data/posts";
import { categories } from "../data/categories";
import PostCard from "./PostCard";

export default function BlogLayout({ title, children }: { title: string; children?: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // filter posts
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <section className="blog-posts">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Render Posts */}
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {children}
      </section>
      <Sidebar />
    </>
  );
}
