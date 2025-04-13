import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Technology {
  alt: string;
  src: StaticImageData;
}

interface Props {
  title?: string;
  technologies: Technology[];
}

export default function TechnologySection({ title = "Technology", technologies }: Props) {
  return (
    <>
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold font-tomorrow text-primary-dark dark:text-second-light">
          {title}
        </h3>
      </div>

      {/* Icons Grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4 sm:px-6 md:px-12 bg-primary-light dark:bg-second-light py-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="hover:scale-105 transition-transform"
          >
            <Image alt={tech.alt} src={tech.src} width={80} height={80} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
