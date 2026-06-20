import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <HiAcademicCap className="text-2xl text-accent mb-4" />
                  <h3 className="font-semibold text-base md:text-lg mb-1">{edu.school}</h3>
                  <p className="text-sm text-accent mb-3">{edu.degree}</p>
                  {edu.honors && (
                    <span className="inline-block text-xs text-muted font-mono bg-surface-light px-3 py-1.5 rounded-full border border-white/5">
                      {edu.honors}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
