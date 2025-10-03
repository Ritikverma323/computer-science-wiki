import { posts } from "../data/posts";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section categories">
        <h3>Blog Categories</h3>
        <ul>
          <li><Link href="#">Web Development</Link></li>
          <li><Link href="#">AI & ML</Link></li>
          <li><Link href="#">Cloud Computing</Link></li>
        </ul>
      </div>
      <div className="sidebar-section trending">
        <h3>🔥 Trending Posts</h3>
        <ul>
          {posts.map(p => (
            <li key={p.id}><Link href={`/post/${p.id}`}>{p.title}</Link></li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
