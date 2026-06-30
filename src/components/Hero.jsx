import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 60,
    }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="vermillion-bar" />
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--text-light)', fontStyle: 'italic', marginBottom: 12 }}>
              Introducing
            </div>
            <h1 style={{
              fontSize: 48,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}>
              {personalInfo.name}
            </h1>
            <div style={{
              fontSize: 18,
              fontWeight: 400,
              color: 'var(--text-light)',
              marginTop: 12,
              lineHeight: 1.5,
              maxWidth: 400,
            }}>
              <span style={{ color: 'var(--red)', fontWeight: 600 }}>IT Graduate</span> &middot; Full-Stack Developer &middot; Ethical Hacker
            </div>
            <p style={{
              fontSize: 14,
              color: 'var(--text-light)',
              marginTop: 16,
              lineHeight: 1.8,
              maxWidth: 360,
            }}>
              {personalInfo.tagline}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href={`mailto:${personalInfo.email}`} style={{
                padding: '12px 28px',
                background: 'var(--text)',
                color: 'white',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)' }}
              >
                CONTACT
              </a>
              <a href={`tel:${personalInfo.phone}`} style={{
                padding: '12px 28px',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Right — Hanko stamp + details */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div className="hanko" style={{ width: 80, height: 80, fontSize: 14 }}>
              GL
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 4 }}>based in</div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{personalInfo.location}</div>
            </div>
            <div style={{ width: '60%', height: 1, background: 'var(--border)' }} />
            <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8 }}>
              <div>{personalInfo.email}</div>
              <div>{personalInfo.phone}</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span className="tag" style={{ fontSize: 11 }}>Cisco Ethical Hacker</span>
              <span className="tag" style={{ fontSize: 11 }}>Kali Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
