import { motion } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { socials } from '../data/portfolioData'

export default function Footer() {
  return (
    <motion.footer
      style={{ padding: '32px 0', textAlign: 'center' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <motion.a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              border: '1px solid var(--border)',
              color: 'var(--text-light)',
              fontSize: 16,
            }}
            whileHover={{ borderColor: 'var(--red)', color: 'var(--red)' }}
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
              width: 36,
              height: 36,
              border: '1px solid var(--border)',
              color: 'var(--text-light)',
              fontSize: 16,
            }}
            whileHover={{ borderColor: 'var(--red)', color: 'var(--red)' }}
            whileTap={{ scale: 0.92 }}
          >
            <FaFacebookF />
          </motion.a>
        </div>
        <div style={{ width: 40, height: 2, background: 'var(--red)', margin: '0 auto 16px' }} />
        <div style={{ fontSize: 13, color: 'var(--text-light)' }}>
          &copy; {new Date().getFullYear()} Godwin D. Luna-an
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
          Built with React &middot; Designed with purpose
        </div>
      </div>
    </motion.footer>
  )
}
