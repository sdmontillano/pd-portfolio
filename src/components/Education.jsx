import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 04
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          EDUCATION
        </h2>

        {education.map((edu, i) => (
          <div
            key={edu.school}
            className={`note-card ${i === 0 ? 'rot-2' : 'rot-1'}`}
            style={{ marginBottom: 16 }}
          >
            <div className="tape" style={{ top: -8, left: `${30 + i * 40}%`, transform: `rotate(${i % 2 === 0 ? 2 : -3}deg)` }} />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 12,
              flexWrap: 'wrap',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 17,
                  marginBottom: 4,
                }}>
                  {edu.school}
                </div>
                <div style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 18,
                  color: 'var(--blue)',
                }}>
                  {edu.degree}
                </div>
              </div>
              <div className="stamp" style={{ fontSize: 12, borderColor: 'var(--ink-light)', color: 'var(--ink-light)', transform: 'none', whiteSpace: 'nowrap' }}>
                {edu.year}
              </div>
            </div>

            {edu.honors && (
              <div style={{ marginTop: 10 }}>
                <span className="stamp stamp-blue" style={{ fontSize: 11, transform: 'rotate(-1deg)' }}>
                  {edu.honors}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
