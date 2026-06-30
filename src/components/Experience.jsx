import { useEffect, useRef } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { experience } from '../data/portfolioData'

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

export default function Experience() {
  return (
    <section id="experience" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            Experience
          </h2>
        </Reveal>

        <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
          <Reveal>
            <div className="timeline-item" style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(15,23,42,0.05)',
              borderRadius: 14,
              padding: 18,
              transition: 'all 0.25s ease',
            }}>
              <div className="timeline-head" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span className="role" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                  {experience.role}
                </span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  color: 'var(--muted)',
                  fontWeight: 600,
                }}>
                  <HiCalendar />
                  {experience.period}
                </span>
              </div>
              <div style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, marginTop: 4 }}>
                {experience.company}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 2 }}>
                {experience.department} &middot; {experience.duration}
              </div>
              <p className="timeline-desc" style={{ color: 'var(--muted)', lineHeight: 1.6, marginTop: 10, fontSize: 14 }}>
                {experience.highlights.map((h, i) => (
                  <span key={i} style={{ display: 'block', marginBottom: 4 }}>
                    &bull; {h}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
