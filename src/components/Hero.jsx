import { useEffect, useRef } from 'react'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { personalInfo, quickStats } from '../data/portfolioData'

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
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

export default function Hero() {
  return (
    <section id="hero" className="hero" style={{ overflow: 'hidden', padding: '100px 0 60px', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div className="shape shape-1" style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.05,
          background: 'var(--accent)',
          width: 400,
          height: 400,
          left: '-10%',
          top: '10%',
          animation: 'float1 25s ease-in-out infinite',
        }} />
        <div className="shape shape-2" style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.05,
          background: 'var(--accent-2)',
          width: 300,
          height: 300,
          right: '-5%',
          bottom: '20%',
          animation: 'float2 20s ease-in-out infinite',
        }} />
        <div className="shape shape-3" style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.05,
          background: 'var(--accent-3)',
          width: 200,
          height: 200,
          left: '30%',
          top: '60%',
          animation: 'float3 22s ease-in-out infinite',
        }} />
      </div>

      <div className="hero-inner" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 48,
        justifyContent: 'space-between',
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="hero-copy" style={{ flex: 1, minWidth: 260 }}>
          <Reveal>
            <p style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, margin: '0 0 8px', letterSpacing: '0.5px' }}>
              Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.1s' }}>
            <h1 className="hero-name" style={{
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.05,
              margin: 0,
              background: 'linear-gradient(135deg, var(--text) 0, var(--accent) 50%, var(--accent-2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {personalInfo.name}
            </h1>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.2s' }}>
            <p className="hero-title" style={{ color: 'var(--accent)', fontSize: 20, fontWeight: 700, margin: '12px 0 0' }}>
              {personalInfo.title}
            </p>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.3s' }}>
            <p className="hero-tagline" style={{ color: 'var(--accent-2)', fontSize: 16, fontWeight: 600, margin: '8px 0 0' }}>
              {personalInfo.subtitle}
            </p>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.4s' }}>
            <p className="hero-lead" style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.7, marginTop: 20, maxWidth: 600 }}>
              {personalInfo.tagline}
            </p>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.5s' }}>
            <div className="hero-actions" style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                <HiMail /> Get in Touch
              </a>
              <a href={`tel:${personalInfo.phone}`} className="btn btn-ghost">
                <HiLocationMarker /> {personalInfo.location}
              </a>
            </div>
          </Reveal>

          <Reveal style={{ transitionDelay: '0.6s' }}>
            <ul className="quick-stats" style={{
              display: 'flex',
              gap: 28,
              listStyle: 'none',
              padding: 0,
              marginTop: 24,
              flexWrap: 'wrap',
            }}>
              {quickStats.map((stat) => (
                <li key={stat.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--muted)',
                }}>
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'inline-block',
                  }} />
                  {stat.value} {stat.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="hero-photo" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '0 8px',
        }}>
          <div
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3))',
              filter: 'blur(20px)',
              opacity: 0.15,
              animation: 'photoGlow 4s ease-in-out infinite',
            }}
          />
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'var(--card-bg)',
              border: '4px solid var(--glass)',
              boxShadow: '0 20px 60px rgba(59,130,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
              fontSize: 72,
              fontWeight: 700,
              color: 'var(--accent)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(59,130,246,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(59,130,246,0.2)'
            }}
          >
            {personalInfo.initials}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        color: 'var(--muted)',
        fontSize: 12,
        fontWeight: 600,
      }}>
        <span>Scroll</span>
        <div style={{
          width: 24,
          height: 40,
          border: '2px solid var(--muted)',
          borderRadius: 12,
          position: 'relative',
        }}>
          <div style={{
            width: 3,
            height: 8,
            background: 'var(--accent)',
            borderRadius: 3,
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'scrollWheel 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
