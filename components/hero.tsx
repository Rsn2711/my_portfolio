
"use client";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { profile } from "@/lib/data";


export default function Hero() {
    const [text, setText] = useState("");
    const { name, tagline } = profile;
    const [index, setIndex] = useState(0);

    // Typewriter effect
    useEffect(() => {
        if (index < tagline.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + tagline.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, tagline]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 bg-transparent">
                <div className="absolute inset-0 bg-background/0"></div>
            </div>

            <div className="z-10 text-center px-4 max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-medium tracking-widest text-lg mb-4"
                >
                    HI, MY NAME IS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 tracking-wide uppercase text-shimmer"
                >
                    {name}.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="h-8 md:h-12 mb-8"
                >
                    <h2 className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                        {text}
                        <span className="animate-pulse text-primary">|</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        check out my work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium rounded transition-all hover:scale-105"
                    >
                        get in touch
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
            >
                <Link href="#about" aria-label="Scroll down">
                    <FaArrowDown className="text-2xl text-muted-foreground hover:text-primary transition-colors" />
                </Link>
            </motion.div>
        </section>
    );
}
