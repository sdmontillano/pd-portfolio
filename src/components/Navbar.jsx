import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'header-scrolled' : ''
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'var(--glass)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : 'none',
      }}
    >
      <div className="container" style={{ padding: '12px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 'var(--container)', margin: '0 auto', width: '100%' }}>
          <a href="#hero" className="brand" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 42,
                height: 42,
                borderRadius: 12,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: 'white',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              GL
            </span>
            <span className="brand-text" style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
              Godwin
            </span>
          </a>

          <nav className="nav-desktop" style={{ alignItems: 'center', gap: 8 }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={active === href.slice(1) ? 'active' : ''}
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  color: active === href.slice(1) ? 'var(--accent)' : 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: active === href.slice(1) ? 'rgba(59,130,246,0.08)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (active !== href.slice(1)) {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.08)'
                    e.currentTarget.style.color = 'var(--text)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== href.slice(1)) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--muted)'
                  }
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={toggle}
              className="theme-toggle"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 20,
                padding: 8,
                borderRadius: 10,
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Toggle theme"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: 'var(--text)',
                fontSize: 24,
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              padding: '20px 0',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '14px 16px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  color: active === href.slice(1) ? 'var(--accent)' : 'var(--muted)',
                  textDecoration: 'none',
                  background: active === href.slice(1) ? 'rgba(59,130,246,0.08)' : 'transparent',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
