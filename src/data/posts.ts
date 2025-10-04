export type comments = {
  profilePic: string;
  username: string | number;
  content: string;
  date: Date;
  likes: number;
  replies?: comments[];
};

export type Post = {
  id: string | number;
  title: string;
  content: string;
  category: string;
  author: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  comments?: comments[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Mastering the Event Loop in JavaScript",
    category: "JavaScript",
    author: "Jane Doe",
    date: "2025-10-01",
    image: "/post1.jpg",
    excerpt: "",
    tags: ["javascript", "async", "programming", "web-development", "event-loop"],
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
    `,
    comments: [
      {
        profilePic: "/avatars/user1.jpg",
        username: "dev_raj",
        content: "This finally made me understand why setTimeout runs after promises. Great explanation!",
        date: new Date("2025-10-02T10:30:00"),
        likes: 23,
        replies: [
          {
            profilePic: "/avatars/user2.jpg",
            username: "Jane Doe",
            content: "Glad it helped! The microtask queue is often overlooked, but it’s super important.",
            date: new Date("2025-10-02T11:00:00"),
            likes: 12,
          },
          {
            profilePic: "/avatars/user3.jpg",
            username: "codewithsam",
            content: "Totally agree! The difference between macro and micro tasks blew my mind.",
            date: new Date("2025-10-02T12:45:00"),
            likes: 5,
          },
        ],
      },
      {
        profilePic: "/avatars/user4.jpg",
        username: "js_guru",
        content: "Would love to see a visual diagram for this topic next time!",
        date: new Date("2025-10-03T09:10:00"),
        likes: 8,
      },
    ]
  },
  {
    id: 2,
    title: "The Power of CSS Grid Layout",
    category: "CSS",
    author: "John Smith",
    date: "2025-09-28",
    image: "/post2.jpg",
    content: `<p>Ditch the floats! CSS Grid offers a powerful two-dimensional layout...</p>`,
    excerpt: "",
    tags: ["css", "grid", "layout", "web-development", "frontend"],
    comments: [
      {
        profilePic: "/avatars/user2.jpg",
        username: "designqueen",
        content: "Grid changed my life as a frontend dev! So much cleaner than flexbox for complex layouts.",
        date: new Date("2025-09-29T14:20:00"),
        likes: 15,
      },
      {
        profilePic: "/avatars/user3.jpg",
        username: "ui_maniac",
        content: "I use grid for all dashboard layouts now. Just wish browser support was perfect years ago!",
        date: new Date("2025-09-30T09:00:00"),
        likes: 9,
      },
    ],
  },
  {
    id: 3,
    title: "React Hooks Best Practices",
    category: "React",
    author: "Sarah Johnson",
    date: "2025-09-25",
    image: "/post1.jpg",
    content: `<p>Learn the best practices for using React Hooks effectively...</p>`,
    excerpt: "",
    tags: ["react", "hooks", "javascript", "frontend", "web-development"],
    comments: []
  },
  {
    id: 4,
    title: "Introduction to Node.js",
    category: "Backend",
    author: "Mike Chen",
    date: "2025-09-20",
    image: "/post2.jpg",
    content: `<p>Getting started with Node.js for backend development...</p>`,
    excerpt: "",
    tags: ["nodejs", "backend", "javascript", "server", "api"],
    comments: []
  },
  {
    id: 5,
    title: "CSS Flexbox vs Grid",
    category: "CSS",
    author: "Emma Wilson",
    date: "2025-09-15",
    image: "/post1.jpg",
    content: `<p>Understanding when to use Flexbox vs CSS Grid...</p>`,
    excerpt: "",
    tags: ["css", "flexbox", "grid", "layout", "frontend"],
    comments: []
  }
];
