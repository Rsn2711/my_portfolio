
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#14b8a6", // teal-500
                    dark: "#0d9488", // teal-600
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-playfair)"],
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }
        },
    },
    plugins: [],
};
export default config;
