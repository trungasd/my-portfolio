"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "my-email-service",
        "template_4zbz8zi",
        {
          email: formData.email,
          message: formData.message,
        },
        "6ZTouEzrG4c9DH02m"
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ email: "", message: "" });
        },
        () => {
          setSuccessMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return { formData, handleChange, handleSubmit, isSending, successMessage };
};

export default useContactForm;
