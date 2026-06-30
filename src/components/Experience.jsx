import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 03
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          EXPERIENCE
        </h2>

        {experience.map((exp, i) => (
          <div key={i} className="receipt rot-2" style={{ marginBottom: 16 }}>
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <span className="stamp" style={{ fontSize: 11, transform: 'none' }}>EMPLOYMENT RECORD</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-marker)', fontSize: 18 }}>{exp.role}</div>
                <div style={{ fontFamily: 'var(--font-hand)', fontSize: 18, color: 'var(--blue)' }}>
                  {exp.company}
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-hand)', fontSize: 16, color: 'var(--ink-light)' }}>
                <div>{exp.period}</div>
                <div>{exp.duration}</div>
              </div>
            </div>

            <div style={{
              marginTop: 12,
              paddingTop: 12,
              borderTop: '1px dashed var(--ink-light)',
            }}>
              {exp.highlights.map((h, j) => (
                <div key={j} style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 17,
                  marginBottom: 4,
                  paddingLeft: 16,
                  position: 'relative',
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>&gt;</span>
                  {h}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 12, fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--ink-light)' }}>
              * receipt generated from LGU Manolo Fortich *
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
