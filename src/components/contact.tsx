"use client";

import SubmitBtn from "./submit-btn";
import useContactForm from "@/email/use-contact-form";

const Contact = () => {
  const {formData, handleChange, handleSubmit, isSending, successMessage} = useContactForm();
  return (
    <section id="contact" className="mb-28 text-center w-lg scroll-mt-24 py-16">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-sm mb-5">
          Please contact me directly at{" "}
          <a className="text-blue-600" href="mailto:hohuynhtrung2003@gmail.com">
            hohuynhtrung2003@gmail.com
          </a>{" "}
          or contact this form.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg p-2 mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-900"
            placeholder="Your email"
            required
            maxLength={500}
          />
          <textarea
            className="w-full h-50 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn isSending={isSending}/>
        </form>
        {successMessage && <p className="mt-3 text-green-600">{successMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
