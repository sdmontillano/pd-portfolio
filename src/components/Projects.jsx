import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Projects</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Featured <span>Work</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {projects.map((p) => (
            <div key={p.title} style={{
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{
                height: 140,
                background: 'var(--red-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--red)',
                  background: 'var(--surface)',
                  padding: '2px 10px',
                  border: '1px solid var(--border)',
                }}>
                  {p.role}
                </div>
                <span style={{ fontSize: 28, fontWeight: 300, color: 'var(--text-light)' }}>{p.title.charAt(0)}</span>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.7, margin: '0 0 12px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: 11, padding: '2px 8px' }}>{t}</span>
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
