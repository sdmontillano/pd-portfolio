import { motion } from 'framer-motion'
import { personalInfo, summary } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-4">
              <p className="text-muted leading-relaxed text-sm md:text-base">
                {summary}
              </p>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Based in the <span className="text-white font-medium">Philippines</span>, I bring a security-first mindset to every project I touch. My experience spans from building full-stack web applications to conducting vulnerability assessments — always with clean, maintainable code as the foundation.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent to-accent-dark rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
                <div className="relative bg-surface rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-muted">Quick Info</h3>
                  <div className="space-y-3">
                    <InfoRow label="Name" value={personalInfo.name} />
                    <InfoRow label="Location" value={personalInfo.location} />
                    <InfoRow label="Email" value={personalInfo.email} />
                    <InfoRow label="Phone" value={personalInfo.phone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-accent font-mono text-xs mt-1">&gt;</span>
      <div>
        <span className="text-xs text-muted">{label}: </span>
        <span className="text-sm text-white">{value}</span>
      </div>
    </div>
  )
}
