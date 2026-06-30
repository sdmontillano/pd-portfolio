import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <h2>$ cat experience.log</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>cat experience.log</span>
          </div>

          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>timestamp: </span>
                <span style={{ color: 'var(--warn)' }}>{exp.period}</span>
              </div>
              <div style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>role: </span>
                <span style={{ color: 'var(--accent)' }}>{exp.role}</span>
              </div>
              <div style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>company: </span>
                <span style={{ color: 'var(--cyan)' }}>{exp.company}</span>
                <span style={{ color: 'var(--text-dim)' }}> ({exp.duration})</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 13, paddingLeft: 20, borderLeft: '2px solid var(--border)' }}>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{ marginBottom: 4, color: 'var(--text)' }}>
                    <span style={{ color: 'var(--text-dim)' }}>&gt; </span>{h}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="prompt-line" style={{ marginTop: 12, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
