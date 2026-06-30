import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

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
    }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp}>
            <div className="vermillion-bar" />
            <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--text-light)', fontStyle: 'italic', marginBottom: 12 }}>
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
              fontSize: 18,
              fontWeight: 400,
              color: 'var(--text-light)',
              marginTop: 12,
              lineHeight: 1.5,
              maxWidth: 400,
            }}>
              <span style={{ color: 'var(--red)', fontWeight: 600 }}>IT Graduate</span> &middot; Full-Stack Developer &middot; Ethical Hacker
            </motion.div>
            <motion.p variants={fadeUp} style={{
              fontSize: 14,
              color: 'var(--text-light)',
              marginTop: 16,
              lineHeight: 1.8,
              maxWidth: 360,
            }}>
              {personalInfo.tagline}
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                style={{
                  padding: '12px 28px',
                  background: 'var(--text)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
                whileHover={{ background: 'var(--red)', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                CONTACT
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

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <motion.div
              className="hanko"
              style={{ width: 80, height: 80, fontSize: 14 }}
              initial={{ rotate: -5, scale: 0 }}
              animate={{ rotate: -5, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.4 }}
            >
              GL
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
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12 }}>
              <span className="tag" style={{ fontSize: 11 }}>Cisco Ethical Hacker</span>
              <span className="tag" style={{ fontSize: 11 }}>Kali Linux</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
