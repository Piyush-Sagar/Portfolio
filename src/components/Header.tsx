"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { label: "Work", href: "#links" },
  { label: "About", href: "#about" },
  { label: "Toolkit", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#hero"
          className="wordmark"
          aria-label="Piyush Sagar, home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            ps<span>.</span>
          </span>
          <span className="wordmark-name">
            Piyush Sagar<span>Developer & curious human</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-small header-contact" href="#contact">
            Let’s talk <ArrowUpRightIcon size={16} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XIcon size={22} aria-hidden="true" />
            ) : (
              <ListIcon size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <ArrowUpRightIcon size={20} aria-hidden="true" />
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Let’s talk
          <ArrowUpRightIcon size={20} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
