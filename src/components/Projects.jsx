import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 05
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          PROJECTS
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`polaroid ${i === 0 ? 'rot-2' : 'rot-3'}`}
              style={{ position: 'relative' }}
            >
              <div className="tape" style={{ top: -6, left: '50%', transform: 'translateX(-50%) rotate(-1deg)' }} />

              {/* Photo placeholder */}
              <div style={{
                height: 160,
                background: `linear-gradient(135deg, rgba(204,51,68,0.08), rgba(42,100,150,0.08))`,
                border: '1px solid var(--paper-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-marker)',
                fontSize: 12,
                color: 'var(--ink-light)',
              }}>
                [ {p.title.substring(0, 16)}... ]
              </div>

              {/* Caption */}
              <div style={{ marginTop: 8 }}>
                <div style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 15,
                  color: 'var(--ink)',
                }}>
                  {p.title}
                </div>
                <span className="stamp" style={{ fontSize: 10, padding: '2px 8px', marginTop: 4, display: 'inline-block' }}>
                  {p.role}
                </span>
                <p style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 16,
                  color: 'var(--ink-light)',
                  margin: '6px 0',
                  lineHeight: 1.4,
                }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="cutout" style={{ fontSize: 11, padding: '2px 6px', transform: 'none' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
