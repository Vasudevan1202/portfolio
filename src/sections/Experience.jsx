import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Code } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Unity Engineer Intern',
    company: 'Tech Startup',
    period: '2026 - Present',
    description:
      'Developing interactive games and applications using Unity engine. Building cross-platform experiences with focus on performance and user engagement.',
    tags: ['Unity', 'C#', 'Game Development'],
    color: '#00d4ff',
  },
  {
    icon: Award,
    title: 'Budding Techie Competition',
    company: 'Technical Symposium',
    description:
      'Participated in competitive coding and development challenges. Showcased problem-solving skills and ability to build under pressure.',
    tags: ['Competition', 'Problem Solving', 'Teamwork'],
    color: '#a855f7',
  },
  {
    icon: GraduationCap,
    title: 'Frontend Learning Journey',
    company: 'Self-directed & Online',
    description:
      'Mastered modern frontend technologies through intensive self-study and online courses. Built numerous projects to solidify understanding.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    color: '#06b6d4',
  },
  {
    icon: Code,
    title: 'Web Development Projects',
    company: 'Personal & Freelance',
    description:
      'Delivered multiple client projects from concept to deployment. Focused on responsive design, accessibility, and modern UI patterns.',
    tags: ['React', 'Tailwind', 'Node.js'],
    color: '#ec4899',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-dark-900">
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
            <motion.p className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 text-neon-pink">
              My Journey
            </motion.p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white">
              Experience & Growth
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 hidden md:block bg-dark-600"
              style={{
                background: `linear-gradient(180deg, #00d4ff, #a855f7, #ec4899)`,
              }}
            />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`relative pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 hidden md:block"
                    style={{
                      backgroundColor: exp.color,
                      boxShadow: `0 0 20px ${exp.color}`,
                    }}
                  />

                  {/* Mobile Timeline Indicator */}
                  <div className="absolute left-7 top-0 bottom-0 w-0.5 md:hidden" style={{ backgroundColor: exp.color }} />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-dark-800/50 hover:bg-dark-700/50 border border-white/5 transition-all duration-300"
                  >
                    <div
                      className="absolute top-0 left-0 w-1 h-full rounded-l-xl sm:rounded-l-2xl"
                      style={{ backgroundColor: exp.color }}
                    />

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl items-center justify-center shrink-0 md:hidden"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <exp.icon size={18} style={{ color: exp.color }} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2">
                          <exp.icon
                            size={16}
                            className="hidden md:block"
                            style={{ color: exp.color }}
                          />
                          <h3 className="text-base sm:text-xl font-bold font-poppins text-white">
                            {exp.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm font-medium mb-1 text-gray-400">
                          {exp.company}
                        </p>

                        <p className="text-xs mb-3 sm:mb-4 text-gray-500">
                          {exp.period}
                        </p>

                        <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-300">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs bg-dark-600 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
