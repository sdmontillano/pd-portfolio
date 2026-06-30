import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2>$ ls /skills/ -la</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>ls /skills/ -la</span>
          </div>

          <table className="cmd-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
                <th>Bar</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.name}>
                  <td style={{ color: 'var(--cyan)', fontWeight: 500 }}>{s.name}</td>
                  <td style={{ color: 'var(--text)' }}>{s.level}%</td>
                  <td style={{ width: '40%' }}>
                    <div style={{
                      background: 'var(--surface-2)',
                      height: 6,
                      width: '100%',
                      border: '1px solid var(--border)',
                    }}>
                      <div style={{
                        width: `${s.level}%`,
                        height: '100%',
                        background: s.level >= 80 ? 'var(--accent)' : s.level >= 70 ? 'var(--cyan)' : 'var(--text-dim)',
                      }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prompt-line" style={{ marginTop: 16, fontSize: 13 }}>
            <span style={{ color: 'var(--text-dim)' }}>total: {skills.length} entries</span>
          </div>

          <div className="prompt-line" style={{ marginTop: 8, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
