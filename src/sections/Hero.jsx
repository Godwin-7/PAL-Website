import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { GlowDot, FadeInUp, PrimaryButton } from '../components/UI'

const stats = [
  { value: '100%', label: 'Interaction Coverage', color: 'var(--orange)' },
  { value: '4×', label: 'Faster Proficiency', color: 'var(--lime)' },
  { value: '60%', label: 'Error Reduction', color: 'var(--red)' },
  { value: '∞', label: 'Scalable Loops', color: 'var(--orange)' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 2rem 80px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Grid background */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Glow blobs */}
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ position: 'absolute', top: '10%', right: '-5%', width: 600, height: 600,
          background: 'radial-gradient(circle, var(--orange), transparent 70%)',
          borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}
      />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        style={{ position: 'absolute', bottom: '5%', left: '-10%', width: 500, height: 500,
          background: 'radial-gradient(circle, var(--lime), transparent 70%)',
          borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <FadeInUp>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
            <GlowDot color="var(--lime)" />
            <span style={{
              fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--lime)',
            }}>Platform Status: Live & Active</span>
          </div>
        </FadeInUp>

        {/* Main headline */}
        <FadeInUp delay={0.1}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: 32,
            maxWidth: 900,
          }}>
            A cognitive{' '}
            <span className="gradient-text">operating system</span>
            {' '}for service operations.
          </h1>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.2}>
          <p style={{
            fontSize: 20,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: 600,
            marginBottom: 48,
            fontWeight: 300,
          }}>
            PAL transforms workforce, workflows, and knowledge into an intelligent, agent-driven system — connecting learning, execution, and quality into a continuous loop.
          </p>
        </FadeInUp>

        {/* CTAs */}
        <FadeInUp delay={0.3}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
            <PrimaryButton href="#platform" variant="orange">
              Explore Platform <ArrowRight size={14} />
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="outline">
              Request Access
            </PrimaryButton>
          </div>
        </FadeInUp>

        {/* Stats row */}
        <FadeInUp delay={0.4}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
            borderTop: '1px solid var(--border)',
            paddingTop: 40,
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                style={{
                  padding: '24px 0',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                  paddingRight: i < 3 ? 32 : 0,
                  paddingLeft: i > 0 ? 32 : 0,
                }}
              >
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800,
                  color: s.color, lineHeight: 1, marginBottom: 8,
                  textShadow: `0 0 30px ${s.color}40`,
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</span>
        <ChevronDown size={16} color="var(--text-muted)" />
      </motion.div>
    </section>
  )
}