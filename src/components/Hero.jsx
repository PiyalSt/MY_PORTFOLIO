import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Hero = () => {
  const [words, setWords] = useState([
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ]);

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[index];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) {
          setIsDeleting(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, words]);

  return (
    <section
      id="home"
      className="lg:min-h-screen flex flex-col items-center justify-center min-h-screen text-center bg-zinc-900 text-white selection:bg-purple-600 selection:text-white font-ubuntu lg:mt-0 overflow-hidden pt-32 lg:pt-28 pb-28 sm:pb-16 px-4 sm:px-6"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 sm:w-75 sm:h-75 md:w-100 md:h-100 lg:w-125 lg:h-125 rounded-full bg-purple-400/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full items-center grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-0"
        >
          <div className="relative w-64 sm:w-72 h-80 sm:h-96 flex items-center justify-center my-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 0.9, scale: 1, rotate: -10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute rounded-2xl shadow-xl"
              style={{
                width: "100%",
                height: "100%",
                background: "linear-linear(145deg, #fef9c3, #fde047)",
                transform: "translateX(-20) translateY(18px) rotate(-10deg)",
                zIndex: 1,
                border: "3px solid rgba(227, 85, 255, 0.5)",
                boxShadow: "0 20px 60px rgba(232, 115, 255, 0.2)",
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 0.9, scale: 1, rotate: -5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute rounded-2xl shadow-xl"
              style={{
                width: "100%",
                height: "100%",
                background: "linear-linear(145deg, #fef9c3, #fde047)",
                transform: "translateX(-14) translateY(18px) rotate(-10deg)",
                zIndex: 2,
                border: "3px solid rgba(227, 85, 255, 0.5)",
                boxShadow: "0 20px 60px rgba(232, 115, 255, 0.2)",
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.9, scale: 1, y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute rounded-2xl shadow-xl bg-linear-to-br from-purple-400 to-purple-500 overflow-hidden flex items-end justify-end"
              style={{
                width: "100%",
                height: "100%",
                background: "linear-linear(145deg, #fef9c3, #fde047)",
                transform: "translateX(-14) translateY(18px) rotate(-10deg)",
                zIndex: 3,
                border: "3px solid rgba(227, 85, 255, 0.8)",
                boxShadow: "0 20px 60px rgba(232, 115, 255, 0.4)",
              }}
            >
              <motion.img
                src={assets.profile}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              ></motion.img>
              <div className="absolute inset-0 bg-linear-to-t from-purple-400/20 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col items-center lg:items-start lg:text-left obder-2 lg:order-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-300 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2 tracking-wide"
          >
            Hi! I'am{" "}
            <span className="text-purple-400 font-bold">Md. Piyal Hasan</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight my-2 sm:my-3"
          >
            <div>Creative Web &</div>
            <div className="inline-flex items-center min-h-[1.2rem] relative justify-center lg:justify-start">
              <span className="text-purple-400 text-3xl lg:text-5xl xl:text-6xl font-medium">
                {displayedText}
              </span>
              <span className="w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-purple-400 ml-1 sm:ml-2 inline-block"/>
            </div>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
