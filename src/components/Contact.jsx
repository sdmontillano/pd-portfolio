import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 14,
          color: 'var(--red)',
          marginBottom: 4,
          letterSpacing: 2,
        }}>
          PAGE 07
        </div>

        <h2 style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 28,
          margin: '0 0 20px',
        }}>
          GET IN TOUCH
        </h2>

        <div style={{
          background: 'white',
          border: '3px solid var(--ink)',
          padding: '32px 24px',
          boxShadow: '6px 6px 0 var(--ink)',
          position: 'relative',
        }}>
          <div className="tape" style={{ top: -10, left: '30%', transform: 'rotate(-4deg)' }} />
          <div className="tape" style={{ top: -10, right: '30%', transform: 'rotate(2deg)' }} />

          <div style={{
            textAlign: 'center',
            fontFamily: 'var(--font-hand)',
            fontSize: 22,
            color: 'var(--ink-light)',
            marginBottom: 20,
          }}>
            ✦ send a message or just say hi ✦
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}>
            {[
              { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'var(--blue)' },
              { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'var(--green)' },
              { label: 'Location', value: personalInfo.location, color: 'var(--red)' },
            ].map((item) => (
              <div key={item.label} className="cutout" style={{
                padding: '14px 12px',
                textAlign: 'center',
                border: `2px solid ${item.color}`,
                transform: 'none',
                boxShadow: `3px 3px 0 ${item.color}20`,
              }}>
                <div style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 13,
                  color: item.color,
                  letterSpacing: 1,
                  marginBottom: 4,
                }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: 18,
                    color: 'var(--ink)',
                    textDecoration: 'underline wavy var(--red)',
                    textUnderlineOffset: 3,
                  }}>
                    {item.value}
                  </a>
                ) : (
                  <div style={{ fontFamily: 'var(--font-hand)', fontSize: 18 }}>
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct mail CTA */}
          <div style={{ textAlign: 'center' }}>
            <a href={`mailto:${personalInfo.email}`} style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'var(--red)',
              color: 'white',
              fontFamily: 'var(--font-marker)',
              fontSize: 18,
              textDecoration: 'none',
              border: '2px solid var(--ink)',
              boxShadow: '4px 4px 0 var(--ink)',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)' }}
            >
              SEND A LETTER ✉
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
