/** @format */

// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import img from "../assets/helal.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Profile Image with Animation */}
          <motion.div
            className="lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <img
              src={img}
              alt="Asad's Profile"
              className="rounded-full w-96 h-96 object-cover shadow-lg"
            />
          </motion.div>

          {/* About Content with Animation */}
          <motion.div
            className="lg:w-2/3 lg:pl-12 text-gray-800 dark:text-gray-100 transition-colors duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              Hi! I'm Asad, a passionate Frontend Developer based in [Your
              Location]. I specialize in building responsive and user-friendly
              web applications using modern technologies like React, HTML, CSS,
              and JavaScript.
            </p>
            <p className="text-lg mb-6">
              With a solid foundation in web development and a keen eye for
              design, I strive to create seamless and engaging user experiences.
              I have completed a comprehensive web development course and have
              worked on several projects, including the ParmaCare medicine
              E-commerce website and a Bangladeshi tourism website. I'm always
              eager to learn new technologies and take on challenging projects
              to enhance my skills and contribute effectively to team goals.
            </p>

            {/* Download Resume Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1rx30VjNRMqWMLR-AOhWviwiuSez29ial/view?usp=sharing" // Place resume.pdf in the public folder
                download
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md shadow hover:bg-gray-700 transition duration-300">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
