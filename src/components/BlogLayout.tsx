import PostCard from "./PostCard";
import Sidebar from "./Sidebar";
import { Post } from "../data/posts";

export default function BlogLayout({
  title,
  posts,
}: {
  title: string;
  posts: Post[];
}) {
  return (
    <div className="flex flex-row gap-6 items-start">
      {/* Left side - Latest Posts */}
      <section className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Right side - Sidebar */}
      <aside className="w-72 shrink-0">
        <Sidebar />
      </aside>
    </div>
  );
}