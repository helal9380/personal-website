/** @format */

// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-800 top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-white dark:text-white">
            Asadur Rahman
          </a>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Action Buttons and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="hidden lg:inline-block px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800 transition duration-300">
              Get in Touch
            </a>
            {/* <DarkModeToggle /> Add the toggle button */}
          </div>

          {/* Mobile Menu Button (Optional) */}
          {/* You can add a hamburger menu here for mobile responsiveness */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
