import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 w-full z-40 flex justify-center px-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-zinc-900/80 backdrop-blur-md rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8 shadow-2xl shadow-black/50 w-full sm:w-auto max-w-7xl"
      >
        <a
          href="#home"
          className="text-lg sm:text-xl font-black tracking-widest text-white shrink-0"
        >
          PIYAL<span className="text-purple-500">ST.</span>
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm sm:text-base font-medium text-white hover:text-purple-500 transition-colors duration-300 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:inline-block px-5 lg:px-7 py-2.5 lg:py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium text-sm rounded-full transition-colors duration-300 shadow-lg shadow-purple-500/50 shrink-0"
        >
          Contact Me
        </motion.a>
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute top-19 sm:top-21 left-4 right-4 bg-zinc-900/90 backdrop-blur-md rounded-2xl py-4 px-6 flex flex-col gap-3 shadow-lg shadow-black/50 z-30"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-sm sm:text-base font-medium text-white text-center hover:text-purple-500 transition-colors duration-300 tracking-wide hover:bg-zinc-800 rounded-lg"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={closeMenu}
            className="w-full text-center md:inline-block px-5 lg:px-7 py-2.5 lg:py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium text-sm rounded-full transition-colors duration-300 shadow-lg shadow-purple-500/50 shrink-0"
          >
            Contact Me
          </motion.a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
