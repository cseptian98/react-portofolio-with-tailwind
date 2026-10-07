import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-second-light dark:bg-primary-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left transition-colors duration-300">
          {/* Trademark and year */}
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            <span>&copy; {currentYear} Chandra Septian. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/cseptian98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light dark:hover:text-second-light hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cseptian/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light dark:hover:text-second-light hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light dark:hover:text-second-light hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
