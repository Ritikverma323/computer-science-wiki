import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <img src={post.img} alt={post.title} />
      <div className="post-info">
        <span className="category">#{post.category}</span>
        <h3>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.content.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
        <time dateTime={post.date}>{post.date}</time>
      </div>
    </article>
  );
}
