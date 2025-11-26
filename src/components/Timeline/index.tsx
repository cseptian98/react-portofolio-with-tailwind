import TimelineItem from "./TimelineItem";
import Image from "next/image";
import { arkamaya, dicoding, ut } from "@public/images";

export const ExperienceTimeline = () => {
  return (
    <section className="relative font-tomorrow">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-primary-dark dark:text-second-light font-bold my-12 sm:my-16">
        Work Experiences
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-12 rounded-md bg-gray-300 py-6 sm:px-6 md:px-12">
        <Image alt="united-tractors" src={ut} width={220} height={100} className="object-contain" />
        <Image alt="dicoding" src={dicoding} width={200} height={100} className="object-contain" />
        <Image alt="arkamaya" src={arkamaya} width={200} height={100} className="object-contain" />
      </div>

      {/* Timeline Items */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 my-10">
        {/* Vertical Timeline Line - Hidden on small screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-dark dark:bg-second-light top-0 bottom-0"></div>
        
        <div className="space-y-10">
          <TimelineItem
            position="start"
            date="Jan 2024 - Present"
            company="PT United Tractors Tbk"
            role="Lead Software Engineer"
            description="Led the development of a web-based fuel analytics platform that provides detailed insights into fuel consumption, refuel quantity, and time-speed intervention, enabling data-driven optimizations."
            logo={ut}
          />
          <TimelineItem
            position="end"
            date="March 2021 - Dec 2023"
            company="PT United Tractors Tbk"
            role="Mobile Developer"
            description="Developed and implemented new features in mobile applications using the React Native framework, enhancing maintenance operations for both United Tractors and its customers."
            logo={ut}
          />
          <TimelineItem
            position="start"
            date="Sep 2020 - Mar 2021"
            company="Dicoding Indonesia"
            role="Code Reviewer"
            description="Assessing each submission by class participants on the Front-End Web Developer learning path through the Dicoding course platform. And providing advice for improving coding performance and implementing best practices."
            logo={dicoding}
          />
          <TimelineItem
            position="end"
            date="Aug 2019 - Sep 2019"
            company="PT Arkamaya"
            role="Web Programmer"
            description="Created a company visitor system with an Intern Team, using PHP and CodeIgniter. Also actively contributed to the development of ongoing projects at PT. Arkamaya, assisting in feature development, and optimizing system performance."
            logo={arkamaya}
          />
        </div>
      </div>
    </section>
  );
};
