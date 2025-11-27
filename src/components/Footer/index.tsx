import { astro, azure, github, kubb, docker, kubernetes, nextjs, postgre, react, redux, tanstack, vite, dotnet } from "@public/images";
import TechnologySection from "@/components/Footer/Technologies";

const techList = [
  { alt: "react", src: react },
  { alt: "tanstack", src: tanstack },
  { alt: "vite", src: vite },
  { alt: "kubb", src: kubb },
  { alt: "nextjs", src: nextjs },
  { alt: "astro", src: astro },
  { alt: "dotnet", src: dotnet },
  { alt: "postgre", src: postgre },
  { alt: "docker", src: docker },
  { alt: "kubernetes", src: kubernetes },
  { alt: "azure", src: azure },
  { alt: "github", src: github },
];

const Footer = () => {
  return (
    <section>
      <TechnologySection technologies={techList} />
    </section>
  );
};

export default Footer;
