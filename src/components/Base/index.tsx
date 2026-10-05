import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceSection } from "@/components/Services";
import { ExperienceTimeline } from "@/components/Timeline";
import ProjectSection from "@/components/Projects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Chandra Septian - Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <motion.main 
        className="dark:bg-primary-dark bg-second-light pt-24 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <HeroSection />
          <ServiceSection />
          <ExperienceTimeline />
          <ProjectSection />
          <Footer />
        </div>
      </motion.main>
    </div>
  );
};

export default Home;
