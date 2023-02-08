import Image from "next/image";
import { listServices } from "./service.data";
import { motion } from "framer-motion";

export const ServiceCard = () => {
  return (
    <div className="lg:flex gap-12">
      {listServices.map((service) => {
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="service-card gradient-color"
            key={service.id}
          >
            <Image
              alt="design"
              className="mx-auto"
              src={service.image}
              width={100}
              height={100}
            />
            <h3 className="font-burtons font-bold text-xl pt-8 pb-2">
              {service.title}
            </h3>
            <p className="py-2">{service.description}</p>
            {service.framework.map((list) => {
              return (
                <p className="py-1" key={list}>
                  {list}
                </p>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};
