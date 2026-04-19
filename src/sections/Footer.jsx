import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Vasudevan1202',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vasudevan-m-16b6653b2',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vasu_unofficial_18/',
    icon: Instagram,
  },
];

export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-8 sm:py-12 border-t ${
        isDark ? 'bg-dark-900 border-white/5' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center sm:items-start gap-1 sm:gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold font-poppins">
                <span className="gradient-text">V</span>
                <span className={isDark ? 'text-white' : 'text-dark-900'}>M</span>
              </span>
            </div>
            <p
              className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-dark-500'}`}
            >
              Built with{' '}
              <Heart
                size={12}
                className="inline text-neon-pink animate-pulse"
              />{' '}
              by Vasudevan M
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-dark-800 hover:bg-dark-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                } group`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  size={18}
                  className={`${isDark ? 'text-gray-400' : 'text-dark-500'} group-hover:text-neon-blue transition-colors`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
              isDark
                ? 'text-gray-400 hover:text-neon-blue'
                : 'text-dark-500 hover:text-blue-600'
            }`}
          >
            Back to top ↑
          </motion.a>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`mt-6 sm:mt-8 h-px ${
            isDark
              ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
          }`}
        />

        {/* Copyright Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-center text-xs mt-6 sm:mt-8 ${
            isDark ? 'text-gray-500' : 'text-dark-400'
          }`}
        >
          © {new Date().getFullYear()} Vasudevan M. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
