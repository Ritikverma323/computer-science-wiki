import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link href={`/post/${post.id}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}   // adjust width as needed
          height={250}  // adjust height as needed
          className="post-image"
        />
      </Link>

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
