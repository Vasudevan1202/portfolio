import { motion } from 'framer-motion';
import { Code2, Lightbulb, Zap, Gamepad2 } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Strong UI/UX Sense',
    description: 'Crafting pixel-perfect interfaces with attention to detail',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into elegant solutions',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Rapidly adapting to new technologies and frameworks',
  },
  {
    icon: Gamepad2,
    title: 'Web & Game Dev',
    description: 'Exploring the intersection of web and interactive experiences',
  },
];

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`py-16 sm:py-24 md:py-32 ${isDark ? 'bg-dark-800' : 'bg-gray-50'}`}
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
          <motion.div className="text-center mb-12 sm:mb-16" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <motion.p
              className={`text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 ${
                isDark ? 'text-neon-blue' : 'text-blue-600'
              }`}
            >
              About Me
            </motion.p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-poppins ${isDark ? 'text-white' : 'text-dark-900'}`}>
              Who I Am
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Image/Visual */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-square sm:aspect-square max-w-sm sm:max-w-md mx-auto">
                {/* Decorative Background */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-2xl sm:blur-3xl" />

                {/* Main Card */}
                <div className={`relative h-full rounded-2xl sm:rounded-3xl glass-strong p-6 sm:p-8 ${isDark ? 'bg-dark-700/50' : 'bg-white/80'}`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-4 sm:mb-6">
                        <span className="text-2xl sm:text-3xl font-bold text-white font-poppins">VM</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold font-poppins mb-2 ${isDark ? 'text-white' : 'text-dark-900'}`}>
                        Vasudevan M
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-dark-500'}`}>
                        Frontend Developer
                      </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mt-4">
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-dark-600'}`}>
                        Based in India
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-dark-500'}`}>
                        Passionate about building modern web experiences
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className={`absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm ${
                    isDark ? 'glass bg-dark-600/80' : 'bg-white shadow-lg'
                  }`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-medium gradient-text">Open to Work</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div>
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-dark-600'}`}>
                  I'm a frontend developer focused on building responsive, user-friendly, and visually engaging web applications. I enjoy transforming ideas into real products and constantly improving my skills in modern web technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                      isDark
                        ? 'bg-dark-700/50 hover:bg-dark-600/50'
                        : 'bg-white hover:shadow-lg'
                    } hover:scale-[1.02]`}
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <item.icon
                        size={20}
                        className={`${isDark ? 'text-neon-blue' : 'text-blue-600'}`}
                      />
                    </div>
                    <h4 className={`font-semibold font-poppins mb-1 sm:mb-2 text-sm sm:text-base ${isDark ? 'text-white' : 'text-dark-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-dark-500'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
