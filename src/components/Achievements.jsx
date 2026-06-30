import { certifications, services } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 06
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          CERTIFICATIONS
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          padding: '16px 12px',
          background: 'white',
          border: '2px solid var(--ink)',
          boxShadow: '4px 4px 0 var(--ink)',
          position: 'relative',
        }}>
          <div className="tape" style={{ top: -8, left: '40%' }} />

          {certifications.map((cert) => (
            <span key={cert.name} className="tag rot-1" style={{
              padding: '8px 14px',
              borderStyle: 'solid',
              borderWidth: 2,
              fontFamily: 'var(--font-hand)',
              fontSize: 17,
            }}>
              <span className="stamp" style={{ fontSize: 10, marginRight: 6, transform: 'rotate(-3deg)', borderWidth: 1 }}>
                CERT
              </span>
              {cert.name}
              <span style={{ color: 'var(--ink-light)', fontSize: 13, marginLeft: 4 }}>— {cert.issuer} ({cert.year})</span>
            </span>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={{
            fontFamily: 'var(--font-marker)',
            fontSize: 14,
            color: 'var(--blue)',
            marginBottom: 12,
            letterSpacing: 2,
          }}>
            SERVICES
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {services.map((svc, i) => (
              <div key={svc.name} className={`note-card ${i === 0 ? 'rot-1' : i === 1 ? 'rot-3' : 'rot-2'}`} style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 16,
                  color: 'var(--red)',
                  marginBottom: 6,
                }}>
                  &gt; {svc.name}
                </div>
                <p style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 17,
                  color: 'var(--ink-light)',
                  margin: 0,
                }}>
                  {svc.desc}
                </p>
                <span className="stamp" style={{ position: 'absolute', bottom: 8, right: 8, fontSize: 9, transform: 'rotate(5deg)', opacity: 0.5 }}>
                  AVAILABLE
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
