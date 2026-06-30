import { useEffect, useRef } from 'react'
import { education } from '../data/portfolioData'

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

export default function Education() {
  return (
    <section id="education" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            Education
          </h2>
        </Reveal>

        <div className="education-timeline" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
          {education.map((edu, i) => (
            <Reveal key={edu.school} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="education-item" style={{
                display: 'flex',
                gap: 20,
                padding: 18,
                background: 'var(--card-bg)',
                border: '1px solid rgba(15,23,42,0.05)',
                borderRadius: 14,
                transition: 'all 0.25s ease',
              }}>
                <div className="education-year" style={{
                  color: 'var(--accent)',
                  fontSize: 14,
                  fontWeight: 700,
                  minWidth: 100,
                  flexShrink: 0,
                }}>
                  {edu.year}
                </div>
                <div className="education-content">
                  <div className="education-school" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                    {edu.school}
                  </div>
                  <div className="education-degree" style={{ color: 'var(--muted)', fontSize: 14, marginTop: 2 }}>
                    {edu.degree}
                  </div>
                  {edu.honors && (
                    <div style={{
                      display: 'inline-block',
                      marginTop: 8,
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      background: 'rgba(139,92,246,0.1)',
                      color: 'var(--accent)',
                    }}>
                      {edu.honors}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
