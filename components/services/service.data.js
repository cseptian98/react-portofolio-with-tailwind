import devops from "../../public/maintenance.webp";
import mobdev from "../../public/mobdev.webp"
import webdev from "../../public/webdev.webp"

export const listServices = [
  {
    description:
      "Creating mobile applications with several different frameworks.",
    framework: ["React Native", "Flutter", "Kotlin"],
    id: 1,
    image: mobdev,
    title: "Mobile Developer",
  },
  {
    description:
      "Creating a responsive and attractive website",
    framework: ["React", "PWA", "Tailwind"],
    id: 2,
    image: webdev,
    title: "Web Developer",
  },
  {
    description:
      "Configuring pipelines for CI/CD processes",
    framework: ["Azure", "Docker"],
    id: 3,
    image: devops,
    title: "DevOps",
  },
];
