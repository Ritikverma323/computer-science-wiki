import CategoryList from '@/components/CategoryList';
import BlogLayout from '@/components/BlogLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Browse all categories of TechBlog posts.',
  keywords: ['categories', 'techblog'],
};

export default function CategoriesPage() {
  return (
    <BlogLayout title='All Categories' headingLevel={1}>
      <CategoryList />
    </BlogLayout>
  );
}
