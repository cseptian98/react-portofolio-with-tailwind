import React from "react";

type ServiceListProps = {
  services: string[];
};

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="w-[40%]">
      {services.map((service, index) => (
        <div key={index} className="dark:text-second-light text-primary-dark py-4 border-b dark:border-second-light border-primary-dark">
          <h3 className="font-bold text-xl">{service}</h3>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
