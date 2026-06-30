import { summary, stats } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">About</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Background <span>&amp; Profile</span>
        </div>

        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <p style={{ fontSize: 15, color: 'var(--text-light)', lineHeight: 1.9, margin: 0 }}>
              {summary}
            </p>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 20,
              fontStyle: 'italic',
              color: 'var(--text)',
              lineHeight: 1.6,
              padding: '16px 20px',
              borderLeft: '3px solid var(--red)',
              background: 'var(--red-light)',
              marginBottom: 20,
            }}>
              &ldquo;Security-first mindset in every line of code.&rdquo;
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  padding: '12px 16px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 2 }}>{s.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
