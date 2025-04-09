import { MdDashboard, MdOutlinePhoneAndroid, MdWeb } from "react-icons/md";
import { ClientProjectsCarousel } from "@components/Projects/CarouselImages";

const services = [
  {
    icon: <MdDashboard size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Web Dashboard",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use."
  },
  {
    icon: <MdWeb size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Web Application",
    desc: "Transforming ideas into exceptional web and mobile app experiences."
  },
  {
    icon: <MdOutlinePhoneAndroid size={36} className="text-second-light dark:text-primary-dark" />,
    title: "Mobile Application",
    desc: "Crafting visually stunning designs that connect with your audience."
  }
];

const ProjectSection = () => {
  return (
    <section className="px-12 font-tomorrow text-second-light">
      <h2 className="text-4xl font-bold text-center my-10">
        My Projects
      </h2>
      <ClientProjectsCarousel />
      <div className="grid md:grid-cols-3 gap-8 text-center text-primary-dark dark:text-second-light my-10">
        {services.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            <div className="bg-primary-dark dark:bg-second-light p-4 rounded-full shadow-md border-4 border-primary-light">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold">{item.title}</h4>
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
