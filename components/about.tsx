"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { profile, socialLinks } from "@/lib/data";
import React from "react";

const iconMap: Record<string, React.ComponentType<any>> = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
};

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">

                {/* SAME LAYOUT AS EXPERIENCE & SKILLS */}
                <div className="grid sm:grid-cols-[72px_1fr] grid-cols-1 gap-8 items-start">

                    {/* LEFT EMPTY COLUMN (icons optional later) */}
                    <div className="hidden sm:flex flex-col items-center gap-4 sticky top-28"></div>

                    {/* RIGHT COLUMN (SHIFTED CONTENT) */}
                    <div className="pl-12 sm:pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row items-start gap-12"
                        >
                            {/* TEXT CONTENT */}
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-5xl font-bold font-serif relative inline-block">
                                    About Me
                                    <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10 translate-y-1"></span>
                                </h2>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {profile.bio}
                                </p>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    I am currently based in {profile.location} and always open 
                                    to new opportunities and collaborations.
                                </p>

                                {/* Social icons for mobile only */}
                                
                            </div>

                            {/* IMAGE BLOCK */}
                            <div className="flex-1 flex justify-center w-full">
                                <div className="relative w-64 h-64 md:w-80 md:h-80">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>

                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <Image
                                            src="/profile-pic.jpg"
                                            alt={profile.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
