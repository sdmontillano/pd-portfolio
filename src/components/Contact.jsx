import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Contact</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Get in <span>Touch</span>
          </div>
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 32px' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.8 }}>
            Have a project in mind or just want to connect? I&apos;m always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, isLink: true },
            { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, isLink: true },
            { label: 'Location', value: personalInfo.location, isLink: false },
          ].map((item, i) => {
            const Wrapper = item.isLink ? motion.a : motion.div
            const extraProps = item.isLink ? { href: item.href } : {}
            return (
              <Wrapper
                key={item.label}
                {...extraProps}
                variants={cardVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.15 + i * 0.08 }}
                style={{
                  padding: '20px 16px',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  background: 'var(--bg)',
                  display: 'block',
                }}
                whileHover={{ borderColor: 'var(--red)', background: 'var(--red-light)', y: -3 }}
              >
                <div style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
              </Wrapper>
            )
          })}
        </div>

        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              background: 'var(--text)',
              color: 'white',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
            }}
            whileHover={{ background: 'var(--red)', scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            SEND MESSAGE
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
