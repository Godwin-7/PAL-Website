import { motion } from 'framer-motion'
import { BookOpen, Zap, BarChart3, RefreshCw, ShieldCheck } from 'lucide-react'
import { SectionLabel, FadeInUp, Tag } from '../components/UI'

const layers = [
  {
    num: '01',
    title: 'Knowledge & Instruction',
    body: 'SARA Co-pilot converts unstructured SOPs, training content, and institutional knowledge into a live Knowledge Graph. Every piece of data becomes navigable, searchable, and action-ready.',
    tags: ['SARA v2', 'Knowledge Graph', 'Ontology Engine'],
    color: 'var(--orange)',
    icon: BookOpen,
    modules: ['SOPs & Procedures', 'Training Content', 'Institutional Knowledge'],
  },
  {
    num: '02',
    title: 'Learning & Interaction',
    body: 'Immersive simulation environments and interaction co-pilots build skill through practice, not theory. Adaptive paths respond to each learner\'s gap profile in real time.',
    tags: ['SIM-CORE', 'Learning Co-Pilot', 'Interaction Agent'],
    color: 'var(--lime)',
    icon: Zap,
    modules: ['Adaptive Learning Paths', 'Simulation Environments', 'Skill Gap Analysis'],
  },
  {
    num: '03',
    title: 'Execution',
    body: 'Real-time guidance turns procedures into flawless actions on the ground. Co-pilots surface the right knowledge at the exact moment of need during live interactions.',
    tags: ['RUN_TIME', 'Execution Agents', 'Live Co-Pilot'],
    color: 'var(--red)',
    icon: BarChart3,
    modules: ['Real-time Guidance', 'Task Routing', 'SLA Management'],
  },
  {
    num: '04',
    title: 'QA/QC & Compliance',
    body: 'Every single interaction is scored and evaluated automatically. Compliance validation and performance signals flow back into the system without manual sampling.',
    tags: ['QA Super Agent', 'Auto-Scoring', 'Compliance Engine'],
    color: 'var(--orange)',
    icon: ShieldCheck,
    modules: ['100% Interaction Monitoring', 'Compliance Validation', 'Performance Scoring'],
  },
  {
    num: '05',
    title: 'Continuous Improvement',
    body: 'Every action refines the system. Feedback loops drive model tuning, process optimization, and content updates so PAL becomes more accurate with every passing interaction.',
    tags: ['Feedback Loop', 'Model Tuning', 'Process Optimizer'],
    color: 'var(--lime)',
    icon: RefreshCw,
    modules: ['Automated Feedback Loops', 'Model Refinement', 'SOP Auto-Update'],
  },
]

export default function Architecture() {
  return (
    <section id="intelligence" style={{ background: 'var(--bg-2)', padding: '120px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeInUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <SectionLabel color="var(--lime)">System Architecture</SectionLabel>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)',
                maxWidth: 600, lineHeight: 1.1,
              }}>From knowledge to execution to outcomes.</h2>
            </div>

            <div style={{
              padding: '12px 20px',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)', animation: 'ping 1.5s infinite' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                Architecture v4.2.0 — Stable
              </span>
            </div>
          </div>
        </FadeInUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {layers.map((layer, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: 48,
                  alignItems: 'center',
                  padding: '40px 48px',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  borderLeft: `4px solid ${layer.color}`,
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--card-bg-hover)'
                  e.currentTarget.style.borderColor = layer.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-3)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.borderLeftColor = layer.color
                }}
              >
                {/* Background number */}
                <div style={{
                  position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)',
                  fontFamily: 'Syne, sans-serif', fontSize: 120, fontWeight: 800,
                  color: layer.color, opacity: 0.04, userSelect: 'none', pointerEvents: 'none',
                }}>{layer.num}</div>

                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 56, fontWeight: 800,
                  color: 'var(--border)', lineHeight: 1,
                }}>{layer.num}</div>

                <div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 10, letterSpacing: '-0.01em',
                  }}>{layer.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 580, marginBottom: 16 }}>{layer.body}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {layer.modules.map((m, j) => (
                      <span key={j} style={{
                        fontSize: 11, color: 'var(--text-muted)',
                        padding: '3px 10px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                        borderRadius: 2,
                      }}>{m}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  {layer.tags.map((t, j) => (
                    <Tag key={j} color={layer.color}>{t}</Tag>
                  ))}
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #intelligence .layer-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  )
}