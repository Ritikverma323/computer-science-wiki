import Link from "next/link";
import Image from "next/image";

type Post = {
  id: string | number;
  title: string;
  content: string;
  category: string;
  date: string;
  image: string;
  tags: string[];
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <Link href={`/post/${post.id}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}  
          height={250}  
          className="post-image"
        />
      </Link>

      <div className="post-info">
        <span className="category">#{post.category}</span>
        <h3>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.content.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <time dateTime={post.date}>{post.date}</time>
      </div>
    </article>
  );
}
