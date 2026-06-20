import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function SkillCard({ name, icon: Icon }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-surface rounded-xl p-4 border border-white/5 hover:border-accent/30 transition-all duration-300 cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-3">
        {Icon && <Icon className="text-xl text-accent group-hover:scale-110 transition-transform duration-300" />}
        <span className="text-sm font-medium text-muted group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </motion.div>
  )
}

function SkillSection({ title, items, accent }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent" />
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-wrap gap-2"
      >
        {items.map((item) => (
          <SkillCard key={item.name} name={item.name} icon={item.icon} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Skills & Tools</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <SkillSection title="Tech Stack" items={skills.techStack} accent="accent" />
            <SkillSection title="Security" items={skills.security} accent="accent" />
            <SkillSection title="Tools & Platforms" items={skills.tools} accent="accent" />
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Methodologies
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-wrap gap-2"
              >
                {skills.methodologies.map((m) => (
                  <motion.span
                    key={m}
                    variants={cardVariants}
                    className="px-4 py-2 bg-surface rounded-lg border border-white/5 text-sm text-muted hover:border-accent/30 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {m}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
