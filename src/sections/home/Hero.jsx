import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '4×', label: 'Faster Proficiency', accent: 'var(--orange)' },
  { value: '100%', label: 'Interaction Coverage', accent: 'var(--lime)' },
  { value: '60%', label: 'Error Reduction', accent: 'var(--red)' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 2rem 80px',
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px', opacity: 0.4,
      }} />

      {/* Warm glow — orange, top right */}
      <div style={{
        position: 'absolute', top: '5%', right: '-10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(232,131,74,0.12), transparent 65%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      {/* Cool glow — bottom left */}
      <div style={{
        position: 'absolute', bottom: '0%', left: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(139,185,74,0.08), transparent 65%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}
        >
          <span className="dot-live" />
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            Platform active — Chennai & beyond
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 400, lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            maxWidth: 860, marginBottom: 28,
          }}
        >
          A cognitive operating system
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>for service operations.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 540, marginBottom: 48, fontWeight: 300 }}
        >
          PAL transforms workforce, workflows, and knowledge into an intelligent, agent-driven system — connecting learning, execution, and quality into a continuous loop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 }}
        >
          <Link to="/foundry" className="btn-primary">
            Explore Foundries <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Request Access
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2, borderTop: '1px solid var(--border)', paddingTop: 36, maxWidth: 560,
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              paddingRight: i < 2 ? 28 : 0,
              paddingLeft: i > 0 ? 28 : 0,
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36, lineHeight: 1, marginBottom: 6,
                color: s.accent,
              }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}