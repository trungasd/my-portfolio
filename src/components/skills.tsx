//src/components/skills.tsx
"use client";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  
    return (
      <section id="skills" className="mb-28 text-center scroll-mt-24 py-16">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 mb-10">My Skills</h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-gray-200 px-5 py-2 rounded-full text-gray-800 font-medium shadow-md hover:bg-gray-300 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
    );
  };
  
  export default Skills;
  