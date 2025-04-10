import Image from "next/image";
import { azure, github, kubb, postgre, react, redux, tanstack, vite } from "@public/images";

export const Footer = () => {
  return (
    <section>
      <div className="flex justify-center my-16">
        <h3 className="text-4xl font-bold font-tomorrow text-primary-dark dark:text-second-light">
          Technology
        </h3>
      </div>
      <div className="flex justify-evenly py-4 px-12 bg-primary-light dark:bg-second-light">
        <Image alt="react" src={react} width={80} height={80} />
        <Image alt="postgre" src={postgre} width={80} height={80} />
        <Image alt="tanstack" src={tanstack} width={80} height={80} />
        <Image alt="vite" src={vite} width={80} height={80} />
        <Image alt="azure" src={azure} width={80} height={80} />
        <Image alt="redux" src={redux} width={80} height={80} />
        <Image alt="kubb" src={kubb} width={80} height={80} />
        <Image alt="github" src={github} width={80} height={80} />
      </div>
    </section>
  );
};
