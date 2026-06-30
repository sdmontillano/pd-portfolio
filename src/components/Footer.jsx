import { motion } from 'framer-motion'

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
