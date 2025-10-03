"use client";
import React, { useState, useEffect } from "react";
import { posts, Post } from "../data/posts"; // adjust path if needed
import PostCard from "./PostCard";
import BlogLayout from "./BlogLayout";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Post[]>(posts);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    useEffect(() => {
        const filtered = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                post.content.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                post.author.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setResults(filtered);
    }, [debouncedQuery]);
    return (
        <div>
            <BlogLayout title="Latest Posts">
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {results.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}

            </BlogLayout>
        </div>
    );
};

export default SearchBar;
