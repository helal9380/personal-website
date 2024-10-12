/** @format */

import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      title: "Web Development Course Projects",
      role: "Self-Initiated Projects",
      duration: "Jan 2024 - Present",
      description:
        "Completed several full-stack web development projects as part of my coursework, focusing on frontend development using React, HTML, CSS, and JavaScript. Worked on building responsive websites, and improving UI/UX skills with attention to detail.",
    },
    {
      title: "Freelance Frontend Developer",
      role: "Freelance",
      duration: "Aug 2023 - Present",
      description:
        "Worked on small freelance projects, focusing on creating user-friendly and interactive websites for local businesses. Built modern web interfaces using React and integrated responsive designs for better user experiences.",
    },
    {
      title: "ParmaCare Medicine E-commerce Website",
      role: "Personal Project",
      duration: "Aug 2024",
      description:
        "Developed an e-commerce website using React and MongoDB for managing medicine inventories and sales. The platform allows sellers to manage their products and track sales while offering customers an easy-to-use interface to purchase medicines online.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }} // Starts faded and slides up
              whileInView={{ opacity: 1, y: 0 }} // Animates into view
              transition={{ duration: 0.7, delay: index * 0.2 }} // Adds delay for stagger effect
              viewport={{ once: true }} // Animates only when it comes into view
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{exp.role}</strong> | {exp.duration}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
