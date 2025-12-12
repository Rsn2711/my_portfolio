
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export const skills = [
    { name: "Java", category: "Languages", level: 90 },
    { name: "C++", category: "Languages", level: 85 },
    { name: "JavaScript (ES6+)", category: "Languages", level: 80 },
    { name: "HTML5/CSS3", category: "Frontend", level: 95 },
    { name: "React.js", category: "Frontend", level: 85 },
    { name: "Bootstrap", category: "Frontend", level: 80 },
    { name: "Node.js", category: "Backend", level: 75 },
    { name: "Express.js", category: "Backend", level: 70 },
    { name: "MongoDB", category: "Backend", level: 75 },
    { name: "MySQL", category: "Backend", level: 70 },
    { name: "Git/GitHub", category: "Tools", level: 85 },
    { name: "VS Code", category: "Tools", level: 90 },
];

export const projects = [
    {
        id: 1,
        title: "Smart Lift System",
        description: "IoT/Computer Vision prototype using ESP32 and OpenCV. Detects floor-wise crowd density and optimizes lift control. Features real-time Wi-Fi communication and automated return cycles.",
        tags: ["ESP32", "Python", "OpenCV", "IoT", "Arduino"],
        image: "/project1.png",
        github: "https://github.com/Rsn2711",
        demo: "#",
        category: "IoT/Hardware",
    },
    {
        id: 2,
        title: "Resume Matcher",
        description: "Job Role Recommendation System. Web app to extract skills from resumes and match them with job roles using keyword extraction algorithms. Deployed on Vercel.",
        tags: ["React.js", "Node.js", "Express", "MongoDB"],
        image: "/project2.png",
        github: "https://github.com/Rsn2711",
        demo: "#",
        category: "Full Stack",
    },
];

export const experience = [
    {
        id: 1,
        role: "Internship Project (Smart Lift)",
        company: "Jadavpur University",
        period: "May 2025 – July 2025",
        description: "Designed a smart lift prototype detecting crowd density via laptop webcams. Integrated ESP32 with DC gear motors. Received a patent offer for the invention.",
    },
    {
        id: 2,
        role: "Internship (Blockchain & Big Data)",
        company: "NIELIT Kolkata",
        period: "Past",
        description: "Completed internship on Blockchain, Big Data & Data Science.",
    },
];

export const education = [
    {
        id: 1,
        institution: "Netaji Subhash Engineering College, Garia",
        degree: "B.Tech in Electronics and Communication",
        period: "June 2022 - 2026",
        location: "West Bengal, India"
    },
    {
        id: 2,
        institution: "Jagjiwan College Gaya",
        degree: "Higher Secondary Education (Bihar Board)",
        period: "Apr 2019 - Mar 2021",
        location: "Gaya, Bihar, India"
    },
    {
        id: 3,
        institution: "D.A.V Public School, Sherghati",
        degree: "Secondary Education (CBSE Board)",
        period: "Apr 2018 - Mar 2019",
        location: "Gaya, Bihar, India"
    }
]

export const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/raushan-kumar-454645261", icon: "FaLinkedin" },
    { name: "GitHub", url: "https://github.com/Rsn2711", icon: "FaGithub" },
    { name: "Email", url: "mailto:kumarraushan2797@gmail.com", icon: "FaEnvelope" },
    { name: "Instagram", url: "https://www.instagram.com/kr_____.raushan_?igsh=NHN2NnV5dXJvZWww", icon: "FaInstagram" },
];

export const profile = {
    name: "Raushan Kumar",
    tagline: "B.Tech ECE Student | IoT & Web Developer",
    bio: "B.Tech ECE student skilled in IoT, computer vision, and web technologies, with proven project experience and strong problem-solving abilities. Passionate about building smart solutions connecting hardware and software.",
    location: "Bihar, India",
    availability: "Open to opportunities"
};
