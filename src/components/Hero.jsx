import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-b from-black via-gray-900 to-black">
      <div
        className={`mx-auto flex flex-col justify-between gap-2 overflow-hidden pt-32 sm:pt-20  ${styles.paddingX} lg:max-w-7xl lg:flex-row lg:gap-10`}
      >
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-xl md:text-2xl font-medium text-white-100">
            Hi there!👋, I'm
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold  text-[#915EFF] leading-tight mt-2 sm:leading-tight md:leading-tight lg:leading-tight">
            Noha Abdelghafar
          </h1>
          <TypeAnimation
            sequence={[
              "I develop 3D visuals",
              2000,
              "User Interfaces",
              2000,
              "Web Applications",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            // className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mt-4"
            className={`${styles.heroSubText} mt-4 `}
          />
          <p className="mt-4 text-base md:text-2xl text-white-100 pt-5">
            A self-motivated Frontend Web Developer, lifelong learner
          </p>
          <p className="text-base md:text-xl text-white-100 mt-4">
            🚀 Currently specializing in Frontend (React / Next.js)
          </p>
          <p className="text-base md:text-xl text-white-100 mt-4">
            🛠️ Developing dynamic and responsive applications
          </p>
          {/* Social Icons and Resume Button */}
          <div className="flex justify-start pt-5 space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-white hover:text-[#915EFF] transition duration-300 transform hover:scale-125"
              aria-label="Email"
            >
              <FaEnvelope size={30} />
            </a>
            {/* Resume Button with Icon and Text */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-[#915EFF] transition duration-300 transform hover:scale-105 border border-[#915EFF] px-4 py-2 rounded-md"
              aria-label="Resume"
            >
              <FaDownload size={20} className="mr-2" />
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: 3D Model */}
        <div className="w-full lg:w-1/3 flex justify-center items-center h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-auto">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
