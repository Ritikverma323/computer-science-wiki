import { posts } from "./posts";

export const categories = Array.from(
  new Set(posts.map((post) => post.category.toLowerCase()))
);
