
"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                <span className="sr-only">Toggle theme</span>
            </button>
        )
    }

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
            <FaMoon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
            <span className="sr-only">Toggle theme</span>
        </motion.button>
    )
}
