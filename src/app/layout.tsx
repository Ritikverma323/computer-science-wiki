import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "TechBlog",
  description: "Latest tech articles on JavaScript, CSS, React, and more.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
