
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Orb 1 - Primary Color */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 dark:opacity-20"
            />

            {/* Orb 2 - Secondary/Accent Color (Cyan/Teal) */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-30 dark:opacity-20"
            />

            {/* Orb 3 - Warm/Magenta Accent */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-30 dark:opacity-20"
            />

            {/* Orb 4 - Bottom Right Blue */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, -50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] opacity-30 dark:opacity-20"
            />

            {/* Grid Overlay for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        </div>
    );
}
