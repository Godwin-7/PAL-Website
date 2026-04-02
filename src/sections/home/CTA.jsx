import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '../../components/Animate'

export default function CTA() {
  return (
    <section className="section" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle animated glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 9, repeat: Infinity }}
        style={{
          position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, var(--orange), transparent 65%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Get Started</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 50px)',
              lineHeight: 1.1, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', marginBottom: 20,
            }}>
              The future of service operations
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>is not automation alone.</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.72, marginBottom: 40, fontWeight: 300 }}>
              It is intelligent systems that{' '}
              <span style={{ color: 'var(--orange)', fontWeight: 500 }}>learn</span>,{' '}
              <span style={{ color: 'var(--lime)', fontWeight: 500 }}>adapt</span>, and{' '}
              <span style={{ color: 'var(--red)', fontWeight: 500 }}>scale</span>.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/foundry" className="btn-primary">
                Explore Foundries <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-ghost">Request Access</Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}