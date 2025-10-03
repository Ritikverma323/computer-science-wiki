"use client";

import { Post } from "@/data/posts";
import { useState } from "react"; 

interface SearchBarProps {
  posts: { id: string| number; title: string; content: string; category: string, author: string, excerpt: string, date : string, image : string}[];
  onSearch: (results: Post[]) => void;
}

export default function SearchBar({ posts, onSearch }: SearchBarProps) { 
  const [query, setQuery] = useState("");
 
  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      onSearch(posts);
    }

    const results = posts.filter((post) =>
      [post.title, post.content, post.category].some((field) =>
        field.toLowerCase().includes(value.toLowerCase())
      )
    );
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
