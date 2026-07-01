import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RevealText({ text, as: Tag = 'div', style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const chars = text.split('')

  return (
    <Tag ref={ref} style={{ display: 'inline', ...style }}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline', whiteSpace: ch === ' ' ? 'pre' : undefined }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: i * 0.025, ease: 'easeOut' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </Tag>
  )
}
