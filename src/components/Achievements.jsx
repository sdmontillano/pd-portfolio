import { certifications, services } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="certs">
      <div className="container">
        <div className="section-header">
          <h2>$ cat certs.asc</h2>
        </div>

        <div className="cmd-output">
          <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
            <span className="prompt-user">guest</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">godwin-portfolio</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span style={{ color: 'var(--text)' }}>cat certs.asc</span>
          </div>

          <table className="cmd-table">
            <thead>
              <tr>
                <th>Certification</th>
                <th>Issuer</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert) => (
                <tr key={cert.name}>
                  <td style={{ color: 'var(--accent)' }}>{cert.name}</td>
                  <td>{cert.issuer}</td>
                  <td style={{ color: 'var(--warn)' }}>{cert.year}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 32 }}>
            <div className="prompt-line" style={{ fontSize: 13, marginBottom: 12 }}>
              <span className="prompt-user">guest</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">godwin-portfolio</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span style={{ color: 'var(--text)' }}>./services --status</span>
            </div>

            <table className="cmd-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {services.map((svc) => (
                  <tr key={svc.name}>
                    <td style={{ color: 'var(--accent)' }}>{svc.name}</td>
                    <td style={{ color: 'var(--cyan)', fontFamily: 'monospace' }}>{svc.cmd}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-dim)' }}>{svc.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prompt-line" style={{ marginTop: 16, fontSize: 13 }}>
            <span className="blink" style={{ color: 'var(--text)' }}>_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
