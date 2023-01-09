import Image from "next/image";
import maintenance from "../../public/maintenance.webp";
import { listServices } from "./service.data";

export const ServiceCard = () => {
  return (
    <div className="lg:flex gap-12">
      {listServices.map((service) => {
        return (
          <div className="service-card" key={service.id}>
            <Image
              alt="design"
              className="mx-auto"
              src={maintenance}
              width={100}
              height={100}
            />
            <h3 className="font-burtons text-lg font-medium pt-8 pb-2">{service.title}</h3>
            <p className="py-2">{service.description}</p>
            {service.framework.map((list) => {
              return (
                <p className="py-1" key={list}>
                  {list}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
