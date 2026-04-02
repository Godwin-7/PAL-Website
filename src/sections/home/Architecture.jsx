import { motion } from 'framer-motion'
import { FadeUp } from '../../components/Animate'
import { BookOpen, Zap, BarChart3, ShieldCheck, RefreshCw } from 'lucide-react'

const layers = [
  {
    num: '01', icon: BookOpen, c: 'var(--orange)',
    title: 'Knowledge & Instruction',
    body: 'SOPs, training content, and institutional knowledge structured through SARA Co-Pilot and a dynamic Knowledge Graph + Ontology engine.',
    tags: ['SARA Co-Pilot', 'Knowledge Graph', 'Ontology Engine'],
  },
  {
    num: '02', icon: Zap, c: 'var(--lime)',
    title: 'Learning & Interaction',
    body: 'Learning Co-Pilot, Interaction Co-Pilot, and simulation environments convert knowledge into real-world proficiency.',
    tags: ['Learning Co-Pilot', 'Interaction Co-Pilot', 'Simulation'],
  },
  {
    num: '03', icon: BarChart3, c: 'var(--orange)',
    title: 'Execution',
    body: 'Real workflows, task handling, and customer interactions guided by intelligent co-pilots in real time.',
    tags: ['Real Workflows', 'Task Handling', 'Live Co-Pilot'],
  },
  {
    num: '04', icon: ShieldCheck, c: 'var(--red)',
    title: 'QA/QC & Compliance',
    body: 'Full interaction monitoring, compliance validation, and performance scoring ensures accuracy and governance at scale.',
    tags: ['100% Monitoring', 'Compliance Validation', 'Auto-Scoring'],
  },
  {
    num: '05', icon: RefreshCw, c: 'var(--lime)',
    title: 'Continuous Improvement',
    body: 'Feedback loops, model tuning, and process optimization. Every action improves the system.',
    tags: ['Feedback Loops', 'Model Tuning', 'SOP Auto-Update'],
  },
]

export default function Architecture() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p className="section-label">Architecture</p>
              <h2 className="section-title" style={{ maxWidth: 480 }}>From knowledge to execution to outcomes.</h2>
            </div>
            <span style={{
              padding: '8px 14px', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--orange)', border: '1px solid rgba(224,122,58,0.35)', borderRadius: 6,
              background: 'var(--orange-glow)',
            }}>v4.2.0 — Stable</span>
          </div>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {layers.map((l, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'grid', gridTemplateColumns: '72px 1fr auto',
                  gap: 36, alignItems: 'center',
                  padding: '32px 36px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border-strong)',
                  borderLeft: `3.5px solid ${l.c}`,
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.borderColor = l.c; e.currentTarget.style.borderLeftColor = l.c; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.borderLeftColor = l.c; }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 400, color: 'var(--border-strong)', lineHeight: 1 }}>{l.num}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <l.icon size={15} color={l.c} />
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{l.title}</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.68, maxWidth: 560, marginBottom: 14 }}>{l.body}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {l.tags.map((t, j) => (
                      <span key={j} style={{
                        fontSize: 11, padding: '3px 10px',
                        background: 'var(--surface)', border: '1px solid var(--border-strong)',
                        borderRadius: 4, color: 'var(--text-secondary)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${l.c}18`, border: `1px solid ${l.c}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <l.icon size={17} color={l.c} />
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}