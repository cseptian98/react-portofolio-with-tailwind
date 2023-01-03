import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/avatar.png";
import { ServiceCard } from "../components/services/services-card";
import { PortfolioCard } from "../components/portfolio/portfolio-card";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Chandra Septian - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-gray-200 px-10 md:px-20 lg:px-35 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-4 flex justify-between">
            <h1 className="text-2xl font-burtons text-teal-600 dark:text-sky-400">
              CSeptian
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-yellow-400"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-br dark:from-sky-900 dark:to-sky-600"
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-8">
            <h2 className="text-6xl py-5 font-medium md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-teal-700 to-emerald-400 dark:bg-gradient-to-b dark:from-teal-300 dark:to-sky-500">
              Chandra Septian
            </h2>
            <h3 className="text-2xl py-5 md:text-3xl dark:text-slate-100">
              Developer and Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-slate-100">
              A young competent and professional software engineer. Be able to
              work in the public and private sectors. Well-organized,
              hard-working, and willing to learn more. Working well in both
              individual and team, with excellent self-awareness and
              communication skills. In addition, I have several programming
              training certifications and quite active in several developer
              communities in Bandung.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-slate-100">
            <AiFillTwitterCircle
              className="cursor-pointer"
              onClick={() => window.open("https://www.twitter.com", "_blank")}
            />
            <AiFillLinkedin
              className="cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/cseptian/", "_blank")
              }
            />
            <AiFillInstagram
              className="cursor-pointer"
              onClick={() => window.open("https://www.instagram.com", "_blank")}
            />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mb-10 overflow-hidden md:h-96 md:w-96 dark:bg-gradient-to-b dark:from-sky-300 dark:to-sky-700">
            <Image alt="avatar" src={avatar} fill />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-3 font-bold font-burtons text-teal-600 dark:text-sky-400">
              Services
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-slate-100">
              Since the beginning of my journey as a frontend developer, I`ve
              done work for{" "}
              <span className="text-sky-700 font-bold dark:text-sky-300">
                Dicoding
              </span>{" "}
              as an{" "}
              <span className="text-sky-700 font-bold dark:text-sky-300">
                External Code Reviewer
              </span>{" "}
              and collaborated with talented people in my current job at{" "}
              <span className="text-yellow-500 font-bold">
                PT United Tractors Tbk
              </span>{" "}
              to create an application for maintaining management of heavy
              equipment such as excavators.
            </p>
          </div>
          <ServiceCard />
        </section>
        <section>
          <div id="portfolio">
            <h3 className="text-3xl py-3 font-bold font-burtons text-teal-600 dark:text-sky-400">
              Portfolio
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-slate-100">
              Here are some examples of projects that I have made while being a
              frontend developer. Some of them are web and mobile projects.
              Besides that, I also studied and created a build pipeline using
              azure devops.
            </p>
            <PortfolioCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
