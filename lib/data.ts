import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/P1.jpeg";
import rmtdevImg from "@/public/P4.jpeg";
import wordanalyticsImg from "@/public/P3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "10th Board",
    location: "Kendriya Vidyalaya, New Delhi",
    description:
      "I completed my 10th grade from Kendriya Vidyalaya, where I gained a well-rounded education and strong discipline, along with exposure to diverse cultures and environments, which helped shape my adaptability and collaborative skills.",
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    title: "12th Board",
    location: "Shati Gyan Internation Boarding School",
    description:
      "I completed my 12th board from Shanti Gyan International School, New Delhi, where I built a strong academic foundation and developed a passion for problem-solving and technology that continues to drive me today.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Computer Science and Engineering (CSE)",
    location: "Vellore Institite of technology",
    description:
      "I graduated after 4 years of studying in specialization in Artificial Intelligence and Machine Learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Prayana Electric",
    location: "UI/UX Designer and Web Developer",
    description:
      "where I designed and developed a responsive, fast-loading website that boosted user engagement and aligned with the brand’s identity. I focused on creating intuitive user interfaces and optimized user experiences to enhance customer interaction and visibility.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Six-Phase",
    location: "Java Trainer Intern",
    description:
      "I conducted training sessions for students, covering core Java concepts, OOP principles, and data structures. I guided learners through hands-on coding exercises, helped them build a strong programming foundation, and provided placement-focused mentorship to prepare them for technical interviews.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Mine Safe Helmet",
    description:
      "Built a smart helmet for real-time miner safety monitoring. Won 1st place among 650 teams in ECS, awarded by the DRDO Chief.",
    tags: ["LiFi", "IoT", "LoRa", "RF ID", "WiFi",  "Web Development"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Smart Street Light System",
    description:
      "Designed system which detects vehicle movement and control streetlights automatically for energy saving.",
    tags: ["PIR sensors", "Arduino", "C++", "IoT", "Embedded Systems"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Pest Detection",
    description:
      "Built a CNN-based mobile app to detect pests from user-uploaded photos and provide pesticide recommendations, buying links, and organic alternatives.",
    tags: ["CNN", "TensorFlow", "Web", "JavaScript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Artificial Intelligence",
  "Git",
  "Tailwind",
  "Machine Learning",
  "Arduino IDE",
  "AWS",
  "MATLAB",
  "Deep Learning",
  "DSA",
  "TensorFlow",
  "CNN",
  "OOPs",
  "Computer Vision",
  "English",
  "Hindi",
  "Telugu",
  "German",
  "Spanish",
  "CapCut",
  "NLP",
  "IoT",
  "GitHub",
  "Figma"
] as const;
