
"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaSnapchatGhost, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";

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

export function FloatingSocial() {
    return (
        <div className="fixed left-6 bottom-0 hidden xl:flex flex-col gap-4 items-center z-50">
            <div className="flex flex-col gap-4 mb-4">
                {socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon];
                    return (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/70 hover:text-primary transition-colors text-xl"
                            whileHover={{ y: -3, scale: 1.1 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 + index * 0.1 }}
                        >
                            <Icon />
                        </motion.a>
                    );
                })}
            </div>
            <motion.div
                className="w-[1px] h-24 bg-foreground/70"
                initial={{ height: 0 }}
                animate={{ height: 96 }} // 24 * 4 = 96px
                transition={{ delay: 1.2, duration: 0.5 }}
            />
        </div>
    );
}
