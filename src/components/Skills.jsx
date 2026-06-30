import { skills } from '../data/portfolioData'

const rotations = ['rot-1', 'rot-2', 'rot-3', 'rot-4', 'rot-1', 'rot-3']

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 02
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          SKILLS
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          padding: 16,
          background: 'white',
          border: '2px solid var(--ink)',
          boxShadow: '4px 4px 0 var(--ink)',
          position: 'relative',
        }}>
          <div className="tape" style={{ top: -8, left: '30%', transform: 'rotate(4deg)' }} />
          <div className="tape" style={{ top: -8, right: '30%', transform: 'rotate(-3deg)' }} />

          {skills.map((s, i) => (
            <span
              key={s.name}
              className={`tag ${rotations[i % rotations.length]}`}
              style={{
                fontSize: 15,
                padding: '6px 14px',
                position: 'relative',
              }}
            >
              <span style={{ fontFamily: 'var(--font-hand)', fontWeight: 600, fontSize: 17 }}>{s.name}</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--ink-light)',
                marginLeft: 6,
              }}>
                {s.level}%
              </span>
            </span>
          ))}
        </div>

        {/* Decorative divider */}
        <div style={{
          marginTop: 20,
          textAlign: 'center',
          fontFamily: 'var(--font-hand)',
          fontSize: 18,
          color: 'var(--ink-light)',
        }}>
          ~ * ~ * ~ * ~ * ~
        </div>
      </div>
    </section>
  )
}
