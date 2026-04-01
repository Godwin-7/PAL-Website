import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Layers, Clock } from 'lucide-react'
import { SectionLabel, FadeInUp } from '../components/UI'

const problems = [
  {
    icon: Clock,
    title: 'Training Lag',
    body: 'Onboarding is disconnected from live execution metrics. Weeks of classroom time pass before any real value is created.',
    color: 'var(--red)',
  },
  {
    icon: Layers,
    title: 'Static SOPs',
    body: 'Legacy documentation remains unread and unapplied. Procedures sit in PDFs while teams improvise on the floor.',
    color: 'var(--orange)',
  },
  {
    icon: TrendingDown,
    title: 'Reactive QA/QC',
    body: 'Sampled reviews and post-mortem analysis replace real-time intervention. Errors scale before they\'re detected.',
    color: 'var(--red)',
  },
  {
    icon: AlertTriangle,
    title: 'Knowledge Silos',
    body: 'Learning doesn\'t translate into performance. Institutional knowledge lives in heads, not systems.',
    color: 'var(--orange)',
  },
]

const outcomes = [
  { num: '01', title: 'Slow Proficiency', body: 'Weeks of classroom time wasted before value creation begins.', color: 'var(--red)' },
  { num: '02', title: 'High Error Rates', body: 'Manual processes scale friction, not consistency.', color: 'var(--red)' },
  { num: '03', title: 'Limited Scalability', body: 'Linear growth models collapse under exponential market demand.', color: 'var(--red)' },
]

export default function Problem() {
  return (
    <section id="problem" style={{ background: 'var(--bg-2)', padding: '120px 2rem', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <FadeInUp>
              <SectionLabel color="var(--red)">Diagnostic: Critical Failure</SectionLabel>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                color: 'var(--text-primary)', marginBottom: 48,
              }}>
                Service operations today are fragmented.
              </h2>
            </FadeInUp>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {problems.map((p, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex', gap: 20, padding: '20px 24px',
                      background: 'var(--card-bg)',
                      borderLeft: `3px solid ${p.color}`,
                      transition: 'background 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--card-bg-hover)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
                  >
                    <p.icon size={18} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, marginBottom: 4,
                      }}>{p.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.body}</div>
                    </div>
                  </motion.div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Right */}
          <FadeInUp delay={0.2}>
            <div style={{
              background: 'var(--bg-3)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: 48,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 200, height: 200,
                background: 'radial-gradient(circle, var(--red), transparent 70%)',
                opacity: 0.1, filter: 'blur(40px)',
              }} />

              <div style={{ marginBottom: 36 }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)',
                }}>The Result</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {outcomes.map((o, i) => (
                  <motion.div key={i}
                    whileHover={{ x: 4 }}
                    style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
                  >
                    <div style={{
                      fontFamily: 'Syne, sans-serif', fontSize: 64, fontWeight: 800, lineHeight: 0.9,
                      color: 'var(--border)', transition: 'color 0.4s',
                    }}
                    onMouseEnter={e => e.target.style.color = o.color}
                    onMouseLeave={e => e.target.style.color = 'var(--border)'}
                    >{o.num}</div>
                    <div>
                      <h3 style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700,
                        color: 'var(--text-primary)', marginBottom: 8,
                      }}>{o.title}</h3>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{o.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #problem > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}