"use client";

import React, { useEffect } from "react";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Experiences() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experiences");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="experiences" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        My Experience
      </h2>

      <div className="relative max-w-[42rem] mx-auto px-4">
        {/* Đường kẻ dọc giữa (Chỉ hiện trên Desktop) */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-white/10 -translate-x-1/2" />

        {experiencesData.map((item, index) => (
          <div
            key={index}
            className="mb-12 relative flex flex-col sm:flex-row items-center justify-between sm:odd:flex-row-reverse group"
          >
            {/* Icon Dot */}
            <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 -translate-x-1/2 flex items-center justify-center shadow-lg transition group-hover:scale-125">
              <item.icon className="text-sm" />
            </div>

            {/* Nội dung Card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="ml-12 sm:ml-0 w-full sm:w-[45%] bg-gray-100 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition shadow-sm"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {item.date}
              </span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-500 dark:text-white/60 text-sm font-medium italic">
                {item.location}
              </p>
              <p className="mt-3 text-gray-700 dark:text-white/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
