import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink, Calendar, Award } from 'lucide-react';
import { Background3D } from './components/Background3D';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const techStack = [
    'Python', 'C++', 'C#', 'CSS', 'Unity', 'Android Studio',
    'Java', 'React Native', 'SQL', 'Laravel'
  ];

  const experiences = [
    {
      role: 'General Admin VA / Theft Investigator',
      company: 'Panoptyc, INC.',
      period: 'July 2023 - January 2026',
      description: 'Specialized in administrative support and theft investigation processes'
    },
    {
      role: 'Data Annotator',
      company: 'Remotasks',
      period: '2022 - 2023',
      description: 'Contributed to AI training through precise data annotation and validation'
    },
    {
      role: 'Computer Technical Support (OJT)',
      company: 'NAVAL ICT Station',
      period: '2021 - 2022',
      description: 'Provided technical support for hardware troubleshooting and system maintenance'
    }
  ];

  const projects = [
    {
      title: 'EMC-AFP System',
      description: 'A comprehensive system built for the Armed Forces of the Philippines using modern web technologies',
      tags: ['Laravel', 'Vite', 'GitHub', 'PHP'],
      image: '/emc-afp.png'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio showcasing professional work and technical expertise',
      tags: ['React', 'Tailwind', 'Motion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'Capstone (CrossAR) ',
      description: 'An Augmented Reality Journey Through HCDC’s Legacy',
      tags: ['Unity', '3D Models', 'Augmented Reality'],
      image: '/cross-ar.png'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* 3D Background */}
      <Background3D />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="mb-4"
                style={{ fontSize: '4rem', fontWeight: '700', lineHeight: '1.2' }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Tom Rapliza</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
                style={{ fontSize: '1.5rem', color: '#A0AEC0' }}
              >
                IT Professional | Web Developer | Virtual Assistant
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-10 max-w-2xl mx-auto"
                style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#94A3B8' }}
              >
                A highly motivated professional skilled in system setup, troubleshooting,
                and cross-team coordination. Passionate about creating efficient solutions
                and delivering exceptional results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  View Projects
                </a>

                {/* NEW RESUME BUTTON */}
                <a 
                  href="/Tom-Rapliza-Resume.pdf" 
                  download="Tom-Rapliza-Resume.pdf" 
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-cyan-500/50 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 text-cyan-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Resume
                </a>

                <a href="#contact" className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
              style={{ fontSize: '2.5rem', fontWeight: '700' }}
            >
              Tech Stack & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </motion.h2>

            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                className="flex gap-6 whitespace-nowrap"
              >
                {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg inline-block"
                    style={{ fontSize: '1.25rem', fontWeight: '500' }}
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              style={{ fontSize: '2.5rem', fontWeight: '700' }}
            >
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-cyan-500/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />

                  <div className="bg-[#1E1E1E]/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-[#1E1E1E]/70 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>{exp.role}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-cyan-400">{exp.company}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{exp.period}</span>
                        </div>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              style={{ fontSize: '2.5rem', fontWeight: '700' }}
            >
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#1E1E1E]/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                          style={{ fontSize: '0.875rem' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              style={{ fontSize: '2.5rem', fontWeight: '700' }}
            >
              Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Awards</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Computer Hardware Servicing NC-II
                  </h3>
                  <p className="text-cyan-400 mb-2">TESDA Certification</p>
                  <p className="text-gray-400">
                    Certified in computer hardware installation, configuration, and troubleshooting.
                    Demonstrates expertise in system maintenance and technical support.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              style={{ fontSize: '2.5rem', fontWeight: '700' }}
            >
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-[#1E1E1E]/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Email</p>
                      <a href="mailto:drunza22@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                        drunza22@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1E1E]/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Phone</p>
                      <a href="tel:+639918955546" className="text-cyan-400 hover:text-cyan-300">
                        +63 991 895 5546
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-[#1E1E1E]/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-4"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>&copy; 2026 Tom Rapliza. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}