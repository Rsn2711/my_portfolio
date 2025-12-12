
"use client";

import { useForm } from "react-hook-form";
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

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate generic form submission (e.g. to console or an alert)
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Message sent! (Simulation)");
        reset();
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-4 mb-8">
                            <p className="text-muted-foreground">
                                Feel free to reach out via email or connect on social media.
                            </p>
                            <p className="font-medium">contact@rsnxfolio.com</p>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => {
                                const Icon = iconMap[link.icon];
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-background border border-input flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-background p-6 rounded-2xl shadow-sm border border-input"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                    })}
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                    placeholder="Hello, I'd like to work with you..."
                                />
                                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
