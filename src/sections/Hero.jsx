import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';

const roles = [
  'Frontend Developer',
  'UI Enthusiast',
  'Future Full Stack Engineer',
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-64 h-64 md:w-96 md:h-96 rounded-full bg-neon-blue/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 rounded-full bg-neon-purple/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:70px_70px]" />

        <motion.div
          className="hidden lg:block absolute top-32 left-[15%] w-4 h-4 rounded bg-neon-blue/40"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="hidden lg:block absolute top-48 right-[20%] w-3 h-3 rounded-full bg-neon-purple/40"
          animate={{ y: [0, 20, 0], rotate: [0, -180, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="hidden lg:block absolute bottom-40 left-[25%] w-5 h-5 rounded bg-neon-cyan/30"
          animate={{ y: [0, -25, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base font-medium mb-4 text-neon-blue tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Vasudevan</span>
          </motion.h1>

          <motion.div
            className="h-10 sm:h-12 md:h-16 flex items-center justify-center mb-4 md:mb-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-300">
              {displayText}
              <span className="typing-cursor" />
            </p>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 px-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I build fast, modern, and visually engaging web experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-neon-blue hover:text-neon-blue transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              Contact Me
              <Mail size={16} />
            </a>
            <a
              href="/resume/Vasudevan_M_Resume.pdf"
              download
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-dark-700/50 border border-white/10 font-semibold flex items-center justify-center gap-2 text-white hover:border-neon-purple hover:text-neon-purple transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              Download Resume
              <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/50"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
