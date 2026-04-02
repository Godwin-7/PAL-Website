import { motion } from 'framer-motion'
import { FadeUp } from '../../components/Animate'
import { Phone, MessageSquare, Mail, Monitor, FileText, BookOpen, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'

const inputs  = [
  { icon: Phone,        label: 'Calls',         c: 'var(--orange)' },
  { icon: MessageSquare,label: 'Chats',          c: 'var(--lime)'   },
  { icon: Mail,         label: 'Emails',         c: 'var(--red)'    },
  { icon: Monitor,      label: 'Screen Activity',c: 'var(--orange)' },
  { icon: FileText,     label: 'SOP Usage',      c: 'var(--lime)'   },
  { icon: BookOpen,     label: 'Training Data',  c: 'var(--red)'    },
]
const outputs = [
  { icon: TrendingUp, title: 'Proficiency Insights',      body: 'Real-time skill gap visibility across every associate and team.', c: 'var(--orange)' },
  { icon: Shield,     title: 'Compliance Signals',         body: 'Continuous automated auditing across all touchpoints and policy frameworks.', c: 'var(--lime)' },
  { icon: Zap,        title: 'Performance Optimization',   body: 'Closed-loop model refinement that makes every process sharper over time.', c: 'var(--red)' },
]
const counters = [
  { value: '100%', label: 'Interactions Captured', c: 'var(--orange)' },
  { value: '<2s',  label: 'Insight Latency',       c: 'var(--lime)'   },
  { value: '∞',   label: 'Improvement Loops',      c: 'var(--red)'    },
]

export default function Intelligence() {
  return (
    <section className="section" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Data → Intelligence → Outcomes</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Every interaction becomes intelligence.</h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto', lineHeight: 1.72, fontWeight: 300 }}>
              PAL captures every signal, transforms it into actionable intelligence, and routes it back into the system — automatically.
            </p>
          </div>
        </FadeUp>

        {/* Flow diagram */}
        <FadeUp delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr 60px 1fr', gap: 0, alignItems: 'stretch', marginBottom: 40 }}>
            {/* CAPTURE */}
            <div style={{ border: '1px solid var(--border-strong)', borderRadius: '8px 0 0 8px', background: 'var(--bg)', padding: '28px 24px' }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>PAL Captures</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {inputs.map((inp, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
                      background: 'var(--bg2)', border: '1px solid var(--border-strong)', borderRadius: 6,
                    }}>
                    <inp.icon size={13} color={inp.c} />
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{inp.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow 1 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
              <ArrowRight size={18} color="var(--orange)" />
            </div>

            {/* ENGINE */}
            <div style={{
              border: '1px solid rgba(224,122,58,0.4)', borderRadius: 8, padding: '28px 24px',
              background: 'var(--orange-glow)', textAlign: 'center',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
            }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 4 }}>PAL Engine</p>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--orange)', lineHeight: 1 }}>AI</div>
              <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>Multi-modal processing, semantic analysis, continuous learning</p>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NLP', 'Vision', 'Agents', 'Graph'].map((t, i) => (
                  <span key={i} className="tag tag-orange" style={{ fontSize: 10 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow 2 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={18} color="var(--lime)" />
            </div>

            {/* OUTPUT */}
            <div style={{ border: '1px solid var(--border-strong)', borderRadius: '0 8px 8px 0', background: 'var(--bg)', padding: '28px 24px' }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Transforms Into</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {outputs.map((out, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    style={{
                      padding: '14px 16px', background: 'var(--bg2)',
                      border: '1px solid var(--border-strong)', borderLeft: `3px solid ${out.c}`, borderRadius: '0 6px 6px 0',
                    }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                      <out.icon size={13} color={out.c} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: out.c }}>{out.title}</span>
                    </div>
                    <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{out.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Counters */}
        <FadeUp delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--border-strong)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            {counters.map((c, i) => (
              <motion.div key={i} whileHover={{ background: 'var(--surface-hover)' }}
                style={{
                  padding: '36px 28px', textAlign: 'center', background: 'var(--bg)',
                  borderRight: i < 2 ? '1px solid var(--border-strong)' : 'none', transition: 'background 0.2s',
                }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: c.c, lineHeight: 1, marginBottom: 10 }}>{c.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>{c.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div style={{ marginTop: 3, padding: '32px', border: '1px solid var(--border-strong)', borderTop: 'none', borderRadius: '0 0 10px 10px', background: 'var(--bg2)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              A continuously improving system where{' '}
              <span style={{ color: 'var(--orange)' }}>learning</span>,{' '}
              <span style={{ color: 'var(--lime)' }}>execution</span>, and{' '}
              <span style={{ color: 'var(--red)' }}>quality</span>
              {' '}are inseparable.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}