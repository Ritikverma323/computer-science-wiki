import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>&copy; 2025 TechBlog. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
