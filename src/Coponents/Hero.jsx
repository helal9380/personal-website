/** @format */
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bgHer.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="home"
      className="relative overflow-hidden md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className=" flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"></h1>
              <h2 className="md:text-2xl lg:text-6xl text-white leading-snug text-2xl font-bold mb-3">
                <span className="">Hi, I’m Asad.</span>
                <Typewriter
                  loop
                  cursor
                  words={[
                    "a Frontend",
                    "Developer",
                    "Crafting",
                    "Engaging",
                    "and",
                    "Responsive",
                    "Web",
                    "Experiences",
                  ]}
                  cursorStyle="|"
                />{" "}
              </h2>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                I specialize in building intuitive user interfaces using modern
                technologies like React, HTML, CSS, and JavaScript. Let’s turn
                ideas into visually stunning and interactive websites.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <a
                    href="https://links.tailgrids.com/play-download"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color">
                    Book Now
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tailgrids/play-tailwind"
                    target="_blank"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16"></div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                {/* <SvgOne></SvgOne> */}
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
                {/* <SvgTwo></SvgTwo> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
