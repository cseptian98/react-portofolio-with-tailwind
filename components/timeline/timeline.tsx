import { listExperiences } from "./timeline-data";

type TimelineProps = {
  timeline: TimelineObject[];
};

type TimelineObject = {
  time: string;
  company: string;
  title: string;
  description: string;
};

export const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <div className="timeline">
      {timeline.map((exp, index) => {
        return (
          <div className="relative" key={index}>
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date">{exp.time}</span>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-title">{exp.title}</p>
              <p className="text-color">{exp.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
