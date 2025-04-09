//src/lib/data.ts

import { FaGraduationCap, FaBriefcase} from "react-icons/fa";
import prjLdP from "@/images/projectLP.png"
import prjSell from "@/images/projectSell.jpg"
import prjBand from "@/images/projectBand.jpg"
import prjBoiss from "@/images/gameboiss44.png";
import prjRun from "@/images/gamerunpng.png"

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
  "I'm a developer with a strong foundation in web development who has recently transitioned into the exciting world of game development. With experience in building interactive and responsive web applications using technologies like JavaScript and React, I've discovered my true passion lies in crafting engaging game experiences using Unity and C#.",
  "Now, I'm focusing on creating 2D and 3D games that blend creativity, interactivity, and gameplay mechanics. I enjoy bringing ideas to life—from prototyping mechanics to polishing game levels and UI. I'm currently building a portfolio of Unity projects to showcase my skills and creativity as a game developer. I'm eager to join a team where I can learn, grow, and contribute to meaningful game projects.",
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
  "ASP.NET",
  "Unity",
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
    id: 5,
    img: prjBoiss,
    title: "Boiss44 Game App",
    description: "Game application to control character to shoot Boss.",
    tech: ["Unity", "C#", "Animation ", "Audio", "Game Logic", "OOP", "Debugging"],
    link: "https://huynhtrung.itch.io/boiss4425",
  },
  {
    id: 4,
    img: prjRun,
    title: "Running Game App",
    description: "Game application to controll characters running and avoiding obstacles.",
    tech: ["Unity", "C#", "Animation", "Audio", "OOP"],
    link: "https://huynhtrung.itch.io/rungame",
  },
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

