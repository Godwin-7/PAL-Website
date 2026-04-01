import { motion } from 'framer-motion'

export function SectionLabel({ color = 'var(--orange)', children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <div style={{ width: 24, height: 2, background: color }} />
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color,
      }}>{children}</span>
    </div>
  )
}

export function FadeInUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function GlowDot({ color = 'var(--lime)', size = 8 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.5,
        animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
      }} />
      <div style={{ width: size, height: size, borderRadius: '50%', background: color }} />
    </div>
  )
}

export function Tag({ color, bg, children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 2,
      fontSize: 9,
      fontFamily: 'Syne, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color,
      background: bg || `${color}15`,
      border: `1px solid ${color}40`,
    }}>{children}</span>
  )
}

export function PrimaryButton({ children, href, onClick, variant = 'orange' }) {
  const colors = {
    orange: { bg: 'var(--orange)', text: '#fff', shadow: 'rgba(241,143,34,0.35)' },
    outline: { bg: 'transparent', text: 'var(--text-primary)', shadow: 'transparent', borderColor: 'var(--border-hover)' },
  }
  const c = colors[variant]
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 32px',
        background: c.bg,
        color: c.text,
        border: `1.5px solid ${variant === 'outline' ? 'var(--border-hover)' : 'transparent'}`,
        borderRadius: 3,
        fontFamily: 'Syne, sans-serif',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        cursor: 'pointer',
        boxShadow: `0 0 30px ${c.shadow}`,
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}
    >{children}</motion.a>
  )
}

export function Divider() {
  return (
    <div style={{
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
      opacity: 0.3,
      margin: '0 0',
    }} />
  )
}