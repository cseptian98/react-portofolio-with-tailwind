"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MdOutlinePhoneAndroid, MdWeb } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
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
        title: "TaskFlow",
        description:
          "Collaborative project management platform with real-time sync, Gantt charts, and team analytics built with Next.js.",
        image: "https://placehold.co/1280x800/0f172a/7dd3fc?text=TaskFlow+—+Web+App",
        tags: ["Next.js", "TypeScript", "TanStack Query", "Postgres"],
      },
      {
        title: "StoreBuilder",
        description:
          "No-code e-commerce builder with drag-and-drop interface, live preview, and one-click deployment powered by Vite + React.",
        image: "https://placehold.co/1280x800/0f172a/34d399?text=StoreBuilder+—+Web+App",
        tags: ["React", "Vite", "Node.js", "DnD Kit"],
      },
      {
        title: "AdminHub",
        description:
          "Multi-tenant admin panel with RBAC, real-time audit logging, and an API gateway backed by Azure and .NET.",
        image: "https://placehold.co/1280x800/0f172a/a78bfa?text=AdminHub+—+Web+App",
        tags: ["React", ".NET", "Azure", "Postgres"],
      },
      {
        title: "SalesInsight",
        description:
          "Sales funnel and KPI tracking dashboard for enterprise teams with CRM integrations and forecasting models.",
        image: "https://placehold.co/1280x800/0f172a/fb923c?text=SalesInsight+—+Dashboard",
        tags: ["React", "Vite", "TypeScript", "PostgreSQL"],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <MdOutlinePhoneAndroid size={18} />,
    projects: [
      {
        title: "SmartShop",
        description:
          "Cross-platform e-commerce mobile app with real-time inventory tracking, push notifications, and seamless checkout.",
        image: "https://placehold.co/1280x800/0f172a/7dd3fc?text=SmartShop+—+Mobile+App",
        tags: ["React Native", "Redux", "TypeScript", "Stripe"],
      },
      {
        title: "HealthTrack",
        description:
          "Mobile health monitoring with wearable device integration, real-time vitals dashboard, and AI-powered insights.",
        image: "https://placehold.co/1280x800/0f172a/34d399?text=HealthTrack+—+Mobile+App",
        tags: ["React Native", "Bluetooth API", "GraphQL"],
      },
      {
        title: "TravelMate",
        description:
          "Trip planning app with offline maps, collaborative itinerary builder, and smart destination recommendations.",
        image: "https://placehold.co/1280x800/0f172a/fb923c?text=TravelMate+—+Mobile+App",
        tags: ["React Native", "Maps API", "Redux"],
      },
      {
        title: "PayFlow",
        description:
          "Digital wallet and payment solution with biometric authentication, transaction history, and P2P transfers.",
        image: "https://placehold.co/1280x800/0f172a/a78bfa?text=PayFlow+—+Mobile+App",
        tags: ["React Native", "Biometrics", "Stripe"],
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: <HiOutlineSparkles size={18} />,
    projects: [
      {
        title: "IntelliDocs",
        description:
          "AI-powered document assistant that summarizes, answers questions, and extracts structured data from any PDF or file.",
        image: "https://placehold.co/1280x800/0f172a/7dd3fc?text=IntelliDocs+—+AI+App",
        tags: ["Next.js", "OpenAI", "LangChain", "Postgres"],
      },
      {
        title: "CodeReview AI",
        description:
          "Automated code review tool powered by LLMs, providing actionable feedback, bug detection, and style suggestions.",
        image: "https://placehold.co/1280x800/0f172a/34d399?text=CodeReview+—+AI+Tool",
        tags: ["Next.js", "OpenAI API", "TypeScript", "GitHub API"],
      },
      {
        title: "ChatOps Bot",
        description:
          "Intelligent DevOps chatbot integrated with Slack that monitors pipelines, auto-resolves incidents, and reports KPIs.",
        image: "https://placehold.co/1280x800/0f172a/fb923c?text=ChatOps+—+AI+Bot",
        tags: ["Node.js", "OpenAI", "Datadog", "Docker"],
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const headerRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const activeProject = currentTab.projects[activeProjectIndex];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveProjectIndex(0);
  };

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

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-16 font-tomorrow text-gray-800 dark:text-second-light py-16 sm:py-20 md:py-24">
      {/* ── Header ── */}
      <motion.div
        ref={headerRef}
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        className="text-center mb-12 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark dark:text-second-light mb-4">
          My Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          A selection of projects spanning mobile, web, and AI — click a category to explore.
        </p>

        {/* ── In-Development Notice ── */}
        <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-amber-500/40 bg-amber-400/10 dark:bg-amber-400/5 dark:border-amber-400/30 text-amber-700 dark:text-amber-300 text-sm font-medium">
          <span className="text-base">🚧</span>
          <span>
            This section is currently{" "}
            <span className="font-semibold text-amber-800 dark:text-amber-200">under development</span>
            {" "}— real projects will be listed here soon.
          </span>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="inline-flex bg-gray-100/5 dark:bg-second-dark border border-gray-400/10 rounded-2xl p-1.5 gap-1 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? "text-white shadow-md"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-second-light"
                  }
                `}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-xl bg-sky-500"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
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

        {/* ── Browser Chrome Frame ── */}
        <div className="rounded-2xl overflow-hidden border border-gray-400/10 shadow-2xl">
          {/* Title Bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-200/30 dark:bg-[#151922] border-b border-gray-400/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="flex-1 flex items-center bg-gray-100/10 dark:bg-[#0d111a] rounded-md px-3 py-1 gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-gray-400 flex-shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${activeTab}-${activeProjectIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-gray-500 dark:text-gray-400 truncate font-mono"
                >
                  portfolio.dev/{activeTab}/{activeProject.title.toLowerCase().replace(/\s+/g, "-")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Image Preview */}
          <div className="relative w-full aspect-video overflow-hidden bg-[#0d111a]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeProjectIndex}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* ── Watermark ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className="rotate-[-35deg] select-none text-3xl md:text-5xl font-black tracking-widest uppercase px-6 py-3 rounded-2xl"
                style={{
                  color: "rgba(251,191,36,0.18)",
                  border: "3px solid rgba(251,191,36,0.15)",
                  background: "rgba(0,0,0,0.25)",
                  textShadow: "0 2px 16px rgba(251,191,36,0.18)",
                  letterSpacing: "0.25em",
                }}
              >
                On Develop
              </span>
            </div>
          </div>
        </div>

        {/* ── Project Info + Switcher ── */}
        <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
          {/* Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeProjectIndex}-info`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 min-w-0 w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary-dark dark:text-second-light mb-2">
                {activeProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {activeProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-500/10 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 dark:border-sky-500/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Switcher */}
          {currentTab.projects.length > 1 && (
            <div className="w-full sm:w-auto flex flex-row sm:flex-col gap-2 overflow-x-auto sm:overflow-visible flex-shrink-0 sm:min-w-[180px] pb-2 sm:pb-0">
              <p className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest mb-1 pl-1">
                Projects
              </p>
              {currentTab.projects.map((proj, idx) => (
                <button
                  key={proj.title}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium
                    transition-all duration-200 whitespace-nowrap flex-shrink-0 text-left
                    ${
                      activeProjectIndex === idx
                        ? "bg-gray-900/10 dark:bg-gray-100/10 text-gray-900 dark:text-second-light border border-gray-400/30 dark:border-gray-400/20"
                        : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-900/5 dark:hover:bg-gray-100/5 border border-transparent"
                    }
                  `}
                >
                  {activeProjectIndex === idx && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  )}
                  {proj.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
