
"use client"; 
import { useState } from 'react';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Example: filter by category
  const filterByCategory = (category) => {
    setFilteredPosts(posts.filter((p) => p.category === category));
  };

  return (
    <>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setFilteredPosts(posts)}>All</button>
        <button onClick={() => filterByCategory('Tech')}>Tech</button>
        <button onClick={() => filterByCategory('AI')}>AI</button>
      </div>

      {filteredPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </>
  );
}
