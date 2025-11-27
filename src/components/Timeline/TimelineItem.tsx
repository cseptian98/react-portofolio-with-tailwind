import React from "react";
import Image, { StaticImageData } from "next/image";

type TimelineItemProps = {
  position: "start" | "end";
  date: string;
  company: string;
  role: string;
  description: string;
  logo?: StaticImageData;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ position, date, company, role, description, logo }) => {
  return (
    <div className={`relative w-full flex ${position === 'start' ? 'md:justify-start' : 'md:justify-end'} justify-center mb-10`}>
      {/* Timeline Dot with Logo - Hidden on small screens */}
      <div className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 w-20 h-20 bg-gray-100 dark:bg-second-light rounded-full border-4 border-gray-400 shadow-lg z-20 items-center justify-center overflow-hidden p-2">
        {logo && (
          <Image 
            src={logo} 
            alt={company} 
            width={80} 
            height={80} 
            className="object-contain"
          />
        )}
      </div>
      
      <div className="relative w-full md:w-5/12 px-4 sm:px-6">
        <div className="text-primary-dark bg-gray-100 border-primary-dark dark:text-primary-dark dark:bg-second-light border-4 dark:border-gray-400 p-4 rounded-xl shadow-md">
          <p className="text-sm font-semibold mb-1">{date}</p>
          <h3 className="text-xl font-bold mb-1">{company}</h3>
          <h4 className="font-semibold mb-2">{role}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
