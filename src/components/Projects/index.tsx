"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MdOutlinePhoneAndroid, MdWeb } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  projects: Project[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    id: "web",
    label: "Web",
    icon: <MdWeb size={18} />,
    projects: [
      {
        slug: "dummy-web-project",
        title: "Web Project Alpha",
        description: "A comprehensive web application with real-time features and responsive design. This project highlights modern web development practices including server-side rendering, API integration, and complex state management.",
        image: "https://placehold.co/1280x800/0f172a/7dd3fc?text=Web+Project+Alpha",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      }
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <MdOutlinePhoneAndroid size={18} />,
    projects: [
      {
        slug: "dummy-mobile-project",
        title: "Mobile App Beta",
        description: "Cross-platform mobile application with offline support and push notifications. Engineered for performance and seamless user experience across both iOS and Android platforms.",
        image: "https://placehold.co/1280x800/0f172a/34d399?text=Mobile+App+Beta",
        tags: ["React Native", "Zustand", "Firebase"],
      }
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: <HiOutlineSparkles size={18} />,
    projects: [
      {
        slug: "dummy-ai-project",
        title: "AI Assistant Gamma",
        description: "Smart AI-powered assistant for automating daily tasks with natural language processing. Built with scalable architecture to handle complex AI workloads and continuous learning pipelines.",
        image: "https://placehold.co/1280x800/0f172a/fb923c?text=AI+Assistant+Gamma",
        tags: ["Python", "OpenAI", "LangChain"],
      }
    ],
  },
];

// ─── Sub-Components ────────────────────────────────────────────────────────────

const ProjectFrame = ({ type, proj }: { type: string; proj: Project }) => {
  if (type === "web") {
    return (
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-2xl overflow-hidden border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
        <div className="flex items-center px-4 py-2.5 gap-2 bg-gray-200/80 dark:bg-gray-900/80 border-b border-gray-300 dark:border-gray-800">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 bg-white/60 dark:bg-black/30 rounded-md h-6 mx-2 flex items-center justify-center px-3 shadow-inner">
            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono tracking-wider opacity-80">portfolio.dev/{proj.title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
        </div>
        <div className="relative w-full aspect-video overflow-hidden bg-white dark:bg-black">
          <Image
            src={proj.image}
            alt={proj.title}
            fill
            unoptimized
            className="object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="flex justify-center items-center w-full py-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/80 dark:to-gray-800/80 rounded-t-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border-[8px] border-gray-800 dark:border-[#1a1b1e] overflow-hidden shadow-2xl bg-black transform group-hover:-translate-y-2 transition-transform duration-500">
          {/* Mobile Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 dark:bg-[#1a1b1e] rounded-b-xl w-[45%] mx-auto z-20 flex justify-center items-center">
            <div className="w-10 h-1.5 bg-black/60 rounded-full" />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              unoptimized
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  // AI Type
  return (
    <div className="w-full p-6 bg-[#0a0a0c] rounded-t-2xl border-b border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-gray-700/80 group-hover:border-purple-500/40 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] bg-black">
        <Image
          src={proj.image}
          alt={proj.title}
          fill
          unoptimized
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
        />
        {/* Terminal / Scanning Line Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/10 mix-blend-color" />
      </div>
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-16 text-gray-800 dark:text-second-light py-16 sm:py-20 md:py-24">
      {/* ── Header ── */}
      <motion.div
        ref={headerRef}
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-dark dark:text-second-light mb-6">
          Selected Work
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
          Showcasing a diverse range of projects. Select a category below to see how I build for different platforms and technologies.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex justify-center">
          <div className="inline-flex bg-gray-100/50 dark:bg-second-dark/80 border border-gray-200 dark:border-gray-800 rounded-2xl p-1.5 gap-1 shadow-sm backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2.5 px-6 py-3.5 rounded-[14px] text-sm md:text-base font-semibold
                  transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "text-primary-dark dark:text-second-light shadow-md"
                      : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
                  }
                `}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-[14px] bg-white dark:bg-gray-700/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full"
        >
          {currentTab.projects.map((proj, idx) => (
            <Link href={`/project/${proj.slug}`} key={idx} className="block group">
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col h-full bg-white dark:bg-second-dark border border-gray-200 dark:border-gray-800/60 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-all duration-500 overflow-hidden"
              >
              <ProjectFrame type={activeTab} proj={proj} />
              
              <div className="flex flex-col flex-1 p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-second-light mb-4 tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 flex-1">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
