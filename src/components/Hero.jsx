import { section } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [words, setWords] = useState(["Web Developer", "Frontend Developer", "Backend Developer",]);

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
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-zinc-900 text-white selection:bg-purple-600 selection:text-white font-ubuntu">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-purple-500">MD. PIYAL HASAN</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        <span className="text-purple-500">{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto">
        I am a passionate web developer with expertise in creating dynamic and responsive web applications. I love to learn new technologies and improve my skills.
      </p>
    </section>
  )
}

export default Hero