import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-16 bg-black/80 backdrop-blur text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} &nbsp;
          <span className="font-bold">Noha</span>. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
