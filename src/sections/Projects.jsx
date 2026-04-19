import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather application with real-time data, location search, and beautiful visual representations of weather conditions.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tags: ['React', 'JavaScript', 'API'],
    category: 'React',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A modern task management application with drag-and-drop functionality, categories, and local storage persistence.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'LocalStorage'],
    category: 'React',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'This very portfolio! A modern, responsive portfolio website with smooth animations and glassmorphism effects.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'React',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
  {
    id: 4,
    title: 'E-commerce Landing Page',
    description:
      'A stunning e-commerce landing page with animated sections, product showcases, and modern UI components.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
  {
    id: 5,
    title: 'Interactive Quiz App',
    description:
      'An engaging quiz application with multiple categories, score tracking, and responsive design.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for tracking social media metrics with beautiful charts and data visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    category: 'React',
    github: 'https://github.com/Vasudevan1202',
    live: 'https://github.com/Vasudevan1202',
  },
];

const categories = ['All', 'React', 'JavaScript'];

export default function Projects({ isDark }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
          <motion.div
            className="text-center mb-10 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.p
              className={`text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 ${
                isDark ? 'text-neon-cyan' : 'text-cyan-600'
              }`}
            >
              My Work
            </motion.p>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold font-poppins ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}
            >
              Featured Projects
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/30'
                    : isDark
                    ? 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    : 'bg-gray-200 text-dark-600 hover:bg-gray-300'
                }`}
              >
                <Filter size={12} className="sm:text-sm" />
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                className={`group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-dark-700/50 hover:bg-dark-600/50'
                    : 'bg-white hover:shadow-2xl'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-full glass hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} className="sm:text-20" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 rounded-full glass hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={18} className="sm:text-20" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3
                    className={`text-lg sm:text-xl font-bold font-poppins mb-2 ${
                      isDark ? 'text-white' : 'text-dark-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${
                      isDark ? 'text-gray-400' : 'text-dark-500'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs ${
                          isDark
                            ? 'bg-dark-600 text-gray-300'
                            : 'bg-gray-100 text-dark-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
