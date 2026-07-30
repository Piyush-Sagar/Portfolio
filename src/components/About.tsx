"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

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

const infoCardVariants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.3, ease: easing } },
};

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-start"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="relative shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700"
          variants={cardVariants}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/piyush.jpg"
            alt="Piyush Sagar"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </motion.div>
        <motion.div className="flex-1 pt-2 md:pt-0" variants={cardVariants}>
          {/* Education & Skills tagline */}
          <motion.p
            className="mt-4 text-sm text-neutral-500 dark:text-neutral-400"
            variants={cardVariants}
            style={{ transitionDelay: "200ms" }}
          >
            B.Tech Information Technology · VIT Vellore
          </motion.p>
          <motion.p
            className="mt-1 text-sm text-neutral-500 dark:text-neutral-400"
            variants={cardVariants}
            style={{ transitionDelay: "250ms" }}
          >
            Competitive Programming · Python · Japanese · Photo/Video Editing · Logo Design
          </motion.p>

          <motion.h2
            className="mt-6 text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100"
            variants={cardVariants}
          >
            About
          </motion.h2>
          <motion.div
            className="mt-8 prose prose-neutral dark:prose-invert max-w-none"
            variants={cardVariants}
          >
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Engineering undergraduate specializing in Information Technology with a strong academic record
              and solid grounding in software development fundamentals. Proficient in C++ and actively practicing
              data structures and algorithms through LeetCode and competitive programming.
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Skilled in JavaScript, TypeScript, and modern web technologies with experience using Git-based
              workflows and relational databases. Interested in backend systems, web application architecture,
              and scalable software design.
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Currently diving into Go (Golang) and MERN Stack to expand full-stack and backend development
              skills. Seeking internship or entry-level opportunities to apply technical knowledge, strengthen
              problem-solving ability, and contribute to well-engineered software systems.
            </p>
          </motion.div>
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            variants={cardVariants}
          >
            <motion.div
              className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 relative overflow-hidden"
              variants={infoCardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ transitionDelay: "300ms" }}
            >
              {/* CGPA Highlight */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 pointer-events-none" />
              <p className="font-medium text-neutral-900 dark:text-neutral-100 relative z-10">Education</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400 relative z-10">
                B.Tech IT, VIT Vellore (2024–2028)
              </p>
              <div className="mt-3 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold shadow-lg shadow-amber-500/30">
                  CGPA: 9.43
                </span>
              </div>
            </motion.div>
            <motion.div
              className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              variants={infoCardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ transitionDelay: "380ms" }}
            >
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Location</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">Vellore, Tamil Nadu</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              variants={infoCardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ transitionDelay: "460ms" }}
            >
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Availability</p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">Open to internships & full-time</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}