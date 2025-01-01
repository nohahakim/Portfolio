// export default SectionWrapper(Experience, "work");
import { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles"; // Ensure this path is correct
import { SectionWrapper } from "../hoc"; // Ensure this path is correct
import { textVariant } from "../utils/motion"; // Ensure this path is correct

// Improved Educational Data
const educationalData = [
  {
    id: 1,
    title: "Nanodegree in Programming & Web Development",
    institution: "Udacity",
    date: "October 2022",
    icon: "/src/assets/udacity_logo.jpeg", // Replace with your actual icon path
    iconBg: "#2116f4",
    points: [
      "Completed an intensive program focused on the latest web development technologies and programming practices.",
      "Developed projects using HTML, CSS, JavaScript, and modern frameworks.",
      "Collaborated with peers on real-world applications to enhance practical skills.",
    ],
  },
  {
    id: 2,
    title: "Nanodegree in Connect Mentorship",
    institution: "Udacity",
    date: "September 2022",
    icon: "/src/assets/udacity_logo.jpeg",
    iconBg: "#2116f4",
    points: [
      "Earned a certificate of graduation, demonstrating proficiency in mentorship and leadership within technical projects.",
      "Provided guidance and support to peers, fostering a collaborative learning environment.",
      "Enhanced communication and project management skills through active mentorship roles.",
    ],
  },
  {
    id: 3,
    title: "Nanodegree in Front-End Web Development",
    institution: "Udacity",
    date: "November 2021 - January 2022",
    icon: "/src/assets/udacity_logo.jpeg",
    iconBg: "#2116f4",
    points: [
      "Specialized in creating responsive and user-friendly front-end applications using modern frameworks.",
      "Implemented best practices in UI/UX design to improve user engagement and accessibility.",
      "Completed multiple projects showcasing proficiency in front-end technologies.",
    ],
  },
  {
    id: 4,
    title: "Challenger Track in Web Development",
    institution: "Udacity",
    date: "August 2021 - October 2021",
    icon: "/src/assets/udacity_logo.jpeg",
    iconBg: "#2116f4",
    points: [
      "Engaged in advanced web development projects, honing skills in both front-end and back-end technologies.",
      "Collaborated with a diverse team to deliver high-quality web applications.",
      "Adapted to emerging technologies and integrated them into project workflows.",
    ],
  },
  {
    id: 5,
    title: "Postgraduate Diploma in Bioinformatics",
    institution: "Ain Shams University",
    date: "September 2020 - July 2021",
    grade: "A",
    icon: "/src/assets/graduate.png",

    iconBg: "#E6DEDD",
    points: [
      "Focused on the intersection of biology and information technology, developing computational methods for analyzing biological data.",
      "Conducted research projects that contributed to advancements in bioinformatics.",
      "Mastered various bioinformatics tools and software for data analysis.",
    ],
  },
  {
    id: 6,
    title: "Postgraduate Diploma in Business Management",
    institution: "Ain Shams University",
    date: "September 2018 - June 2020",
    grade: "Very Good",
    icon: "/src/assets/graduate.png",
    iconBg: "#E6DEDD",
    points: [
      "Gained comprehensive knowledge in business strategies, management principles, and organizational behavior.",
      "Developed skills in project management, leadership, and strategic planning.",
      "Participated in business simulations and case studies to apply theoretical knowledge.",
    ],
  },
  {
    id: 7,
    title: "Bachelor's Degree in Pharmacy",
    institution: "Cairo University",
    date: "Graduated",
    grade: "Good",
    icon: "/src/assets/graduate.png",

    iconBg: "#E6DEDD",
    points: [
      "Studied pharmaceutical sciences, including drug development, pharmacology, and patient care.",
      "Completed internships in various pharmacy settings, gaining practical experience.",
      "Engaged in research projects focused on medication efficacy and safety.",
    ],
  },
];

// Placeholder for Technical Data (Replace with your actual technical/professional experience)
const technicalData = [
  {
    id: 1,
    title: "Web Development Session Lead",
    company_name: "Udacity DECI",
    date: "December 2023 - Present",
    icon: "/src/assets/udacity_logo.jpeg", // Replace with your actual icon path
    iconBg: "#2116f4", // Gold background color
    points: [
      "Guide students through complex web development concepts, including HTML, CSS, JavaScript, and modern frameworks.",
      "Provide personalized mentorship to address individual learning needs and project challenges.",
      "Review student projects, offering detailed feedback to facilitate continuous improvement.",
      "Foster a collaborative and engaging learning community among students.",
    ],
  },
  {
    id: 2,
    title: "Front-end Developer",
    company_name: "Sprints.ai - Industry Exposure Program",
    date: "March 2022 - June 2022",
    icon: "/src/assets/sprintsai_logo.jpeg", // Replace with your actual icon path
    iconBg: "#024eff", // DodgerBlue background color
    points: [
      "Collaborated on e-commerce and e-banking system projects within a dynamic team environment.",
      "Utilized Git and GitHub for version control, ensuring efficient workflow and code management.",
      "Applied Agile methodologies to enhance project development cycles and team productivity.",
      "Developed responsive and user-friendly interfaces, improving overall user experience.",
    ],
  },
  // Add more technical experiences as needed
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
      {item.grade && (
        <p className="text-secondary text-[14px] font-medium">
          Grade: {item.grade}
        </p>
      )}
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
  const [activeTab, setActiveTab] = useState("technical"); // "education" or "technical"

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
          {isEducation ? "Educational Journey" : "Professional Experience"}
        </h2>
      </motion.div>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "technical"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-black"
          } transition-colors duration-300`}
          onClick={() => setActiveTab("technical")}
        >
          Professional Experience
        </button>
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
