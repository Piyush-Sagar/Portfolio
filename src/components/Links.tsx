"use client";

import { motion } from "framer-motion";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const projects = [
  {
    title: "API Tools — Developer API Platform",
    description:
      "Frontend interface for a production-oriented API platform providing infrastructure services: DNS intelligence, UPI utilities, and developer tools. Built documentation pages, API reference sections, and dashboard interfaces. Implemented structured API documentation covering authentication, pagination, and rate limits.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      demo: "https://apitools.chirayusahu.com/",
    } as { github?: string; demo?: string },
  },
  {
    title: "Dev Events — Event Management Platform",
    description:
      "Full-stack event management platform with Next.js and TypeScript. Implemented API routes for CRUD operations on events stored in MongoDB via Mongoose. Integrated Cloudinary for cloud-based image uploads and media management. Dynamic event pages with registration, discovery, and related events. Designed with modern Next.js caching and scalable architecture.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "Tailwind CSS"],
    links: {
      github: "https://github.com/piyush-sagar/dev-events",
      demo: "https://dev-events-swart.vercel.app/",
    },
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/piyush-sagar", icon: "linkedin" },
  { label: "Email", href: "mailto:sagarpiyush.27@gmail.com", icon: "mail" },
];

const iconComponents = {
  github: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  mail: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  leetcode: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const stackItemVariants = {
  initial: { opacity: 0, scale: 0.9, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.05, y: -2, transition: { duration: 0.2, ease: easing } },
};

const linkVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  hover: { x: 4, transition: { duration: 0.2, ease: easing } },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const primaryLink = project.links.demo || project.links.github;
  const handleCardClick = () => {
    window.open(primaryLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      variants={cardVariants}
      className="group relative overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-neutral-900/5 dark:hover:shadow-black/20 cursor-pointer"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Subtle top accent bar */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 w-full bg-blue-500 dark:bg-blue-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ delay: 0.4 + index * 0.08, duration: 0.6, ease: easing }}
      />

      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <motion.h3
          className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
          variants={cardVariants}
        >
          {project.title}
        </motion.h3>
        <div className="flex flex-wrap gap-2">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 group"
              onClick={(e) => e.stopPropagation()}
            >
              {iconComponents.github}
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </header>
      <motion.p
        className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base"
        variants={cardVariants}
      >
        {project.description}
      </motion.p>
      <motion.div
        className="mt-5 flex flex-wrap gap-2"
        variants={cardVariants}
      >
        {project.stack.map((tech, idx) => (
          <motion.span
            key={tech}
            variants={stackItemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
            style={{ transitionDelay: `${idx * 30}ms` }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Links() {
  return (
    <section
      id="links"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Projects & Links
      </motion.h2>

      <motion.div
        className="mt-10 space-y-8"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}

        {/* Connect Section */}
        <motion.div
          className="pt-8 border-t border-neutral-200 dark:border-neutral-800"
          variants={cardVariants}
        >
          <motion.h3
            className="font-medium text-neutral-900 dark:text-neutral-100"
            variants={cardVariants}
          >
            Connect
          </motion.h3>
          <motion.div
            className="mt-4 flex flex-wrap gap-3"
            variants={cardVariants}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {iconComponents[link.icon as keyof typeof iconComponents]}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}