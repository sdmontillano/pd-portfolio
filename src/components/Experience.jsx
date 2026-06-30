import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Experience</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Work <span>&amp; Internship</span>
        </div>

        {experience.map((exp, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 32, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)' }}>{exp.period}</div>
              <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>{exp.duration}</div>
            </div>
            <div style={{ position: 'relative', paddingLeft: 24, borderLeft: '2px solid var(--border)' }}>
              <div style={{
                position: 'absolute',
                left: -5,
                top: 6,
                width: 8,
                height: 8,
                background: 'var(--red)',
                borderRadius: '50%',
              }} />
              <div style={{ fontSize: 17, fontWeight: 600 }}>{exp.role}</div>
              <div style={{ fontSize: 14, color: 'var(--text-light)', marginTop: 2 }}>{exp.company}</div>
              <div style={{ marginTop: 10 }}>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{
                    fontSize: 14,
                    color: 'var(--text-light)',
                    paddingLeft: 16,
                    position: 'relative',
                    marginBottom: 4,
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>&mdash;</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
