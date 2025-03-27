//src/lib/data.ts

import { FaGraduationCap, FaBriefcase} from "react-icons/fa";
import prjLdP from "@/images/projectLP.png"
import prjSell from "@/images/projectSell.jpg"
import prjBand from "@/images/projectBand.jpg"

export const links = [
  {
    name: "Home",
    hash: "#header",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutData = [
  "I have completed my university program and hold a degree in Software Engineering. With a strong foundation in HTML, CSS, and JavaScript, I aim to start my career as a Frontend Developer, contributing to the development of smooth and intuitive user interfaces.",
  "At the same time, I am expanding my knowledge of backend development to enhance my programming skills, with a long-term goal of becoming a Fullstack Developer. I am always eager to learn and grow, ready to take on challenges to improve my expertise.",
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SCSS",
  "MongoDB",
  "SQL Server",
  "Node.js",
  "ASP.NET"
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Gia Dinh University",
    location: "Go Vap District, Ho Chi Minh City",
    description:
      "I graduated from college with a bachelor's degree in Software Engineering.",
    icon: FaGraduationCap,
    date: "2021-2024"
  },
  {
    id: 2,
    title: " IEC Investment Corporation",
    location: "6/21 Do Son, Ward 4, Tan Binh District, Ho Chi Minh City",
    description:
      "As a Web Development Intern, I developed and fully designed the landing page website for IEC Group to showcase its services and products.",
    icon: FaBriefcase,
    date: "05/2024-08/2024",
  },
] as const

export const projectsData = [
  {
    id: 1,
    img: prjSell,
    title: "Clothing Store Web",
    description: "Developed an online shopping website.",
    tech: ["HTML", "CSS", "Node.js", "MongoDB"],
    link: "https://github.com/trungasd/-WebClothingStore",
  },
  {
    id: 2,
    img: prjLdP,
    title: "Landing Page Web",
    description: "Developed a landing page for IEC Group to showcase their services and products.",
    tech: ["ReactJS", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/trungasd/LandingPage",
  },
  {
    id: 3,
    img: prjBand,
    title: "The Band Web",
    description: "Designed and developed a website for a music band",
    tech: ["HTML", "CSS", "C#", "ASP.NET", "SQL Server"],
    link: "https://github.com/trungasd/WebTheBand",
  },
] as const

