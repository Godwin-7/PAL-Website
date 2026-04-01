import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FadeInUp, GlowDot } from '../components/UI'

const stats = [
  { value: '4×', label: 'Faster Proficiency Ramp', color: 'var(--orange)' },
  { value: '60%', label: 'Error Rate Reduction', color: 'var(--lime)' },
  { value: '100%', label: 'Interaction Coverage', color: 'var(--red)' },
]

export default function CTA() {
  return (
    <section id="contact" style={{
      padding: '160px 2rem',
      background: '#000',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background image overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, #000 0%, transparent 30%, transparent 70%, #000 100%)',
      }} />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute', top: '20%', left: '10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, var(--orange), transparent 65%)',
          borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, var(--lime), transparent 65%)',
          borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GlowDot color="var(--lime)" />
              <span style={{
                fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--lime)',
              }}>Ready to Deploy</span>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: 40,
          }}>
            The future of service<br />
            operations is not<br />
            <span className="gradient-text">automation alone.</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p style={{
            fontSize: 22, color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6, fontWeight: 300, marginBottom: 64,
          }}>
            It is intelligent systems that{' '}
            <span style={{ color: 'var(--orange)', fontWeight: 600 }}>learn</span>,{' '}
            <span style={{ color: 'var(--lime)', fontWeight: 600 }}>adapt</span>, and{' '}
            <span style={{ color: 'var(--red)', fontWeight: 600 }}>scale</span>.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
            <motion.a
              href="#"
              whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(241,143,34,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '18px 40px',
                background: 'var(--orange)',
                color: '#fff',
                fontFamily: 'Syne, sans-serif', fontSize: 12,
                fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: 3,
                boxShadow: '0 0 40px rgba(241,143,34,0.3)',
                transition: 'all 0.3s',
              }}
            >
              Explore Foundries <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '18px 40px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                fontFamily: 'Syne, sans-serif', fontSize: 12,
                fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: 3,
                transition: 'all 0.3s',
              }}
            >
              Request Access <ExternalLink size={14} />
            </motion.a>
          </div>
        </FadeInUp>

        {/* Stats */}
        <FadeInUp delay={0.4}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '36px 24px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 44, fontWeight: 800,
                  color: s.color, lineHeight: 1, marginBottom: 10,
                  textShadow: `0 0 30px ${s.color}50`,
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact > div > div:last-child > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}