import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { summary, stats } from '../data/portfolioData'

function Counter({ value, label, unit }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const steps = 30
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.round(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      style={{ padding: '12px 16px', border: '1px solid var(--border)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>{count}</div>
      <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 2 }}>{unit}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">About</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Background <span>&amp; Profile</span>
          </div>
        </motion.div>

        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ fontSize: 15, color: 'var(--text-light)', lineHeight: 1.9, margin: 0 }}>
              {summary}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontStyle: 'italic',
                color: 'var(--text)',
                lineHeight: 1.6,
                padding: '16px 20px',
                borderLeft: '3px solid var(--red)',
                background: 'var(--red-light)',
                marginBottom: 20,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &ldquo;Security-first mindset in every line of code.&rdquo;
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} unit={s.unit} label={s.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
