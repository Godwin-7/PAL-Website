import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { FadeUp } from '../components/Animate'

const copilots = [
  {
    name: 'SARA',
    role: 'Instruction Design Co-Pilot',
    tagline: 'Turn raw expertise into structured learning and process intelligence.',
    body: 'SARA converts enterprise knowledge — structured or unstructured — into SOPs, learning systems, and process intelligence. It operates across three core workflows: Video-to-SOP creation, Instruction Design from SOPs, and Process Mining & Flow Intelligence.',
    features: ['Video → SOP creation from trainer recordings', 'Storyboards, knowledge checks, case studies, games', 'L3 process maps & L4 keystroke-level flow diagrams', '50–70% faster content creation', '70–80% reduction in documentation effort'],
    closing: 'Capture expertise once. Scale it across learning, process, and execution.',
    c: 'var(--orange)',
  },
  {
    name: 'AI Coach',
    role: 'Learning Co-Pilot',
    tagline: 'Move learners from exposure to mastery.',
    body: 'Accelerates speed-to-proficiency through adaptive learning, simulations, and personalized feedback. Identifies learner level and builds a targeted path to mastery across domain-based learning, system simulations, and adaptive assessment.',
    features: ['Placement assessments & adaptive pathways', 'Guided simulation with AI-led walkthroughs', 'Unguided assessment mirroring production environments', 'Click-level tracking of every learner action', '20–30% faster speed-to-proficiency'],
    closing: 'Diagnose the gap. Adapt the path. Accelerate mastery.',
    c: 'var(--lime)',
  },
  {
    name: 'Interaction',
    role: 'Interaction Co-Pilot',
    tagline: 'Train in the environment where work happens.',
    body: 'Prepares associates for real-world execution through AI-driven simulations of calls, chats, emails, and system workflows. Omnichannel simulation with QA/QC-based evaluation and real-time feedback and coaching.',
    features: ['Omnichannel simulation (calls, chats, emails)', 'Realistic customer scenarios with click-level tracking', 'QA/QC-based evaluation against real benchmarks', 'Real-time feedback and behavioral coaching', 'Faster production readiness, reduced early errors'],
    closing: 'Simulate the work. Measure the behavior. Build confidence before go-live.',
    c: 'var(--red)',
  },
]

const loop = [
  { num: '01', title: 'Create',   body: 'SARA converts knowledge into structured learning systems.' },
  { num: '02', title: 'Learn',    body: 'AI Coach delivers personalized adaptive pathways.' },
  { num: '03', title: 'Practice', body: 'Interaction Co-Pilot simulates real-world work.' },
  { num: '04', title: 'Evaluate', body: 'Performance is scored across every single interaction.' },
  { num: '05', title: 'Improve',  body: 'Feedback loops refine learners and refine models.' },
]

const impact = [
  { value: '20–30%', label: 'Faster proficiency',       cat: 'Speed',       c: 'var(--orange)' },
  { value: '90%',    label: 'Error reduction',           cat: 'Quality',     c: 'var(--lime)'   },
  { value: '40%',    label: 'Lower cost of proficiency', cat: 'Efficiency',  c: 'var(--red)'    },
  { value: '5×',     label: 'Productivity gain',         cat: 'Output',      c: 'var(--orange)' },
]

const dashboards = ['Learner dashboards', 'Trainer dashboards', 'Management dashboards', 'Super admin views']

export default function LearningPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(123,173,58,0.18), transparent 65%)',
            filter: 'blur(80px)', pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <p className="section-label">Learning & Impact</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 66px)',
              lineHeight: 1.07, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', maxWidth: 720, marginBottom: 24,
            }}>
              Learning that translates into performance.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 500, lineHeight: 1.73, marginBottom: 28, fontWeight: 300 }}>
              PAL transforms enterprise training into adaptive, AI-driven intelligence — connecting instruction, simulation, and real-world execution into a continuous system of improvement.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              A cognitive accelerator for the future of work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The Shift */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeUp>
              <p className="section-label">The Shift</p>
              <h2 className="section-title" style={{ marginBottom: 20 }}>From training programs to learning systems.</h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Traditional learning is static and disconnected from execution. PAL creates a continuous loop where every interaction improves the system.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--orange)', fontStyle: 'italic', borderLeft: '3px solid var(--orange)', paddingLeft: 16 }}>
                "Learning is not an event. It is a system."
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
                {['Knowledge', 'Learning', 'Simulation', 'Interaction', 'Feedback', 'Improvement'].map((s, i, arr) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 20px', background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border-strong)' : 'none',
                  }}>
                    <span style={{ fontSize: 14, color: i === 0 || i === arr.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: i === 0 || i === arr.length - 1 ? 500 : 400 }}>{s}</span>
                    {i < arr.length - 1 && <ArrowRight size={13} color="var(--text-muted)" />}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three Co-Pilots */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">The Learning Engine</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Three co-pilots powering speed to proficiency.</h2>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {copilots.map((cp, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '260px 1fr',
                  border: '1px solid var(--border-strong)',
                  background: 'var(--bg2)', borderRadius: 10,
                  overflow: 'hidden', boxShadow: 'var(--card-shadow)',
                }}>
                  <div style={{
                    padding: '32px 28px',
                    borderRight: '1px solid var(--border-strong)',
                    borderTop: `3px solid ${cp.c}`,
                    display: 'flex', flexDirection: 'column', gap: 10,
                    background: 'var(--bg3)',
                  }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em', color: cp.c, textTransform: 'uppercase' }}>{cp.name}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--text-primary)', lineHeight: 1.3 }}>{cp.role}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>{cp.tagline}</p>
                  </div>
                  <div style={{ padding: '32px 32px' }}>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 22 }}>{cp.body}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 20 }}>
                      {cp.features.map((f, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <CheckCircle size={13} color={cp.c} style={{ flexShrink: 0, marginTop: 3 }} />
                          <span style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '10px 14px', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 6 }}>
                      <p style={{ fontSize: 12.5, color: cp.c, fontWeight: 500, fontStyle: 'italic' }}>{cp.closing}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="section" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <FadeUp>
              <p className="section-label">Dashboards</p>
              <h2 className="section-title" style={{ marginBottom: 16 }}>Multi-Stakeholder Visibility</h2>
              <p className="body-text">Enables real-time intervention and performance tracking across every level of the organization.</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {dashboards.map((d, i) => (
                  <div key={i} style={{
                    padding: '20px 18px', border: '1px solid var(--border-strong)', background: 'var(--bg2)',
                    borderRadius: 8, borderTop: `2.5px solid ${['var(--orange)', 'var(--lime)', 'var(--red)', 'var(--orange)'][i]}`,
                    fontSize: 13.5, fontWeight: 500, color: 'var(--text-primary)',
                  }}>{d}</div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">How it works</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>A closed-loop learning system.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            {loop.map((l, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ background: 'var(--surface-hover)' }}
                  style={{
                    padding: '24px 20px', background: 'var(--bg)',
                    borderRight: i < 4 ? '1px solid var(--border-strong)' : 'none',
                    borderBottom: `2.5px solid ${i % 2 === 0 ? 'var(--orange)' : 'var(--lime)'}`,
                    transition: 'background 0.2s',
                  }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 12 }}>{l.num}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{l.title}</h4>
                  <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{l.body}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <p style={{ marginTop: 18, textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Every interaction improves the system.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Impact */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Measured Impact</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Measured outcomes across the workforce.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            {impact.map((it, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ background: 'var(--surface-hover)' }}
                  style={{
                    padding: '36px 24px', textAlign: 'center', background: 'var(--bg2)',
                    borderRight: i < 3 ? '1px solid var(--border-strong)' : 'none',
                    borderTop: `2.5px solid ${it.c}`, transition: 'background 0.2s',
                  }}>
                  <span style={{ display: 'block', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>{it.cat}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 40, lineHeight: 1, color: it.c, marginBottom: 8 }}>{it.value}</span>
                  <span style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{it.label}</span>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title" style={{ marginBottom: 16 }}>The future of work learns continuously.</h2>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 300 }}>Organizations that win won't just train faster.</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)', marginBottom: 36, fontStyle: 'italic' }}>
              PAL turns learning into intelligence. And intelligence into outcomes.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Request Demo <ArrowRight size={14} /></Link>
              <Link to="/" className="btn-ghost">Explore Platform</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}