"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easing,
        delay: 0.35,
      },
    },
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

  const titleRef = useRef<HTMLHeadingElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = titleRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 30);
      mouseY.set((e.clientY - centerY) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  return (
    <section id="hero" className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
      <motion.div
        className="relative z-10 space-y-6 md:space-y-8 flex flex-col md:flex-row md:items-start md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative shrink-0 w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700"
          variants={cardVariants}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/piyush.png"
            alt="Piyush Sagar"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </motion.div>
        <motion.div className="flex-1 pt-2 md:pt-0" variants={cardVariants}>
          <motion.h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 dark:text-neutral-100"
            variants={itemVariants}
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <span className="relative">
              Piyush Sagar
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-blue-600 scale-x-0 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400 mt-4"
            variants={itemVariants}
          >
            B.Tech in Information Technology &middot; VIT Vellore
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-neutral-500 dark:text-neutral-500 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Web Dev &middot; Competitive Programming &middot; Full Stack &middot; Cloud
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={buttonVariants}
          >
            <motion.a
              href="https://github.com/piyush-sagar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium rounded border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <span className="relative z-10">GitHub</span>
              <svg
                className="ml-2 inline-block w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/piyush-sagar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium rounded border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <span className="relative z-10">LeetCode</span>
              <svg
                className="ml-2 inline-block w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="/Piyush Sagar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium rounded border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <span className="relative z-10">Resume</span>
              <svg
                className="ml-2 inline-block w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z"/>
              </svg>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle floating background elements */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${-50 - i * 30}px`,
              left: `${i * 30}%`,
            }}
            animate={{
              x: [0, 15 * i, 0],
              y: [0, -10 * i, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 20 : 0 }}
        transition={{ duration: 0.4, ease: easing, delay: scrolled ? 0 : 1.1 }}
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}