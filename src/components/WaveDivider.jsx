import { motion } from 'framer-motion'

export default function WaveDivider({ color = 'var(--surface)' }) {
  return (
    <div style={{ lineHeight: 0, overflow: 'hidden' }}>
      <motion.svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 40 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <path
          d="M0,30 C360,60 720,0 1440,30 L1440,0 L0,0 Z"
          fill={color}
        />
      </motion.svg>
    </div>
  )
}
