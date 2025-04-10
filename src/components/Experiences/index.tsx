import { Timeline } from "@/components/Timeline/timeline";
import { listExperiences } from "@/components/Timeline/timeline-data";

export const ExperienceSection = () => (
  <section>
    <div className="flex justify-center my-16">
      <h3 className="text-6xl font-bold font-montserrat text-primary-dark dark:text-second-light">
        Experiences
      </h3>
    </div>
    <Timeline timeline={listExperiences} />
  </section>
);
