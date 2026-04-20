//src/lib/data.ts

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import prjLdP from "@/images/projectLP.png";
import prjSell from "@/images/projectSell.jpg";
import prjBand from "@/images/projectBand.jpg";
import prjBoiss from "@/images/gameboiss44.png";
import prjRun from "@/images/gamerunpng.png";
import prjCar from "@/images/projectCar.png";

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
  "I'm a Frontend Developer with hands-on experience in building responsive and user-friendly web applications using ReactJS and Vue.js. Strong understanding of RESTful API integration and modern UI development. Seeking an opportunity to contribute to a dynamic team while continuously improving technical and problem-solving skills",
  "Passionate about creating seamless user experiences and eager to learn new technologies in the ever-evolving field of web development.",
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "Bootstrap",
  "SCSS",
  "MongoDB",
  "SQL Server",
  "Node.js",
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Gia Dinh University",
    location: "Go Vap District, Ho Chi Minh City",
    description:
      "I graduated from college with a bachelor's degree in Software Engineering.",
    icon: FaGraduationCap,
    date: "2021-2024",
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
  {
    id: 3,
    title: "Freelance Frontend Web Developer",
    location: "Remote",
    description:
      "I work as a freelance frontend developer, developed a car marketplace website for showcasing and selling vehicles. Integrated RESTful APIs and handled asynchronous data fetching.",
    icon: FaBriefcase,
    date: "04/2025-7/2025",
  },
] as const;

export const projectsData = [
  {
    id: 6,
    img: prjCar,
    title: "Car Marketplace Web",
    description:
      "A car marketplace website for showcasing and selling vehicles. Integrated RESTful APIs and handled asynchronous data fetching.",
    tech: ["Vue.js", "Bootstrap"],
    link: "https://dev.sellcarintl.com/home",
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
    description:
      "Developed a landing page for IEC Group to showcase their services and products.",
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
  {
    id: 4,
    img: prjRun,
    title: "Running Game App",
    description:
      "Game application to controll characters running and avoiding obstacles.",
    tech: ["Unity", "C#", "Animation", "Audio", "OOP"],
    link: "https://huynhtrung.itch.io/rungame",
  },
  {
    id: 5,
    img: prjBoiss,
    title: "Boiss44 Game App",
    description: "Game application to control character to shoot Boss.",
    tech: [
      "Unity",
      "C#",
      "Animation ",
      "Audio",
      "Game Logic",
      "OOP",
      "Debugging",
    ],
    link: "https://huynhtrung.itch.io/boiss4425",
  },
] as const;
