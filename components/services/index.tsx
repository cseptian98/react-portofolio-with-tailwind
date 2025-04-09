import ServiceList from "@components/Services/ServiceList";

const services = [
  "WEB APPLICATION",
  "MOBILE APPLICATION",
  "WEB DASHBOARD",
  "PROJECT MANAGEMENT",
];

export const ServiceSection = () => (
  <div>
    <div className="flex gap-16 my-10 px-12 font-tomorrow">
      <div className="w-[60%] text-primary-dark dark:text-second-light">
        <h3 className="text-4xl font-bold">
          Services I am Providing
        </h3>
        <p className="my-8">
          I build custom web and mobile applications tailored to your business needs, using modern and scalable technologies.
        </p>
      </div>
      <ServiceList services={services} />
    </div>
  </div>
)
