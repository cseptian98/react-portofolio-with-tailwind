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
  const [darkMode, setDarkMode] = useState(true);
  return (
    <motion.div
      className={darkMode ? "dark" : ""}
      initial={{ y: "100vw" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 0.4 }}
    >
      <Head>
        <title>Chandra Septian - Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="dark:bg-primary-dark bg-second-light">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="dark:bg-primary-dark bg-second-light">
        <HeroSection />
        <ServiceSection />
        <ProjectSection />
        <ExperienceTimeline />
        <Footer />
      </main>
    </motion.div>
  );
};

export default Home;
