"use client";

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Technology {
  alt: string;
  src: StaticImageData;
}

interface Props {
  title?: string;
  technologies: Technology[];
}

export default function TechnologySection({
  title = 'Technologies',
  technologies,
}: Props) {
  // Display exactly 9 items (3x3 grid)
  const [displayedTechs, setDisplayedTechs] = useState<Technology[]>(
    technologies.slice(0, 9)
  );

  useEffect(() => {
    // Only run if we have more than 9 technologies to rotate
    if (technologies.length <= 9) return;

    const interval = setInterval(() => {
      setDisplayedTechs(prev => {
        // Pick a random position to replace (0-8)
        const randomPosition = Math.floor(Math.random() * 9);
        
        // Get a random technology that's not currently displayed
        const availableTechs = technologies.filter(
          tech => !prev.some(displayed => displayed.alt === tech.alt)
        );
        
        if (availableTechs.length === 0) return prev;
        
        const randomTech = availableTechs[Math.floor(Math.random() * availableTechs.length)];
        
        // Replace the technology at the random position
        const newDisplayed = [...prev];
        newDisplayed[randomPosition] = randomTech;
        
        return newDisplayed;
      });
    }, 2000); // Change one icon every 2 seconds

    return () => clearInterval(interval);
  }, [technologies]);

  return (
    <>
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold font-tomorrow text-primary-dark dark:text-second-light">
          {title}
        </h3>
      </div>

      {/* Animated Logo Wall - 3x3 Grid */}
      <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-2xl mx-auto px-4 py-8">
        {displayedTechs.map((tech, index) => (
          <div key={index} className="relative group flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={tech.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-lg shadow-lg whitespace-nowrap font-medium">
                    {tech.alt}
                  </div>
                  {/* Tooltip tail */}
                  <div className="w-2 h-2 bg-zinc-800 rotate-45 mt-[-4px]"></div>
                </div>

                {/* Logo with hover effect */}
                <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  <Image 
                    alt={tech.alt} 
                    src={tech.src} 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
