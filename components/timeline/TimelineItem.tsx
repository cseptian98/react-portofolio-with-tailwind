import React from "react";

type TimelineItemProps = {
  position: "left" | "right";
  date: string;
  company: string;
  role: string;
  description: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ position, date, company, role, description }) => {
  const isLeft = position === "left";
  const justify = `justify-${isLeft ? "start" : "end"}`;

  return (
    <div className={`w-full flex ${justify} mb-10`}>
      <div className="relative w-1/2 px-6">
        <div className="text-second-light bg-primary-light border-primary-dark dark:text-primary-dark dark:bg-second-light border-4 dark:border-primary-light p-4 rounded-xl shadow-md">
          <p className="text-sm font-semibold mb-1">{date}</p>
          <h3 className="text-xl font-bold mb-1">{company}</h3>
          <h4 className="font-semibold mb-2">{role}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
