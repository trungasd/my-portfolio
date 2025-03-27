"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-28 text-center scroll-mt-24 py-16"
    >
      <div className="container mx-auto text-center max-w-6xl px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group perspective"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Container lật */}
              <div className="relative h-70 md:w-96 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">

                {/* Mặt trước */}
                <div className="absolute inset-0 rounded-xl shadow-lg bg-white [backface-visibility:hidden]">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.img}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Mặt sau */}
                <div className="absolute inset-0 p-6 rounded-xl shadow-lg bg-gray-800 text-white flex flex-col justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    XEM THÊM
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
