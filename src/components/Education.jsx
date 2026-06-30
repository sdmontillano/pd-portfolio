import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">Education</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Academic <span>Background</span>
        </div>

        {education.map((edu) => (
          <div key={edu.school} className="edu-grid" style={{
            display: 'grid',
            gridTemplateColumns: '100px 1fr',
            gap: 24,
            marginBottom: 20,
            padding: '16px 20px',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)' }}>{edu.year}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{edu.school}</div>
              <div style={{ fontSize: 14, color: 'var(--text-light)', marginTop: 2 }}>{edu.degree}</div>
              {edu.honors && (
                <div style={{
                  marginTop: 8,
                  padding: '3px 10px',
                  background: 'var(--red-light)',
                  color: 'var(--red)',
                  fontSize: 12,
                  fontWeight: 500,
                  display: 'inline-block',
                }}>
                  {edu.honors}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
