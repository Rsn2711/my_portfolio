
"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold font-serif mb-16 text-center"
                >
                    Education
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-primary">{edu.institution}</h3>
                                <p className="text-lg font-medium">{edu.degree}</p>
                                <p className="text-muted-foreground">{edu.location}</p>
                            </div>
                            <div className="md:text-right">
                                <span className="inline-block bg-primary/10 text-primary font-mono px-3 py-1 rounded text-sm">
                                    {edu.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
