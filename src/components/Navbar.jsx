import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    navLinks.forEach(({ label }) => {
      const el = document.getElementById(label)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      padding: '10px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div className="prompt-line" style={{ margin: 0, fontSize: 13 }}>
          <span className="prompt-user">guest</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">godwin-portfolio</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span style={{ color: 'var(--text)', fontSize: 13 }}>./nav --links</span>
        </div>

        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {navLinks.map(({ label, cmd }) => (
            <a
              key={label}
              href={`#${label}`}
              className={`nav-link ${active === label ? 'active' : ''}`}
              style={{
                padding: '4px 10px',
                border: active === label ? '1px solid var(--accent)' : '1px solid transparent',
                background: active === label ? 'rgba(51,255,102,0.05)' : 'transparent',
              }}
            >
              {`[${label}]`}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
