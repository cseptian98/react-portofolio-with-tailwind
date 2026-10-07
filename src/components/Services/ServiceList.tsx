"use client";

import React, { useRef } from "react";
import { FaUsers, FaChartLine, FaLightbulb, FaCode, FaMobile, FaServer } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";

type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Building modern, responsive web applications using the latest technologies and best practices for optimal performance and user experience."
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description: "Creating native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices."
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Designing and implementing robust server-side solutions, APIs, and database architectures that scale with your business needs."
  },
  {
    icon: FaUsers,
    title: "Team Leadership",
    description: "Leading development teams with clear vision, mentoring developers, and fostering collaborative environments that drive innovation."
  },
  {
    icon: FaChartLine,
    title: "Technical Consulting",
    description: "Providing expert-level guidance on architecture decisions, technology stack selection, and optimization strategies for your projects."
  },
  {
    icon: FaLightbulb,
    title: "Solution Architecture",
    description: "Designing scalable and maintainable system architectures that align with business goals and technical requirements."
  }
];

const ServiceList: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="group relative flex flex-col bg-white dark:bg-second-dark border border-gray-200 dark:border-gray-800/60 shadow-sm hover:shadow-xl rounded-2xl p-8 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-sky-500/10 dark:from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-gray-50 dark:bg-[#252528] rounded-2xl mb-6 shadow-sm border border-gray-100 dark:border-gray-700/50 group-hover:rotate-3 transition-transform duration-300 text-sky-500 dark:text-sky-400 text-2xl">
              <Icon />
            </div>
            <h3 className="relative z-10 font-bold text-xl sm:text-2xl mb-3 text-primary-dark dark:text-second-light tracking-tight">{service.title}</h3>
            <p className="relative z-10 text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{service.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceList;
