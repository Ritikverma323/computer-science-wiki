"use client";

import React, { useState, useEffect } from "react";
import { Post } from "@/data/posts";
import { filterPostsByTags } from "@/data/tags";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";
import PostCard from "./PostCard";

interface FilteredPostsViewProps {
  posts: Post[];
}

export default function FilteredPostsView({ posts }: FilteredPostsViewProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>(posts);

  // Apply tag filtering
  useEffect(() => {
    const tagFiltered = selectedTags.length > 0 
      ? filterPostsByTags(selectedTags) 
      : posts;
    setFilteredPosts(tagFiltered);
  }, [selectedTags, posts]);

  // Apply search filtering on tag-filtered results
  const handleSearch = (searchResults: Post[]) => {
    setDisplayedPosts(searchResults);
  };

  // Reset search when filtered posts change
  useEffect(() => {
    setDisplayedPosts(filteredPosts);
  }, [filteredPosts]);

  const handleTagsChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <div className="filtered-posts-view">
      {/* Filter Controls Row */}
      <div className="filter-controls-row">
        <TagFilter 
          selectedTags={selectedTags}
          onTagsChange={handleTagsChange}
          className="tag-filter-column"
        />
        
        {/* Search Bar */}
        <div className="search-container">
          <SearchBar 
            posts={filteredPosts} 
            onSearch={handleSearch}
            selectedTags={selectedTags}
          />
        </div>
      </div>

      {/* Results Summary */}
      {(selectedTags.length > 0 || searchQuery) && (
        <div className="results-summary mb-4">
          <p className="text-gray-600">
            Showing {displayedPosts.length} of {posts.length} posts
            {selectedTags.length > 0 && (
              <span> filtered by {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''}</span>
            )}
          </p>
        </div>
      )}

      {/* Post listing */}
      {displayedPosts.length === 0 ? (
        <div className="no-results">
          <p>No posts found matching your criteria.</p>
          {selectedTags.length > 0 && (
            <button 
              onClick={() => setSelectedTags([])}
              className="clear-filters-btn mt-2"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="posts-grid">
          {displayedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}