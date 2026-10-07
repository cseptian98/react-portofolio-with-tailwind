import Head from "next/head";
import { motion } from "framer-motion";
import { ServiceSection } from "@/components/Services";
import { ExperienceTimeline } from "@/components/Timeline";
import ProjectSection from "@/components/Projects";
import Footer from "@/components/Footer";
import TechnologySection from "@/components/Technologies";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

interface HomeProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
}

const Home = ({ darkMode = false, setDarkMode = () => {} }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Chandra Septian - Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <link rel="icon" href="/Profile-Circular.png" />
      </Head>

      <header>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <motion.main 
        className="dark:bg-primary-dark bg-second-light pt-24 min-h-screen transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <div id="hero"><HeroSection /></div>
          <div id="services"><ServiceSection /></div>
          <div id="experience"><ExperienceTimeline /></div>
          <div id="projects"><ProjectSection /></div>
          <div id="technologies"><TechnologySection /></div>
          <Footer />
        </div>
      </motion.main>
    </>
  );
};

export default Home;
