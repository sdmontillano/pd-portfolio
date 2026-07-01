import { motion } from 'framer-motion'

export default function BackToTop() {
  const scrolled = typeof window !== 'undefined' && window.scrollY > 800
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <motion.button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 99,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        color: 'var(--text-light)',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1,
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        transition: 'opacity 0.3s',
      }}
      whileHover={{ borderColor: 'var(--red)', color: 'var(--red)' }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </motion.button>
  )
}
