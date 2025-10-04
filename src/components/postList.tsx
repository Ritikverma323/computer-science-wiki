"use client";
import { useState } from 'react';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import { Post } from '@/data/posts';

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterByCategory = (category: string) => {
    setFilteredPosts(posts.filter((p) => p.category === category));
  };

  return (
    <>
      {/* 🔍 Search bar */}
      <SearchBar posts={posts} onSearch={setFilteredPosts} />

      {/* Post listing */}
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </>
  );
}
