import { posts } from "./posts";

// Keep category names exactly as in posts.ts
export const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
