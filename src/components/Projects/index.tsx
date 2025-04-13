import { MdDashboard, MdOutlinePhoneAndroid, MdWeb } from "react-icons/md";
import { ClientProjectsCarousel } from "./CarouselImages";

const services = [
  {
    icon: <MdDashboard size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Web Dashboard",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use. Help you to monitor any case that you need."
  },
  {
    icon: <MdWeb size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Web Application",
    desc: "Transforming ideas into exceptional web application such as data management of your company, landing pages, and anything else."
  },
  {
    icon: <MdOutlinePhoneAndroid size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Mobile Application",
    desc: "Create a multi-platform application to used globally with an amazing experience and good performances."
  }
];

const ProjectSection = () => {
  return (
    <section className="px-12 font-tomorrow text-second-light">
      <h2 className="text-4xl font-bold text-center my-16">
        My Projects
      </h2>
      <ClientProjectsCarousel />
      <div className="grid md:grid-cols-3 gap-8 text-center text-primary-dark dark:text-second-light my-16">
        {services.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            <div className="bg-primary-dark dark:bg-second-light p-4 rounded-full shadow-md border-4 border-primary-light">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="text-sm max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
