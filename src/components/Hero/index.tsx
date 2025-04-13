import Image from "next/image";
import { avatar } from "@public/images";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section>
      <div className="px-4 sm:px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-4 mb-10">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:h-48 md:w-48 overflow-hidden bg-primary-light dark:bg-second-light">
            <Image alt="avatar" src={avatar} fill />
          </div>
          <h2 className="font-tomorrow text-lg sm:text-xl md:text-2xl my-4 text-primary-dark dark:text-second-light">
            Hello! I’m Chandra Septian
          </h2>
          <h3 className="font-tomorrow text-base sm:text-lg md:text-xl text-primary-dark dark:text-second-light">
            Senior Software Engineer 🇮🇩
          </h3>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex items-center justify-center">
          <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl text-primary-dark dark:text-second-light text-center md:text-left">
            A young competent and professional software engineer with 5+ years experience on software development.
            Well-organized, hard-worker, and willing to learn more. Working well in both individual and team,
            with excellent self-awareness and communication skills.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 sm:gap-12 py-6 text-2xl sm:text-3xl md:text-4xl text-second-light bg-primary-light dark:text-primary-dark dark:bg-second-light">
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
