"use client";

import ServiceList from "./ServiceList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <div ref={ref} className="py-16 sm:py-20 md:py-24">
      <div className="flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto font-tomorrow">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full text-center text-primary-dark dark:text-second-light"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Services I am Providing
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I build custom web and mobile applications tailored to your business needs, using modern and scalable technologies.
          </p>
        </motion.div>
        <div className="w-full">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};
