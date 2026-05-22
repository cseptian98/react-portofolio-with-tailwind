"use client";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textOptions = [
    "Chandra Septian",
    "a Lead Software Engineer",
    "a Full Stack Developer",
    "an AI Enthusiast",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const startTyping = () => {
      currentIndex = 0;
      setDisplayedText("");
      const currentText = textOptions[currentTextIndex];

      typingInterval = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          resetTimeout = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
            startTyping();
          }, 5000);
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, [currentTextIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center justify-center py-16 sm:py-20 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="w-full flex flex-col items-center text-center">
            <h2 className="font-tomorrow text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary-dark dark:text-second-light leading-tight">
              Hello! I'm <span className="typing-text text-primary-light">{displayedText}</span>
              <span className="cursor-blink">|</span>
            </h2>
            <style jsx>{`
              .cursor-blink {
                animation: blink 1s infinite;
              }
              @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
              }
            `}</style>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex items-center justify-center">
            <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-primary-dark dark:text-second-light text-center leading-relaxed max-w-4xl">
              A Software Engineer with 7+ years of experience in building and scaling software solutions, with the past 2 years focused on leading teams and driving technical strategy. Working well in both individual and team,
              I have excellent self-awareness and communication skills. I enjoy solving complex problems, improving system performance, and helping engineers grow through mentorship and collaboration.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-12 sm:gap-16 md:gap-24 pt-8 text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-second-light"
          >
            {[
              { Icon: AiFillGithub, url: "https://www.github.com", index: 0 },
              { Icon: AiFillLinkedin, url: "https://www.linkedin.com/in/cseptian/", index: 1 },
              { Icon: AiFillInstagram, url: "https://www.instagram.com", index: 2 },
            ].map(({ Icon, url, index }) => (
              <motion.div
                key={index}
                custom={index}
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  className="cursor-pointer transition-colors duration-200 hover:text-primary-light"
                  onClick={() => window.open(url, "_blank")}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
