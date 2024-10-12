/** @format */
import SvgFour from "../SVG/SvgForFooter/SvgFour";
import SvgOne from "../SVG/SvgForFooter/SvgOne";
import SvgThree from "../SVG/SvgForFooter/SvgThree";
import SvgTwo from "../SVG/SvgForFooter/SvgTwo";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-20 lg:pt-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 lg:w-3/12 mb-10 px-4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Asadur Rahman</h1>
              <p className="mb-4 text-gray-400">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <SvgOne />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <SvgTwo />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <SvgThree />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white">
                  <SvgFour />
                </a>
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="w-full sm:w-1/2 lg:w-3/12 mb-10 px-4">
            <h4 className="mb-6 text-lg font-semibold">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Features Links */}
          <div className="w-full sm:w-1/2 lg:w-3/12 mb-10 px-4">
            <h4 className="mb-6 text-lg font-semibold">Features</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary">
                  Refund policy
                </a>
              </li>
            </ul>
          </div>

          {/* Latest Blog Section */}
          <div className="w-full lg:w-3/12 mb-10 px-4">
            <h4 className="mb-6 text-lg font-semibold">Latest Blog</h4>
            <div className="space-y-4">
              <a
                href="blog-details.html"
                className="flex items-center space-x-4">
                <div className="overflow-hidden rounded bg-gray-700 w-20 h-20"></div>
                <span className="text-gray-400 hover:text-white">
                  I think it's really important to design with...
                </span>
              </a>
              <a
                href="blog-details.html"
                className="flex items-center space-x-4">
                <div className="overflow-hidden rounded bg-gray-700 w-20 h-20"></div>
                <span className="text-gray-400 hover:text-white">
                  Recognizing the need is the primary...
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6 bg-gray-700">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Asadur Rahman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
