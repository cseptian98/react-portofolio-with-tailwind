"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";

type TimelineItemProps = {
  position: "start" | "end";
  date: string;
  company: string;
  role: string;
  description: string;
  logo?: StaticImageData;
  gradient?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  position,
  date,
  company,
  role,
  description,
  logo,
  gradient = "from-pink-500 via-purple-500 to-sky-500"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const isLeft = position === "start";

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="relative w-full grid grid-cols-1 md:grid-cols-2 items-center mb-12 group">
      
      {/* If item is on the right, render empty column first on desktop */}
      {!isLeft && <div className="hidden md:block" />}

      {/* Card Column */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`relative w-full ${isLeft ? 'md:pr-6 md:pl-0' : 'md:pl-6 md:pr-0'} px-4 sm:px-6`}
      >
        {/* Glow & Border Wrapper */}
        <div className="relative rounded-3xl p-[1.5px] transition-all duration-500 overflow-visible">
          {/* Animated Glow Background behind the card (blurred) */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-10 dark:opacity-20 blur-md group-hover:opacity-40 group-hover:blur-lg transition-all duration-500 animate-glow-flow`} />

          {/* Animated Border Background (sharp outline) */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-glow-flow`} />

          {/* Pointing Tail pointing to center dot */}
          {isLeft ? (
            <>
              {/* Outer tail with gradient */}
              <div className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-r ${gradient} z-0 hidden md:block`} />
              {/* Inner tail with card background */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[1.5px] translate-x-1/2 w-[13px] h-[13px] rotate-45 bg-gray-50 dark:bg-[#121316] z-0 transition-colors duration-500 hidden md:block" />
            </>
          ) : (
            <>
              {/* Outer tail with gradient */}
              <div className={`absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-r ${gradient} z-0 hidden md:block`} />
              {/* Inner tail with card background */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[1.5px] -translate-x-1/2 w-[13px] h-[13px] rotate-45 bg-gray-50 dark:bg-[#121316] z-0 transition-colors duration-500 hidden md:block" />
            </>
          )}

          {/* Card Content Container */}
          <div className="relative bg-gray-50 dark:bg-[#121316] rounded-[22px] p-6 sm:p-8 text-primary-dark dark:text-second-light h-full w-full transition-colors duration-500 z-10">
            {/* Top Date Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider opacity-80 uppercase font-mono px-3 py-1 bg-gray-200/50 dark:bg-[#1c1d24] rounded-full text-primary-dark dark:text-sky-400 border border-gray-300/40 dark:border-gray-800">
                {date}
              </span>
            </div>

            {/* Company Name */}
            <h3 className="text-xl sm:text-2xl font-bold mb-1 font-tomorrow tracking-tight text-primary-dark dark:text-gray-50">
              {company}
            </h3>

            {/* Job Role */}
            <h4 className="text-sm sm:text-base font-semibold text-sky-500 dark:text-sky-400 mb-4 font-tomorrow">
              {role}
            </h4>

            {/* Job Description */}
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-50 leading-relaxed font-sans font-medium">
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* If item is on the left, render empty column second on desktop */}
      {isLeft && <div className="hidden md:block" />}

      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-sky-500 border-4 border-white dark:border-[#121316] shadow-md transition-colors duration-500" />
      </div>

    </div>
  );
};

export default TimelineItem;
