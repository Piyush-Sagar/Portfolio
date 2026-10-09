import {
  ArrowUpRightIcon,
  CodeIcon,
  CompassIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react/ssr";

export default function About() {
  return (
    <section
      id="about"
      className="section container about-section"
      aria-labelledby="about-title"
    >
      <div className="section-label">
        <span>02 / THE PERSON BEHIND THE CODE</span>
        <span className="label-line" />
      </div>
      <div className="about-grid">
        <div className="about-heading">
          <h2 id="about-title">
            A curious mind.
            <br />A builder at heart<span className="accent-text">.</span>
          </h2>
          <p className="section-subtitle">
            Good software starts with asking better questions.
          </p>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            More in my résumé <ArrowUpRightIcon size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="about-copy">
          <p>
            I’m Piyush, an Information Technology undergraduate at{" "}
            <strong>VIT Vellore</strong>. I enjoy the space where solid
            engineering meets thoughtful design — building software that feels
            as good to use as it is to work on.
          </p>
          <p>
            My foundation is in C++, data structures, and algorithms. These
            days, I’m bringing that problem-solving mindset to full-stack
            development with JavaScript, TypeScript, and the MERN stack.
          </p>
          <p>
            I’m also exploring <strong>Go and backend architecture</strong>,
            learning how to make systems simpler, faster, and ready to grow. I’m
            looking for opportunities to learn alongside people who care about
            their craft.
          </p>
        </div>
      </div>
      <div className="about-notes">
        <article>
          <span className="note-icon">
            <GraduationCapIcon size={24} aria-hidden="true" />
          </span>
          <div>
            <h3>Learning with intention</h3>
            <p>
              B.Tech IT at VIT Vellore.
              <br />A foundation in theory, a focus on practice.
            </p>
          </div>
        </article>
        <article>
          <span className="note-icon">
            <CodeIcon size={24} aria-hidden="true" />
          </span>
          <div>
            <h3>Thinking in solutions</h3>
            <p>
              Regular LeetCode practice.
              <br />
              One interesting problem at a time.
            </p>
          </div>
        </article>
        <article>
          <span className="note-icon">
            <CompassIcon size={24} aria-hidden="true" />
          </span>
          <div>
            <h3>Following my curiosity</h3>
            <p>
              From new languages to better systems.
              <br />
              There’s always something to explore.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
