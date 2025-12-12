"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-serif mb-16 text-center"
        >
          Experience
        </motion.h2>

        {/* Grid wrapper: left column reserved for icons/timeline markers, right column for content */}
        <div className="grid sm:grid-cols-[72px_1fr] grid-cols-1 gap-8 items-start">
          {/* LEFT COLUMN - reserved space for icons / timeline markers.
              It's hidden on small screens; uncomment and populate icons if needed. */}
          <nav className="hidden sm:flex flex-col items-center gap-4 sticky top-28">
            {/* Example: add icons here if you want */}
            {/* <a href="#exp-1" className="text-white/90"><FaLinkedin className="w-5 h-5" /></a> */}
          </nav>

          {/* RIGHT COLUMN - actual timeline content
              NOTE: increased left padding so content shifts right and doesn't overlap */}
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-12 sm:pl-20">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pb-10"
                id={`exp-${exp.id}`}
              >
                {/* Timeline Dot - positioned relative to the left border */}
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded w-fit mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-lg text-muted-foreground mb-2">{exp.company}</h4>
                <p className="text-muted-foreground/80 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
