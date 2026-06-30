import { motion } from 'framer-motion'
import { certifications, services } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Credentials</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Certifications <span>&amp; Services</span>
          </div>
        </motion.div>

        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 12px', color: 'var(--text-light)' }}>CERTIFICATIONS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    fontSize: 13,
                    gap: 12,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                  whileHover={{ borderColor: 'var(--red)', x: 4 }}
                >
                  <span style={{ flex: 1 }}>{cert.name}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: 12, whiteSpace: 'nowrap' }}>{cert.issuer}</span>
                  <span style={{ color: 'var(--red)', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}>{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 12px', color: 'var(--text-light)' }}>SERVICES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  style={{
                    padding: '14px 16px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    borderLeft: '3px solid var(--red)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
                  whileHover={{ x: 4, borderColor: 'var(--red)' }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{svc.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-light)' }}>{svc.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
