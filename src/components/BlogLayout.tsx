import { ReactNode } from 'react';
import Sidebar from './Sidebar';

type Props = { title: string; children: ReactNode; headingLevel?: 1 | 2 };

export default function BlogLayout({
  title,
  children,
  headingLevel = 2,
}: Props) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <>
      <section className='blog-posts'>
        <Heading>{title}</Heading>
        {children}
      </section>
      <Sidebar />
    </>
  );
}
