import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />

          {/* Noise Overlay */}
          <div className="noise-overlay" />
        </>
      )}
    </>
  );
}
