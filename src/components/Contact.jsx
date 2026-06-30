import { personalInfo, socials } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>$ mail --help</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>mail --help</span>
          </div>

          <div style={{ fontSize: 13, marginBottom: 20 }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: 8 }}>
              Usage: mail [options] &lt;recipient&gt;
            </div>
            <div style={{ color: 'var(--text-dim)', marginBottom: 4 }}>
              Available options:
            </div>
            <div style={{ paddingLeft: 20 }}>
              <div><span style={{ color: 'var(--cyan)' }}>--send</span>      <span style={{ color: 'var(--text-dim)' }}>Send a message</span></div>
              <div><span style={{ color: 'var(--cyan)' }}'>--call</span>      <span style={{ color: 'var(--text-dim)' }}>Make a call</span></div>
              <div><span style={{ color: 'var(--cyan)' }}'>--locate</span>    <span style={{ color: 'var(--text-dim)' }}>View location</span></div>
            </div>
          </div>

          <table className="cmd-table">
            <thead>
              <tr>
                <th>Channel</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: 'var(--accent)' }}>Email</td>
                <td style={{ color: 'var(--cyan)' }}>{personalInfo.email}</td>
                <td>
                  <a href={`mailto:${personalInfo.email}`} className="flag flag-cyan" style={{ textDecoration: 'none' }}>
                    [send]
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ color: 'var(--accent)' }}>Phone</td>
                <td>{personalInfo.phone}</td>
                <td>
                  <a href={`tel:${personalInfo.phone}`} className="flag flag-warn" style={{ textDecoration: 'none' }}>
                    [call]
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ color: 'var(--accent)' }}>Location</td>
                <td style={{ color: 'var(--warn)' }}>{personalInfo.location}</td>
                <td>
                  <span className="flag flag-green" style={{ cursor: 'default' }}>online</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: 'var(--accent)' }}>GitHub</td>
                <td style={{ color: 'var(--text-dim)' }}>/sdmontillano</td>
                <td>
                  <a href={socials.github} className="flag flag-pink" style={{ textDecoration: 'none' }}>
                    [visit]
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="prompt-line" style={{ marginTop: 20, fontSize: 13 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text-dim)' }}>mail --send</span>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            padding: 16,
            background: 'var(--surface)',
            marginTop: 8,
          }}>
            <a href={`mailto:${personalInfo.email}`} style={{
              display: 'block',
              textAlign: 'center',
              padding: '12px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              fontSize: 14,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(51,255,102,0.05)'; e.currentTarget.style.color = 'var(--accent-bright)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              {`[ SEND MAIL TO ${personalInfo.email} ]`}
            </a>
          </div>

          <div className="prompt-line" style={{ marginTop: 16, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
