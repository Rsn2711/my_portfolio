
"use client";

import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaSnapchatGhost, FaYoutube, FaHeart, FaEnvelope, FaPhone } from "react-icons/fa";

const iconMap: Record<string, any> = {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaSnapchatGhost,
    FaYoutube,
    FaEnvelope,
    FaPhone
};

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12 mt-auto">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">
                <Link href="/" className="text-2xl font-bold font-serif">
                    RsnXfolio<span className="text-primary">.</span>
                </Link>
                <p className="text-muted-foreground max-w-md">
                    Building digital experiences with passion and precision.
                </p>

                <div className="flex gap-6 mt-4">
                    {socialLinks.map((link, index) => {
                        const Icon = iconMap[link.icon];
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>

                <div className="text-sm text-muted-foreground mt-8 flex items-center gap-2">
                    © {new Date().getFullYear()} RsnXfolio. Made with <FaHeart className="text-red-500 animate-pulse" /> by Raushan.
                </div>
            </div>
        </footer>
    );
}
