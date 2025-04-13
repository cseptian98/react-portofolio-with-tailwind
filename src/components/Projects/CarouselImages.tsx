import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img2 from "@public/img2.jpg";

const projects = [
  {
    title: "Web Design",
    image: img2,
  },
  {
    title: "App Design",
    image: img2,
  },
  {
    title: "Dashboard Design",
    image: img2,
  },
];

export const ClientProjectsCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl my-12 md:my-16">
        {/* Image */}
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

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-700 p-2 rounded-full shadow transition"
        >
          ←
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-700 p-2 rounded-full shadow transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
