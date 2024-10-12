/** @format */

// src/components/SkillsSection.jsx
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import { ReactTooltip } from "react-tooltip"; // Correct import based on version

const skillsData = [
  {
    name: "React.js",
    icon: <FaReact className="text-blue-500 w-8 h-8" />,
    level: 80,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#F97316] w-8 h-8" />,
    color: "#F97316",
    level: 90,
    description: "The standard markup language for creating web pages",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-700 w-8 h-8" />,
    level: 85,
    description:
      "A style sheet language used for describing the presentation of a document",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 w-8 h-8" />,
    level: 80,
    description: "A high-level, versatile programming language",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 w-8 h-8" />,
    level: 75,
    description: "A utility-first CSS framework for rapid UI development",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 w-8 h-8" />,
    level: 70,
    description: "A distributed version control system",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 w-8 h-8" />,
    level: 65,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="text-green-500 w-8 h-8" />,
    level: 65,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  },

  // Add more skills as needed
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              {/* Skill Icon with Tooltip */}
              <div
                className="mb-4"
                data-tip={skill.description}>
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}>
                  {skill.icon}
                </motion.div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4">
                <motion.div
                  className="bg-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}></motion.div>
              </div>

              {/* Percentage */}
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
