import { motion } from 'framer-motion'
import { Users, BookOpen, Award, BarChart2, ClipboardCheck, UserCheck } from 'lucide-react'
import { SectionLabel, FadeInUp } from '../components/UI'

const roles = [
  { icon: BookOpen, label: 'Learners', sub: '& New Hires', color: 'var(--orange)' },
  { icon: Users, label: 'Associates', sub: '& CSRs', color: 'var(--lime)' },
  { icon: Award, label: 'Trainers', sub: '& L&D Leaders', color: 'var(--red)' },
  { icon: BarChart2, label: 'QA Leaders', sub: '& Ops Managers', color: 'var(--orange)' },
  { icon: ClipboardCheck, label: 'Compliance', sub: 'Officers', color: 'var(--lime)' },
  { icon: UserCheck, label: 'Workforce', sub: 'Planners', color: 'var(--red)' },
]

const capabilities = [
  { label: 'Real-time Guidance', body: 'Context-aware assistance exactly when and where decisions are made.', color: 'var(--orange)' },
  { label: 'Continuous Feedback', body: 'Behavioral signals and coaching loops that improve with every interaction.', color: 'var(--lime)' },
  { label: 'Human-in-the-Loop', body: 'Humans retain judgment and authority; agents amplify, not replace.', color: 'var(--red)' },
]

export default function HumanAI() {
  return (
    <section style={{ background: 'var(--bg-2)', padding: '120px 2rem', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <SectionLabel color="var(--orange)">Neural Collaboration</SectionLabel>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
                color: 'var(--text-primary)', marginBottom: 32,
              }}>
                Built for humans.<br />Powered by intelligence.
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
                PAL connects every role in the service operations chain — from front-line associates to QA leadership — with real-time AI assistance that amplifies human judgment.
              </p>

              {/* The quote */}
              <motion.div
                whileHover={{ x: 4 }}
                style={{
                  padding: '28px 36px',
                  borderLeft: '4px solid var(--orange)',
                  background: 'var(--bg-3)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', right: 16, top: 0,
                  fontFamily: 'Georgia, serif', fontSize: 120, color: 'var(--orange)', opacity: 0.07, lineHeight: 1,
                }}>"</div>
                <p style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700,
                  color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.4,
                }}>
                  "Humans{' '}<span style={{ color: 'var(--orange)' }}>execute.</span>
                  {' '}Agents{' '}<span style={{ color: 'var(--lime)' }}>assist.</span>
                  {' '}The system{' '}<span style={{ color: 'var(--red)' }}>learns.</span>"
                </p>
              </motion.div>
            </div>

            {/* Capabilities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ x: 6 }}
                  style={{
                    padding: '28px 32px',
                    background: 'var(--bg-3)',
                    border: '1px solid var(--border)',
                    borderRight: `4px solid ${cap.color}`,
                }}
                >
                  <h4 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700,
                    color: cap.color, marginBottom: 8,
                  }}>{cap.label}</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cap.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Roles grid */}
        <FadeInUp delay={0.2}>
          <div style={{ marginBottom: 24 }}>
            <span style={{
              fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)',
            }}>Designed for every role</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 3 }}>
            {roles.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  cursor: 'default',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${role.color}10`
                  e.currentTarget.style.borderColor = role.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-3)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `${role.color}18`,
                  border: `1px solid ${role.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <role.icon size={18} color={role.color} />
                </div>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>{role.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{role.sub}</div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          section > div > div:last-child > div { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          section > div > div:last-child > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}