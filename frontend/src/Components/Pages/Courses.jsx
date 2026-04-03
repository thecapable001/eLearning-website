import { Link } from "react-router-dom";
import Coursestructure from "../Course/Coursestructure";
import {
  knowledgeHubCards,
  knowledgeHubCategories,
  quickRevisionResources,
} from "../../data/learningPlatformData";

const platformPanels = [
  {
    to: "/courses/fullstack",
    eyebrow: "Full stack path",
    title: "UI to backend foundations",
    description:
      "Move from interface basics to APIs, databases, and deployable project flow with one guided ByteBridge track.",
    metric: "8 modules",
    tags: ["Frontend", "React", "Projects"],
    accent:
      "linear-gradient(135deg, rgba(219,234,254,0.95), rgba(239,246,255,0.96))",
  },
  {
    to: "/courses/mern",
    eyebrow: "Project path",
    title: "Modern MERN workflow",
    description:
      "Follow a React to Node flow shaped for portfolio work, API thinking, and real product-style builds.",
    metric: "4 focused modules",
    tags: ["MongoDB", "Express", "State"],
    accent:
      "linear-gradient(135deg, rgba(220,252,231,0.95), rgba(240,253,244,0.96))",
  },
  {
    to: "/courses/programming",
    eyebrow: "Language desk",
    title: "Programming support hub",
    description:
      "Keep interview languages, syntax refreshers, and practice-friendly support close by in one bright workspace.",
    metric: "Core language set",
    tags: ["Java", "JavaScript", "Practice"],
    accent:
      "linear-gradient(135deg, rgba(254,249,195,0.94), rgba(255,251,235,0.96))",
  },
  {
    to: "/library",
    eyebrow: "Reference desk",
    title: "Revision and reading shelf",
    description:
      "Open books, notes, interview guides, and revision material without searching through scattered sections.",
    metric: "5 categories",
    tags: ["Books", "Notes", "Guides"],
    accent:
      "linear-gradient(135deg, rgba(255,237,213,0.95), rgba(255,247,237,0.96))",
  },
];

const courseLaunchpadSignals = [
  "Four main learning paths with clearer entry points",
  "Practice, notes, and revision support stay close to the track",
  "Lighter colors and tighter spacing keep the page easier to scan",
];

const trackCards = [
  {
    layoutClass: "track-slot--compact",
    join: "/courses/fullstack",
    readTo: "/library",
    readLabel: "Knowledge hub",
    joinLabel: "Open course",
    review: 245,
    title: "Full Stack Foundations",
    totalstudent: "335",
    studentLabel: "active learners",
    thumbnailLabel: "FULL STACK",
    thumbnailMeta: "Frontend to backend delivery",
    thumbnailCopy:
      "HTML, CSS, JavaScript, React, Node, and databases in one guided path.",
    thumbGradient:
      "linear-gradient(135deg, rgba(45,108,223,0.18), rgba(98,176,232,0.26))",
    description:
      "One clear path for students who want UI, APIs, databases, and delivery habits in the same flow.",
    metaItems: [
      { icon: "fas fa-layer-group", label: "8 modules" },
      { icon: "fas fa-briefcase", label: "Interview aligned" },
      { icon: "far fa-clock", label: "8-10 week pace" },
    ],
    topics: [
      "HTML + CSS systems",
      "JavaScript flow",
      "React components",
      "Node and Express",
    ],
    resourceLinks: [
      { label: "Open assessments", to: "/test" },
      { label: "Revision shelf", to: "/library" },
    ],
  },
  {
    layoutClass: "track-slot--compact",
    join: "/courses/java",
    readTo: "/test",
    readLabel: "Java assessments",
    joinLabel: "Open course",
    review: 185,
    title: "Java and OOP Core",
    totalstudent: "212",
    studentLabel: "active learners",
    thumbnailLabel: "JAVA",
    thumbnailMeta: "Programming foundations",
    thumbnailCopy:
      "Core Java, OOP, collections, and interview-first reasoning for coding rounds.",
    thumbGradient:
      "linear-gradient(135deg, rgba(180,83,9,0.16), rgba(253,230,138,0.34))",
    description:
      "A sharper Java lane for language clarity, backend readiness, and better recall.",
    metaItems: [
      { icon: "fas fa-code", label: "Core language depth" },
      { icon: "fas fa-sitemap", label: "OOP and collections" },
      { icon: "fas fa-user-tie", label: "Interview focused" },
    ],
    topics: [
      "Syntax and control flow",
      "Classes and objects",
      "Collections",
      "Exception handling",
    ],
    resourceLinks: [
      { label: "Practice MCQs", to: "/test" },
      { label: "Books and notes", to: "/library" },
    ],
  },
  {
    layoutClass: "track-slot--compact",
    join: "/courses/dsa",
    readTo: "/test",
    readLabel: "Coding rounds",
    joinLabel: "Open course",
    review: 214,
    title: "DSA Sprint",
    totalstudent: "298",
    studentLabel: "active learners",
    thumbnailLabel: "DSA",
    thumbnailMeta: "Coding round prep",
    thumbnailCopy:
      "Arrays, recursion, trees, graphs, and repeat interview patterns in one lane.",
    thumbGradient:
      "linear-gradient(135deg, rgba(22,101,52,0.18), rgba(187,247,208,0.3))",
    description:
      "Structured DSA practice for coding rounds, online tests, and repeat patterns.",
    metaItems: [
      { icon: "fas fa-terminal", label: "Pattern based" },
      { icon: "fas fa-bolt", label: "Round ready" },
      { icon: "far fa-chart-bar", label: "Complexity aware" },
    ],
    topics: [
      "Arrays and strings",
      "Stacks and queues",
      "Trees and graphs",
      "Greedy and DP",
    ],
    resourceLinks: [
      { label: "Assessment hub", to: "/test" },
      { label: "Quick revision", to: "/library" },
    ],
  },
  {
    layoutClass: "track-slot--compact",
    join: "/courses/mern",
    readTo: "/courses/programming",
    readLabel: "Programming hub",
    joinLabel: "Open course",
    review: 231,
    title: "MERN Project Builder",
    totalstudent: "176",
    studentLabel: "active learners",
    thumbnailLabel: "MERN",
    thumbnailMeta: "API to UI workflow",
    thumbnailCopy:
      "React interfaces, Node services, MongoDB models, and the full request-response flow.",
    thumbGradient:
      "linear-gradient(135deg, rgba(17,94,89,0.18), rgba(110,231,183,0.26))",
    description:
      "A product-style track that ties frontend state, backend APIs, and database logic together.",
    metaItems: [
      { icon: "fas fa-project-diagram", label: "Project first" },
      { icon: "fas fa-server", label: "API architecture" },
      { icon: "fas fa-database", label: "Schema thinking" },
    ],
    topics: [
      "React component systems",
      "Express routing",
      "Node runtime basics",
      "MongoDB and Mongoose",
    ],
    resourceLinks: [
      { label: "Language support", to: "/courses/programming" },
      { label: "Interview notes", to: "/library" },
    ],
  },
];

export default function Cources() {
  return (
    <section className="section-shell placement-tracks-shell">
      <div className="container">
        <div className="course-launchpad-shell">
          <div className="course-launchpad-copy">
            <span className="section-tag">ByteBridge Launchpad</span>
            <h2 className="course-launchpad-title">
              One bright workspace for course paths, practice, and revision
            </h2>
            <p className="course-launchpad-text">
              ByteBridge keeps your main tracks, quick support links, and trusted
              reference material together in a lighter interface that feels easier
              to use and easier to trust.
            </p>

            <div className="course-launchpad-signal-list">
              {courseLaunchpadSignals.map((signal) => (
                <div key={signal} className="course-launchpad-signal">
                  <span className="course-launchpad-signal-dot"></span>
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <div className="course-launchpad-note">
              <strong>Built for steady progress.</strong>
              <span>
                Learn from structured tracks, open practice fast, and move into
                revision without switching through disconnected sections.
              </span>
            </div>
          </div>

          <div className="course-launchpad-lane-stack">
            {platformPanels.map((panel) => (
              <Link
                key={panel.title}
                to={panel.to}
                className="course-launchpad-lane"
                style={{ "--lane-accent": panel.accent }}
              >
                <div className="course-launchpad-lane-top">
                  <span>{panel.eyebrow}</span>
                  <strong>{panel.metric}</strong>
                </div>
                <div className="course-launchpad-lane-main">
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                </div>
                <div className="course-launchpad-tag-row">
                  {panel.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="section-heading section-heading-split">
          <div>
            <span className="section-tag">Course Map</span>
            <h2 className="section-title">Core tracks in a tighter homepage grid</h2>
          </div>
          <p className="section-text">
            Smaller cards, sharper summaries, and quick support links make the four main
            tracks easier to scan without the layout feeling heavy.
          </p>
        </div>

        <div className="tracks-masonry">
          {trackCards.map((track) => (
            <div key={track.title} className={`track-slot ${track.layoutClass}`}>
              <Coursestructure data={track} />
            </div>
          ))}
        </div>

        <div className="section-heading section-heading-split">
          <div>
            <span className="section-tag">Quick Revision Resources</span>
            <h2 className="section-title">Free revision lanes for placements and technical interviews</h2>
          </div>
          <div className="section-heading-actions">
            <p className="section-text">
              Use these quick resource cards when you want a fast reset before an
              assessment, mock round, or last-minute revision session.
            </p>
            <Link to="/test" className="ghost-button">
              Open assessments
            </Link>
          </div>
        </div>

        <div className="resource-card-grid">
          {quickRevisionResources.map((resource) => (
            <article
              key={resource.title}
              className={`resource-card ${resource.tone ? `resource-card--${resource.tone}` : ""}`}
            >
              <div className="resource-card-header">
                <div className="resource-card-topline">
                  <span className="resource-platform-chip">{resource.access}</span>
                  <span className="resource-focus-chip">{resource.focus}</span>
                </div>
                <h3>{resource.title}</h3>
              </div>
              <p>{resource.description}</p>
              <div className="resource-link-row">
                {resource.links?.map((link) => (
                  link.to ? (
                    <Link key={link.label} to={link.to} className="resource-link-button">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="resource-link-button"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="knowledge-hub-shell">
          <div className="knowledge-hub-copy">
            <span className="section-tag">Developer Knowledge Hub</span>
            <h2 className="section-title">Reference material organized like a developer workspace, not a loose library shelf</h2>
            <p className="section-text">
              The knowledge hub brings together books, cheat sheets, interview notes,
              MCQ practice, and quick revision guides so learners can move from depth to
              recall without losing context.
            </p>

            <div className="knowledge-category-row">
              {knowledgeHubCategories.map((category) => (
                <span key={category} className="knowledge-category-chip">
                  {category}
                </span>
              ))}
            </div>

            <div className="knowledge-hub-actions">
              <Link to="/library" className="hero-button">
                Open Developer Knowledge Hub
              </Link>
              <Link to="/test" className="ghost-button">
                Practice MCQs
              </Link>
            </div>
          </div>

          <div className="knowledge-card-grid">
            {knowledgeHubCards.map((item) => (
              <article key={item.title} className="knowledge-card">
                <span className="knowledge-card-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
