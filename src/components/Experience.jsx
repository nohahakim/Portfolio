import { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Sample Data for Educational Journey
const educationalData = [
  {
    id: 1,
    title: "B.Sc. in Computer Science",
    institution: "XYZ University",
    date: "2016 - 2020",
    icon: "/assets/education-icon.png",
    iconBg: "#E6DEDD",
    points: [
      "Graduated with honors",
      "Specialized in Software Engineering",
      "Participated in multiple programming clubs and hackathons",
    ],
  },
  {
    id: 2,
    title: "High School Diploma",
    institution: "ABC High School",
    date: "2012 - 2016",
    icon: "/assets/school-icon.png",
    iconBg: "#E6DEDD",
    points: [
      "Focused on Mathematics and Computer Basics",
      "Participated in Science Fairs",
    ],
  },
];

// Sample Data for Technical Journey
const technicalData = [
  {
    id: 1,
    title: "Front-end Developer",
    company_name: "TechCorp",
    date: "2021 - Present",
    icon: "/assets/frontend-icon.png",
    iconBg: "#383E56",
    points: [
      "Built reusable UI components using React & Tailwind CSS",
      "Collaborated with design teams to implement modern UX features",
      "Optimized application for speed and scalability",
    ],
  },
  {
    id: 2,
    title: "Intern Developer",
    company_name: "Startup Inc.",
    date: "2020 - 2021",
    icon: "/assets/intern-icon.png",
    iconBg: "#383E56",
    points: [
      "Assisted in building RESTful APIs",
      "Implemented basic features in a React Native project",
      "Learned Agile methodologies and SCRUM",
    ],
  },
];

// Framer Motion Variant for Animations
const textVariantCustom = () => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
});

// Experience Card Component
const ExperienceCard = ({ item, isEducation }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={item.date}
    iconStyle={{ background: item.iconBg }}
    icon={
      <div className="flex items-center justify-center h-full w-full">
        <img
          src={item.icon}
          alt={isEducation ? item.institution : item.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {isEducation ? item.institution : item.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {item.points.map((point, index) => (
        <li key={`point-${index}`} className="text-sm">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Main Experience Component
const Experience = () => {
  const [activeTab, setActiveTab] = useState("education"); // "education" or "technical"

  // Determine which data to display based on the active tab
  const displayData =
    activeTab === "education" ? educationalData : technicalData;
  const isEducation = activeTab === "education";

  return (
    <section className="min-h-screen flex flex-col items-center py-10 bg-primary">
      {/* Header Section */}
      <motion.div
        variants={textVariantCustom()}
        initial="hidden"
        animate="show"
        className="text-center mb-8"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I Have Done So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {isEducation ? "Educational Journey" : "Technical Journey"}
        </h2>
      </motion.div>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "education"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-black"
          } transition-colors duration-300`}
          onClick={() => setActiveTab("education")}
        >
          Educational Journey
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "technical"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-black"
          } transition-colors duration-300`}
          onClick={() => setActiveTab("technical")}
        >
          Technical Journey
        </button>
      </div>

      {/* Description */}
      <motion.div
        variants={textVariantCustom()}
        initial="hidden"
        animate="show"
        className="text-center mb-4 px-4"
      >
        <p className="text-white text-sm mb-2">
          {isEducation
            ? "My academic background and qualifications."
            : "My professional and technical roles so far."}
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="w-full">
        <VerticalTimeline>
          {displayData.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              isEducation={isEducation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
