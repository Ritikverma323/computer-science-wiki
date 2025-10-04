"use client";

import { Post } from "@/data/posts";
import { useState } from "react"; 

interface SearchBarProps {
  posts: Post[];
  onSearch: (results: Post[]) => void;
  selectedTags?: string[];
}

export default function SearchBar({ posts, onSearch, selectedTags = [] }: SearchBarProps) { 
  const [query, setQuery] = useState("");
 
  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      onSearch(posts);
      return;
    }

    const results = posts.filter((post) => {
      // Search in title, content, category, and tags
      const searchFields = [
        post.title,
        post.content,
        post.category,
        ...(post.tags || [])
      ];
      
      return searchFields.some((field) =>
        field.toLowerCase().includes(value.toLowerCase())
      );
    });
    onSearch(results); 
  };

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      className="search-input"
    />
  );
}
