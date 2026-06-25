import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', tag = 'div', style, ...rest }) {
  const MotionTag = motion[tag] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
