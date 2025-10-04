import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo"><Link href="/">TechBlog</Link></h1>
        <ul className="nav-links">
          <li><Link href="/category">Categories</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
          <li><Link href="/visitors">Visitors Count</Link></li>
        </ul>
        <DarkModeToggle />
      </div>
    </header>
  );
}
