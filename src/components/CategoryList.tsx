import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryList() {
  return (
    <div className="sidebar-section categories">
      <h3>All Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/category/${cat}`} className="category-link">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
