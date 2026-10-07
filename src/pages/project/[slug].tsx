import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { motion } from "framer-motion";

// We can define a basic mock data matching our dummy projects
const dummyProjects = {
  "dummy-web-project": {
    title: "Web Project Alpha",
    category: "Web Development",
    description: "A comprehensive web application with real-time features and responsive design. This project highlights modern web development practices including server-side rendering, API integration, and complex state management.",
    image: "https://placehold.co/1280x800/0f172a/7dd3fc?text=Web+Project+Alpha",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    link: "https://example.com/web",
    github: "https://github.com/example/web"
  },
  "dummy-mobile-project": {
    title: "Mobile App Beta",
    category: "Mobile App Development",
    description: "Cross-platform mobile application with offline support and push notifications. Engineered for performance and seamless user experience across both iOS and Android platforms.",
    image: "https://placehold.co/1280x800/0f172a/34d399?text=Mobile+App+Beta",
    tags: ["React Native", "Zustand", "Firebase", "TypeScript"],
    link: "https://example.com/mobile",
    github: "https://github.com/example/mobile"
  },
  "dummy-ai-project": {
    title: "AI Assistant Gamma",
    category: "AI & Machine Learning",
    description: "Smart AI-powered assistant for automating daily tasks with natural language processing. Built with scalable architecture to handle complex AI workloads and continuous learning pipelines.",
    image: "https://placehold.co/1280x800/0f172a/fb923c?text=AI+Assistant+Gamma",
    tags: ["Python", "OpenAI", "LangChain", "FastAPI"],
    link: "https://example.com/ai",
    github: "https://github.com/example/ai"
  }
};

export default function ProjectDetail({ darkMode = false, setDarkMode = () => {} }: { darkMode?: boolean, setDarkMode?: (val: boolean) => void }) {
  const router = useRouter();
  const { slug } = router.query;
  

  // If loading or slug is not yet available
  if (!slug) return null;

  const project = dummyProjects[slug as keyof typeof dummyProjects];

  if (!project) {
    return (
      <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="min-h-screen flex items-center justify-center dark:bg-primary-dark bg-second-light pt-24 text-gray-900 dark:text-white">
          <h1>Project Not Found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Portfolio</title>
      </Head>
      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main className="dark:bg-primary-dark bg-second-light min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-dark dark:text-gray-400 dark:hover:text-second-light mb-8 transition-colors">
            <HiArrowLeft size={20} />
            <span className="font-medium">Back to Projects</span>
          </Link>

          <div className="mb-10 text-center">
            <h4 className="text-sky-500 font-semibold tracking-wider uppercase text-sm mb-3">{project.category}</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark dark:text-second-light mb-6 tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl bg-gray-100 dark:bg-gray-900">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl leading-relaxed">
              {project.description}
            </p>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary-dark dark:text-second-light">Project Overview</h3>
            <p>
              This is a dummy description detailing the architecture, challenges, and solutions implemented during the development of <strong>{project.title}</strong>. It aims to showcase problem-solving skills and technical proficiency in {project.tags.join(", ")}.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-primary-dark text-white dark:bg-second-light dark:text-primary-dark rounded-xl font-bold hover:opacity-90 transition-opacity">
              Live Preview
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              Source Code
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
