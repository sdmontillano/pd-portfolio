import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

function useTypewriter(text, speed = 50) {
  const displayed = useRef('')
  const elRef = useRef(null)

  useEffect(() => {
    let i = 0
    displayed.current = ''
    if (elRef.current) elRef.current.textContent = ''

    const interval = setInterval(() => {
      if (i < text.length) {
        displayed.current += text[i]
        if (elRef.current) elRef.current.textContent = displayed.current
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return elRef
}

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function Hero() {
  const titleRef = useTypewriter(personalInfo.tagline, 40)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-dark/10 rounded-full blur-[150px]" />
      </div>
      <ParticleField />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-accent text-sm md:text-base mb-4 tracking-wider"
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-[#06b6d4] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-muted mb-6">
            <HiLocationMarker className="text-accent" />
            <span className="text-sm md:text-base">{personalInfo.location}</span>
          </div>

          <div className="h-8 mb-8">
            <span
              ref={titleRef}
              className="font-mono text-base md:text-lg text-muted"
            />
            <span className="animate-pulse text-accent font-mono">|</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-[#0a0a0f] rounded-full font-medium text-sm hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <HiMail className="text-lg" />
              Get in Touch
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 px-6 py-3 border border-white/10 text-muted rounded-full font-medium text-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              <HiPhone className="text-lg" />
              {personalInfo.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-muted/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
