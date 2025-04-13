import { astro, azure, github, kubb, docker, kubernetes, nextjs, postgre, react, redux, tanstack, vite } from "@public/images";
import TechnologySection from "@/components/Footer/Technologies";

const techList = [
  { alt: "react", src: react },
  { alt: "tanstack", src: tanstack },
  { alt: "vite", src: vite },
  { alt: "kubb", src: kubb },
  { alt: "nextjs", src: nextjs },
  { alt: "astro", src: astro },
  { alt: "docker", src: docker },
  { alt: "kubernetes", src: kubernetes },
  { alt: "azure", src: azure },
  { alt: "github", src: github },
  { alt: "postgre", src: postgre },
  { alt: "redux", src: redux },
];

const Footer = () => {
  return (
    <section>
      <TechnologySection technologies={techList} />
    </section>
  );
};

export default Footer;
