import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { personalInfo, socials } from '../data/portfolioData'
import pfp from '../assets/PFP.jfif'

const roles = personalInfo.roles || ['Full-Stack Developer', 'Ethical Hacker']

function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const innerTimer = useRef(null)

  useEffect(() => {
    const word = words[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (char < word.length) {
          setChar(c => c + 1)
        } else {
          innerTimer.current = setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        if (char > 0) {
          setChar(c => c - 1)
        } else {
          setDeleting(false)
          setIndex(i => (i + 1) % words.length)
        }
      }
    }, deleting ? 40 : 80)

    return () => {
      clearTimeout(timeout)
      if (innerTimer.current) {
        clearTimeout(innerTimer.current)
        innerTimer.current = null
      }
    }
  }, [char, deleting, index, words])

  return (
    <span>
      {words[index].slice(0, char)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ color: 'var(--red)' }}
      >|</motion.span>
    </span>
  )
}

const stagger = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 60,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          background: 'radial-gradient(ellipse at 20% 50%, var(--red) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, var(--indigo) 0%, transparent 60%)',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div className="vermillion-bar" />
              {personalInfo.openToWork && (
                <motion.span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 12px',
                    border: '1px solid #16a34a',
                    color: '#16a34a',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.span
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  OPEN TO WORK
                </motion.span>
              )}
            </div>
            <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--text-light)', fontStyle: 'italic', marginBottom: 8 }}>
              Introducing
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontSize: 48,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}>
              {personalInfo.name}
            </motion.h1>
            <motion.div variants={fadeUp} style={{
              fontSize: 20,
              fontWeight: 500,
              marginTop: 12,
              lineHeight: 1.5,
              maxWidth: 420,
              color: 'var(--text)',
            }}>
              <Typewriter words={roles} />
            </motion.div>
            <motion.p variants={fadeUp} style={{
              fontSize: 14,
              color: 'var(--text-light)',
              marginTop: 12,
              lineHeight: 1.8,
              maxWidth: 360,
            }}>
              {personalInfo.tagline}
            </motion.p>
            <motion.div variants={fadeUp} className="hero-buttons" style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                style={{
                  padding: '12px 28px',
                  background: '#1a1a1a',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
                whileHover={{ background: 'var(--red)', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                HIRE ME
              </motion.a>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 28px',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
                whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                RESUME
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone}`}
                style={{
                  padding: '12px 28px',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
                whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {personalInfo.phone}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <motion.img
              src={pfp}
              alt={personalInfo.name}
              style={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--red)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.4 }}
            />
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 10 }}>
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  border: '1px solid var(--border)',
                  color: 'var(--text-light)',
                  fontSize: 18,
                }}
                whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  border: '1px solid var(--border)',
                  color: 'var(--text-light)',
                  fontSize: 18,
                }}
                whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  border: '1px solid var(--border)',
                  color: 'var(--text-light)',
                  fontSize: 18,
                }}
                whileHover={{ borderColor: 'var(--red)', color: 'var(--red)', y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaFacebookF />
              </motion.a>
            </motion.div>
            <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 4 }}>based in</div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{personalInfo.location}</div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ width: '60%', height: 1, background: 'var(--border)' }} />
            <motion.div variants={fadeUp} style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8 }}>
              <div>{personalInfo.email}</div>
              <div>{personalInfo.phone}</div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="tag" style={{ fontSize: 11 }}>Cisco Ethical Hacker</span>
              <span className="tag" style={{ fontSize: 11 }}>Kali Linux</span>
              <span className="tag" style={{ fontSize: 11 }}>React</span>
              <span className="tag" style={{ fontSize: 11 }}>Python</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          marginLeft: -12,
          width: 24,
          height: 38,
          border: '2px solid var(--text-light)',
          borderRadius: 12,
          display: 'flex',
          justifyContent: 'center',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          style={{ width: 2, height: 8, background: 'var(--red)', marginTop: 6, borderRadius: 1 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
