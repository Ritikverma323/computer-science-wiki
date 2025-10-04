import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

const siteName = 'TechBlog';
const siteUrl = 'https://computer-science-blogs.vercel.app';
const description = 'Latest tech articles on JavaScript, CSS, React, and more.';

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  keywords: [
    'tech',
    'javascript',
    'css',
    'react',
    'web development',
    'programming',
  ],
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: siteName, description },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main id='main' className='container main-content'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}