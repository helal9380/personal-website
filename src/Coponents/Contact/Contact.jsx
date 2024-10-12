/** @format */

// src/components/ContactSection.jsx

/** @format */

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_pksqpfu", // Replace with your EmailJS service ID
        "template_83ouu9s", // Replace with your EmailJS template ID
        formData,
        "ZLkdu3lxe8CsfFi6F" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setSubmitStatus("success");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          setSubmitStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <div className="flex max-w-screen-lg mx-auto flex-col lg:flex-row lg:space-x-12">
          {/* Contact Information */}

          <div className="w-full shadow-lg p-4 border-gray-300 lg:w-3/4 mb-12 lg:mb-0">
            {/* About Me Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate web developer with a focus on creating dynamic
                and responsive web applications. I have experience in various
                technologies, including HTML, CSS, JavaScript, and React. I love
                solving problems and continuously learning new skills to improve
                my craft.
              </p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-blue-500 w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  asadurrahman9380@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-green-500 w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">01875639815</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-red-500 w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chattagram, Bangladesh
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/md-asadur-rahman-85a4aa278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/helal9380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.form
              onSubmit={sendEmail}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
              <div className="mb-4">
                <label
                  htmlFor="from_name"
                  className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="from_email"
                  className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your message here..."></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md text-white ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700"
                } transition duration-300`}
                disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="mt-4 text-green-500">
                  Your message has been sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-500">
                  Something went wrong. Please try again later.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
