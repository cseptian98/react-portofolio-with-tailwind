'use client'

import Image, {StaticImageData} from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect} from 'react'

interface Technology {
  alt: string
  src: StaticImageData | string
}

interface Props {
  title?: string
  technologies: Technology[]
}

export default function TechnologySection({
  title = 'Technologies',
  technologies,
}: Props) {
  // Display exactly 12 items (4x3 grid)
  const [displayedTechs, setDisplayedTechs] = useState<Technology[]>(
    technologies.slice(0, 12),
  )

  useEffect(() => {
    if (technologies.length <= 12) return

    const interval = setInterval(() => {
      setDisplayedTechs(prev => {
        // Pick a random position to replace (0-11)
        const randomPosition = Math.floor(Math.random() * 12)

        // Get a random technology that's not currently displayed
        const availableTechs = technologies.filter(
          tech => !prev.some(displayed => displayed.alt === tech.alt),
        )

        if (availableTechs.length === 0) return prev

        const randomTech =
          availableTechs[Math.floor(Math.random() * availableTechs.length)]

        // Replace the technology at the random position
        const newDisplayed = [...prev]
        newDisplayed[randomPosition] = randomTech

        return newDisplayed
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [technologies])

  return (
    <div className="my-12 sm:my-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Title - Top Center */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-tomorrow text-primary-dark dark:text-second-light">
            {title}
          </h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            These are the tools and technologies I work with daily — from
            frontend frameworks to cloud infrastructure and DevOps.
            Rather than just listing skills, this showcases the
            ecosystem I use to build, deploy, and maintain modern applications.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="bg-gray-50 dark:bg-gray-200 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-4 gap-8 md:gap-10">
            {displayedTechs.map((tech, index) => (
              <div
                key={index}
                className="relative group flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tech.alt}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.8}}
                    transition={{duration: 0.4}}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gray-700 text-second-light text-xs px-3 py-1 rounded-lg shadow-lg whitespace-nowrap font-medium">
                        {tech.alt}
                      </div>
                      {/* Tooltip tail */}
                      <div className="w-2 h-2 bg-gray-700 rotate-45 mt-[-4px]"></div>
                    </div>

                    {/* Logo with hover effect */}
                    <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
                      <Image
                        alt={tech.alt}
                        src={tech.src}
                        width={80}
                        height={80}
                        className="object-contain w-[80px] h-[80px]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
