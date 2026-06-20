import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar } from 'react-icons/hi'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="relative pl-8 border-l border-white/5">
            <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[7px]" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pb-12"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <HiBriefcase className="text-accent text-lg" />
                <h3 className="text-lg md:text-xl font-semibold">{experience.role}</h3>
              </div>
              <p className="text-accent font-medium text-sm mb-1">{experience.company}</p>
              <div className="flex items-center gap-2 text-muted text-xs mb-4">
                <HiCalendar />
                <span>{experience.period}</span>
              </div>
              <p className="text-xs text-muted mb-4 font-mono">&gt; {experience.department}</p>
              <ul className="space-y-3">
                {experience.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm md:text-base text-muted"
                  >
                    <span className="text-accent mt-1.5 shrink-0">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
