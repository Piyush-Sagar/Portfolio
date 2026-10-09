import {
  BracketsCurlyIcon,
  BrowserIcon,
  DatabaseIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/ssr";

const toolkit = [
  {
    name: "Languages",
    description: "The building blocks",
    icon: BracketsCurlyIcon,
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Frontend",
    description: "Interfaces that feel right",
    icon: BrowserIcon,
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    name: "Backend & tools",
    description: "What makes it all work",
    icon: DatabaseIcon,
    items: ["Node.js", "MongoDB", "Mongoose", "Git & GitHub", "Cloudinary"],
  },
  {
    name: "Problem solving",
    description: "A habit, not just a skill",
    icon: TerminalWindowIcon,
    items: [
      "Data structures",
      "Algorithms",
      "Competitive programming",
      "LeetCode",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="toolkit-section"
      aria-labelledby="skills-title"
    >
      <div className="section container">
        <div className="section-label">
          <span>03 / MY TOOLKIT</span>
          <span className="label-line" />
        </div>
        <div className="section-heading">
          <div>
            <h2 id="skills-title">
              The tools behind the ideas<span className="accent-text">.</span>
            </h2>
            <p className="section-subtitle">
              A growing stack. A strong foundation. The right tool for the
              problem.
            </p>
          </div>
          <span className="learning-pill">
            <span className="status-dot" />
            Currently exploring Go
          </span>
        </div>
        <div className="toolkit-grid">
          {toolkit.map(({ name, description, icon: Icon, items }, index) => (
            <article className="toolkit-card" key={name}>
              <div className="toolkit-card-top">
                <Icon size={28} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
              <ul className="skill-tags">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="toolkit-footnote">
          <span aria-hidden="true">↳</span> Always adding to the toolkit.
          Currently going deeper into Go, the MERN stack, and scalable backend
          systems.
        </div>
      </div>
    </section>
  );
}
