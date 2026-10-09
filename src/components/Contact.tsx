"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  PaperPlaneTiltIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const email = "sagarpiyush.27@gmail.com";

export default function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      timer.current = setTimeout(() => setCopyState("idle"), 4000);
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section
      id="contact"
      className="contact-section container"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div className="contact-topline">
          <span>05 / WHAT’S NEXT?</span>
          <span>
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </div>
        <div className="contact-grid">
          <div>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <span>hello.</span>
              <SparkleIcon
                weight="fill"
                className="contact-sparkle"
                aria-hidden="true"
              />
            </h2>
            <p>
              Have an interesting idea, an internship opportunity, or just want
              to talk tech? I’d love to hear from you.
            </p>
            <a href={`mailto:${email}`} className="button contact-button">
              Let’s start a conversation{" "}
              <PaperPlaneTiltIcon size={20} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-details">
            <p className="contact-detail-label">DROP ME A LINE</p>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
              <ArrowUpRightIcon size={22} aria-hidden="true" />
            </a>
            <button type="button" className="copy-email" onClick={copyEmail}>
              {copyState === "copied" ? (
                <CheckIcon size={16} aria-hidden="true" />
              ) : (
                <CopyIcon size={16} aria-hidden="true" />
              )}
              {copyState === "copied" ? "Email copied" : "Copy email address"}
            </button>
            <p className="copy-feedback" role="status">
              {copyState === "copied"
                ? "Email address copied to clipboard."
                : copyState === "error"
                  ? "Copy unavailable. You can select the email address above."
                  : ""}
            </p>
            <div className="contact-socials">
              <a
                href="https://github.com/piyush-sagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRightIcon size={17} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/piyush-sagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRightIcon size={17} aria-hidden="true" />
              </a>
              <a
                href="https://leetcode.com/u/piyush-sagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
                <ArrowUpRightIcon size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
