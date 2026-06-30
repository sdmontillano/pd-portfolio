import { useState } from 'react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>$ ./projects --list</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>./projects --list</span>
          </div>

          {projects.map((p, i) => (
            <div key={p.title} style={{ marginBottom: 20 }}>
              <div
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  cursor: 'pointer',
                  padding: '10px 12px',
                  border: '1px solid var(--border)',
                  background: expanded === i ? 'var(--surface)' : 'transparent',
                  fontSize: 13,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ color: 'var(--text-dim)' }}>{i + 1}. </span>
                    <span style={{ color: 'var(--accent)' }}>{p.title}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span className="flag flag-green">{p.role}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>
                      [{expanded === i ? '-' : '+'}]
                    </span>
                  </div>
                </div>
              </div>

              {expanded === i && (
                <div className="code-block" style={{ margin: 0, borderTop: 'none' }}>
                  <span className="code-line">
                    <span className="code-comment">/* {p.description} */</span>
                  </span>
                  <span className="code-line">&nbsp;</span>
                  <span className="code-line">
                    <span className="code-keyword">const</span> stack = [
                  </span>
                  {p.tech.map((t) => (
                    <span key={t} className="code-line" style={{ paddingLeft: 20 }}>
                      <span className="code-string">'{t}'</span>,
                    </span>
                  ))}
                  <span className="code-line">];</span>
                  <span className="code-line">&nbsp;</span>
                  <span className="code-line">
                    <span className="code-comment">// Click title to toggle details</span>
                  </span>
                </div>
              )}
            </div>
          ))}

          <div className="prompt-line" style={{ marginTop: 8, fontSize: 13 }}>
            <span style={{ color: 'var(--text-dim)' }}>{projects.length} project(s) found</span>
          </div>

          <div className="prompt-line" style={{ marginTop: 8, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
