import { ArrowUpIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export default function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <a
          href="#hero"
          className="footer-wordmark"
          aria-label="Piyush Sagar, back to top"
        >
          ps<span>.</span>
        </a>
        <p>Built with intention. Always evolving.</p>
        <a className="back-top" href="#hero">
          Back to top <ArrowUpIcon size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Piyush Sagar</span>
        <a
          href="https://piyush-sagar.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A look at where it started{" "}
          <ArrowUpRightIcon size={14} aria-hidden="true" />
        </a>
        <span>Vellore, India</span>
      </div>
    </footer>
  );
}
