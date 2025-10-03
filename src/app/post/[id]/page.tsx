import { posts } from "../../../data/posts";
import Sidebar from "../../../components/Sidebar";
import Head from "next/head";

export default function BlogDetail({ params }) {
  const { id } = params;
  const post = posts.find((p) => p.id.toString() === id);

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
          <img src={post.img} alt={post.title} className="detail-image" />
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>
      <Sidebar />
    </>
  );
}
