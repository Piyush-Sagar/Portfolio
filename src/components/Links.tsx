import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BracketsCurlyIcon,
  CalendarBlankIcon,
  CodeIcon,
  GlobeIcon,
  LightningIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr";

const projects = [
  {
    name: "API Tools",
    category: "DEVELOPER PLATFORM",
    role: "Frontend engineering",
    kind: "api",
    description:
      "Making infrastructure a little more approachable. A clear, developer-focused interface for DNS intelligence, UPI utilities, and API documentation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://apitools.piyush.tech/",
    github: undefined,
  },
  {
    name: "Dev Events",
    category: "EVENT MANAGEMENT",
    role: "Full-stack development",
    kind: "events",
    description:
      "Connecting developers through experiences. A full-stack platform for discovering events, managing registrations, and finding what’s happening next.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    demo: "https://dev-events-swart.vercel.app/",
    github: "https://github.com/piyush-sagar/dev-events",
  },
];

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "api")
    return (
      <div className="project-visual api-visual" aria-hidden="true">
        <div className="visual-grid" />
        <div className="api-window">
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>api.tools / playground</span>
            <BracketsCurlyIcon size={14} />
          </div>
          <div className="api-window-body">
            <div className="api-window-label">
              <span>THE DEVELOPER’S TOOLKIT</span>
              <LightningIcon weight="fill" size={18} />
            </div>
            <div className="api-preview-title">
              Less friction.
              <br />
              <span>More building.</span>
            </div>
            <div className="endpoint">
              <span>GET</span>
              <code>/v1/dns/lookup</code>
              <ArrowRightIcon size={16} />
            </div>
            <div className="code-preview">
              <p>
                <span>{"{"}</span>
              </p>
              <p>
                &nbsp;&nbsp;{'"domain": '}
                <em>{'"example.com"'}</em>,
              </p>
              <p>
                &nbsp;&nbsp;{'"type": '}
                <em>{'"A"'}</em>,
              </p>
              <p>
                &nbsp;&nbsp;{'"status": '}
                <em>{'"success"'}</em>
              </p>
              <p>
                <span>{"}"}</span>
              </p>
            </div>
          </div>
        </div>
        <span className="visual-caption">
          APIs. DOCUMENTATION. POSSIBILITIES.
        </span>
      </div>
    );
  return (
    <div className="project-visual events-visual" aria-hidden="true">
      <div className="event-orbit orbit-one" />
      <div className="event-orbit orbit-two" />
      <div className="events-window">
        <div className="events-preview-nav">
          <span>
            <span className="event-logo">d.</span>dev events
          </span>
          <span>
            Discover <ArrowUpRightIcon size={13} />
          </span>
        </div>
        <div className="events-preview-title">
          Find your people.
          <br />
          <span>Build what’s next.</span>
        </div>
        <p className="events-preview-description">
          Good ideas start with great connections.
        </p>
        <div className="event-ticket">
          <div className="event-ticket-art">
            <CodeIcon size={34} weight="bold" />
            <span>
              LET’S
              <br />
              BUILD.
            </span>
            <span className="event-ticket-star">✳</span>
          </div>
          <div className="event-ticket-detail">
            <span className="event-category">COMMUNITY & CODE</span>
            <strong>Developer Meetup</strong>
            <span>
              <CalendarBlankIcon size={12} /> Learn. Connect. Create.
            </span>
            <span>
              <MapPinIcon size={12} /> Wherever ideas happen
            </span>
          </div>
          <ArrowUpRightIcon className="ticket-arrow" size={21} />
        </div>
      </div>
      <span className="visual-caption">
        A SPACE FOR THE DEVELOPER COMMUNITY.
      </span>
    </div>
  );
}

export default function Links() {
  return (
    <section
      id="links"
      className="section container work-section"
      aria-labelledby="work-title"
    >
      <div className="section-label">
        <span>01 / SELECTED WORK</span>
        <span className="label-line" />
      </div>
      <div className="section-heading">
        <div>
          <h2 id="work-title">
            Ideas, brought to life<span className="accent-text">.</span>
          </h2>
          <p className="section-subtitle">
            A few things I’ve built while learning, experimenting, and solving
            problems.
          </p>
        </div>
        <a
          href="https://github.com/piyush-sagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          More on GitHub <ArrowUpRightIcon size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.name} className="project-card">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-visual-link"
              aria-label={`Visit ${project.name} live site (opens in a new tab)`}
            >
              <ProjectVisual kind={project.kind} />
              <span className="project-open">
                <ArrowUpRightIcon size={22} aria-hidden="true" />
              </span>
            </a>
            <div className="project-info">
              <div className="project-eyebrow">
                <span>{project.category}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="project-title-row">
                <h3>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
                <span>{project.role}</span>
              </div>
              <p>{project.description}</p>
              <ul className="project-tags">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIcon size={17} aria-hidden="true" />
                  Live site <ArrowUpRightIcon size={15} aria-hidden="true" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeIcon size={17} aria-hidden="true" />
                    Source code{" "}
                    <ArrowUpRightIcon size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
