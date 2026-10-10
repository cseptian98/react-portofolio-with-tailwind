import Image from "next/image";
import { listServices } from "./service.data";
import { motion } from "framer-motion";

export const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {listServices.map((service) => {
        return (
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative flex flex-col h-full text-left bg-white dark:bg-second-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl rounded-3xl p-8 transition-all duration-300 overflow-hidden"
            key={service.id}
          >
            {/* Subtle Top Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-500/10 dark:from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon/Image Container */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 dark:bg-[#252528] rounded-2xl mb-6 shadow-sm border border-gray-100 dark:border-gray-700/50 group-hover:rotate-3 transition-transform duration-300">
              <Image
                alt={service.title}
                className="drop-shadow-md object-contain w-10 h-10 sm:w-12 sm:h-12"
                src={service.image}
              />
            </div>
            
            <h3 className="relative z-10 font-sans font-bold text-2xl sm:text-3xl mb-3 text-primary-dark dark:text-white tracking-tight">
              {service.title}
            </h3>
            
            <p className="relative z-10 text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8 flex-1 text-justify">
              {service.description}
            </p>
            
            {/* Frameworks tags section */}
            <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {service.framework.map((list) => {
                  return (
                    <span className="px-3 py-1.5 bg-gray-100/80 dark:bg-[#1a1a1c] border border-gray-200/60 dark:border-gray-700/50 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm" key={list}>
                      {list}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
