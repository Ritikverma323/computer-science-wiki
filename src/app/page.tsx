"use client";
import { useState } from "react";
import BlogLayout from "../components/BlogLayout";
import CategoryFilter from "../components/CategoryFilter";
import { categories } from "../data/categories";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BlogLayout 
      title="Latest Posts" 
      selectedCategory={selectedCategory} 
    />
  );
}
