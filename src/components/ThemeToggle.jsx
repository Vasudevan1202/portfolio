import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full glass transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={12} className="text-neon-purple" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
      <div
        className={`absolute inset-1 rounded-full ${
          isDark ? 'bg-dark-700' : 'bg-gray-200'
        } transition-colors duration-300`}
      />
    </button>
  );
}
