import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const subject = form.subject.value || 'Portfolio Inquiry'
    const message = form.message.value
    const body = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

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
            Have a project in mind or just want to connect? Reach out directly or use the form below.
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

        <motion.form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 520,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                padding: '10px 14px',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--text)',
                fontSize: 14,
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                padding: '10px 14px',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--text)',
                fontSize: 14,
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            style={{
              padding: '10px 14px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: 14,
              fontFamily: 'var(--font-sans)',
              outline: 'none',
            }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            style={{
              padding: '10px 14px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: 14,
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              resize: 'vertical',
            }}
          />
          <motion.button
            type="submit"
            style={{
              padding: '12px 32px',
              background: '#1a1a1a',
              color: 'white',
              border: 'none',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
            whileHover={{ background: 'var(--red)', scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {sent ? '✓ OPENS YOUR EMAIL APP' : 'SEND MESSAGE'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
