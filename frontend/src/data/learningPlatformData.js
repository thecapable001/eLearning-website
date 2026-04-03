export const programmingLanguages = [
  { name: "C", context: "Pointers and memory" },
  { name: "C++", context: "STL and OOP" },
  { name: "Java", context: "Collections and OOP" },
  { name: "Python", context: "Scripting and DSA" },
  { name: "JavaScript", context: "Web logic" },
  { name: "TypeScript", context: "Typed frontend" },
  { name: "Go", context: "Concurrency basics" },
  { name: "Rust", context: "Systems safety" },
  { name: "SQL", context: "Queries and joins" },
  { name: "Kotlin", context: "Android flows" },
  { name: "C#", context: ".NET fundamentals" },
  { name: "Bash / Shell", context: "Automation" },
  { name: "Dart", context: "Flutter apps" },
  { name: "Swift", context: "iOS development" },
  { name: "PHP", context: "Backend fundamentals" },
  { name: "Ruby", context: "Rails thinking" },
];

export const quickRevisionResources = [
  {
    title: "DSA Revision Playlists",
    access: "Free revision",
    description:
      "Pattern-first revision for arrays, recursion, trees, graphs, greedy, and dynamic programming before coding rounds.",
    focus: "Coding rounds",
    tone: "blue",
    links: [
      {
        label: "Watch DSA revision",
        href: "https://www.youtube.com/watch?v=pkYVOmU3MgA",
      },
      {
        label: "Open Striver sheet",
        href: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
      },
      {
        label: "Try assessments",
        to: "/test",
      },
    ],
  },
  {
    title: "Java Fundamentals Fast Refreshers",
    access: "Free revision",
    description:
      "Use short refresher videos for syntax, OOP, collections, exception handling, and interview-style Java basics.",
    focus: "Language refresh",
    tone: "amber",
    links: [
      {
        label: "Watch Java refresher",
        href: "https://www.youtube.com/watch?v=A74TOX803D0",
      },
      {
        label: "Open Java guide",
        href: "https://dev.java/learn/",
      },
      {
        label: "Open language hub",
        to: "/courses/programming",
      },
    ],
  },
  {
    title: "Frontend Interview Snapshots",
    access: "Free revision",
    description:
      "Quick refreshers for HTML, CSS, JavaScript, React, API flow, and the frontend talking points that show up in technical interviews.",
    focus: "Frontend stack",
    tone: "cyan",
    links: [
      {
        label: "Watch frontend revision",
        href: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
      },
      {
        label: "Open MDN guide",
        href: "https://developer.mozilla.org/en-US/docs/Learn",
      },
      {
        label: "Open full stack lane",
        to: "/courses/fullstack",
      },
    ],
  },
  {
    title: "SQL and DBMS Quick Recall",
    access: "Free revision",
    description:
      "Brush up joins, normalization, indexing, transactions, and the database answers that frequently appear in placement rounds.",
    focus: "Database prep",
    tone: "emerald",
    links: [
      {
        label: "Open library notes",
        to: "/library",
      },
      {
        label: "Practice MCQs",
        to: "/test",
      },
    ],
  },
  {
    title: "OS, CN, and OOP Memory Maps",
    access: "Free revision",
    description:
      "Use short recall lanes for operating systems, computer networks, and object-oriented principles before theory-heavy interviews.",
    focus: "Core CS",
    tone: "violet",
    links: [
      {
        label: "Watch CS prep",
        href: "https://www.youtube.com/watch?v=IGFw8DRezYU",
      },
      {
        label: "Open interview shelf",
        to: "/library",
      },
      {
        label: "Start quick tests",
        to: "/test",
      },
    ],
  },
  {
    title: "System Design Introductions",
    access: "Free revision",
    description:
      "Beginner-friendly explanations of scalability, caching, databases, load balancing, and tradeoff-based thinking.",
    focus: "System design",
    tone: "slate",
    links: [
      {
        label: "Watch system design intro",
        href: "https://www.youtube.com/watch?v=m8Icp_Cid5o",
      },
      {
        label: "Watch design basics",
        href: "https://www.youtube.com/watch?v=quLrc3PbuIw",
      },
      {
        label: "Browse reference shelf",
        to: "/library",
      },
    ],
  },
  {
    title: "Aptitude and OA Speed Drills",
    access: "Free revision",
    description:
      "Reset quickly with aptitude-style warmups, reasoning practice, and short assessment drills for placement online tests.",
    focus: "Placement OA",
    tone: "gold",
    links: [
      {
        label: "Watch OA prep",
        href: "https://www.youtube.com/watch?v=IJjtXNUra8g",
      },
      {
        label: "Open assessments",
        to: "/test",
      },
      {
        label: "See prep notes",
        to: "/library",
      },
    ],
  },
  {
    title: "HR and Project Pitch Prep",
    access: "Free revision",
    description:
      "Use this lane for self-introduction flow, project explanation structure, and interview storytelling before final discussion rounds.",
    focus: "Final rounds",
    tone: "rose",
    links: [
      {
        label: "Watch HR answer",
        href: "https://www.youtube.com/watch?v=es7XtrloDIQ",
      },
      {
        label: "Watch project pitch tips",
        href: "https://www.youtube.com/watch?v=rtUz6s-It7k",
      },
      {
        label: "Read interview stories",
        to: "/team",
      },
      {
        label: "Open profile desk",
        to: "/profile",
      },
    ],
  },
  {
    title: "Coding Interview Preparation Hubs",
    access: "Free revision",
    description:
      "Use guided sheets, timed problem sets, and company-tagged practice when you want structured interview prep.",
    focus: "Interview prep",
    tone: "teal",
    links: [
      {
        label: "Watch roadmap",
        href: "https://www.youtube.com/watch?v=jgQjes7MgTM",
      },
      {
        label: "Open roadmap",
        href: "https://neetcode.io/roadmap",
      },
      {
        label: "Prep guide",
        href: "https://blog.neetcode.io/p/prepare-coding-interviews",
      },
      {
        label: "Mock test hub",
        to: "/test",
      },
    ],
  },
];

export const knowledgeHubCategories = [
  "Books",
  "Cheat Sheets",
  "Interview Notes",
  "MCQ Practice",
  "Quick Revision Guides",
];

export const knowledgeHubCards = [
  {
    title: "Cracking the Coding Interview",
    category: "Books",
    description:
      "A classic interview-prep book for coding problems, resume basics, and recruiter-facing preparation patterns.",
  },
  {
    title: "Grokking Algorithms",
    category: "Books",
    description:
      "A visual and beginner-friendly resource for data structures, algorithms, and problem-solving foundations.",
  },
  {
    title: "Designing Data-Intensive Applications",
    category: "Books",
    description:
      "A strong system design reference for reliability, storage systems, data models, and distributed thinking.",
  },
  {
    title: "Effective Java",
    category: "Books",
    description:
      "A practical Java fundamentals and best-practices reference for students strengthening core language depth.",
  },
  {
    title: "Frontend and SQL Cheat Sheets",
    category: "Cheat Sheets",
    description:
      "Fast syntax recall for HTML, CSS, JavaScript, TypeScript, SQL joins, and common query patterns.",
  },
  {
    title: "Core CS Interview Notes",
    category: "Interview Notes",
    description:
      "Condensed notes for DBMS, OS, CN, OOP, and common theory questions that appear in placement interviews.",
  },
  {
    title: "Timed MCQ Practice Packs",
    category: "MCQ Practice",
    description:
      "Quick drills for aptitude, programming fundamentals, and subject-wise MCQs before online assessments.",
  },
  {
    title: "Last-Minute Revision Guides",
    category: "Quick Revision Guides",
    description:
      "High-signal refreshers for DSA patterns, Java basics, web development flow, and system design introductions.",
  },
];
