import React from "react";

const mentorJourneys = [
  {
    id: "01",
    title: "Google offer walkthrough",
    company: "Google",
    source: "LeetCode Discuss",
    focus: "screening, onsite rounds, team fit",
    copy:
      "A public Google interview writeup that walks through the screening step, onsite loop, and final approval after multiple coding and evaluation rounds.",
    link:
      "https://leetcode.com/discuss/post/6701549/google-l4-interview-experience-by-anonym-izsb/",
  },
  {
    id: "02",
    title: "Amazon SDE-1 offer story",
    company: "Amazon",
    source: "LeetCode Discuss",
    focus: "online assessment, onsite loop, problem solving",
    copy:
      "A public Amazon SDE-1 offer journey showing how coding preparation, interview structure, and steady execution shaped the final result.",
    link:
      "https://leetcode.com/discuss/interview-experience/543615/amazon-sde1-seattle-offer",
  },
  {
    id: "03",
    title: "Microsoft internship selection path",
    company: "Microsoft",
    source: "GeeksforGeeks",
    focus: "coding round, multiple interviews, final shortlist",
    copy:
      "An on-campus Microsoft internship experience that maps the coding round, interview stages, and final shortlist from a large applicant pool.",
    link:
      "https://www.geeksforgeeks.org/microsoft-interview-set-25-on-campus-for-internship/",
  },
  {
    id: "04",
    title: "PayPal fresher selection journey",
    company: "PayPal",
    source: "GeeksforGeeks",
    focus: "MCQs, DSA, SQL, final discussion",
    copy:
      "A practical PayPal fresher writeup covering the online assessment, DSA-heavy technical rounds, and the final behavioral discussion.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/paypal-interview-experience-set-9-on-campus/",
  },
  {
    id: "05",
    title: "Accenture ASE selected experience",
    company: "Accenture",
    source: "GeeksforGeeks",
    focus: "projects, interview clarity, shortlisting",
    copy:
      "A useful Accenture writeup showing how project discussion, communication, and concise interview answers contributed to the final selection.",
    link:
      "https://www.geeksforgeeks.org/accenture-interview-experience-for-ase-and-aase-on-campus-batch-2025/",
  },
  {
    id: "06",
    title: "Infosys Power Programmer selection",
    company: "Infosys",
    source: "GeeksforGeeks",
    focus: "coding rounds, PPI, technical and HR",
    copy:
      "This public Infosys story explains how coding rounds, a PPI, and project-based discussion led to a Power Programmer selection.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-power-programmer/",
  },
  {
    id: "07",
    title: "IBM on-campus selected journey",
    company: "IBM",
    source: "GeeksforGeeks",
    focus: "coding, SQL, project discussion, final mail",
    copy:
      "A selected IBM candidate shares how coding rounds, application-oriented questions, SQL, and project discussion led to an intern plus full-time result.",
    link:
      "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/",
  },
  {
    id: "08",
    title: "Oracle on-campus interview flow",
    company: "Oracle",
    source: "GeeksforGeeks",
    focus: "DB design, virtual functions, role fit",
    copy:
      "A public Oracle interview experience showing how database design, language fundamentals, and final-round communication came together.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/oracle-interview-experience-on-campus-3/",
  },
  {
    id: "09",
    title: "Deloitte placement experience",
    company: "Deloitte",
    source: "GeeksforGeeks",
    focus: "aptitude, Java, SQL, projects",
    copy:
      "A public Deloitte interview story that highlights aptitude preparation, language fundamentals, SQL, and project explanation in the final round.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-7/",
  },
  {
    id: "10",
    title: "Cognizant GenC Next selected story",
    company: "Cognizant",
    source: "GeeksforGeeks",
    focus: "Python, SQL, cloud, project depth",
    copy:
      "A detailed Cognizant selection writeup covering technical depth across Python, SQL, cloud topics, and resume-based discussion.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/cognizant-genc-next-interview-experience-selected-2024-25/",
  },
  {
    id: "11",
    title: "Zoho on-campus coding-heavy experience",
    company: "Zoho",
    source: "GeeksforGeeks",
    focus: "C, aptitude, application round, OOP",
    copy:
      "A useful Zoho story for students who want to understand coding-heavy rounds, application-building stages, and fundamentals-first selection patterns.",
    link:
      "https://www.geeksforgeeks.org/interview-experiences/zoho-interview-experience-set-11-on-campus/",
  },
];

const supportPillars = [
  "Public interview writeups",
  "Product and service company stories",
  "Preparation themes worth revisiting",
  "Public connect links from mentor platforms",
];

const mentorConnects = [
  {
    name: "Vatika Agrawal",
    role: "Grad'24 with Google, Flipkart, and Dell offers",
    note: "A strong off-campus and on-campus profile for resume, projects, and interview planning.",
    link: "https://topmate.io/vatika_agrawal",
  },
  {
    name: "Deepika Munde",
    role: "SDE Trainee with off-campus placement guidance",
    note: "Helpful for DSA planning, resume improvement, and practical off-campus preparation.",
    link: "https://topmate.io/deepika_namdev",
  },
  {
    name: "Pankaj Kumar",
    role: "VIT graduate and early-career IBM engineer",
    note: "A practical option for placement readiness, resume planning, and actionable interview prep.",
    link: "https://topmate.io/pankaj_kumar31",
  },
  {
    name: "Ira Pandey",
    role: "IBM ISDL mentor with placement guidance",
    note: "A good public option for conversation around interviews, projects, and next steps.",
    link: "https://topmate.io/ira_pandey",
  },
];

export default function Team() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="experience-layout mentor-layout">
          <div className="experience-hero-card mentor-hero-card">
            <span className="section-tag">Mentor Guide</span>
            <h2 className="section-title">Read real interview stories, then talk to people who have already crossed this stage</h2>
            <p className="section-text">
              This section brings together public interview stories and direct mentor links
              so students can study real selection paths, compare preparation styles, and
              ask better questions before important rounds.
            </p>

            <div className="experience-matrix">
              <div className="experience-metric">
                <strong>Real offer and shortlist journeys</strong>
                <span>Product and service company experiences collected from public tech communities.</span>
              </div>
              <div className="experience-metric">
                <strong>Direct guidance options</strong>
                <span>Public Topmate links help students reach selected candidates and early-career mentors.</span>
              </div>
            </div>

            <div className="mentor-pill-row">
              {supportPillars.map((pillar) => (
                <span key={pillar} className="mentor-pill">
                  {pillar}
                </span>
              ))}
            </div>

            <div className="mentor-connect-board">
              <div className="mentor-connect-head">
                <span className="mentor-linktree-label">Talk to selected students and mentors</span>
                <p>
                  These are public external profiles where students can book a chat, ask
                  for guidance, or understand how someone else approached the same journey.
                </p>
              </div>

              <div className="mentor-connect-grid">
                {mentorConnects.map((mentor) => (
                  <a
                    key={mentor.name}
                    href={mentor.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mentor-connect-card"
                  >
                    <div className="mentor-connect-topline">
                      <span className="mentor-connect-platform">Topmate</span>
                      <span className="mentor-connect-arrow">Open</span>
                    </div>
                    <strong>{mentor.name}</strong>
                    <span className="mentor-connect-role">{mentor.role}</span>
                    <p>{mentor.note}</p>
                    <span className="mentor-connect-cta">Connect directly</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="mentor-note">
              Public external stories and connect links are included here as learning
              references, so students can see different preparation paths and follow up
              when they need more context.
            </p>
          </div>

          <div className="experience-grid mentor-grid">
            {mentorJourneys.map((journey) => (
              <article key={journey.id} className="experience-card mentor-story-card">
                <div className="mentor-story-topline">
                  <span className="experience-id">{journey.company}</span>
                  <span className="mentor-focus">{journey.source}</span>
                </div>
                <h3>{journey.title}</h3>
                <p>{journey.copy}</p>
                <div className="mentor-story-focusline">
                  <strong>What to notice:</strong>
                  <span>{journey.focus}</span>
                </div>
                <div className="mentor-story-actions">
                  <a
                    href={journey.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-button mentor-story-link"
                  >
                    Read story
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
