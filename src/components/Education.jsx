import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Education</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Academic <span>Background</span>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="edu-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr',
                gap: 24,
                padding: '16px 20px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ borderColor: 'var(--red)', x: 4 }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)' }}>{edu.year}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{edu.school}</div>
                <div style={{ fontSize: 14, color: 'var(--text-light)', marginTop: 2 }}>{edu.degree}</div>
                {edu.honors && (
                  <div style={{
                    marginTop: 8,
                    padding: '3px 10px',
                    background: 'var(--red-light)',
                    color: 'var(--red)',
                    fontSize: 12,
                    fontWeight: 500,
                    display: 'inline-block',
                  }}>
                    {edu.honors}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
