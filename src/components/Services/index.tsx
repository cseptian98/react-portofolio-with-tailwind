import ServiceList from "./ServiceList";

const services = [
  "WEB APPLICATION",
  "MOBILE APPLICATION",
  "WEB DASHBOARD",
  "DEVOPS",
];

export const ServiceSection = () => (
  <div>
    <div className="flex flex-col md:flex-row gap-10 md:gap-16 my-16 px-4 sm:px-6 md:px-12 font-tomorrow">
      {/* Left Side */}
      <div className="w-full md:w-3/5 md:text-left text-center text-primary-dark dark:text-second-light">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Services I am Providing
        </h3>
        <p className="mt-6 text-base sm:text-lg md:text-xl">
          I build custom web and mobile applications tailored to your business needs, using modern and scalable technologies.
        </p>
      </div>

      {/* Right Side - Service List */}
      <div className="w-full md:w-2/5">
        <ServiceList services={services} />
      </div>
    </div>
  </div>
)
