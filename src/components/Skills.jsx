import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCode,
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

  const filteredSkills = skillsCategories[activeCategory]?.skills || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="lg:min-h-screen text-white py-24 lg:py-28 px-4 sm:px-6 scroll-m-12 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-44 h-44 lg:w-96 lg:h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-44 h-44 lg:w-96 lg:h-80 bg-purple-400/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={ isInView ? { opacity: 1, y: 0} : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={ isInView ? { opacity: 1 } : {} }
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-semibold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3"
          >
            My Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ isInView ? { opacity: 1, y: 0} : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Skills & {' '}
            <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
