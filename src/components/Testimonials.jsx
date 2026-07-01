import { motion } from 'framer-motion'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Testimonials</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            What People <span>Say</span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{
                padding: '24px',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                position: 'relative',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ borderColor: 'var(--red)', y: -4 }}
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 36,
                lineHeight: 1,
                color: 'var(--red)',
                opacity: 0.2,
                position: 'absolute',
                top: 12,
                left: 16,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>&ldquo;</div>
              <p style={{
                fontSize: 14,
                color: 'var(--text-light)',
                lineHeight: 1.8,
                fontStyle: 'italic',
                margin: '0 0 16px',
                position: 'relative',
                zIndex: 1,
              }}>
                {t.quote}
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-light)' }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
