import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { FadeUp } from '../components/Animate'

const copilots = [
  {
    name: 'SARA',
    role: 'Instruction Design Co-Pilot',
    tagline: 'Turn raw expertise into structured learning and process intelligence.',
    body: 'SARA converts enterprise knowledge — structured or unstructured — into SOPs, learning systems, and process intelligence. Supports video-to-SOP creation, instruction design, and process mining.',
    features: ['Video → SOP creation', 'Storyboards & knowledge checks', 'L3/L4 process maps', '50–70% faster content creation'],
    c: 'var(--orange)',
  },
  {
    name: 'AI Coach',
    role: 'Learning Co-Pilot',
    tagline: 'Move learners from exposure to mastery.',
    body: 'Accelerates speed-to-proficiency through adaptive learning, simulations, and personalized feedback. Captures every learner action and generates targeted improvement pathways.',
    features: ['Placement assessments', 'Guided & unguided simulation', 'Click-level tracking', '20–30% faster proficiency'],
    c: 'var(--lime)',
  },
  {
    name: 'Interaction',
    role: 'Interaction Co-Pilot',
    tagline: 'Train in the environment where work happens.',
    body: 'Prepares associates for real-world execution through AI-driven simulations of calls, chats, emails, and system workflows. QA/QC-based evaluation with real-time coaching.',
    features: ['Omnichannel simulation', 'Realistic customer scenarios', 'QA/QC-based evaluation', 'Reduced early-stage errors'],
    c: 'var(--red)',
  },
]

const loop = [
  { num: '01', title: 'Create', body: 'SARA converts knowledge into structured learning' },
  { num: '02', title: 'Learn', body: 'AI Coach delivers adaptive pathways' },
  { num: '03', title: 'Practice', body: 'Interaction Co-Pilot simulates real work' },
  { num: '04', title: 'Evaluate', body: 'Performance scored across every interaction' },
  { num: '05', title: 'Improve', body: 'Feedback loops refine learners and models' },
]

const impact = [
  { value: '20–30%', label: 'Faster proficiency', cat: 'Speed', c: 'var(--orange)' },
  { value: '90%', label: 'Error reduction', cat: 'Quality', c: 'var(--lime)' },
  { value: '40%', label: 'Lower training cost', cat: 'Efficiency', c: 'var(--red)' },
  { value: '5×', label: 'Productivity gain', cat: 'Output', c: 'var(--orange)' },
]

export default function LearningPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">Learning & Impact</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', maxWidth: 720, marginBottom: 24,
            }}>
              Learning that translates into performance.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 500, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
              PAL transforms enterprise training into adaptive, AI-driven intelligence — connecting instruction, simulation, and real-world execution into a continuous system of improvement.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              A cognitive accelerator for the future of work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The Shift */}
      <section className="section" style={{ background: 'var(--bg2)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeUp>
              <p className="label-tag">The Shift</p>
              <h2 className="section-title" style={{ marginBottom: 20 }}>From training programs to learning systems.</h2>
              <p className="body-text">
                Traditional learning is static and disconnected from execution. PAL creates a continuous loop where every interaction improves the system.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Knowledge', 'Learning', 'Simulation', 'Interaction', 'Feedback', 'Improvement'].map((s, i, arr) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 20px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    borderLeft: i === 0 || i === arr.length - 1 ? '2px solid var(--orange)' : '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{s}</span>
                    {i < arr.length - 1 && <ArrowRight size={13} color="var(--text-muted)" />}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Learning is not an event. It is a system.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three Co-Pilots */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">The Learning Engine</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Three co-pilots powering speed to proficiency.</h2>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {copilots.map((cp, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '280px 1fr',
                  border: '1px solid var(--border)',
                  background: 'var(--bg2)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: '36px 32px',
                    borderRight: '1px solid var(--border)',
                    borderTop: `3px solid ${cp.c}`,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}>
                    <div>
                      <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: cp.c, marginBottom: 8, textTransform: 'uppercase' }}>{cp.name}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.3 }}>{cp.role}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>{cp.tagline}</p>
                    </div>
                  </div>
                  <div style={{ padding: '36px 36px' }}>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>{cp.body}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {cp.features.map((f, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <CheckCircle size={14} color={cp.c} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* The Learning Loop */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">How it works</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>A closed-loop learning system.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}>
            {loop.map((l, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{
                  padding: '24px 20px', border: '1px solid var(--border)', background: 'var(--bg)',
                  borderBottom: `2px solid ${i % 2 === 0 ? 'var(--orange)' : 'var(--lime)'}`,
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 14 }}>{l.num}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{l.title}</h4>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{l.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <p style={{ marginTop: 20, textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Every interaction improves the system.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Impact */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">Impact</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Measured outcomes across the workforce.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {impact.map((it, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  style={{
                    padding: '36px 28px', textAlign: 'center',
                    border: '1px solid var(--border)', background: 'var(--bg2)',
                  }}
                >
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>{it.cat}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1, color: it.c, marginBottom: 8 }}>{it.value}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{it.label}</span>
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
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 300 }}>
              Organizations that win won't just train faster.
            </p>
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