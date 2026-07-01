import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="floating-cta"
          href={`mailto:${personalInfo.email}`}
          className="floating-cta"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 20px',
            background: '#1a1a1a',
            color: 'white',
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.5,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <motion.span
            style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Hire Me
        </motion.a>
      )}
    </AnimatePresence>
  )
}
