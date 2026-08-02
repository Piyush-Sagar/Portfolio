"use client";

import { motion } from "framer-motion";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", level: 90, years: "3+" },
      { name: "Python", level: 85, years: "2+" },
      { name: "JavaScript", level: 85, years: "2+" },
      { name: "TypeScript", level: 80, years: "2+" },
      { name: "SQL", level: 75, years: "1+" },
      { name: "Go", level: 40, years: "learning" },
    ],
    color: "from-blue-500 to-blue-600",
    icon: "code",
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, years: "2+" },
      { name: "Next.js", level: 85, years: "2+" },
      { name: "Tailwind CSS", level: 90, years: "2+" },
      { name: "HTML/CSS", level: 95, years: "3+" },
    ],
    color: "from-blue-500 to-blue-600",
    icon: "globe",
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", level: 80, years: "2+" },
      { name: "MongoDB", level: 75, years: "1+" },
      { name: "Mongoose", level: 75, years: "1+" },
      { name: "Git & GitHub", level: 90, years: "3+" },
      { name: "Cloudinary", level: 70, years: "1+" },
    ],
    color: "from-blue-500 to-blue-600",
    icon: "server",
  },
  {
    category: "Competitive Programming",
    items: [
      { name: "Data Structures", level: 85, years: "2+" },
      { name: "Algorithms", level: 85, years: "2+" },
      { name: "LeetCode", level: 80, years: "2+" },
    ],
    color: "from-blue-500 to-blue-600",
    icon: "trophy",
  },
];

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

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easing },
  },
  hover: {
    x: 8,
    transition: { duration: 0.2, ease: easing },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing,
      staggerChildren: 0.08,
    },
  },
};

const iconComponents = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  trophy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

function SkillBar({ name, level, years, color, index }: { name: string; level: number; years: string; color: string; index: number }) {
  const barVariants = {
    initial: { width: 0, opacity: 0 },
    animate: {
      width: `${level}%`,
      opacity: 1,
      transition: { delay: 0.3 + index * 0.08, duration: 0.8, ease: easing },
    },
  };

  const fromColor = color.split(" ")[0].replace("from-", "");
  const toColor = color.split(" ")[1]?.replace("to-", "") || fromColor;

  return (
    <motion.div
      variants={itemVariants}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="group"
    >
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
          {years}
        </span>
      </div>
      <motion.div
        className="relative h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden"
        variants={barVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${fromColor.replace(/(\d+)/, '$1')} to ${toColor.replace(/(\d+)/, '$1')})` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: 0.3 + index * 0.08, duration: 0.8, ease: easing }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: easing }}
        className="mb-12"
      >
        <motion.h2 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          Skills
        </motion.h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
          Technologies and tools I work with, organized by domain
        </p>
      </motion.div>

      {/* Skills Grid - Full Width 4-column */}
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map(({ category, items, color, icon }) => (
          <motion.div
            key={category}
            variants={cardVariants}
            className="group relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20 transition-all duration-500 h-full"
          >
            {/* Animated top accent bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
              style={{ background: color }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: 0.4, duration: 0.6, ease: easing }}
            />

            <div className="relative z-10">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white flex-shrink-0`}>
                  {iconComponents[icon as keyof typeof iconComponents]}
                </span>
                <div className="min-w-0">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm uppercase tracking-wide truncate">
                    {category}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {items.length} skills
                  </p>
                </div>
              </div>

              {/* Skills list with animated bars */}
              <motion.div
                className="space-y-4"
                variants={categoryVariants}
              >
                {items.map((item, i) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    years={item.years}
                    color={color}
                    index={i}
                  />
                ))}
              </motion.div>
            </div>

            {/* Subtle hover glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${color.replace("from-", "").replace("to-", "")} 0%, transparent 70%)` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}