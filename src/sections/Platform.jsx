import { motion } from 'framer-motion'
import { SectionLabel, FadeInUp } from '../components/UI'

const lifecycle = [
  { num: '01', title: 'Workforce Planning', body: 'Predictive staffing through historical demand signals and behavioral analytics.', color: 'var(--orange)', accent: 'rgba(241,143,34,0.1)' },
  { num: '02', title: 'Training', body: 'Adaptive learning paths built from real skill gap analysis and performance data.', color: 'var(--lime)', accent: 'rgba(165,207,79,0.1)' },
  { num: '03', title: 'Task Allocation', body: 'Dynamic routing of complex work to optimal agents and human experts.', color: 'var(--red)', accent: 'rgba(238,62,65,0.1)' },
  { num: '04', title: 'Service Delivery', body: 'Assisted execution via real-time intelligent co-pilots for every interaction.', color: 'var(--orange)', accent: 'rgba(241,143,34,0.1)' },
  { num: '05', title: 'Quality & Compliance', body: 'Automated scoring and governance across 100% of all interactions.', color: 'var(--lime)', accent: 'rgba(165,207,79,0.1)' },
  { num: '06', title: 'Continuous Improvement', body: 'Closed feedback loops that automatically refine models and processes.', color: 'var(--red)', accent: 'rgba(238,62,65,0.1)' },
]

export default function Platform() {
  return (
    <section id="platform" style={{ background: 'var(--bg)', padding: '120px 2rem', position: 'relative' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <SectionLabel color="var(--orange)">Platform Integration</SectionLabel>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)',
              marginBottom: 20, maxWidth: 700, margin: '0 auto 20px',
            }}>
              One system across the entire service lifecycle.
            </h2>
            <p style={{
              fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto',
              lineHeight: 1.7, fontWeight: 300,
            }}>
              PAL does not optimize steps. It transforms the entire system into a self-correcting intelligence layer.
            </p>
          </div>
        </FadeInUp>

        {/* Connected loop visualization */}
        <FadeInUp delay={0.1}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 2,
            marginBottom: 4,
          }}>
            {lifecycle.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '1/1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.color
                  e.currentTarget.style.background = item.accent
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-2)'
                }}
              >
                {/* Background number watermark */}
                <div style={{
                  position: 'absolute', right: -8, bottom: -16,
                  fontFamily: 'Syne, sans-serif', fontSize: 80, fontWeight: 800,
                  color: item.color, opacity: 0.04, lineHeight: 1, userSelect: 'none',
                }}>{item.num}</div>

                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700,
                  color: item.color,
                }}>{item.num}</span>

                <div>
                  <h4 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 700,
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                    color: 'var(--text-primary)', marginBottom: 10,
                  }}>{item.title}</h4>
                  <p style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* Core statement */}
        <FadeInUp delay={0.2}>
          <div style={{
            marginTop: 60,
            padding: '40px 48px',
            background: 'linear-gradient(135deg, rgba(241,143,34,0.08), rgba(165,207,79,0.05), rgba(238,62,65,0.05))',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <p style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3,
              }}>
                PAL does not optimize steps.
              </p>
              <p style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 700, lineHeight: 1.3,
              }}>
                <span style={{ color: 'var(--orange)' }}>It transforms the entire system.</span>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 3 }}>
              {['var(--orange)','var(--lime)','var(--red)'].map((c, i) => (
                <div key={i} style={{ width: 6, height: 40, background: c, borderRadius: 1 }} />
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #platform > div > div:nth-child(3) > div { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #platform > div > div:nth-child(3) > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}