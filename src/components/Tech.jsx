import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import reactnative from "../assets/tech/reactnative.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";

const technologies = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "Three JS",
    icon: threejs,
  },
  {
    id: 11,
    name: "Git",
    icon: git,
  },
  {
    id: 12,
    name: "Figma",
    icon: figma,
  },
  {
    id: 13,
    name: "React Native",
    icon: reactnative,
  },
];

const Tech = () => {
  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
    768: { items: 6 },
    1024: { items: 8 },
  };

  const items = technologies.map((tech) => (
    <div
      className="flex flex-col items-center justify-center bg-tertiary p-4 rounded-lg shadow-lg m-2"
      key={tech.id}
      title={tech.name}
    >
      <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
      <p className="text-white text-sm">{tech.name}</p>
    </div>
  ));

  return (
    <section id="tech" className=" bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">My Skills</h2>
          <p className="text-gray-400 mt-2">
            Here are the technologies I work with
          </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          disableDotsControls
        />
      </div>
    </section>
  );
};

export default Tech;
