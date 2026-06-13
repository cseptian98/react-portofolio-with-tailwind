import Head from "next/head";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ServiceSection } from "@/components/Services";
import { ExperienceTimeline } from "@/components/Timeline";
import ProjectSection from "@/components/Projects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={darkMode ? "dark" : ""}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Head>
        <title>Chandra Septian - Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="dark:bg-primary-dark bg-second-light">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="dark:bg-primary-dark bg-second-light">
        <div className="container-max">
          <HeroSection />
          <ServiceSection />
          <ExperienceTimeline />
          <ProjectSection />
          <Footer />
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
