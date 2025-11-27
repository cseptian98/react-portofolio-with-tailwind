import React from "react";
import { FaUsers, FaChartLine, FaLightbulb, FaCode, FaMobile, FaServer } from "react-icons/fa";
import { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Building modern, responsive web applications using the latest technologies and best practices for optimal performance and user experience."
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description: "Creating native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices."
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Designing and implementing robust server-side solutions, APIs, and database architectures that scale with your business needs."
  },
  {
    icon: FaUsers,
    title: "Team Leadership",
    description: "Leading development teams with clear vision, mentoring developers, and fostering collaborative environments that drive innovation."
  },
  {
    icon: FaChartLine,
    title: "Technical Consulting",
    description: "Providing expert-level guidance on architecture decisions, technology stack selection, and optimization strategies for your projects."
  },
  {
    icon: FaLightbulb,
    title: "Solution Architecture",
    description: "Designing scalable and maintainable system architectures that align with business goals and technical requirements."
  }
];

const ServiceList: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div 
            key={index} 
            className="dark:text-second-light text-primary-dark p-8 dark:border-second-light border border-primary-dark hover:bg-gray-300 dark:hover:bg-second-dark transition-colors duration-300"
          >
            <Icon className="text-3xl mb-4 text-primary-dark dark:text-second-light" />
            <h3 className="font-tomorrow font-bold text-xl mb-3">{service.title}</h3>
            <p className="font-mono text-sm leading-relaxed opacity-80">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
