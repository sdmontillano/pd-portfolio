import { summary, stats } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 01
        </div>
        <div className="note-card rot-1" style={{ marginBottom: 24 }}>
          <div className="tape" style={{ top: -8, left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }} />

          <h2 style={{
            fontFamily: 'var(--font-marker)',
            fontSize: 28,
            margin: '0 0 12px',
          }}>
            ABOUT
          </h2>

          <p style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 20,
            lineHeight: 1.6,
            margin: 0,
            color: 'var(--ink)',
          }}>
            {summary}
          </p>

          <div style={{
            marginTop: 16,
            padding: '12px 16px',
            background: 'rgba(42,100,150,0.05)',
            borderLeft: '4px solid var(--blue)',
          }}>
            <div style={{ fontFamily: 'var(--font-marker)', fontSize: 14, color: 'var(--blue)', marginBottom: 8 }}>
              QUICK STATS
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <span style={{ fontFamily: 'var(--font-marker)', fontSize: 22, color: 'var(--red)' }}>{s.value}</span>
                  <span style={{ fontFamily: 'var(--font-hand)', fontSize: 16, color: 'var(--ink-light)', marginLeft: 4 }}>
                    {s.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
