export type Post = {
  id: string | number;
  title: string;
  content:string;
  category: string;
  author:string;
  excerpt: string;
  date: string;
  image: string;
};

export const posts : Post[] = [
  {
    id: 1,
    title: "Mastering the Event Loop in JavaScript",
    category: "JavaScript",
    author: "Jane Doe",
    date: "2025-10-01",
    image: "/post1.jpg",
    excerpt:"",
    content: `
      <p>The <strong>Event Loop</strong> is a fundamental concept for modern JavaScript development...</p>
      <h3>1. The Call Stack</h3>
      <p>When a script runs, function calls are pushed onto the stack...</p>
      <h3>2. The Task Queue (Macrotasks)</h3>
      <p>Operations like setTimeout(), I/O events, and user interactions...</p>
      <h3>3. The Job Queue (Microtasks)</h3>
      <p>Promises and MutationObserver tasks live here...</p>
      <h4>Conclusion</h4>
      <p>A deep understanding of the Event Loop prevents common issues...</p>
    `
  },
  {
    id: 2,
    title: "The Power of CSS Grid Layout",
    category: "CSS",
    author: "John Smith",
    date: "2025-09-28",
    image: "/post2.jpg",
    content: `<p>Ditch the floats! CSS Grid offers a powerful two-dimensional layout...</p>`,
    excerpt:"",
  }
];
