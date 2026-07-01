import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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

  useEffect(() => {
    if (!open) return
    const onClick = () => setOpen(false)
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  return (
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '10px 0' : '16px 0',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
        animate={{ padding: scrolled ? '10px 0' : '16px 0' }}
        transition={{ duration: 0.3 }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a
            href="#hero"
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: -0.5,
            }}
          >
            GL<span style={{ color: 'var(--red)' }}>.</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '6px 10px',
                fontSize: 14,
                cursor: 'pointer',
                color: 'var(--text)',
                lineHeight: 1,
              }}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? '☀️' : '🌙'}
            </motion.button>
            <div className="desktop-links" style={{ display: 'flex', gap: 2 }}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    fontWeight: 500,
                    color: active === href.slice(1) ? 'var(--red)' : 'var(--text-light)',
                    textDecoration: 'none',
                    borderBottom: active === href.slice(1) ? '2px solid var(--red)' : '2px solid transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (active !== href.slice(1)) e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { if (active !== href.slice(1)) e.currentTarget.style.color = 'var(--text-light)' }}
                >
                  {label}
                </a>
              ))}
            </div>
            <button
              className="mobile-btn"
              onClick={() => setOpen(!open)}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '8px 12px',
                fontSize: 16,
                cursor: 'pointer',
                color: 'var(--text)',
                display: 'none',
                lineHeight: 1,
                minHeight: 40,
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

      <AnimatePresence>
        {open && (
          <motion.div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '70%',
              maxWidth: 280,
              background: 'var(--bg)',
              borderLeft: '1px solid var(--border)',
              padding: '72px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              zIndex: 99,
              boxShadow: '-8px 0 32px rgba(0,0,0,0.08)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '16px 0',
                  fontSize: 15,
                  fontWeight: 500,
                  color: active === href.slice(1) ? 'var(--red)' : 'var(--text)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
