import CategoryList from "@/components/CategoryList";
import BlogLayout from "@/components/BlogLayout";
import Head from "next/head";

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>All Categories - TechBlog</title>
        <meta
          name="description"
          content="Browse all categories of TechBlog posts."
        />
      </Head>

      <BlogLayout title="All Categories">
        <CategoryList />
      </BlogLayout>
    </>
  );
}
