import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
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
      padding: '8px 0',
      background: 'var(--paper)',
      borderBottom: '2px solid var(--ink)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-marker)',
          fontSize: 20,
          color: 'var(--red)',
          textDecoration: 'none',
        }}>
          GD<span style={{ color: 'var(--ink)' }}>.</span>luna
        </a>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid var(--ink)',
            padding: '4px 12px',
            fontFamily: 'var(--font-hand)',
            fontSize: 18,
            cursor: 'pointer',
            color: 'var(--ink)',
          }}
          className="mobile-btn"
        >
          {open ? '[X]' : '[=]'}
        </button>

        <div className="desktop-nav" style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                padding: '4px 10px',
                fontFamily: 'var(--font-hand)',
                fontSize: 18,
                color: active === href.slice(1) ? 'var(--red)' : 'var(--ink)',
                textDecoration: active === href.slice(1) ? 'underline wavy var(--red)' : 'none',
                textUnderlineOffset: 4,
                background: active === href.slice(1) ? 'rgba(204,51,68,0.05)' : 'transparent',
                transition: 'all 0.15s',
              }}
            >
              [{label}]
            </a>
          ))}
        </div>

        {open && (
          <div style={{
            position: 'fixed',
            top: 50,
            left: 0,
            right: 0,
            background: 'var(--paper)',
            borderBottom: '2px solid var(--ink)',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 20,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                [{label}]
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
