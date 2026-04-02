import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '../../components/Animate'

const steps = [
  { num: '01', title: 'Workforce Planning',     body: 'Predictive staffing via historical demand signals and behavioral analytics.', c: 'var(--orange)' },
  { num: '02', title: 'Training & Development', body: 'Adaptive learning paths built from real-time skill gap analysis.', c: 'var(--lime)' },
  { num: '03', title: 'Task Allocation',        body: 'Dynamic routing of complex work to optimal agents and human experts.', c: 'var(--orange)' },
  { num: '04', title: 'Service Delivery',       body: 'Assisted execution via real-time intelligent co-pilots for every interaction.', c: 'var(--lime)' },
  { num: '05', title: 'Quality & Compliance',   body: 'Automated scoring and governance across 100% of all interactions.', c: 'var(--orange)' },
  { num: '06', title: 'Continuous Improvement', body: 'Closed feedback loops that automatically refine models and processes.', c: 'var(--lime)' },
]

export default function PlatformOverview() {
  return (
    <section className="section" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 480 }}>
              <p className="section-label">Platform</p>
              <h2 className="section-title">One system across the entire service lifecycle.</h2>
            </div>
            <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', maxWidth: 320, lineHeight: 1.72, fontWeight: 300 }}>
              PAL does not optimize steps. It transforms the entire system into a self-correcting intelligence layer.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden',
          boxShadow: 'var(--card-shadow)',
        }}>
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ background: 'var(--surface-hover)' }}
                style={{
                  padding: '28px 26px', minHeight: 160,
                  borderRight: (i % 3 !== 2) ? '1px solid var(--border-strong)' : 'none',
                  borderBottom: i < 3 ? '1px solid var(--border-strong)' : 'none',
                  background: 'var(--bg2)', cursor: 'default', transition: 'background 0.2s',
                  borderTop: `2.5px solid ${s.c}`,
                }}
              >
                <span style={{
                  display: 'block', fontFamily: 'var(--font-display)',
                  fontSize: 13, color: s.c, marginBottom: 14, opacity: 0.9,
                }}>{s.num}</span>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{s.body}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.32}>
          <div style={{
            marginTop: 36, padding: '26px 32px',
            border: '1px solid var(--border-strong)', borderRadius: 8,
            background: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', lineHeight: 1.3 }}>
              PAL does not optimize steps.{' '}
              <em style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>It transforms the entire system.</em>
            </p>
            <Link to="/foundry" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >Explore Foundries <ArrowRight size={13} /></Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}