import { Drapcode } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  netflix,
  tailwindcss,
  threads,
  typescript,
  prompt,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "LCNC Technologies Pvt.Ltd.",
    icon: Drapcode,
    iconBg: "#accbe1",
    date: "January 2024- July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed and maintained features (UI and APIs both) for low-code/no-code platform.",
      "Identified and resolved major bugs across the Distributed system architecture.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: prompt,
    theme: "btn-back-red",
    name: "Promptopia",
    description:
      "Implemented user authentication with NextAuth.js and Google sign-in integration, and utilized MongoDB for efficient data storage and retrieval.",
    link: "https://github.com/ajaypandey21/NextJS",
  },
  {
    iconUrl: netflix,
    theme: "btn-back-green",
    name: "NexflixGPT",
    description:
      "Clone of Netﬂix Empowered by OpenAI APIs, It has the authentication of Google Firebase.",
    link: "https://github.com/ajaypandey21/netflix-gpt",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Food Villa",
    description:
      "Food Ordering REACT app ( like swiggy), REDUX: for managing Data layer in more eﬃcient and proper way.",
    link: "https://github.com/ajaypandey21/FoodVilla",
  },
];
