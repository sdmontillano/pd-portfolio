import { useEffect, useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiBadgeCheck } from 'react-icons/hi'
import { personalInfo, summary, certifications } from '../data/portfolioData'

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

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            About Me
          </h2>
        </Reveal>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 24,
          alignItems: 'start',
        }}>
          <Reveal>
            <div className="about-card" style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(15,23,42,0.05)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              padding: 24,
            }}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, margin: 0, fontSize: 15 }}>
                {summary}
              </p>

              <h3 style={{ color: 'var(--text)', fontSize: 16, marginBottom: 12, marginTop: 20 }}>
                What I bring
              </h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ color: 'var(--muted)', lineHeight: 1.5, marginBottom: 8, fontSize: 14 }}>
                  <strong style={{ color: 'var(--text)' }}>Security-first mindset</strong> — Cisco Ethical Hacking certified, experienced with Kali Linux for vulnerability assessment
                </li>
                <li style={{ color: 'var(--muted)', lineHeight: 1.5, marginBottom: 8, fontSize: 14 }}>
                  <strong style={{ color: 'var(--text)' }}>Full-stack delivery</strong> — From React frontends to Laravel/Python backends, deployed and production-ready
                </li>
                <li style={{ color: 'var(--muted)', lineHeight: 1.5, marginBottom: 8, fontSize: 14 }}>
                  <strong style={{ color: 'var(--text)' }}>Collaborative & disciplined</strong> — Agile/Scrum, TDD, and clean code practices in every project
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="about-side" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Reveal style={{ transitionDelay: '0.1s' }}>
              <div className="profile-mini" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: 'var(--card-bg)',
                border: '1px solid rgba(15,23,42,0.05)',
                borderRadius: 14,
                padding: 16,
              }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  fontWeight: 700,
                  color: 'white',
                  flexShrink: 0,
                }}>
                  GL
                </div>
                <div>
                  <div className="name" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>
                    {personalInfo.name}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>
                    {personalInfo.title}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal style={{ transitionDelay: '0.2s' }}>
              <div className="contact-card" style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(15,23,42,0.05)',
                borderRadius: 14,
                padding: 18,
              }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: 'var(--text)' }}>
                  Contact
                </div>
                <div className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                  <HiMail style={{ color: 'var(--accent)', fontSize: 16, flexShrink: 0 }} />
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 13, textDecoration: 'none' }}>
                    {personalInfo.email}
                  </a>
                </div>
                <div className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                  <HiPhone style={{ color: 'var(--accent)', fontSize: 16, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{personalInfo.phone}</span>
                </div>
                <div className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
                  <HiLocationMarker style={{ color: 'var(--accent)', fontSize: 16, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{personalInfo.location}</span>
                </div>
              </div>
            </Reveal>

            <Reveal style={{ transitionDelay: '0.3s' }}>
              <div className="education-card" style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(15,23,42,0.05)',
                borderRadius: 14,
                padding: 18,
              }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <HiBadgeCheck style={{ color: 'var(--accent)' }} /> Certifications
                </div>
                {certifications.slice(0, 2).map((cert) => (
                  <div key={cert} style={{ fontSize: 12, color: 'var(--muted)', padding: '6px 0', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
                    {cert}
                  </div>
                ))}
                <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 8, fontWeight: 600, cursor: 'pointer' }}>
                  +{certifications.length - 2} more
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
