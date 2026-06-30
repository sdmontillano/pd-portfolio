import { useEffect, useRef } from 'react'
import { HiCode, HiShieldCheck, HiCog } from 'react-icons/hi'
import { services, stats } from '../data/portfolioData'

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

const iconMap = {
  code: HiCode,
  shield: HiShieldCheck,
  gear: HiCog,
}

function ServiceCard({ title, description, icon }) {
  const Icon = iconMap[icon] || HiCode

  return (
    <Reveal>
      <div className="service-card" style={{
        background: 'var(--card-bg)',
        border: '1px solid rgba(15,23,42,0.05)',
        borderRadius: 'var(--radius)',
        padding: 28,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div className="service-icon" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 52,
          height: 52,
          borderRadius: 12,
          background: 'rgba(59,130,246,0.1)',
          fontSize: 24,
          color: 'var(--accent)',
          marginBottom: 16,
        }}>
          <Icon />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: '0 0 10px' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <>
      <section style={{ scrollMarginTop: 80 }}>
        <div className="stats-section" style={{
          background: 'var(--card-bg)',
          borderTop: '1px solid rgba(15,23,42,0.05)',
          borderBottom: '1px solid rgba(15,23,42,0.05)',
          padding: '30px 0',
        }}>
          <div className="container">
            <div className="stats-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: 60, justifyContent: 'center' }}>
              {stats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div className="stat-value" style={{ color: 'var(--accent)', fontSize: 28, fontWeight: 800, lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div className="stat-label" style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: 6 }}>
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
              What I Can Do
            </h2>
          </Reveal>

          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            marginTop: 24,
          }}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
