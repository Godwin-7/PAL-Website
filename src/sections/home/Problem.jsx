import { motion } from 'framer-motion'
import { FadeUp } from '../../components/Animate'
import { AlertTriangle, BookX, BarChart2, BrainCircuit } from 'lucide-react'

const problems = [
  { icon: BookX,        title: 'Disconnected Training',    body: 'Training is isolated from execution. New hires spend weeks in classrooms before creating any real value.', c: 'var(--red)' },
  { icon: AlertTriangle,title: 'Static SOPs',              body: 'Legacy procedures remain unread. Documentation sits in PDFs while teams improvise on the floor.', c: 'var(--orange)' },
  { icon: BarChart2,    title: 'Reactive QA/QC',            body: 'Sampled reviews replace real-time intervention. Errors scale before they are ever detected.', c: 'var(--red)' },
  { icon: BrainCircuit, title: 'Knowledge Silos',           body: 'Learning doesn\'t translate into performance. Institutional knowledge lives in heads, not systems.', c: 'var(--orange)' },
]

const outcomes = [
  { num: '01', title: 'Slow Proficiency',      body: 'Weeks of setup before any output is produced.' },
  { num: '02', title: 'High Error Rates',      body: 'Manual processes scale friction, not consistency.' },
  { num: '03', title: 'Limited Scalability',   body: 'Linear growth collapses under exponential demand.' },
]

export default function Problem() {
  return (
    <section className="section" style={{
      background: 'var(--bg3)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <FadeUp>
              <p className="section-label" style={{ color: 'var(--red)' }}>The Problem</p>
              <h2 className="section-title" style={{ marginBottom: 36 }}>
                Service operations today<br />
                <em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>are fragmented.</em>
              </h2>
            </FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {problems.map((p, i) => (
                <FadeUp key={i} delay={i * 0.09}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex', gap: 16, padding: '20px 22px',
                      background: 'var(--bg2)',
                      border: '1px solid var(--border-strong)',
                      borderLeft: `3px solid ${p.c}`,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
                  >
                    <p.icon size={16} color={p.c} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.c, marginBottom: 4 }}>{p.title}</p>
                      <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{p.body}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right */}
          <FadeUp delay={0.18}>
            <div style={{
              padding: '36px 32px',
              background: 'var(--bg2)',
              border: '1px solid var(--border-strong)',
              borderRadius: 10,
              boxShadow: 'var(--card-shadow)',
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 28 }}>The Result</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {outcomes.map((o, i) => (
                  <motion.div key={i} whileHover={{ x: 4 }} style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 400,
                      lineHeight: 0.9, color: 'var(--border-strong)', transition: 'color 0.35s',
                      flexShrink: 0, width: 60,
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--red)'}
                    onMouseLeave={e => e.target.style.color = 'var(--border-strong)'}
                    >{o.num}</div>
                    <div style={{ paddingTop: 4 }}>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--text-primary)', marginBottom: 6 }}>{o.title}</h4>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{o.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}