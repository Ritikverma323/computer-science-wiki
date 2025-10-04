import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import BlogLayout from '../components/BlogLayout';

export const dynamic = 'force-static';

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <BlogLayout title='Latest Posts' headingLevel={1}>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </BlogLayout>
  );
}
