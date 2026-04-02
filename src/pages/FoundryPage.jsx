import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '../components/Animate'

const foundries = [
  {
    label: 'Compliance Foundry',
    tagline: 'Intelligence for regulation, governance, and trust.',
    body: 'Encodes SOPs, policies, and regulatory frameworks. Transforms compliance into machine-evaluable systems. Powers QA/QC and audit intelligence across every interaction.',
    outcome: 'From sampled audits → continuous compliance intelligence',
    c: 'var(--orange)',
  },
  {
    label: 'Engineering Foundry',
    tagline: 'Intelligence for real-world operations.',
    body: 'Converts enterprise workflows into agentic systems. Deploys forward engineers for model tuning and execution. Builds reusable process intelligence across industries.',
    outcome: 'From manual workflows → agent-driven execution systems',
    c: 'var(--lime)',
  },
  {
    label: 'Pure Science Foundry',
    tagline: 'Intelligence for the future of reasoning and discovery.',
    body: 'Advances foundational AI models and reasoning systems. Partners with leading academic institutions globally. Builds long-horizon scientific intelligence.',
    outcome: 'From static models → evolving intelligence systems',
    c: 'var(--red)',
  },
]

const moat = [
  { num: '01', title: 'Data & Knowledge', sub: 'School / Compliance layer', items: ['Institutional partnerships', 'Ontology-aligned datasets', 'Cultural + regulatory intelligence'], c: 'var(--orange)' },
  { num: '02', title: 'Process Intelligence', sub: 'Engineering layer', items: ['Real-world workflows', 'Reusable agent systems', 'Forward deployment network'], c: 'var(--lime)' },
  { num: '03', title: 'Scientific Foundations', sub: 'Pure Science layer', items: ['Original research', 'Model innovation', 'Long-horizon IP'], c: 'var(--red)' },
]

const flow = [
  { step: '01', title: 'Capture & Structure Knowledge', body: 'Institutional, cultural, and enterprise knowledge is ingested and structured.' },
  { step: '02', title: 'Convert to Ontologies & Models', body: 'Knowledge graphs and structured datasets are generated.' },
  { step: '03', title: 'Deploy via Agents', body: 'SOPs become AOPs — Agentic Operating Procedures.' },
  { step: '04', title: 'Continuously Improve', body: 'Feedback loops and human-in-the-loop governance refine the system.' },
]

export default function FoundryPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg)', paddingBottom: 80 }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">Foundry</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: 1.08, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', maxWidth: 760, marginBottom: 24,
            }}>
              The next AI breakthrough is not more data.
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>It is structured intelligence.</span>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
              PAL Foundries transform knowledge into machine-operable intelligence — powering agentic systems across compliance, operations, and science.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/contact" className="btn-primary">Request Access <ArrowRight size={14} /></Link>
              <Link to="/" className="btn-ghost">View Platform</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What is a Foundry */}
      <section className="section" style={{ background: 'var(--bg2)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeUp>
              <p className="label-tag">What is a Foundry</p>
              <h2 className="section-title" style={{ marginBottom: 20 }}>A system for producing intelligence.</h2>
              <p className="body-text" style={{ marginBottom: 16 }}>
                AI today is constrained not by compute — but by how knowledge is structured, governed, and deployed. Data is fragmented. Knowledge is unstructured. Models lack context and reliability.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)', lineHeight: 1.4, fontStyle: 'italic' }}>
                "The future belongs to systems that can produce, structure, and govern intelligence at scale."
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { from: 'Institutional knowledge', to: 'Ontology-aligned datasets' },
                  { from: 'Enterprise processes', to: 'Agent-operable workflows' },
                  { from: 'Scientific discovery', to: 'Model-ready intelligence' },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center', gap: 16,
                    padding: '18px 24px',
                    border: '1px solid var(--border)', background: 'var(--bg)',
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{r.from}</span>
                    <ArrowRight size={14} color="var(--text-muted)" />
                    <span style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{r.to}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three Foundries */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">Three Foundries</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Intelligence production systems.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {foundries.map((f, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  style={{
                    padding: '32px 28px',
                    border: '1px solid var(--border)',
                    borderTop: `3px solid ${f.c}`,
                    background: 'var(--bg2)',
                    borderRadius: '0 0 8px 8px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transition: 'border-color 0.25s',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--text-primary)', marginBottom: 8 }}>{f.label}</h3>
                  <p style={{ fontSize: 13, color: f.c, fontWeight: 500, marginBottom: 16 }}>{f.tagline}</p>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, marginBottom: 24 }}>{f.body}</p>
                  <div style={{
                    padding: '12px 16px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    fontSize: 12, color: 'var(--text-muted)',
                  }}>{f.outcome}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How foundries work together */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">How it works</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>A unified pipeline from knowledge to intelligence.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {flow.map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{
                  padding: '28px 24px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  position: 'relative',
                }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--text-muted)',
                    marginBottom: 16, letterSpacing: '0.08em',
                  }}>{f.step}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>{f.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* The Moat */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="label-tag">Competitive Advantage</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Built for compounding advantage.</h2>
            <p className="body-text" style={{ marginBottom: 48, maxWidth: 480 }}>Three layers of defensibility that strengthen with every deployment.</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {moat.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  padding: '28px', border: '1px solid var(--border)',
                  background: 'var(--bg2)', borderRadius: 8,
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--border-strong)', display: 'block', marginBottom: 16 }}>{m.num}</span>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{m.title}</h4>
                  <p style={{ fontSize: 12, color: m.c, marginBottom: 20, fontWeight: 500 }}>{m.sub}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {m.items.map((it, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: m.c, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div style={{ marginTop: 40, padding: '28px 36px', border: '1px solid var(--border)', background: 'var(--bg2)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-secondary)', marginBottom: 4 }}>This is not a product.</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-primary)', fontStyle: 'italic' }}>It is an intelligence ecosystem.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title" style={{ marginBottom: 16 }}>The future of AI will not be defined by models alone.</h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 32, fontWeight: 300 }}>It will be defined by the systems that produce intelligence.</p>
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