import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

const container = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const card = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Projects</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Featured <span>Work</span>
          </div>
        </motion.div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
          variants={container}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              style={{ border: '1px solid var(--border)', background: 'var(--bg)', cursor: 'default' }}
              whileHover={{ borderColor: 'var(--red)', y: -6, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div style={{
                height: 140,
                background: 'var(--red-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--red)',
                    background: 'var(--surface)',
                    padding: '2px 10px',
                    border: '1px solid var(--border)',
                  }}
                  whileHover={{ background: 'var(--red)', color: 'white' }}
                >
                  {p.role}
                </motion.div>
                <span style={{ fontSize: 28, fontWeight: 300, color: 'var(--text-light)' }}>{p.title.charAt(0)}</span>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.7, margin: '0 0 12px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: 11, padding: '2px 8px' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
