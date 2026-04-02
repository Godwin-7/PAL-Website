import { motion } from 'framer-motion'
import { FadeUp } from '../../components/Animate'

const agents = [
  { id: 'AOP-01', title: 'Capture & Structure',     body: 'Ingests raw knowledge — SOPs, recordings, documents — converts it into structured, queryable systems.', c: 'var(--lime)' },
  { id: 'AOP-02', title: 'Learning & Enablement',   body: 'Build, personalize, and optimize workforce capability through adaptive pathways that evolve with each learner\'s profile.', c: 'var(--orange)' },
  { id: 'AOP-03', title: 'QA/QC Super Agent',        body: 'Evaluates 100% of every interaction — call, chat, email — against compliance frameworks and benchmarks in real time.', c: 'var(--red)', featured: true },
  { id: 'AOP-04', title: 'AOP Execution',            body: 'Drive real-time operational decisions — routing work, surfacing procedures, flagging anomalies — while associates are live.', c: 'var(--orange)' },
  { id: 'AOP-05', title: 'AI Coach + Simulation',   body: 'Train, guide, and improve human performance through realistic simulations, behavioral coaching, and moment-of-need feedback.', c: 'var(--lime)' },
]

export default function AgenticCore() {
  return (
    <section className="section" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start', marginBottom: 52 }}>
          <FadeUp>
            <p className="section-label">Agentic Architecture</p>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Not just copilots.
              <br /><em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>A coordinated system.</em>
            </h2>
            <p className="body-text" style={{ fontSize: 15 }}>
              PAL is built as a coordinated system of specialized agents — each with a distinct role — orchestrated through a central intelligence layer that ensures alignment between learning, execution, and compliance.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div style={{
              padding: '28px 30px',
              border: '1px solid var(--border-strong)',
              borderLeft: '3px solid var(--orange)',
              background: 'var(--bg2)',
              borderRadius: '0 8px 8px 0',
              boxShadow: 'var(--card-shadow)',
            }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 12 }}>Key Concept: AOP</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.3 }}>
                SOPs → Agentic Operating Procedures
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                PAL transforms static Standard Operating Procedures into <strong style={{ color: 'var(--orange)', fontWeight: 600 }}>Agentic Operating Procedures (AOPs)</strong> — living, executable systems that guide, evaluate, and improve work in real time. Procedures become programs.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18 }}>
                {['Living Systems', 'Self-Improving', 'Real-time Guidance'].map((t, i) => (
                  <span key={i} className="tag tag-orange">{t}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Agent tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
          {agents.map((a, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ background: a.featured ? `${a.c}12` : 'var(--surface-hover)' }}
                style={{
                  padding: '26px 22px',
                  borderRight: i < 4 ? '1px solid var(--border-strong)' : 'none',
                  borderTop: `2.5px solid ${a.c}`,
                  background: a.featured ? `${a.c}08` : 'var(--bg2)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                  transition: 'background 0.25s',
                  cursor: 'default',
                }}
              >
                <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.2em', color: a.c, marginBottom: 14 }}>{a.id}</p>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.35 }}>{a.title}</h4>
                <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1 }}>{a.body}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Orchestration bar */}
        <FadeUp delay={0.42}>
          <div style={{
            marginTop: 3, padding: '18px 28px',
            border: '1px solid var(--border-strong)', borderTop: 'none',
            borderRadius: '0 0 10px 10px',
            background: 'var(--bg2)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span className="dot-live" />
            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--lime)', fontWeight: 600 }}>Orchestration Layer Active</strong> — All agents coordinated through a central orchestrator ensuring alignment across every interaction, in real time.
            </p>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 1100px) { #agent-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 900px)  { #agent-header { grid-template-columns: 1fr !important; gap: 36px !important; } #agent-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { #agent-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}