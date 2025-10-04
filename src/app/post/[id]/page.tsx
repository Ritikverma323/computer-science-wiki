import { posts } from '../../../data/posts';
import Sidebar from '../../../components/Sidebar';
import Image from 'next/image';
import type { Metadata } from 'next';
import Comments from '@/components/Comments';

type BlogDetailProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: BlogDetailProps): Metadata {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) return { title: 'Post not found' };
  const siteUrl = 'https://computer-science-blogs.vercel.app'; // keep in sync with layout
  const url = `${siteUrl}/post/${post.id}`;
  const plain = post.content.replace(/<[^>]+>/g, '').trim();
  const desc = plain.slice(0, 150) + (plain.length > 150 ? '...' : '');
  return {
    title: post.title,
    description: desc,
    keywords: [post.category, post.title, post.author],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: desc,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: desc,
      images: [post.image],
    },
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) return <p>Post not found</p>;
  const plain = post.content.replace(/<[^>]+>/g, '').trim();
  const desc = plain.slice(0, 150) + (plain.length > 150 ? '...' : '');
  const siteUrl = 'https://computer-science-blogs.vercel.app';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: desc,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    articleSection: post.category,
    image: siteUrl + post.image,
    mainEntityOfPage: siteUrl + `/post/${post.id}`,
    publisher: {
      '@type': 'Organization',
      name: 'TechBlog',
      logo: { '@type': 'ImageObject', url: siteUrl + '/next.svg' },
    },
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className='blog-detail'>
        <article>
          <span className='category detail-category'>#{post.category}</span>
          <h1 className='post-title'>{post.title}</h1>
          <div className='post-meta'>
            <span className='author'>By {post.author}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className='detail-image'
          />
          <div
            className='post-body'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <Comments comments={post.comments} />
      </section>
      <Sidebar />
    </>
  );
}
