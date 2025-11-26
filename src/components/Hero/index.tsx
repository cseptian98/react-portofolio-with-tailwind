"use client";

import Image from "next/image";
import { avatar } from "@public/images";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Array of texts to cycle through
  const textOptions = [
    "Chandra Septian",
    "a Lead Software Engineer",
    "a Full Stack Developer",
    "a Tech Enthusiast"
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
          // Wait 5 seconds before restarting with next text
          resetTimeout = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
            startTyping();
          }, 5000);
        }
      }, 100); // 100ms delay between each character
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, [currentTextIndex]);

  return (
    <section>
      <div className="px-4 sm:px-6 md:px-12 flex flex-col gap-4 mb-10">
        {/* Row 1 - Greeting */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-tomorrow text-xl sm:text-2xl md:text-4xl lg:text-5xl my-4 text-primary-dark dark:text-second-light">
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
        </div>

        {/* Row 2 - Description */}
        <div className="w-full flex items-center justify-center">
          <p className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl text-primary-dark dark:text-second-light text-center">
            A young competent and professional software engineer with 6+ years experience on software development.
            Well-organized, hard-worker, and willing to learn more. Working well in both individual and team,
            with excellent self-awareness and communication skills.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-24 py-4 text-3xl sm:text-4xl md:text-5xl text-primary-dark dark:text-second-light">
        <AiFillGithub
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => window.open("https://www.github.com", "_blank")}
        />
        <AiFillLinkedin
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() =>
            window.open("https://www.linkedin.com/in/cseptian/", "_blank")
          }
        />
        <AiFillInstagram
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => window.open("https://www.instagram.com", "_blank")}
        />
      </div>
    </section>
  )
}

export default HeroSection;
