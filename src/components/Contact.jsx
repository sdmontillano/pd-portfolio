import { useEffect, useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

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

export default function Contact() {
  return (
    <section id="contact" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            Get in Touch
          </h2>
        </Reveal>

        <div className="contact-container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 40,
          marginTop: 24,
        }}>
          <Reveal>
            <div className="contact-info-card" style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(15,23,42,0.05)',
              borderRadius: 'var(--radius)',
              padding: 28,
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', margin: '0 0 12px' }}>
                Let&apos;s talk
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: 24, fontSize: 14 }}>
                Have a project in mind or just want to connect? I&apos;m always open to discussing new opportunities.
              </p>

              <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <HiMail className="contact-icon" style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0 }} />
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: 14 }}>
                    {personalInfo.email}
                  </a>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <HiPhone className="contact-icon" style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0 }} />
                  <span style={{ color: 'var(--muted)', fontSize: 14 }}>{personalInfo.phone}</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <HiLocationMarker className="contact-icon" style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0 }} />
                  <span style={{ color: 'var(--muted)', fontSize: 14 }}>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.1s' }}>
            <form
              className="contact-form-full"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(15,23,42,0.05)',
                borderRadius: 'var(--radius)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input-field"
                    style={{
                      padding: '10px 12px',
                      border: '1px solid rgba(15,23,42,0.06)',
                      borderRadius: 10,
                      fontSize: 14,
                      outline: 'none',
                      background: 'var(--bg)',
                      color: 'var(--text)',
                      transition: 'border-color 0.12s ease, box-shadow 0.12s ease',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 6px rgba(37,99,235,0.06)' }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
                  />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input-field"
                    style={{
                      padding: '10px 12px',
                      border: '1px solid rgba(15,23,42,0.06)',
                      borderRadius: 10,
                      fontSize: 14,
                      outline: 'none',
                      background: 'var(--bg)',
                      color: 'var(--text)',
                      transition: 'border-color 0.12s ease, box-shadow 0.12s ease',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 6px rgba(37,99,235,0.06)' }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
                  />
                </div>
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="input-field"
                  style={{
                    padding: '10px 12px',
                    border: '1px solid rgba(15,23,42,0.06)',
                    borderRadius: 10,
                    fontSize: 14,
                    outline: 'none',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    transition: 'border-color 0.12s ease, box-shadow 0.12s ease',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 6px rgba(37,99,235,0.06)' }}
                  onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
                />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-field"
                  style={{
                    padding: '10px 12px',
                    border: '1px solid rgba(15,23,42,0.06)',
                    borderRadius: 10,
                    fontSize: 14,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    transition: 'border-color 0.12s ease, box-shadow 0.12s ease',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 6px rgba(37,99,235,0.06)' }}
                  onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
                />
              </div>
              <div className="form-actions" style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  <HiMail /> Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
