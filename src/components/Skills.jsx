import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  FaCog,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsCategories = {
    fontend: {
      name: "Frontend",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: FaJs, color: "#F7DF1F" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    backend: {
      name: "Backend",
      icon: FaCog,
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#E10098" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    tools: {
      name: "Tools",
      icon: FaCog,
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHubs", icon: FaGithub, color: "#181717" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "WordPress", icon: FaWordpress, color: "#217598" },
      ],
    },
  };

  return (
    <div>
      <div>fsdjf</div>
    </div>
  );
};

export default Skills;
