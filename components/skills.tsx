"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold font-serif mb-16 text-center"
                >
                    Skills & Expertise
                </motion.h2>

                {/* GRID layout same as Experience */}
                <div className="grid sm:grid-cols-[72px_1fr] grid-cols-1 gap-8 items-start">

                    {/* LEFT SPACER COLUMN (icons if needed later) */}
                    <div className="hidden sm:flex flex-col items-center gap-4 sticky top-28">
                        {/* Example — You can add icons here */}
                        {/* <FaTools className="w-6 h-6 text-primary" /> */}
                    </div>

                    {/* RIGHT CONTENT COLUMN */}
                    <div className="pl-12 sm:pl-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {categories.map((category, catIndex) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIndex * 0.1 }}
                                    className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800"
                                >
                                    <h3 className="text-xl font-bold mb-6 text-primary">
                                        {category}
                                    </h3>

                                    <div className="space-y-4">
                                        {skills
                                            .filter((s) => s.category === category)
                                            .map((skill, index) => (
                                                <div key={skill.name}>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="font-medium">
                                                            {skill.name}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {skill.level}%
                                                        </span>
                                                    </div>

                                                    <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                duration: 1,
                                                                delay: 0.2 + index * 0.1,
                                                            }}
                                                            className="h-full bg-primary rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
