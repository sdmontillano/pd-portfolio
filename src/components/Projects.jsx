import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
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
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}
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
              whileHover={{ borderColor: 'var(--red)', y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
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
                <span style={{ fontSize: 32, fontWeight: 300, color: 'var(--text-light)' }}>{p.title.charAt(0)}</span>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.7, margin: '0 0 12px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 14 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: 11, padding: '2px 8px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                  <motion.a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'var(--text-light)',
                      textDecoration: 'none',
                    }}
                    whileHover={{ color: 'var(--red)' }}
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </motion.a>
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'var(--text-light)',
                      textDecoration: 'none',
                    }}
                    whileHover={{ color: 'var(--red)' }}
                  >
                    <FiGithub size={14} /> Source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
