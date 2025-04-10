import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img2 from "@public/img2.jpg";

const projects = [
  {
    title: "Web Design",
    desc: "I have done more than 500+ web designs with 5 star feedbacks.",
    image: img2,
  },
  {
    title: "App Design",
    desc: "Did so many complex app designs with top brands & startups.",
    image: img2,
  },
  {
    title: "Dashboard Design",
    desc: "Designed many complex dashboards for SaaS and e-commerce platforms.",
    image: img2,
  },
];

export const ClientProjectsCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);

  return (
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl my-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[index].title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={projects[index].image}
                alt={projects[index].title}
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 text-primary-dark dark:text-second-light">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
          >
            ← Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
          >
            Next →
          </button>
        </div>
      </div>
  );
}
