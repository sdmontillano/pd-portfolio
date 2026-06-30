import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer" style={{
      borderTop: '1px solid rgba(15,23,42,0.06)',
      padding: '40px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg), transparent)',
    }}>
      <div className="footer-inner" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 'var(--container)',
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
          }}>
            GL
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)' }}>
            &copy; {new Date().getFullYear()} Godwin D. Luna-an
          </span>
        </div>

        <div className="socials" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 10,
              color: 'var(--muted)',
              fontSize: 18,
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(139,92,246,0.1)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.background = 'transparent' }}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 10,
              color: 'var(--muted)',
              fontSize: 18,
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(139,92,246,0.1)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.background = 'transparent' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <span className="sep" style={{ color: 'var(--muted)', margin: '0 4px' }}>|</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>
            Built with React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
