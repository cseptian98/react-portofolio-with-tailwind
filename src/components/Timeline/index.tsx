import TimelineItem from "./TimelineItem";
import Image from "next/image";
import { arkamaya, dicoding, ut } from "@public/images";

export const ExperienceTimeline = () => {
  return (
    <section className="relative font-tomorrow">
      <h2 className="text-4xl text-center text-primary-dark dark:text-second-light font-bold my-16">
        Work Experiences
      </h2>
      <div className="flex justify-evenly text-color mt-4 bg-primary-light dark:bg-second-light py-6 px-12">
        <Image alt="arkamaya" src={arkamaya} width={240} height={200} />
        <Image alt="dicoding" src={dicoding} width={240} height={200} />
        <Image alt="united-tractors" src={ut} width={270} height={200} />
      </div>

      <div className="relative z-10 px-12 my-10">
        <TimelineItem
          position="start"
          date="March 2021 - Present"
          company="PT United Tractors Tbk"
          role="Frontend Engineer"
          description="Developed new features using the React Native framework for mobile applications about maintenance operations at United Tractors and Customers."
        />
        <TimelineItem
          position="end"
          date="Sep 2020 - Mar 2021"
          company="Dicoding Indonesia"
          role="Code Reviewer"
          description="Checking each submission from a class participant on the Front-End Web Developer learning path on the Dicoding platform."
        />
        <TimelineItem
          position="start"
          date="Aug 2019 - Sep 2019"
          company="PT Arkamaya"
          role="Web Programmer"
          description="Created a company visitor system with an Intern Team, using PHP and CodeIgniter. Also participated in developing ongoing projects."
        />
      </div>
    </section>
  );
};
