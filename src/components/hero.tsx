"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import portrait from "@/images/chandung.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsArrowRight } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home"); // Giả sử mục đầu tiên là Home
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="my-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mx-auto py-20"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="Trung portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Welcome to my portfolio!</span>
        <br />
        <span className="italic">
          This is where I share my journey into development, including my
          skills, projects, and what I've learned along the way.
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV_Ho_Huynh_Trung_Frontend_Developer.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-[#1877F2] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.facebook.com/huynhtrunq.1711"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.18rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#0068ff] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://zalo.me/0902849348"
            target="_blank"
          >
            <SiZalo />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#0A66C2] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/huynhtrung03/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
