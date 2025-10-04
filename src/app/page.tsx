import { posts } from '../data/posts';
import PostList from '../components/postList'
import BlogLayout from '../components/BlogLayout';

export const dynamic = 'force-static'; 

export default function Home() {
  return (
    <BlogLayout title="Latest Posts" headingLevel={1}>
      <PostList posts={posts} />
    </BlogLayout>
  );
}
