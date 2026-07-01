import { useState, useEffect } from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        transform: `scaleX(${progress})`,
        background: 'var(--red)',
        transition: 'transform 0.1s ease-out',
      }}
    />
  )
}
