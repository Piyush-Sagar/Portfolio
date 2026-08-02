"use client";

import { motion } from "framer-motion";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const timelineItems = [
  {
    period: "2024 – Present",
    title: "B.Tech in Information Technology",
    place: "VIT Vellore",
    detail:
      "Pursuing B.Tech in Information Technology, building strong foundations in software development, data structures, and full-stack engineering.",
  },
  {
    period: "2022 – 2024",
    title: "Class 11th & 12th (Senior Secondary)",
    place: "Ramakrishna Mission Vidyapith",
    detail:
      "Completed senior secondary education with 93% in Class 12 board examinations.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export default function Education() {
  return (
    <section
      id="education"
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
          Education
        </motion.h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
          My academic journey so far
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-12">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex md:items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <span className="block w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-600/20" />
                </div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-10">
                  <div
                    className={`group rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20 transition-all duration-500 p-6 ${
                      isLeft ? "md:text-right" : ""
                    }`}
                  >
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                      {item.period}
                    </span>
                    <h3 className="mt-3 text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.place}
                    </p>
                    <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
