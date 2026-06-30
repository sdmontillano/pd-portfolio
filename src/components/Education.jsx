import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header" style={{ borderBottom: 'none', marginBottom: 0 }}>
          <h2>$ cat education.dat</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>cat education.dat</span>
          </div>

          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 16, padding: 12, border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                <span style={{ color: 'var(--text-muted)' }}>year: </span>
                <span style={{ color: 'var(--warn)' }}>{edu.year}</span>
              </div>
              <div style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>school: </span>
                <span style={{ color: 'var(--cyan)' }}>{edu.school}</span>
              </div>
              <div style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>degree: </span>
                <span style={{ color: 'var(--text)' }}>{edu.degree}</span>
              </div>
              {edu.honors && (
                <div style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--text-muted)' }}>honors: </span>
                  <span style={{ color: 'var(--accent)' }}>{edu.honors}</span>
                </div>
              )}
            </div>
          ))}

          <div className="prompt-line" style={{ marginTop: 8, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
