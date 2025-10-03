import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function BlogLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
      <>
      <section className="blog-posts">
        <h2>{title}</h2>
        {children}
      </section>
      <Sidebar />
    </>
  );
}
