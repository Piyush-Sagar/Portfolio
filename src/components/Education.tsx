import { ArrowUpRightIcon, GraduationCapIcon } from "@phosphor-icons/react/ssr";

export default function Education() {
  return (
    <section
      id="education"
      className="section container education-section"
      aria-labelledby="education-title"
    >
      <div className="section-label">
        <span>04 / THE JOURNEY SO FAR</span>
        <span className="label-line" />
      </div>
      <div className="education-grid">
        <div>
          <h2 id="education-title">
            Building a<br />
            strong foundation<span className="accent-text">.</span>
          </h2>
          <p className="section-subtitle">
            Learning in the classroom.
            <br />
            Putting it to work beyond it.
          </p>
          <GraduationCapIcon
            className="education-decoration"
            size={100}
            weight="thin"
            aria-hidden="true"
          />
        </div>
        <div className="education-list">
          <article className="education-item">
            <div className="education-date">
              <span className="timeline-dot" />
              <span>2024 — 2028</span>
              <span className="education-status">IN PROGRESS</span>
            </div>
            <div className="education-details">
              <h3>B.Tech in Information Technology</h3>
              <p className="institution">VIT Vellore</p>
              <p>
                Building foundations in software development, data structures,
                and full-stack engineering.
              </p>
              <div className="academic-score">
                <strong>
                  9.43<span>/ 10</span>
                </strong>
                <span>CGPA</span>
              </div>
            </div>
          </article>
          <article className="education-item">
            <div className="education-date">
              <span className="timeline-dot" />
              <span>2022 — 2024</span>
            </div>
            <div className="education-details">
              <h3>Senior Secondary Education</h3>
              <p className="institution">Ramakrishna Mission Vidyapith</p>
              <p>
                A grounding in analytical thinking and a curiosity for
                technology.
              </p>
              <div className="academic-score">
                <strong>
                  93<span>%</span>
                </strong>
                <span>CLASS 12 BOARD EXAMINATIONS</span>
              </div>
            </div>
          </article>
          <a
            className="text-link education-resume"
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the full résumé{" "}
            <ArrowUpRightIcon size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
