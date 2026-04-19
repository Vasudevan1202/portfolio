import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
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
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 py-2 sm:py-3 bg-dark-900/80 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between border border-white/5 bg-dark-800/50 backdrop-blur-xl">
            <a href="#hero" className="text-lg sm:text-xl font-bold font-poppins">
              <span className="gradient-text">V</span>
              <span className="text-white">M</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume/Vasudevan_M_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <a
                href="/resume/Vasudevan_M_Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-semibold"
              >
                <Download size={14} />
                Resume
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
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
            <div className="rounded-2xl p-4 sm:p-6 bg-dark-800/95 backdrop-blur-xl border border-white/10">
              <div className="flex flex-col gap-2 sm:gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base sm:text-lg font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-gray-300 hover:bg-white/5 hover:text-neon-blue transition-colors"
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
