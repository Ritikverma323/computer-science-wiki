import { posts } from "../../../data/posts";
import Sidebar from "../../../components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Comments from "../../../components/Comments";
type BlogDetailProps = {
  params: {
    id: string;
  };
};


export default async function BlogDetail({ params }: BlogDetailProps) {
  const postId = params.id;

  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <Head>
        <title>{post.title} - TechBlog</title>
        <meta
          name="description"
          content={post.content.replace(/<[^>]+>/g, "").slice(0, 150)}
        />
      </Head>
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

          {/* Tags for detail page */}
          {post.tags && post.tags.length > 0 && (
            <div className="post-detail-tags">
              <h4>Tags:</h4>
              <div className="tags-list">
                {post.tags.map(tag => (
                  <span key={tag} className="detail-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

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
