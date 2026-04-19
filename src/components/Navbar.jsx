import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 py-2 sm:py-3"
      >
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
            <a href="#hero" className="text-lg sm:text-xl font-bold font-poppins">
              <span className="gradient-text">V</span>
              <span className={isDark ? 'text-white' : 'text-dark-900'}>M</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-neon-blue ${
                    isDark ? 'text-gray-300' : 'text-dark-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-3 right-3 z-40 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col gap-2 sm:gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-base sm:text-lg font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors ${
                      isDark
                        ? 'text-gray-300 hover:bg-white/5 hover:text-neon-blue'
                        : 'text-dark-600 hover:bg-black/5 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
