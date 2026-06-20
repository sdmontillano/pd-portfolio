import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">07.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted text-sm md:text-base mb-12 leading-relaxed">
              Have a project in mind or just want to connect? I&apos;m always open to discussing new opportunities and collaborations.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <ContactCard
                icon={<HiMail />}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactCard
                icon={<HiPhone />}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
              />
              <ContactCard
                icon={<HiLocationMarker />}
                label="Location"
                value={personalInfo.location}
              />
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#0a0a0f] rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <HiMail className="text-lg" />
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href }) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-2xl text-accent mb-3">{icon}</div>
        <p className="text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </motion.div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }
  return content
}
