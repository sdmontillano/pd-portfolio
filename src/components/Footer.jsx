export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '24px 0',
      marginTop: 40,
    }}>
      <div className="container">
        <div className="prompt-line" style={{ justifyContent: 'center', fontSize: 12, margin: 0 }}>
          <span className="prompt-user">guest</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">godwin-portfolio</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span style={{ color: 'var(--text-muted)' }}>exit</span>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: 12,
          color: 'var(--text-muted)',
          marginTop: 12,
        }}>
          <span>&copy; {new Date().getFullYear()} Godwin D. Luna-an</span>
          <span style={{ margin: '0 8px', color: 'var(--text-dim)' }}>|</span>
          <span>Built with React + Tailwind</span>
          <span style={{ margin: '0 8px', color: 'var(--text-dim)' }}>|</span>
          <span style={{ color: 'var(--text-dim)' }}>PID: 1 — running</span>
        </div>

        <div className="prompt-line" style={{ justifyContent: 'center', marginTop: 12, fontSize: 12 }}>
          <span className="blink" style={{ color: 'var(--text)' }}>_</span>
        </div>
      </div>
    </footer>
  )
}
