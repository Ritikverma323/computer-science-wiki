import { posts } from "./posts";

// Extract all unique tags from posts
export const getAllTags = (): string[] => {
  const allTags = posts.flatMap(post => post.tags || []);
  return Array.from(new Set(allTags)).sort();
};

// Get all tags with their post counts
export const getTagsWithCounts = (): Array<{tag: string, count: number}> => {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
};

// Filter posts by selected tags (OR logic - posts matching any selected tag)
export const filterPostsByTags = (selectedTags: string[]): typeof posts => {
  if (selectedTags.length === 0) return posts;
  
  return posts.filter(post => 
    post.tags?.some(tag => selectedTags.includes(tag))
  );
};

// Filter posts by selected tags (AND logic - posts matching all selected tags)
export const filterPostsByTagsAND = (selectedTags: string[]): typeof posts => {
  if (selectedTags.length === 0) return posts;
  
  return posts.filter(post => 
    selectedTags.every(selectedTag => post.tags?.includes(selectedTag))
  );
};