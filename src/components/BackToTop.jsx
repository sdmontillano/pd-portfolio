import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
      }}
      animate={{ opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none' }}
      transition={{ duration: 0.3 }}
      whileHover={{ borderColor: 'var(--red)', color: 'var(--red)' }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </motion.button>
  )
}
