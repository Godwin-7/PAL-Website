import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { FadeUp } from '../components/Animate'

const foundries = [
  {
    label: 'Compliance Foundry',
    tagline: 'Intelligence for regulation, governance, and trust.',
    body: 'Encodes SOPs, policies, and regulatory frameworks into machine-evaluable systems. Powers QA/QC and audit intelligence across every interaction — replacing sampled reviews with continuous coverage.',
    items: ['Encodes SOPs, policies, regulatory frameworks', 'Transforms compliance into machine-evaluable systems', 'Powers QA/QC and audit intelligence'],
    outcome: 'From sampled audits → continuous compliance intelligence',
    c: 'var(--orange)',
  },
  {
    label: 'Engineering Foundry',
    tagline: 'Intelligence for real-world operations.',
    body: 'Converts enterprise workflows into agentic systems. Deploys forward engineers for model tuning and execution. Builds reusable process intelligence across industries — Palantir-style forward deployment × agentic AI systems.',
    items: ['Converts enterprise workflows into agentic systems', 'Deploys forward engineers for model tuning', 'Builds reusable process intelligence across industries'],
    outcome: 'From manual workflows → agent-driven execution systems',
    c: 'var(--lime)',
  },
  {
    label: 'Pure Science Foundry',
    tagline: 'Intelligence for the future of reasoning and discovery.',
    body: 'Advances foundational AI models and reasoning systems. Partners with leading academic institutions globally. Builds long-horizon scientific intelligence that evolves beyond today\'s static model paradigms.',
    items: ['Advances foundational AI models and reasoning systems', 'Partners with leading academic institutions globally', 'Builds long-horizon scientific intelligence'],
    outcome: 'From static models → evolving intelligence systems',
    c: 'var(--red)',
  },
]

const flow = [
  { step: '01', title: 'Capture & Structure Knowledge',  body: 'Institutional, cultural, and enterprise knowledge is ingested and structured.' },
  { step: '02', title: 'Convert to Ontologies & Models', body: 'Knowledge graphs and structured datasets are generated from raw inputs.' },
  { step: '03', title: 'Deploy via Agents',              body: 'SOPs become AOPs — Agentic Operating Procedures that guide in real time.' },
  { step: '04', title: 'Continuously Improve',           body: 'Feedback loops and human-in-the-loop governance refine the system continuously.' },
]

const moat = [
  { num: '01', title: 'Data & Knowledge',        sub: 'School / Compliance layer', items: ['Institutional partnerships', 'Ontology-aligned datasets', 'Cultural + regulatory intelligence'], c: 'var(--orange)' },
  { num: '02', title: 'Process Intelligence',    sub: 'Engineering layer',          items: ['Real-world workflows', 'Reusable agent systems', 'Forward deployment network'], c: 'var(--lime)' },
  { num: '03', title: 'Scientific Foundations',  sub: 'Pure Science layer',         items: ['Original research', 'Model innovation', 'Long-horizon IP'], c: 'var(--red)' },
]

const withWithout = [
  { without: 'Models hallucinate',          with: 'Knowledge becomes structured' },
  { without: 'Systems break under complexity', with: 'Systems become reliable'  },
  { without: 'Compliance is reactive',       with: 'Compliance becomes continuous' },
  { without: 'Learning doesn\'t scale',      with: 'Learning becomes adaptive'  },
]

export default function FoundryPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 9, repeat: Infinity }}
          style={{
            position: 'absolute', top: '-10%', right: '-8%',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(224,122,58,0.2), transparent 65%)',
            filter: 'blur(70px)', pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <p className="section-label">Foundry</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.06, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', maxWidth: 760, marginBottom: 24,
            }}>
              The next AI breakthrough is not more data.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>It is structured intelligence.</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.73, marginBottom: 36, fontWeight: 300 }}>
              PAL Foundries transform knowledge into machine-operable intelligence — powering agentic systems across compliance, operations, and science.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <Link to="/contact" className="btn-primary">Request Access <ArrowRight size={14} /></Link>
              <Link to="/" className="btn-ghost">View Platform</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What is a Foundry */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeUp>
              <p className="section-label">What is a Foundry</p>
              <h2 className="section-title" style={{ marginBottom: 20 }}>A system for producing intelligence.</h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                AI today is constrained not by compute — but by how knowledge is structured, governed, and deployed. Data is fragmented. Knowledge is unstructured. Models lack context and reliability.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--text-primary)', lineHeight: 1.45, fontStyle: 'italic', borderLeft: '3px solid var(--orange)', paddingLeft: 18 }}>
                "The future belongs to systems that can produce, structure, and govern intelligence at scale."
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div style={{ border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
                <div style={{ padding: '16px 20px', background: 'var(--bg3)', borderBottom: '1px solid var(--border-strong)' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>PAL Foundries Convert</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    { from: 'Institutional knowledge',  to: 'Ontology-aligned datasets'     },
                    { from: 'Enterprise processes',     to: 'Agent-operable workflows'       },
                    { from: 'Scientific discovery',     to: 'Model-ready intelligence'       },
                  ].map((r, i, arr) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 12,
                      padding: '16px 20px', background: 'var(--bg2)',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border-strong)' : 'none',
                    }}>
                      <span style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>{r.from}</span>
                      <ArrowRight size={13} color="var(--text-muted)" />
                      <span style={{ fontSize: 13.5, color: 'var(--text-primary)', fontWeight: 500 }}>{r.to}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '14px 20px', background: 'var(--orange-glow)', borderTop: '1px solid rgba(224,122,58,0.25)' }}>
                  <p style={{ fontSize: 12.5, color: 'var(--orange)', fontWeight: 500 }}>Not data pipelines. Not training systems. Intelligence production systems.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three Foundries */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">The Three Foundries</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Intelligence production systems.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {foundries.map((f, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: 'var(--card-shadow-hover)' }}
                  style={{
                    padding: '32px 28px',
                    border: '1px solid var(--border-strong)',
                    borderTop: `3px solid ${f.c}`,
                    background: 'var(--bg2)', borderRadius: '0 0 10px 10px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    boxShadow: 'var(--card-shadow)', transition: 'all 0.3s',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--text-primary)', marginBottom: 7 }}>{f.label}</h3>
                  <p style={{ fontSize: 13, color: f.c, fontWeight: 500, marginBottom: 16, fontStyle: 'italic' }}>{f.tagline}</p>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{f.body}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                    {f.items.map((it, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <CheckCircle size={13} color={f.c} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{it}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    padding: '11px 14px', background: 'var(--surface)',
                    border: '1px solid var(--border-strong)', borderRadius: 6,
                    fontSize: 12, color: 'var(--text-muted)',
                  }}>{f.outcome}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How foundries work together */}
      <section className="section" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">How it works</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>A unified pipeline from knowledge to intelligence.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            {flow.map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ background: 'var(--surface-hover)' }}
                  style={{
                    padding: '28px 22px', background: 'var(--bg2)',
                    borderRight: i < 3 ? '1px solid var(--border-strong)' : 'none', transition: 'background 0.2s',
                  }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 14 }}>{f.step}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 9 }}>{f.title}</h4>
                  <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{f.body}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.35}>
            <div style={{ marginTop: 3, padding: '18px 24px', border: '1px solid var(--border-strong)', borderTop: 'none', borderRadius: '0 0 10px 10px', background: 'var(--bg2)', textAlign: 'center' }}>
              <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                Every Foundry feeds the platform. Every deployment improves the system.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Why This Matters</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Intelligence is becoming infrastructure.</h2>
            <p className="body-text" style={{ marginBottom: 48, maxWidth: 480 }}>Foundries make intelligence usable — reliable, scalable, and aligned to real-world complexity.</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ padding: '0', borderRight: '1px solid var(--border-strong)' }}>
              <div style={{ padding: '16px 24px', background: 'var(--red-light)', borderBottom: '1px solid var(--border-strong)' }}>
                <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>Without Foundries</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {withWithout.map((r, i, arr) => (
                  <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--bg2)' }}>
                    <p style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>— {r.without}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ padding: '16px 24px', background: 'var(--lime-light)', borderBottom: '1px solid var(--border-strong)' }}>
                <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lime)' }}>With PAL Foundries</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {withWithout.map((r, i, arr) => (
                  <div key={i} style={{ padding: '14px 24px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--bg2)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={13} color="var(--lime)" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: 13.5, color: 'var(--text-primary)', fontWeight: 500 }}>{r.with}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Moat */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Competitive Advantage</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Built for compounding advantage.</h2>
            <p className="body-text" style={{ marginBottom: 48, maxWidth: 480 }}>Three layers of defensibility that strengthen with every deployment and every dataset.</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {moat.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
                  style={{ padding: '28px', border: '1px solid var(--border-strong)', background: 'var(--bg2)', borderRadius: 10, boxShadow: 'var(--card-shadow)', transition: 'all 0.25s' }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--border-strong)', display: 'block', marginBottom: 16 }}>{m.num}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{m.title}</h4>
                  <p style={{ fontSize: 12, color: m.c, marginBottom: 20, fontWeight: 500 }}>{m.sub}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {m.items.map((it, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: m.c, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.35}>
            <div style={{ marginTop: 36, padding: '28px 36px', border: '1px solid var(--border-strong)', background: 'var(--bg2)', textAlign: 'center', borderRadius: 10 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-secondary)', marginBottom: 4 }}>This is not a product.</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', fontStyle: 'italic' }}>It is an intelligence ecosystem.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Closing */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title" style={{ marginBottom: 16 }}>The future of AI will not be defined by models alone.</h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 32, fontWeight: 300 }}>
              It will be defined by the systems that produce intelligence.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Request Access <ArrowRight size={14} /></Link>
              <Link to="/" className="btn-ghost">Explore Platform</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}