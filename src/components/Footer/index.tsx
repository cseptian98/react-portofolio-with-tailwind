import TechnologySection from "@/components/Footer/Technologies";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const techList = [
  { alt: "React", src: "/icons/react.svg" },
  { alt: "TypeScript", src: "/icons/typescript.svg" },
  { alt: "Next.js", src: "/icons/next-js.svg" },
  { alt: "Vite", src: "/icons/vitejs.svg" },
  { alt: "Astro", src: "/icons/astrojs.svg" },
  { alt: "TanStack", src: "/icons/tanstack.svg" },
  { alt: "React Native", src: "/icons/react-native.svg" },
  { alt: "Docker", src: "/icons/docker.svg" },
  { alt: "Kubernetes", src: "/icons/kubernetes.svg" },
  { alt: "Azure", src: "/icons/azure.svg" },
  { alt: "Terraform", src: "/icons/terraform.svg" },
  { alt: "GitHub", src: "/icons/github.svg" },
  { alt: "Golang", src: "/icons/golang.svg" },
  { alt: "MongoDB", src: "/icons/mongodb.svg" },
  { alt: "Postman", src: "/icons/postman.svg" },
  { alt: "Datadog", src: "/icons/datadog.svg" },
  { alt: "Claude", src: "/icons/anthropic.svg" },
  { alt: "NotebookLM", src: "/icons/notebooklm.svg" },
  { alt: "Hermes Agent", src: "/icons/hermes-icon.svg" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <TechnologySection technologies={techList} />

      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gray-400/10 dark:border-gray-800/40 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Trademark and year */}
          <div className="text-gray-500 dark:text-gray-400 text-sm font-tomorrow">
            <span>&copy; {currentYear} Chandra Septian. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/cseptian98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cseptian/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light hover:scale-110 transition-all duration-300"
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
