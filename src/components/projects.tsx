"use client";

import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Projects
      </h2>

      <div className="flex flex-col gap-8 items-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  img,
  link,
}: (typeof projectsData)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative flex flex-col sm:flex-row sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tech.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <a
            href={link}
            target="_blank"
            className="mt-5 w-fit bg-gray-900 text-white px-5 py-2 rounded-full text-sm hover:scale-110 active:scale-105 transition"
          >
            Demo
          </a>
        </div>

        <Image
          src={img}
          alt={title}
          quality={95}
          // Thay đổi ở đây:
          // - Bỏ 'hidden sm:block'
          // - Thêm 'relative sm:absolute'
          // - Chỉnh lại vị trí trên mobile
          className="relative sm:absolute top-0 sm:top-8 sm:-right-40 w-full sm:w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              sm:group-hover:-translate-x-3
              sm:group-hover:translate-y-3
              sm:group-hover:-rotate-2

              sm:group-even:group-hover:translate-x-3
              sm:group-even:group-hover:translate-y-3
              sm:group-even:group-hover:rotate-2

              sm:group-even:right-[initial] sm:group-even:-left-40"
        />
      </article>
    </motion.div>
  );
}
