import { certifications, services } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-label">Credentials</div>
        <div className="vermillion-bar" />
        <div className="section-title">
          Certifications <span>&amp; Services</span>
        </div>

        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 12px', color: 'var(--text-light)' }}>CERTIFICATIONS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {certifications.map((cert) => (
                <div key={cert.name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  fontSize: 13,
                  gap: 12,
                }}>
                  <span style={{ flex: 1 }}>{cert.name}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: 12, whiteSpace: 'nowrap' }}>{cert.issuer}</span>
                  <span style={{ color: 'var(--red)', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 12px', color: 'var(--text-light)' }}>SERVICES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map((svc) => (
                <div key={svc.name} style={{
                  padding: '14px 16px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  borderLeft: '3px solid var(--red)',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{svc.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-light)' }}>{svc.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
