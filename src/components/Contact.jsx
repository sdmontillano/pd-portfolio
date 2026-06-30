import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Contact</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Get in <span>Touch</span>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 32px' }}>
          <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.8 }}>
            Have a project in mind or just want to connect? I&apos;m always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
          <a href={`mailto:${personalInfo.email}`} style={{
            padding: '20px 16px',
            border: '1px solid var(--border)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'var(--text)',
            transition: 'all 0.2s',
            background: 'var(--bg)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.background = 'var(--red-light)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg)' }}
          >
            <div style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Email</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{personalInfo.email}</div>
          </a>
          <a href={`tel:${personalInfo.phone}`} style={{
            padding: '20px 16px',
            border: '1px solid var(--border)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'var(--text)',
            transition: 'all 0.2s',
            background: 'var(--bg)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.background = 'var(--red-light)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg)' }}
          >
            <div style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Phone</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{personalInfo.phone}</div>
          </a>
          <div style={{
            padding: '20px 16px',
            border: '1px solid var(--border)',
            textAlign: 'center',
            color: 'var(--text)',
            background: 'var(--bg)',
          }}>
            <div style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Location</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{personalInfo.location}</div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href={`mailto:${personalInfo.email}`} style={{
            display: 'inline-block',
            padding: '14px 40px',
            background: 'var(--text)',
            color: 'white',
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)' }}
          >
            SEND MESSAGE
          </a>
        </div>
      </div>
    </section>
  )
}
