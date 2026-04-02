import { motion } from 'framer-motion'
import { FadeUp } from '../../components/Animate'

const agents = [
  { id: 'AOP-01', title: 'Capture & Structure', body: 'Ingests raw knowledge — SOPs, recordings, documents — and converts it into structured, queryable systems.', c: 'var(--lime)' },
  { id: 'AOP-02', title: 'Learning & Enablement', body: 'Build, personalize, and optimize workforce capability through adaptive pathways.', c: 'var(--orange)' },
  { id: 'AOP-03', title: 'QA/QC Super Agent', body: 'Evaluates 100% of every interaction — call, chat, email — against compliance frameworks in real time.', c: 'var(--red)' },
  { id: 'AOP-04', title: 'AOP Execution', body: 'Drive real-time operational decisions — routing work, surfacing procedures, flagging anomalies.', c: 'var(--orange)' },
  { id: 'AOP-05', title: 'AI Coach + Simulation', body: 'Train, guide, and improve human performance through realistic simulations and moment-of-need feedback.', c: 'var(--lime)' },
]

export default function AgenticCore() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start', marginBottom: 64 }}>
          <FadeUp>
            <p className="label-tag">Agentic Architecture</p>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Not just copilots.
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>A coordinated system.</span>
            </h2>
            <p className="body-text" style={{ fontSize: 15 }}>
              PAL is built as a coordinated system of specialized agents — each with a distinct role — orchestrated through a central intelligence layer ensuring alignment between learning, execution, and compliance.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div style={{
              padding: '28px 32px',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--orange)',
              background: 'var(--bg2)',
              borderRadius: '0 8px 8px 0',
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 14 }}>Key Concept</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.3 }}>
                SOPs → Agentic Operating Procedures
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                PAL transforms static Standard Operating Procedures into <strong style={{ color: 'var(--orange)', fontWeight: 600 }}>Agentic Operating Procedures (AOPs)</strong> — living, executable systems that guide, evaluate, and improve work in real time.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Agent cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}>
          {agents.map((a, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  padding: '24px 20px',
                  border: '1px solid var(--border)',
                  borderTop: `2px solid ${a.c}`,
                  background: 'var(--bg2)',
                  height: '100%',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
              >
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: a.c, marginBottom: 16 }}>{a.id}</p>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>{a.title}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{a.body}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div style={{
            marginTop: 1, padding: '20px 28px',
            border: '1px solid var(--border)', background: 'var(--bg2)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span className="dot-live" />
            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              All agents coordinated through a central orchestrator — ensuring alignment between learning, execution, and compliance across every interaction, in real time.
            </p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          #agentic-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          #agentic-header { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 700px) {
          #agentic-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}