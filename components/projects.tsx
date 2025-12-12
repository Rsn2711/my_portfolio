"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

    const filteredProjects =
        filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold font-serif mb-8 text-center"
                >
                    Featured Projects
                </motion.h2>

                {/* Grid wrapper to reserve left column and shift content on the right */}
                <div className="grid sm:grid-cols-[72px_1fr] grid-cols-1 gap-8 items-start">
                    {/* LEFT COLUMN - reserved (hidden on mobile) */}
                    <div className="hidden sm:flex flex-col items-center gap-4 sticky top-28">
                        {/* optional: place quick nav or icons here */}
                    </div>

                    {/* RIGHT COLUMN - shifted content */}
                    <div className="pl-12 sm:pl-20">
                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {categories.map((cat, index) => (
                                <motion.button
                                    key={cat}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setFilter(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105",
                                        filter === cat
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "bg-background border border-zinc-200 dark:border-zinc-700 text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.28 }}
                                    key={project.id}
                                    className="group relative bg-background rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all"
                                >
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-zinc-200 dark:bg-zinc-800 w-full flex items-center justify-center overflow-hidden">
                                        <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                                            💻
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <FaGithub size={20} />
                                                    </Link>
                                                )}
                                                {project.demo && (
                                                    <Link
                                                        href={project.demo}
                                                        target="_blank"
                                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <FaExternalLinkAlt size={18} />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
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
