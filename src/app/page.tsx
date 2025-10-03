import Head from "next/head";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <>
      <Head>
        <title>TechBlog - Home</title>
        <meta
          name="description"
          content="Latest tech articles on JavaScript, CSS, React, and more."
        />
      </Head>
      <SearchBar />
      <Sidebar />
    </>
  );
}
