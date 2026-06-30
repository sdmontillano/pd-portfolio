import { useEffect, useRef, useState } from 'react'
import { HiCode, HiX, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

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

function Modal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        className="toast-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface)',
          borderRadius: 20,
          padding: 28,
          maxWidth: 720,
          width: '100%',
          maxHeight: 'calc(100vh - 96px)',
          overflow: 'auto',
          border: '1px solid rgba(15,23,42,0.1)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          animation: 'slideUp 0.3s ease',
        }}
      >
        <div className="modal-header" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          paddingBottom: 16,
          borderBottom: '1px solid rgba(15,23,42,0.1)',
          marginBottom: 16,
        }}>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>
            {project.title}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 24,
              color: 'var(--muted)',
              padding: 4,
              display: 'flex',
            }}
            aria-label="Close"
          >
            <HiX />
          </button>
        </div>

        <div className="modal-body">
          <div className="project-card-media" style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.08))',
            borderRadius: 12,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
          }}>
            <HiCode style={{ fontSize: 48, color: 'var(--accent)', opacity: 0.4 }} />
          </div>

          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 12px' }}>
            {project.role}
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 16px', fontSize: 14 }}>
            {project.description}
          </p>

          <h4 style={{ color: 'var(--text)', fontSize: 15, fontWeight: 700, margin: '0 0 10px' }}>Tech Stack</h4>
          <div className="project-card-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {project.tech.map((t) => (
              <span key={t} className="tech-badge" style={{
                background: 'rgba(139,92,246,0.1)',
                borderRadius: 20,
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--accent)',
                display: 'inline-block',
              }}>
                {t}
              </span>
            ))}
          </div>

          {project.impact && (
            <p style={{ color: 'var(--accent-2)', fontSize: 14, fontWeight: 600 }}>
              Impact: {project.impact}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" style={{ scrollMarginTop: 80, padding: '60px 0' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title" style={{ fontSize: 20, fontWeight: 700, margin: '0 0 18px' }}>
            Featured Projects
          </h2>
        </Reveal>

        <div className="featured-projects" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 28,
          marginTop: 24,
        }}>
          {projects.map((project, i) => (
            <Reveal key={project.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div
                className="project-card"
                onClick={() => setSelected(project)}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid rgba(15,23,42,0.05)',
                  borderRadius: 20,
                  boxShadow: 'var(--shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = ''
                }}
              >
                <div className="project-card-media" style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.08))',
                  borderBottom: '1px solid rgba(15,23,42,0.05)',
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                }}>
                  <HiCode style={{ fontSize: 48, color: 'var(--accent)', opacity: 0.3 }} />
                </div>
                <div className="project-card-content" style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="project-card-title" style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', margin: '0 0 6px' }}>
                    {project.title}
                  </h3>
                  <p className="project-card-role" style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 12px' }}>
                    {project.role}
                  </p>
                  <p className="project-card-impact" style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>
                    {project.description.length > 120 ? project.description.slice(0, 120) + '...' : project.description}
                  </p>
                  <div className="project-card-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-badge" style={{
                        background: 'rgba(139,92,246,0.1)',
                        borderRadius: 20,
                        padding: '4px 12px',
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--accent)',
                        display: 'inline-block',
                      }}>
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-badge" style={{
                        background: 'rgba(15,23,42,0.05)',
                        borderRadius: 20,
                        padding: '4px 12px',
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--muted)',
                        display: 'inline-block',
                      }}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="project-card-actions" style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
                    <span className="btn btn-primary" style={{ flex: 1, textAlign: 'center', fontSize: 14, padding: '12px 16px' }}>
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  )
}
