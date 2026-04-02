import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '4×',   label: 'Faster Proficiency',    c: 'var(--orange)' },
  { value: '100%', label: 'Interaction Coverage',   c: 'var(--lime)'   },
  { value: '60%',  label: 'Error Reduction',        c: 'var(--red)'    },
  { value: '40%',  label: 'Lower Training Cost',    c: 'var(--orange)' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '130px 2rem 90px',
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Fine grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '72px 72px', opacity: 0.55,
      }} />

      {/* Orange glow top-right */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-5%', right: '-8%',
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(224,122,58,0.22), transparent 65%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }}
      />
      {/* Lime glow bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '-5%', left: '-6%',
          width: 440, height: 440,
          background: 'radial-gradient(circle, rgba(123,173,58,0.18), transparent 65%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Status badge */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
            <span className="dot-live" />
            <span style={{
              fontSize: 11.5, fontWeight: 500, color: 'var(--text-muted)',
              letterSpacing: '0.07em',
            }}>Platform active — live deployments globally</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 82px)',
            fontWeight: 400, lineHeight: 1.06, letterSpacing: '-0.03em',
            color: 'var(--text-primary)', maxWidth: 880, marginBottom: 28,
          }}>
            A cognitive operating system
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              for service operations.
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={item} style={{
            fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 44, fontWeight: 300,
          }}>
            PAL transforms workforce, workflows, and knowledge into an intelligent, agent-driven system — connecting <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>learning</span>, <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>execution</span>, and <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>quality</span> into a continuous loop.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 }}>
            <Link to="/foundry" className="btn-primary">
              Explore Foundries <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-ghost">Request Access</Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              border: '1px solid var(--border-strong)',
              borderRadius: 10,
              overflow: 'hidden',
              background: 'var(--bg2)',
              boxShadow: 'var(--card-shadow)',
              maxWidth: 680,
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ background: 'var(--surface-hover)' }}
                  style={{
                    padding: '22px 20px',
                    borderRight: i < 3 ? '1px solid var(--border-strong)' : 'none',
                    cursor: 'default',
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 32, lineHeight: 1, marginBottom: 6,
                    color: s.c,
                  }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.04em', fontWeight: 500 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          cursor: 'pointer', color: 'var(--text-muted)',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={15} />
      </motion.div>
    </section>
  )
}