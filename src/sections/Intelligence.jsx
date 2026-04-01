import { motion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Monitor, FileText, BookOpen, TrendingUp, Shield, Zap } from 'lucide-react'
import { SectionLabel, FadeInUp } from '../components/UI'

const inputs = [
  { icon: Phone, label: 'Calls', color: 'var(--orange)' },
  { icon: MessageSquare, label: 'Chats', color: 'var(--lime)' },
  { icon: Mail, label: 'Emails', color: 'var(--red)' },
  { icon: Monitor, label: 'Screens', color: 'var(--orange)' },
  { icon: FileText, label: 'SOP Usage', color: 'var(--lime)' },
  { icon: BookOpen, label: 'Training', color: 'var(--red)' },
]

const outputs = [
  {
    icon: TrendingUp,
    title: 'Proficiency Insights',
    body: 'Real-time skill gap visibility across every associate and team, updated with every interaction.',
    color: 'var(--orange)',
  },
  {
    icon: Shield,
    title: 'Compliance Signals',
    body: 'Continuous automated auditing of every touchpoint against your regulatory and policy frameworks.',
    color: 'var(--lime)',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    body: 'Closed-loop model refinement that makes every process, person, and procedure sharper over time.',
    color: 'var(--red)',
  },
]

const counter = [
  { value: '100%', label: 'Interactions Captured', color: 'var(--orange)' },
  { value: '<2s', label: 'Insight Latency', color: 'var(--lime)' },
  { value: '∞', label: 'Improvement Loops', color: 'var(--red)' },
]

export default function Intelligence() {
  return (
    <section id="intelligence-data" style={{ background: 'var(--bg)', padding: '120px 2rem', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25, pointerEvents: 'none' }} />

      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, var(--lime), transparent 65%)',
          borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <SectionLabel color="var(--lime)">Data → Intelligence → Outcomes</SectionLabel>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800, letterSpacing: '-0.02em',
              color: 'var(--text-primary)', marginBottom: 20,
              lineHeight: 1.05,
            }}>
              Every interaction becomes intelligence.
            </h2>
            <p style={{
              fontSize: 18, color: 'var(--text-secondary)',
              maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
            }}>
              PAL captures every signal, transforms it into actionable intelligence, and routes it back into the system — automatically.
            </p>
          </div>
        </FadeInUp>

        {/* Flow diagram */}
        <FadeInUp delay={0.1}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 80px 1fr 80px 1fr',
            gap: 0,
            alignItems: 'center',
            marginBottom: 80,
          }}>
            {/* CAPTURE */}
            <div style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              padding: '40px 32px',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 28,
              }}>PAL Captures</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {inputs.map((inp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '12px 16px',
                      background: 'var(--bg-3)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <inp.icon size={15} color={inp.color} />
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{inp.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ height: 1, width: '100%', background: 'linear-gradient(90deg, var(--border), var(--orange))' }} />
              <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid var(--orange)' }} />
            </div>

            {/* TRANSFORM */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(241,143,34,0.08), rgba(165,207,79,0.05))',
              border: '1px solid var(--border)',
              borderColor: 'rgba(241,143,34,0.3)',
              padding: '40px 32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(241,143,34,0.08), transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--orange)', marginBottom: 24,
              }}>PAL Engine</div>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800,
                color: 'var(--orange)', lineHeight: 1, marginBottom: 12,
                textShadow: '0 0 40px rgba(241,143,34,0.4)',
              }}>AI</div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Multi-modal processing, semantic analysis, and continuous learning
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NLP', 'Vision', 'Agents', 'Graph'].map((t, i) => (
                  <span key={i} style={{
                    fontSize: 9, fontFamily: 'Syne, sans-serif', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '3px 10px',
                    background: 'rgba(241,143,34,0.1)',
                    border: '1px solid rgba(241,143,34,0.3)',
                    color: 'var(--orange)',
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ height: 1, width: '100%', background: 'linear-gradient(90deg, var(--lime), var(--border))' }} />
              <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid var(--lime)' }} />
            </div>

            {/* OUTPUT */}
            <div style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              padding: '40px 32px',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 28,
              }}>Transforms Into</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {outputs.map((out, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{
                      padding: '16px',
                      background: 'var(--bg-3)',
                      borderLeft: `3px solid ${out.color}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <out.icon size={14} color={out.color} />
                      <span style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase', color: out.color,
                      }}>{out.title}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{out.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Stats */}
        <FadeInUp delay={0.2}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
          }}>
            {counter.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                style={{
                  padding: '48px 40px',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 100%, ${c.color}18, transparent 60%)`,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 800, color: c.color, lineHeight: 1,
                  textShadow: `0 0 40px ${c.color}50`,
                  marginBottom: 12,
                }}>{c.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {c.label}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* Outcome statement */}
        <FadeInUp delay={0.3}>
          <div style={{
            marginTop: 4,
            padding: '48px',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 720,
              margin: '0 auto',
            }}>
              A continuously improving system where{' '}
              <span style={{ color: 'var(--orange)' }}>learning</span>,{' '}
              <span style={{ color: 'var(--lime)' }}>execution</span>, and{' '}
              <span style={{ color: 'var(--red)' }}>quality</span>
              {' '}are inseparable.
            </p>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #intelligence-data > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #intelligence-data > div > div:nth-child(3) > div:nth-child(2),
          #intelligence-data > div > div:nth-child(3) > div:nth-child(4) {
            display: none !important;
          }
          #intelligence-data > div > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}