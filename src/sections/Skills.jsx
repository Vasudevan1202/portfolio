import { motion } from 'framer-motion';
import {
  Code,
  Braces,
  Palette,
  Atom,
  Wind,
  GitBranch,
  Github,
  Server,
} from 'lucide-react';

const skills = [
  {
    name: 'HTML',
    icon: Code,
    color: '#e34c26',
    level: 95,
    description: 'Semantic markup & accessibility',
  },
  {
    name: 'CSS',
    icon: Palette,
    color: '#264de4',
    level: 90,
    description: 'Modern layouts & animations',
  },
  {
    name: 'JavaScript',
    icon: Braces,
    color: '#f0db4f',
    level: 88,
    description: 'ES6+, DOM manipulation & more',
  },
  {
    name: 'React',
    icon: Atom,
    color: '#61dafb',
    level: 85,
    description: 'Hooks, Context & modern patterns',
  },
  {
    name: 'Tailwind CSS',
    icon: Wind,
    color: '#38b2ac',
    level: 90,
    description: 'Utility-first styling',
  },
  {
    name: 'Git',
    icon: GitBranch,
    color: '#f05032',
    level: 82,
    description: 'Version control & workflows',
  },
  {
    name: 'GitHub',
    icon: Github,
    color: '#ffffff',
    level: 80,
    description: 'Collaboration & CI/CD',
  },
  {
    name: 'Node.js',
    icon: Server,
    color: '#68a063',
    level: 65,
    description: 'Basic backend development',
  },
];

export default function Skills({ isDark }) {
  return (
    <section
      id="skills"
      className={`py-16 sm:py-24 md:py-32 ${isDark ? 'bg-dark-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.p
              className={`text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 ${
                isDark ? 'text-neon-purple' : 'text-purple-600'
              }`}
            >
              My Expertise
            </motion.p>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold font-poppins ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}
            >
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                  isDark
                    ? 'bg-dark-800/50 hover:bg-dark-700/50 border border-white/5 hover:border-white/10'
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100'
                }`}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  <div
                    className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon size={20} style={{ color: skill.color }} className="sm:text-[28px]" />
                  </div>

                  <h3
                    className={`text-sm sm:text-base md:text-lg font-semibold font-poppins mb-1 ${
                      isDark ? 'text-white' : 'text-dark-900'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  <p
                    className={`text-xs mb-3 sm:mb-4 hidden sm:block ${
                      isDark ? 'text-gray-400' : 'text-dark-500'
                    }`}
                  >
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div
                    className={`h-1 sm:h-1.5 rounded-full overflow-hidden ${
                      isDark ? 'bg-dark-600' : 'bg-gray-200'
                    }`}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <div className="mt-1.5 sm:mt-2 flex justify-between items-center">
                    <span
                      className={`text-xs ${
                        isDark ? 'text-gray-500' : 'text-dark-400'
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
