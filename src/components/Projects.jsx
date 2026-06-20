import { motion } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <HiCode className="text-2xl text-accent" />
                    <HiExternalLink className="text-muted group-hover:text-accent transition-colors duration-300 cursor-pointer" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-mono mb-4">&gt; {project.role}</p>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-surface-light text-xs text-muted rounded-full border border-white/5 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
