import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Vasudevan1202',
    icon: Github,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vasudevan-m-16b6653b2',
    icon: Linkedin,
    color: '#0077b5',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vasu_unofficial_18/',
    icon: Instagram,
    color: '#e4405f',
  },
];

// Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqkryqa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Something went wrong. Please try again or email me directly.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-dark-800">
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
            <motion.p className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 text-neon-blue">
              Get in Touch
            </motion.p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white">
              Let's Work Together
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-3 sm:mb-4 text-white">
                  Let's connect
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                <motion.a
                  href="mailto:vasudevanm18@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-dark-700/50 hover:bg-dark-600/50 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="text-neon-blue" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Email</p>
                    <p className="font-medium text-sm sm:text-base text-white truncate">vasudevanm18@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-dark-700/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-neon-purple" size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Location</p>
                    <p className="font-medium text-sm sm:text-base text-white">India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm mb-4 text-gray-400">Follow me on social media</p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-dark-700/50 hover:bg-dark-600/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} style={{ color: social.color }} className="group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-dark-700/50"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 text-sm sm:text-base bg-dark-800 border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-neon-blue'
                      } text-white placeholder-gray-500`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 text-sm sm:text-base bg-dark-800 border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-neon-purple'
                      } text-white placeholder-gray-500`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none text-sm sm:text-base bg-dark-800 border ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-neon-cyan'
                      } text-white placeholder-gray-500`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center"
                    >
                      Thank you! I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
