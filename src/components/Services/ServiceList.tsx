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
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative p-8 rounded-3xl dark:text-second-light text-primary-dark bg-white/60 dark:bg-[#121316]/40 border border-gray-200/50 dark:border-gray-800/40 shadow-sm hover:shadow-xl dark:hover:border-primary-light/40 hover:border-primary-light/40 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            {/* Subtle glow hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <Icon className="text-4xl mb-4 text-primary-dark dark:text-second-light group-hover:text-primary-light transition-colors duration-300" />
            <h3 className="font-tomorrow font-bold text-xl mb-3">{service.title}</h3>
            <p className="font-mono text-sm leading-relaxed opacity-80">{service.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceList;
