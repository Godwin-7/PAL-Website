import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '../../components/Animate'

const steps = [
  { num: '01', title: 'Workforce Planning', body: 'Predictive staffing through historical demand signals and behavioral analytics.', c: 'var(--orange)' },
  { num: '02', title: 'Training', body: 'Adaptive learning paths built from real skill gap analysis.', c: 'var(--lime)' },
  { num: '03', title: 'Task Allocation', body: 'Dynamic routing of complex work to optimal agents and experts.', c: 'var(--orange)' },
  { num: '04', title: 'Service Delivery', body: 'Real-time intelligent co-pilots for every customer interaction.', c: 'var(--lime)' },
  { num: '05', title: 'Quality & Compliance', body: 'Automated scoring and governance across 100% of all interactions.', c: 'var(--orange)' },
  { num: '06', title: 'Continuous Improvement', body: 'Closed feedback loops that automatically refine models and processes.', c: 'var(--lime)' },
]

export default function PlatformOverview() {
  return (
    <section className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <FadeUp>
          <p className="label-tag">Platform</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <h2 className="section-title" style={{ maxWidth: 480 }}>
              One system across the entire service lifecycle.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 340, lineHeight: 1.7, fontWeight: 300 }}>
              PAL does not optimize steps. It transforms the entire system into a self-correcting intelligence layer.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
        }}>
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  padding: '28px 24px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  cursor: 'default',
                  transition: 'border-color 0.25s',
                  minHeight: 160,
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)', fontSize: 13, color: s.c,
                  marginBottom: 16,
                }}>{s.num}</span>
                <h4 style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  color: 'var(--text-primary)', marginBottom: 8,
                }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{s.body}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div style={{
            marginTop: 48, padding: '32px 36px',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 20,
          }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                PAL does not optimize steps.{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>It transforms the entire system.</span>
              </p>
            </div>
            <Link to="/foundry" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Explore Foundries <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .platform-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .platform-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}