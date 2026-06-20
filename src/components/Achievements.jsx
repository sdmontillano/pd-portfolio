import { motion } from 'framer-motion'
import { HiBadgeCheck, HiStar } from 'react-icons/hi'
import { achievements, certifications } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">06.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <HiStar className="text-xl text-accent mb-3" />
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-6 flex items-center gap-2">
              <HiBadgeCheck className="text-accent text-base" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-surface rounded-lg border border-white/5 text-sm text-muted hover:border-accent/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
