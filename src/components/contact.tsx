"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import SubmitBtn from "./submit-btn";
import useContactForm from "@/email/use-contact-form";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { formData, handleChange, handleSubmit, isSending, successMessage } =
    useContactForm();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-medium capitalize mb-4">Contact Me</h2>

      <p className="text-gray-700 -mt-2 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline font-semibold hover:text-blue-600 transition"
          href="mailto:hohuynhtrung2003@gmail.com"
        >
          hohuynhtrung2003@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
        />

        <div className="flex flex-col items-center gap-2">
          <SubmitBtn isSending={isSending} />

          {successMessage && (
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-600 font-medium mt-2"
            >
              ✅ {successMessage}
            </motion.p>
          )}
        </div>
      </form>
    </motion.section>
  );
}
