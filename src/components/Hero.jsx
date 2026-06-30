import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 60,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Tape decorations */}
        <div className="tape" style={{ top: -10, left: '20%', transform: 'rotate(-5deg)' }} />
        <div className="tape" style={{ top: -10, right: '20%', transform: 'rotate(3deg)' }} />

        {/* Hero content */}
        <div style={{
          background: 'white',
          border: '3px solid var(--ink)',
          padding: '40px 32px',
          position: 'relative',
          boxShadow: '8px 8px 0 var(--ink)',
        }}>
          {/* Corner fold */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 30px 30px 0',
            borderColor: 'transparent var(--paper) transparent transparent',
          }} />

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-marker)',
            fontSize: 48,
            margin: 0,
            lineHeight: 1.1,
            color: 'var(--ink)',
          }}>
            {personalInfo.name}
          </h1>

          {/* Scribbled tagline */}
          <div style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 22,
            color: 'var(--red)',
            margin: '8px 0 4px',
            textDecoration: 'underline wavy var(--red)',
            textUnderlineOffset: 4,
          }}>
            {personalInfo.title}
          </div>

          {/* Stamps row */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '16px 0' }}>
            <span className="stamp stamp-animate">ETHICAL HACKER</span>
            <span className="stamp stamp-blue stamp-animate" style={{ animationDelay: '0.1s' }}>FULL-STACK</span>
            <span className="stamp stamp-animate" style={{ animationDelay: '0.2s', borderColor: 'var(--green)', color: 'var(--green)' }}>SECURITY</span>
          </div>

          {/* Info row - cutout style */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 16,
            fontFamily: 'var(--font-hand)',
            fontSize: 18,
          }}>
            <span className="cutout rot-1">{personalInfo.location}</span>
            <span className="cutout rot-2">{personalInfo.email}</span>
            <span className="cutout rot-3">{personalInfo.phone}</span>
          </div>

          {/* Quote */}
          <div style={{
            marginTop: 20,
            padding: '12px 16px',
            borderLeft: '4px solid var(--red)',
            fontFamily: 'var(--font-hand)',
            fontSize: 20,
            color: 'var(--ink-light)',
            background: 'rgba(204,51,68,0.03)',
          }}>
            &ldquo;{personalInfo.tagline}&rdquo;
          </div>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            gap: 12,
            marginTop: 24,
            flexWrap: 'wrap',
          }}>
            <a href={`mailto:${personalInfo.email}`} style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--ink)',
              color: 'var(--paper)',
              fontFamily: 'var(--font-marker)',
              fontSize: 16,
              textDecoration: 'none',
              border: '2px solid var(--ink)',
              boxShadow: '3px 3px 0 var(--red)',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.boxShadow = '3px 3px 0 var(--red)' }}
            >
              SEND MAIL
            </a>
            <a href={`tel:${personalInfo.phone}`} style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'transparent',
              color: 'var(--ink)',
              fontFamily: 'var(--font-marker)',
              fontSize: 16,
              textDecoration: 'none',
              border: '2px solid var(--ink)',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
            >
              CALL ME
            </a>
          </div>
        </div>

        {/* Decorative zigzag strip */}
        <div style={{
          marginTop: 16,
          textAlign: 'center',
          fontFamily: 'var(--font-marker)',
          fontSize: 12,
          color: 'var(--ink-light)',
          letterSpacing: 4,
        }}>
          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
        </div>
      </div>
    </section>
  )
}
