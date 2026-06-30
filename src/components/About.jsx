import { summary, stats } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>$ cat about.md</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>cat about.md</span>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
            <span style={{ color: 'var(--text-muted)' }}># About Godwin D. Luna-an</span>
            <div style={{ marginTop: 8 }}>
              {summary}
            </div>
          </div>

          <table className="cmd-table">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Value</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => (
                <tr key={s.label}>
                  <td style={{ color: 'var(--text-dim)' }}>{s.label}</td>
                  <td style={{ color: 'var(--accent)' }}>{s.value}</td>
                  <td>{s.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prompt-line" style={{ marginTop: 16, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
