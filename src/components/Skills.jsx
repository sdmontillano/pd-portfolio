import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/portfolioData'

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

function Reveal({ children, style }) {
  const ref = useRef(null)
  useReveal(ref)
  return <div ref={ref} className="reveal" style={style}>{children}</div>
}

function SkillBar({ name, level, icon: Icon }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="skill-row" style={{
      background: 'var(--card-bg)',
      border: '1px solid rgba(15,23,42,0.05)',
      borderRadius: 14,
      padding: '16px 18px',
      transition: 'all 0.25s ease',
    }}>
      <div className="skill-header" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        {Icon && <Icon style={{ fontSize: 20, color: 'var(--accent)' }} />}
        <span className="skill-name" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{name}</span>
      </div>
      <div className="skill-bar" style={{
        background: 'rgba(15,23,42,0.06)',
        borderRadius: 10,
        height: 8,
        overflow: 'hidden',
      }}>
        <div
          className="skill-fill"
          style={{
            background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
            borderRadius: 10,
            height: '100%',
            width: visible ? `${level}%` : '0%',
            transition: 'width 0.9s cubic-bezier(0.2, 0.9, 0.2, 1)',
          }}
        />
      </div>
      <div className="skill-pct" style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 700, marginTop: 8, textAlign: 'right' }}>
        {level}%
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            Skills & Expertise
          </h2>
        </Reveal>

        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          marginTop: 24,
        }}>
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
