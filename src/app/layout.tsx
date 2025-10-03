import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "TechBlog",
  description: "Latest tech articles on JavaScript, CSS, React, and more.",
};

export default function RootLayout({ children }) {
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