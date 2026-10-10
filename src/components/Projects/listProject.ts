import React from "react";
import { MdOutlinePhoneAndroid, MdWeb } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
};

export type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  projects: Project[];
};

export const tabs: Tab[] = [
  {
    id: "web",
    label: "Web",
    icon: React.createElement(MdWeb, { size: 18 }),
    projects: [
      {
        slug: "advanced-analytics-dashboard",
        title: "Advanced Analytics Dashboard",
        description:
          "This project is a comprehensive web application featuring responsive design and real-time capabilities. It serves as a data orchestration platform that enables users to upload and validate complex manual datasets. By highlighting modern web development practices—including API integration, server-side rendering, and complex state management—the dashboard delivers a seamless and highly interactive user experience.",
        image:
          "https://placehold.co/1280x800/0f172a/7dd3fc?text=Advanced+Analytics+Dashboard",
        tags: ["React", "TypeScript", "Tailwind CSS", "SPA"],
      },
      {
        slug: "customer-operation-improvement-platform",
        title: "Customer Operation Improvement Platform",
        description:
          "A comprehensive full-stack solution designed to digitize and streamline field operator workflows. By transitioning from manual paper checksheets to a synchronized mobile and web ecosystem, the platform ensures high data integrity and provides stakeholders with immediate, actionable visibility into operational performance.",
        image:
          "https://placehold.co/1280x800/0f172a/7dd3fc?text=Customer+Operation+Improvement+Platform",
        tags: ["React", "TypeScript", "Tailwind CSS", "SPA"],
      },
      {
        slug: "user-management",
        title: "User Management",
        description:
          "A corporate-wide administrative interface serving as the central core portal for all enterprise applications. The platform streamlines the administration of global user directories, permissions, and infrastructure services to maintain secure, cohesive, and scalable access control across the organization.",
        image:
          "https://placehold.co/1280x800/0f172a/7dd3fc?text=User+Management",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        slug: "personal-shopping-service",
        title: "Personal Shopping Service",
        description:
          "A comprehensive web application with real-time features and responsive design. This project highlights modern web development practices including server-side rendering, API integration, and complex state management.",
        image:
          "https://placehold.co/1280x800/0f172a/7dd3fc?text=Personal+Shopping+Service",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        slug: "company-visitor-management-system",
        title: "Company Visitor Management System",
        description:
          "A centralized web application developed to digitize and manage corporate guest logs. By transitioning from traditional, manual paper-based registries to a secure digital ecosystem, the platform significantly streamlines the visitor check-in experience and enhances overall front-desk security tracking.",
        image:
          "https://placehold.co/1280x800/0f172a/7dd3fc?text=Company+Visitor+Management+System",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: React.createElement(MdOutlinePhoneAndroid, { size: 18 }),
    projects: [
      {
        slug: "ut-coip-mobile",
        title: "UT COIP Mobile",
        description:
          "A mobile application engineered to deliver a high-performance, seamless user experience. Serving as the dedicated field-facing component of the Customer Operation Improvement Platform, the application replaces manual paper checksheets with a digitized workflow for on-site job creation and data entry. It is designed with robust offline support and integrated push notifications to ensure uninterrupted operations and real-time communication for field personnel.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=UT+COIP+Mobile",
        tags: ["React Native", "Zustand", "Realm", "Tanstack", "Re.pack"],
      },
      {
        slug: "ut-portal-mobile",
        title: "UT Portal Mobile",
        description:
          "An internal-facing mobile application engineered exclusively for United Tractors employees. The app serves as a secure, centralized corporate hub designed to streamline internal communications, distribute company-wide announcements, and provide staff with direct access to internal resources and operational data.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=UT+Portal+Mobile",
        tags: ["React Native", "Zustand", "Realm", "Re.pack"],
      },
      {
        slug: "ut-connect-mobile",
        title: "UT Connect Mobile",
        description:
          "A dedicated customer-facing mobile application designed as the primary digital touchpoint for United Tractors clients. The platform provides a centralized, accessible hub for customers to seamlessly engage with the company, access essential services, and stay updated on corporate information.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=UT+Connect+Mobile",
        tags: ["React Native", "Zustand", "Re.pack", "Realm", "Firebase"],
      },
      {
        slug: "olympiad",
        title: "Olympiad Apps",
        description:
          "Developed a centralized event management platform designed to drive corporate engagement by automating the coordination of internal company sports tournaments. I developed features for dynamic team formation and registration, and integrated the Strava API via webhooks and OAuth authentication to automatically sync employees' fitness activities, feeding real-time data into a high-concurrency team and individual leaderboard system.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=Olympiad",
        tags: ["React Native", "Zustand", "Tanstack"],
      },
      {
        slug: "lite-module-maintenance-management",
        title: "Lite Module Maintenance Management",
        description:
          "A high-availability mobile and web solution designed to streamline heavy equipment operations and maintenance workflows. The platform serves as a comprehensive management tool for tracking daily equipment breakdowns, managing preventative maintenance planning, and overseeing the execution of periodic services to ensure maximum operational uptime.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=Lite+Module+Maintenance+Management",
        tags: ["React Native", "Zustand", "Tanstack"],
      },
      {
        slug: "data-capture-application",
        title: "Data Capture Application",
        description:
          "An offline-first mobile application tailored specifically for heavy equipment mechanics operating in remote mining environments. The application ensures uninterrupted operational continuity by allowing mechanics to perform critical data entry and complete complex safety and maintenance checksheets entirely without network connectivity.",
        image:
          "https://placehold.co/1280x800/0f172a/34d399?text=Data+Capture+Application",
        tags: ["React Native", "Redux", "Realm"],
      },
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: React.createElement(HiOutlineSparkles, { size: 18 }),
    projects: [
      {
        slug: "dummy-ai-project",
        title: "AI Assistant Gamma",
        description:
          "Smart AI-powered assistant for automating daily tasks with natural language processing. Built with scalable architecture to handle complex AI workloads and continuous learning pipelines.",
        image:
          "https://placehold.co/1280x800/0f172a/fb923c?text=AI+Assistant+Gamma",
        tags: ["Python", "OpenAI", "LangChain"],
      },
    ],
  },
];

export const listProjects: Project[] = tabs.flatMap((tab) => tab.projects);

export default tabs;
