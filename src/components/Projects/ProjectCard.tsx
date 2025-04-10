import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  count: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, count }) => {
  return (
    <div className="flex justify-between items-center text-second-light gap-8">
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="max-w-md">{description}</p>
      </div>
      <Image src={image} alt={title} className="rounded-lg w-96 h-auto" />
      <p className="text-xl font-semibold text-second-light">{count}</p>
    </div>
  );
};

export default ProjectCard;
