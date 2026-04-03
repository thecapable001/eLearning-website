import { coursePageData } from "../Components/Course/coursePageData";
import { quizCatalog } from "../Components/Quiz/quizData";
import {
  knowledgeHubCards,
  knowledgeHubCategories,
  quickRevisionResources,
} from "./learningPlatformData";

const routeAction = (label, to) => ({ type: "route", label, to });
const linkAction = (label, href) => ({ type: "link", label, href });
const promptAction = (label, prompt) => ({ type: "prompt", label, prompt });

const COURSE_ROUTE_MAP = {
  java: "/courses/java",
  dsa: "/courses/dsa",
  advJava: "/courses/programming/advJava",
  html: "/courses/fullstack/html",
  css: "/courses/fullstack/css",
  javascript: "/courses/fullstack/javascript",
  react: "/courses/mern/react",
  nodejs: "/courses/mern/nodejs",
  express: "/courses/mern/express",
  mongodb: "/courses/mern/mongodb",
  mysql: "/courses/fullstack/sql",
};

const COURSE_ALIASES = {
  java: ["java", "oop", "core java", "collections", "language basics"],
  dsa: ["dsa", "data structures", "algorithms", "coding rounds", "leetcode"],
  advJava: ["advanced java", "adv java", "jdbc", "servlet", "jsp", "spring boot"],
  html: ["html", "semantic html", "forms", "web structure"],
  css: ["css", "styling", "flexbox", "grid", "responsive design"],
  javascript: ["javascript", "js", "dom", "frontend logic", "arrays", "functions"],
  react: ["react", "reactjs", "jsx", "hooks", "components"],
  nodejs: ["node", "nodejs", "npm", "backend runtime"],
  express: ["express", "expressjs", "api", "routing", "middleware"],
  mongodb: ["mongodb", "mongoose", "nosql", "crud"],
  mysql: ["mysql", "sql", "dbms", "joins", "database", "normalization"],
};

const PATH_GUIDES = [
  {
    title: "Full Stack Foundations",
    summary:
      "Best for learners who want HTML, CSS, JavaScript, React, Node, and database basics in one guided web-development path.",
    actions: [
      routeAction("Open full stack track", "/courses/fullstack"),
      promptAction("What comes after this?", "How should I use the full stack track?"),
    ],
    keywords: ["full stack", "frontend and backend", "web development", "fullstack"],
  },
  {
    title: "MERN Project Builder",
    summary:
      "Best for project-focused learning across React, Node, Express, MongoDB, APIs, and product-style development flow.",
    actions: [
      routeAction("Open MERN track", "/courses/mern"),
      promptAction("Explain MERN path", "What is inside the MERN track?"),
    ],
    keywords: ["mern", "mongodb express react node", "project builder", "api project"],
  },
  {
    title: "Programming Languages Hub",
    summary:
      "Best when you want Java, Advanced Java, JavaScript, and language-side refreshers for interviews and placements.",
    actions: [
      routeAction("Open programming hub", "/courses/programming"),
      promptAction("Show Java support", "Tell me about the Java course"),
    ],
    keywords: ["programming", "languages", "language hub", "java hub", "coding language"],
  },
];

const MENTOR_TEXT =
  "ByteBridge has a Mentor Guide page with public interview stories from companies like Google, Amazon, Microsoft, PayPal, Infosys, IBM, Oracle, Deloitte, Cognizant, and Zoho. It also links to public Topmate profiles so students can talk to selected candidates and mentors.";

const CONTACT_TEXT =
  "You can contact ByteBridge through the Contact page. The site currently shows ByteBridge, PSIT Kanpur with phone +91 9555926460 and email samarth1111saxena@gmail.com. There is also a contact form and campus location map.";

const STARTER_PROMPTS = [
  "How should I start on ByteBridge?",
  "Show me DSA resources",
  "Where can I practice quizzes?",
  "How do I contact ByteBridge?",
];

const PAGE_CONTEXT = {
  "/": "You are on the homepage, which highlights courses, assessments, revision resources, mentors, and ByteBridge platform sections.",
  "/about": "You are on the About page, which explains why ByteBridge keeps courses, quizzes, revision, and references connected in one platform.",
  "/courses": "You are on the Courses page, where ByteBridge shows core tracks, quick revision resources, and the developer knowledge hub.",
  "/contact": "You are on the Contact page, where users can message the ByteBridge team, view the phone and email, and check the campus location.",
  "/team": "You are on the Mentor Guide page, with interview stories and external mentor connect links.",
  "/test": "You are on the Assessment Hub, which groups core CS and development quizzes for placement preparation.",
  "/library": "You are on the Developer Knowledge Hub, which focuses on books, notes, cheat sheets, and quick revision material.",
  "/profile": "You are on the student dashboard area for learning progress, quick links, and account actions.",
  "/signin": "You are on the sign-in area for existing ByteBridge users.",
  "/register": "You are on the registration area for new ByteBridge users.",
};

function normalizeText(text = "") {
  return text.toLowerCase().replace(/[^a-z0-9+#/\s]/g, " ").replace(/\s+/g, " ").trim();
}

function escapeRegex(value = "") {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsTerm(query, term) {
  const normalizedTerm = normalizeText(term);

  if (!normalizedTerm) {
    return false;
  }

  const pattern = new RegExp(
    `(^|\\s)${escapeRegex(normalizedTerm).replace(/\s+/g, "\\s+")}(?=\\s|$)`,
  );

  return pattern.test(query);
}

function includesAny(query, terms) {
  return terms.some((term) => containsTerm(query, term));
}

function uniqueList(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function listItems(items, limit = 4) {
  return uniqueList(items).slice(0, limit).join(", ");
}

function buildLinkActions(links = []) {
  return links.slice(0, 4).map((link) => {
    if (link.to) {
      return routeAction(link.label, link.to);
    }

    return linkAction(link.label, link.href);
  });
}

function matchByKeywords(query, items, getKeywords) {
  let bestMatch = null;
  let bestScore = 0;

  items.forEach((item) => {
    const keywords = uniqueList(getKeywords(item).map((term) => normalizeText(term)));
    let score = 0;

    keywords.forEach((keyword) => {
      if (!keyword) {
        return;
      }

      if (containsTerm(query, keyword)) {
        score += keyword.includes(" ") ? 4 : 2;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  return { match: bestMatch, score: bestScore };
}

function findCourseMatch(query) {
  return matchByKeywords(query, Object.entries(coursePageData), ([slug, course]) => [
    course.title,
    course.shortTitle,
    course.badge,
    course.thumbnailLabel,
    ...(COURSE_ALIASES[slug] || []),
  ]);
}

function findQuizMatch(query) {
  return matchByKeywords(query, quizCatalog, (quiz) => [
    quiz.id,
    quiz.title,
    quiz.description,
    quiz.kicker,
    ...quiz.focusPoints,
  ]);
}

function findRevisionMatch(query) {
  return matchByKeywords(query, quickRevisionResources, (resource) => [
    resource.title,
    resource.focus,
    resource.description,
  ]);
}

function createMessage(role, text, options = {}) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    role,
    text,
    actions: options.actions || [],
    suggestions: options.suggestions || [],
  };
}

function createGreeting(session) {
  const firstName = session?.user?.name?.split(" ")[0];

  return createMessage(
    "assistant",
    `${firstName ? `Hi ${firstName}! ` : "Hi! "}I am the ByteBridge Assistant. I can guide visitors through courses, revision lanes, assessments, the library, mentor stories, account help, and contact details across the website.`,
    {
      actions: [
        routeAction("Browse courses", "/courses"),
        routeAction("Open assessments", "/test"),
        routeAction("Open knowledge hub", "/library"),
      ],
      suggestions: STARTER_PROMPTS,
    },
  );
}

function createOverviewReply() {
  return createMessage(
    "assistant",
    "ByteBridge is a placement-focused learning website that keeps courses, assessments, revision resources, mentor stories, and the knowledge hub connected in one place. It is designed to reduce scattered learning and help students move from concept study to practice and interview prep faster.",
    {
      actions: [
        routeAction("Open courses", "/courses"),
        routeAction("Open assessments", "/test"),
        routeAction("Contact ByteBridge", "/contact"),
      ],
      suggestions: [
        "How should I start on ByteBridge?",
        "Show me placement preparation resources",
        "What is in the knowledge hub?",
      ],
    },
  );
}

function createStartReply() {
  return createMessage(
    "assistant",
    "If you are new to ByteBridge, start with the track that matches your goal: DSA for coding rounds, Java for language and OOP basics, Full Stack for web development, or MERN for project-based learning. After that, use the Assessment Hub for practice and the Knowledge Hub plus revision lanes for quick recall before interviews.",
    {
      actions: [
        routeAction("Start with DSA", "/courses/dsa"),
        routeAction("Open Java path", "/courses/java"),
        routeAction("See all courses", "/courses"),
      ],
      suggestions: [
        "Show me DSA resources",
        "Where can I practice quizzes?",
        "What is in the full stack track?",
      ],
    },
  );
}

function createCoursesReply() {
  return createMessage(
    "assistant",
    "ByteBridge organizes learning into clear paths: Full Stack Foundations, MERN Project Builder, Programming Languages Hub, plus focused subject pages like Java, DSA, React, SQL, HTML, CSS, JavaScript, Node, Express, and MongoDB. The courses page also links revision lanes and the knowledge hub so students can switch from learning to recall quickly.",
    {
      actions: [
        routeAction("Open courses page", "/courses"),
        routeAction("Full stack track", "/courses/fullstack"),
        routeAction("Programming hub", "/courses/programming"),
      ],
      suggestions: [
        "Tell me about the MERN track",
        "Tell me about the DSA course",
        "What course should a beginner choose?",
      ],
    },
  );
}

function createCourseReply([slug, course]) {
  const route = COURSE_ROUTE_MAP[slug] || "/courses";
  const relatedQuiz = quizCatalog.find(
    (quiz) =>
      normalizeText(quiz.title).includes(normalizeText(course.shortTitle)) ||
      normalizeText(course.title).includes(normalizeText(quiz.id)),
  );

  const topics = course.topics.slice(0, 4).map((topic) => topic.title);
  const actions = [routeAction(`Open ${course.shortTitle}`, route)];

  if (course.oneShot?.url) {
    actions.push(linkAction("Watch one-shot", course.oneShot.url));
  }

  if (relatedQuiz) {
    actions.push(routeAction("Practice related quiz", `/test/${relatedQuiz.id}`));
  }

  return createMessage(
    "assistant",
    `${course.shortTitle} is part of ByteBridge's ${course.badge}. ${course.summary} Key topics include ${listItems(topics)}.`,
    {
      actions,
      suggestions: [
        "Where can I practice quizzes?",
        "Show me revision resources",
        "How should I start on ByteBridge?",
      ],
    },
  );
}

function createTrackReply(track) {
  return createMessage("assistant", `${track.title}: ${track.summary}`, {
    actions: track.actions,
    suggestions: [
      "How should I start on ByteBridge?",
      "Where can I practice quizzes?",
      "Show me revision resources",
    ],
  });
}

function createAssessmentsReply() {
  return createMessage(
    "assistant",
    `The Assessment Hub covers ${listItems(quizCatalog.map((quiz) => quiz.title), 6)}. It splits practice into core interview subjects and development rounds, so students can open the topic they need instead of following a rigid order.`,
    {
      actions: [
        routeAction("Open assessment hub", "/test"),
        routeAction("Practice DSA quiz", "/test/dsa"),
        routeAction("Practice DBMS quiz", "/test/dbms"),
      ],
      suggestions: [
        "Show me React quiz help",
        "Show me Java quiz help",
        "What should I revise before assessments?",
      ],
    },
  );
}

function createQuizReply(quiz) {
  return createMessage(
    "assistant",
    `${quiz.title} is in ByteBridge's ${quiz.group === "core" ? "core interview" : "development"} assessment section. It focuses on ${listItems(quiz.focusPoints, 3)} and currently includes ${quiz.questions.length} MCQs.`,
    {
      actions: [
        routeAction("Open this assessment", `/test/${quiz.id}`),
        routeAction(quiz.relatedLabel, quiz.relatedPath),
        routeAction("See all quizzes", "/test"),
      ],
      suggestions: [
        "Show me course options",
        "Show me revision resources",
        "How should I start on ByteBridge?",
      ],
    },
  );
}

function createRevisionReply(resource) {
  return createMessage(
    "assistant",
    `${resource.title} is one of ByteBridge's quick revision lanes. It focuses on ${resource.focus.toLowerCase()} and is meant for fast recall before assessments, mock rounds, or last-minute interview prep. ${resource.description}`,
    {
      actions: buildLinkActions(resource.links),
      suggestions: [
        "Show me more revision resources",
        "Where can I practice quizzes?",
        "How do I prepare for placements on ByteBridge?",
      ],
    },
  );
}

function createRevisionOverviewReply() {
  return createMessage(
    "assistant",
    `ByteBridge revision lanes currently include ${listItems(
      quickRevisionResources.map((resource) => resource.title),
      6,
    )}. They are useful for coding rounds, Java refreshers, frontend prep, DBMS recall, core CS, system design, OA drills, final rounds, and structured interview preparation.`,
    {
      actions: [
        routeAction("Open courses and revision", "/courses"),
        routeAction("Open assessments", "/test"),
        routeAction("Open knowledge hub", "/library"),
      ],
      suggestions: [
        "Show me DSA resources",
        "Show me system design resources",
        "Show me HR preparation help",
      ],
    },
  );
}

function createLibraryReply() {
  return createMessage(
    "assistant",
    `The ByteBridge Knowledge Hub is organized into ${knowledgeHubCategories.join(
      ", ",
    )}. It highlights resources like ${listItems(
      knowledgeHubCards.map((card) => card.title),
      4,
    )} so students can move from deeper reading into quick interview recall.`,
    {
      actions: [
        routeAction("Open knowledge hub", "/library"),
        routeAction("Open courses", "/courses"),
        routeAction("Practice MCQs", "/test"),
      ],
      suggestions: [
        "Show me revision resources",
        "Where can I practice quizzes?",
        "How should I start on ByteBridge?",
      ],
    },
  );
}

function createMentorReply() {
  return createMessage("assistant", MENTOR_TEXT, {
    actions: [
      routeAction("Open mentor guide", "/team"),
      promptAction("How do mentor stories help?", "Why should I use mentor stories on ByteBridge?"),
      routeAction("Open assessments", "/test"),
    ],
    suggestions: [
      "How do I prepare for placements on ByteBridge?",
      "Show me revision resources",
      "How do I contact ByteBridge?",
    ],
  });
}

function createAccountReply(session) {
  const signedInText = session?.user
    ? `You are signed in as ${session.user.email}. The dashboard gives quick links to courses, the knowledge hub, and assessments.`
    : "ByteBridge supports sign in, registration, and a student dashboard with quick links to courses, the knowledge hub, and assessments.";

  return createMessage("assistant", signedInText, {
    actions: session?.user
      ? [
          routeAction("Open dashboard", "/profile"),
          routeAction("Browse courses", "/courses"),
          routeAction("Open assessments", "/test"),
        ]
      : [
          routeAction("Sign in", "/signin"),
          routeAction("Create account", "/register"),
          routeAction("Browse courses", "/courses"),
        ],
    suggestions: [
      "How should I start on ByteBridge?",
      "Where can I practice quizzes?",
      "How do I contact ByteBridge?",
    ],
  });
}

function createContactReply() {
  return createMessage("assistant", CONTACT_TEXT, {
    actions: [
      routeAction("Open contact page", "/contact"),
      routeAction("Open mentor guide", "/team"),
      routeAction("Browse courses", "/courses"),
    ],
    suggestions: [
      "How should I start on ByteBridge?",
      "Show me placement preparation resources",
      "What is ByteBridge?",
    ],
  });
}

function createPlacementReply() {
  return createMessage(
    "assistant",
    "For placement prep on ByteBridge, the strongest flow is: DSA and Java fundamentals first, then use the Assessment Hub for DSA, OOP, DBMS, OS, CN, React, JavaScript, and full stack quizzes. After that, use the revision lanes for OA drills, system design, SQL and DBMS recall, HR and project pitch prep, plus the mentor guide for real interview stories.",
    {
      actions: [
        routeAction("Open DSA track", "/courses/dsa"),
        routeAction("Open assessments", "/test"),
        routeAction("Open mentor guide", "/team"),
      ],
      suggestions: [
        "Show me DSA resources",
        "Show me OA revision",
        "Show me HR preparation help",
      ],
    },
  );
}

function createPageContextReply(pathname) {
  return createMessage("assistant", PAGE_CONTEXT[pathname] || PAGE_CONTEXT["/"], {
    actions: [
      routeAction("Open courses", "/courses"),
      routeAction("Open assessments", "/test"),
      routeAction("Open knowledge hub", "/library"),
    ],
    suggestions: [
      "How should I start on ByteBridge?",
      "Show me revision resources",
      "How do I contact ByteBridge?",
    ],
  });
}

function createThanksReply() {
  return createMessage("assistant", "Happy to help. Ask me about courses, quizzes, revision lanes, mentor stories, account help, or where to go next on ByteBridge.", {
    suggestions: STARTER_PROMPTS,
  });
}

function createFallbackReply() {
  return createMessage(
    "assistant",
    "I can help with ByteBridge courses, revision lanes, assessments, the knowledge hub, mentor stories, account help, and contact details. Try asking about DSA, Java, full stack, assessments, revision resources, mentors, or how to begin.",
    {
      actions: [
        routeAction("Open courses", "/courses"),
        routeAction("Open assessments", "/test"),
        routeAction("Open contact page", "/contact"),
      ],
      suggestions: STARTER_PROMPTS,
    },
  );
}

export function createWelcomeMessage(session) {
  return createGreeting(session);
}

export function buildAssistantReply(input, { pathname = "/", session = null } = {}) {
  const query = normalizeText(input);

  if (!query) {
    return createFallbackReply();
  }

  if (includesAny(query, ["thank you", "thanks", "thx"])) {
    return createThanksReply();
  }

  if (
    includesAny(query, [
      "hi",
      "hello",
      "hey",
      "help",
      "who are you",
      "what can you do",
      "what is bytebridge",
      "about bytebridge",
    ])
  ) {
    return createOverviewReply();
  }

  if (includesAny(query, ["here", "this page", "current page"])) {
    return createPageContextReply(pathname);
  }

  if (includesAny(query, ["contact", "phone", "email", "support", "message", "reach"])) {
    return createContactReply();
  }

  if (
    includesAny(query, [
      "sign in",
      "signin",
      "login",
      "log in",
      "register",
      "create account",
      "dashboard",
      "profile",
      "logout",
      "account",
    ])
  ) {
    return createAccountReply(session);
  }

  if (includesAny(query, ["mentor", "mentors", "team", "topmate", "story", "stories"])) {
    return createMentorReply();
  }

  if (includesAny(query, ["knowledge hub", "library", "books", "notes", "cheat sheet", "reference"])) {
    return createLibraryReply();
  }

  const { match: revisionMatch, score: revisionScore } = findRevisionMatch(query);
  if (
    revisionScore > 0 &&
    includesAny(query, [
      "revision",
      "refresh",
      "last minute",
      "system design",
      "oa",
      "aptitude",
      "hr",
      "pitch",
      "quick recall",
    ])
  ) {
    return createRevisionReply(revisionMatch);
  }

  if (includesAny(query, ["revision", "refreshers", "quick recall", "last minute"])) {
    return createRevisionOverviewReply();
  }

  const { match: quizMatch, score: quizScore } = findQuizMatch(query);
  if (
    quizScore > 0 &&
    includesAny(query, ["quiz", "assessment", "test", "mcq", "practice"])
  ) {
    return createQuizReply(quizMatch);
  }

  if (includesAny(query, ["quiz", "assessment", "test", "mcq", "practice"])) {
    return createAssessmentsReply();
  }

  const { match: courseMatch, score: courseScore } = findCourseMatch(query);
  if (courseScore > 0) {
    return createCourseReply(courseMatch);
  }

  const { match: trackMatch, score: trackScore } = matchByKeywords(
    query,
    PATH_GUIDES,
    (track) => [track.title, ...track.keywords],
  );
  if (trackScore > 0) {
    return createTrackReply(trackMatch);
  }

  if (includesAny(query, ["courses", "course", "track", "learning path"])) {
    return createCoursesReply();
  }

  if (
    includesAny(query, [
      "placement",
      "interview",
      "online assessment",
      "oa",
      "final round",
      "project pitch",
      "aptitude",
    ])
  ) {
    return createPlacementReply();
  }

  if (includesAny(query, ["start", "beginner", "roadmap", "new here", "first step"])) {
    return createStartReply();
  }

  return createFallbackReply();
}
