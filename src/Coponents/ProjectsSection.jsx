/** @format */

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projectImage2 from "../assets/image-1224x768 (1).jpg";
import projectImage from "../assets/image-1224x768 (4).jpg";
import projectImage3 from "../assets/project3png.png";
const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "ParmaCare E-commerce",
      description:
        "An online platform for purchasing medicines with secure payment integration.",
      image: `${projectImage2}`,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://scintillating-pony-6c106b.netlify.app/", // Replace with actual URL
      github: "https://github.com/helal9380/parmaCare", // Replace with actual URL
    },
    {
      id: 2,
      title: "Bangladesh Tourism Website",
      description:
        "A comprehensive website showcasing tourist destinations in Bangladesh.",
      image: `${projectImage}`,
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveDemo: "https://tembergem.firebaseapp.com/",
      github: "https://github.com/helal9380/timber-client",
    },
    {
      id: 3,
      title: "Bangladesh Tourism Website",
      description:
        "A comprehensive website showcasing tourist destinations in Bangladesh.",
      image: `${projectImage3}`,
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveDemo: "https://helal9380.github.io/paul/",
      github: "https://github.com/helal9380/paul",
    },
    // Add more projects as needed
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}>
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200 px-2 py-1 rounded mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 flex items-center">
                      <FaExternalLinkAlt className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white flex items-center">
                      <FaGithub className="mr-1" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
