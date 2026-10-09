import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CodeIcon,
  FileTextIcon,
  MapPinIcon,
  SparkleIcon,
} from "@phosphor-icons/react/ssr";

export default function Hero() {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            Open to internships & opportunities
          </div>
          <p className="hero-intro">
            Developer & problem solver <span className="intro-line" aria-hidden="true" />
          </p>
          <h1 id="hero-title">
            Hi, I’m
            <br />
            Piyush
            <br />
            <span className="accent-text">Sagar.</span>
            <SparkleIcon
              className="hero-asterisk"
              weight="fill"
              aria-hidden="true"
            />
          </h1>
          <p className="hero-description">
            A B.Tech Information Technology student at VIT Vellore. I build
            full-stack web applications and sharpen my problem-solving skills
            through competitive programming.
          </p>
          <div className="hero-actions">
            <a href="#links" className="button button-primary">
              Explore my work{" "}
              <ArrowDownRightIcon size={20} aria-hidden="true" />
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ghost"
            >
              <FileTextIcon size={19} aria-hidden="true" />
              View résumé <ArrowUpRightIcon size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-profiles">
            <span>Find me on</span>
            <a
              href="https://github.com/piyush-sagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRightIcon size={13} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/piyush-sagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRightIcon size={13} aria-hidden="true" />
            </a>
            <a
              href="https://leetcode.com/u/piyush-sagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode <ArrowUpRightIcon size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-card">
            <div className="portrait-topline">
              <span>ALWAYS A WORK IN PROGRESS</span>
              <SparkleIcon size={20} aria-hidden="true" />
            </div>
            <div className="portrait-frame">
              <Image
                src="/piyush.png"
                alt="Piyush Sagar wearing a white blazer"
                fill
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 420px, 350px"
                loading="eager"
                fetchPriority="high"
                className="portrait-image"
              />
            </div>
            <div className="portrait-caption">
              <span>
                Piyush Sagar
                <small>Developer. Problem solver. Lifelong learner.</small>
              </span>
              <ArrowUpRightIcon size={28} aria-hidden="true" />
            </div>
            <div className="portrait-orbit" aria-hidden="true" />
          </div>
          <div className="floating-note note-code">
            <CodeIcon size={20} aria-hidden="true" />
            <span>
              Built with curiosity<small>and care in the details.</small>
            </span>
          </div>
          <div className="floating-note note-location">
            <MapPinIcon size={17} aria-hidden="true" />
            Based in Vellore, India
          </div>
          <span className="handwritten-note">
            a little about me
            <ArrowDownIcon size={26} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          <SparkleIcon size={15} weight="fill" aria-hidden="true" />
          Engineering ideas into experiences.
        </span>
        <a href="#links">
          Scroll to explore <ArrowDownIcon size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="intro-strip" aria-label="Focus areas">
        <span>FULL STACK DEVELOPMENT</span>
        <SparkleIcon size={16} aria-hidden="true" />
        <span>COMPETITIVE PROGRAMMING</span>
        <SparkleIcon size={16} aria-hidden="true" />
        <span>THOUGHTFUL DESIGN</span>
        <SparkleIcon size={16} aria-hidden="true" />
        <span>ALWAYS LEARNING</span>
        <ArrowRightIcon size={19} aria-hidden="true" />
      </div>
    </section>
  );
}
