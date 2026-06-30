import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Expertise <span>&amp; Toolkit</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
          {skills.map((s) => (
            <div key={s.name} style={{
              padding: '14px 16px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.boxShadow = '2px 2px 0 var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 12, color: 'var(--text-light)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{s.level}%</span>
              </div>
              <div style={{ height: 3, background: 'var(--border)', borderRadius: 0 }}>
                <div style={{
                  width: `${s.level}%`,
                  height: '100%',
                  background: 'var(--red)',
                  transition: 'width 0.6s',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
