import { posts } from "../../../data/posts";
import Sidebar from "../../../components/Sidebar";
import Image from "next/image";
import Comments from "../../../components/Comments";
import ReadingProgressBar from "../../../components/ReadingProgressBar";

type BlogDetailProps = {
  params: {
    id: string;
  };
};

// Optional but recommended: Add metadata for SEO
export async function generateMetadata({ params }: BlogDetailProps) {
  const { id } = params; // 1. Destructure id from params
  const post = posts.find((p) => p.id.toString() === id); // 2. Use the new id variable

  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} - TechBlog`,
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 150),
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { id } = params; // 3. Destructure id from params here as well
  const post = posts.find((p) => p.id.toString() === id); // 4. Use the new id variable

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <ReadingProgressBar />

      <section className="blog-detail">
        <article>
          <span className="category detail-category">#{post.category}</span>
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <span className="author">By {post.author}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>

          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="detail-image"
          />

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <Comments comments={post.comments} />
      </section>
      <Sidebar />
    </>
  );
}