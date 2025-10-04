import DarkModeToggle from './DarkModeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='main-header'>
      <div className='container'>
        <div className='logo' aria-label='TechBlog Home'>
          <Link href='/'>TechBlog</Link>
        </div>
        <ul className='nav-links'>
          <li>
            <Link href='/category'>Categories</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
        <DarkModeToggle />
      </div>
    </header>
  );
}
