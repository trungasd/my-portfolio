"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { aboutData } from "@/lib/data";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>

      <div className="space-y-4 text-gray-700 dark:text-white/70">
        {aboutData.map((paragraph, index) => (
          <p key={index} className="mb-3">
            {/* Nếu paragraph chứa các từ khóa quan trọng, bạn có thể bọc chúng trong thẻ <b> ở file data */}
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-6 italic text-gray-600 dark:text-white/50 text-sm">
        "Continuously learn to master new knowledge."
      </p>
    </motion.section>
  );
}
