"use client";

import TimelineItem from "./TimelineItem";
import Image from "next/image";
import { arkamaya, dicoding, ut } from "@public/images";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ExperienceTimeline = () => {
  const headerRef = useRef(null);
  const logosRef = useRef(null);
  const timelineRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isLogosInView = useInView(logosRef, { once: true, amount: 0.5 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative font-tomorrow overflow-hidden py-12">
      <motion.h2
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl text-center text-primary-dark dark:text-second-light font-bold my-12 sm:my-16"
      >
        Work Experiences
      </motion.h2>

      {/* Logos */}
      <motion.div
        ref={logosRef}
        variants={containerVariants}
        initial="hidden"
        animate={isLogosInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center items-center gap-12 rounded-2xl bg-gray-50 dark:bg-gray-200 border border-gray-200 dark:border-gray-800/40 py-8 px-6 sm:px-12 my-8 transition-colors duration-500 max-w-6xl mx-auto"
      >
        {[
          { alt: "united-tractors", src: ut, width: 220 },
          { alt: "dicoding", src: dicoding, width: 200 },
          { alt: "arkamaya", src: arkamaya, width: 200 },
        ].map((logo, index) => (
          <motion.div key={index} variants={logoVariants} whileHover={{ scale: 1.05 }}>
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={100}
              className="object-contain dark:brightness-110 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Items */}
      <div ref={timelineRef} className="relative z-10 px-4 sm:px-6 md:px-12 my-12 max-w-7xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-[3px] bg-gray-200 dark:bg-gray-800/60 rounded-full hidden md:block z-0" />
        <div className="relative space-y-16 md:space-y-24">
          <TimelineItem
            position="start"
            date="Jan 2024 - Present"
            company="PT United Tractors Tbk"
            role="Lead Software Engineer"
            description="Led the development of a web-based fuel analytics platform that provides detailed insights into fuel consumption, refuel quantity, and time-speed intervention, enabling data-driven optimizations."
            logo={ut}
            gradient="from-[#ff4b82] via-[#ff6b5c] to-[#ff8f3d]"
          />
          <TimelineItem
            position="end"
            date="March 2021 - Dec 2023"
            company="PT United Tractors Tbk"
            role="Mobile Developer"
            description="Developed and implemented new features in mobile applications using the React Native framework, enhancing maintenance operations for both United Tractors and its customers."
            logo={ut}
            gradient="from-[#3bcfeb] via-[#1e9cff] to-[#007aff]"
          />
          <TimelineItem
            position="start"
            date="Sep 2020 - Mar 2021"
            company="Dicoding Indonesia"
            role="Code Reviewer"
            description="Assessing each submission by class participants on the Front-End Web Developer learning path through the Dicoding course platform. And providing advice for improving coding performance and implementing best practices."
            logo={dicoding}
            gradient="from-[#8e2de2] via-[#6a15e3] to-[#4a00e0]"
          />
          <TimelineItem
            position="end"
            date="Aug 2019 - Sep 2019"
            company="PT Arkamaya"
            role="Web Programmer"
            description="Created a company visitor system with an Intern Team, using PHP and CodeIgniter. Also actively contributed to the development of ongoing projects at PT. Arkamaya, assisting in feature development, and optimizing system performance."
            logo={arkamaya}
            gradient="from-[#f107a3] via-[#b51cf7] to-[#7b2ff7]"
          />
        </div>
      </div>
    </section>
  );
};
