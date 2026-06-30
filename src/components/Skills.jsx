import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'

function SkillCard({ name, level, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      style={{
        padding: '14px 16px',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ borderColor: 'var(--red)', boxShadow: '2px 2px 0 var(--red)', y: -2 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 12, color: 'var(--text-light)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: 'var(--border)', borderRadius: 0, overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: 'var(--red)', borderRadius: 0 }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.04 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Skills</div>
          <div className="vermillion-bar" />
          <div className="section-title">
            Expertise <span>&amp; Toolkit</span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
          {skills.map((s, i) => (
            <SkillCard key={s.name} name={s.name} level={s.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
