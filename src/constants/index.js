import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  webshop,
  wouldYouRather,
  jobit,
  tripguide,
  threejs,
  front,
  node,
  next,
  shoptrends,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  { id: "projects", title: "Projects" },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: front,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Next.js Developer",
    icon: next,
  },
  {
    title: "Backend Developer",
    icon: node,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Webshop eCommerce Platform",
    description:
      "A robust MERN stack eCommerce solution enhanced with Redux Toolkit, enabling users to effortlessly browse, search, and purchase items with secure payment integrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "gray-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "yellow-text-gradient",
      },
      {
        name: "paypal",
        color: "blue-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "orange-text-gradient",
      },
    ],
    image: webshop,
    source_code_link: "https://github.com/nohahakim/WebShop",
    live_demo_link: "https://webshop-swd1.onrender.com/",
  },

  {
    name: "Would You Rather Game",
    description:
      "An engaging 'Would You Rather' application built with React and Redux, allowing users to create and answer dilemmas, track scores on a live leaderboard, and enjoy a responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "web-app",
        color: "orange-text-gradient",
      },
    ],
    image: wouldYouRather,
    source_code_link: "https://github.com/nohahakim/reactnd-Would-You-Rather",
    live_demo_link: "https://nohahakim.github.io/reactnd-Would-You-Rather/",
  },

  {
    name: "Advanced E-Commerce with React & Keystone.js",
    description:
      "A scalable full-stack eCommerce platform developed with React, Next.js, Keystone.js, and GraphQL, featuring user authentication, role-based permissions, comprehensive testing, and seamless payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "keystonejs",
        color: "purple-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "styled-components",
        color: "orange-text-gradient",
      },
      {
        name: "apollo",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "red-text-gradient",
      },
      {
        name: "react-testing-library",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "skyblue-text-gradient",
      },
      {
        name: "authentication",
        color: "teal-text-gradient",
      },
    ],
    image: shoptrends,
    source_code_link: "https://github.com/nohahakim/ShopTrends",
    live_demo_link: "https://github.com/nohahakim/ShopTrends",
  },
];

export { services, technologies, experiences, projects };
