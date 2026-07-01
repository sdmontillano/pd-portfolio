import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(p)
      scaleX.set(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scaleX])

  if (progress === 0) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 101,
        transformOrigin: '0% 50%',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'var(--red)',
          transformOrigin: '0% 50%',
          transform: scaleX.to(v => `scaleX(${v})`),
        }}
      />
    </div>
  )
}
