import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='bg-zinc-900 text-white min-h-screen relative overflow-x-hidden selection:bg-purple-600 selection:text-white font-ubuntu'>

      <motion.div className="fixed top-0 left-0 w-8 h-8 border border-purple-600/80 rounded-full pointer-events-none z-50 flex items-center justify-center"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className='w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_#a855f7]'>

        </div>
      </motion.div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App