import { motion } from 'framer-motion'
import { Database, Brain, ShieldCheck, Cpu, GraduationCap, GitBranch } from 'lucide-react'
import { SectionLabel, FadeInUp, Tag } from '../components/UI'

const agents = [
  {
    id: 'AOP-01',
    icon: Database,
    title: 'Capture & Structure Agent',
    body: 'Ingests raw knowledge — SOPs, recordings, documents — and converts it into structured, queryable systems. The foundation of all downstream intelligence.',
    color: 'var(--lime)',
    tags: ['NLP Pipeline', 'Knowledge Graph'],
  },
  {
    id: 'AOP-02',
    icon: Brain,
    title: 'Learning & Enablement Agents',
    body: 'Build, personalize, and optimize workforce capability through adaptive pathways that evolve with each learner\'s performance data.',
    color: 'var(--orange)',
    tags: ['Adaptive Learning', 'Skill Mapping'],
  },
  {
    id: 'AOP-03',
    icon: ShieldCheck,
    title: 'QA/QC Super Agent',
    body: 'Evaluates 100% of every interaction — call, chat, and email — against compliance frameworks and performance benchmarks in real time.',
    color: 'var(--red)',
    tags: ['Full Coverage', 'Auto-Scoring'],
    featured: true,
  },
  {
    id: 'AOP-04',
    icon: Cpu,
    title: 'AOP Execution Agents',
    body: 'Drive real-time operational decisions — routing work, surfacing procedures, flagging anomalies — while the associate is live on an interaction.',
    color: 'var(--orange)',
    tags: ['Real-time', 'Task Routing'],
  },
  {
    id: 'AOP-05',
    icon: GraduationCap,
    title: 'AI Coach + Simulation Agents',
    body: 'Train, guide, and improve human performance through realistic simulations, behavioral coaching, and moment-of-need feedback.',
    color: 'var(--lime)',
    tags: ['Simulation', 'Behavioral AI'],
  },
]

export default function AgenticCore() {
  return (
    <section id="agentic" style={{ background: 'var(--bg-2)', padding: '120px 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background effect */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 800,
          background: 'conic-gradient(from 0deg, transparent 60%, rgba(241,143,34,0.03) 70%, transparent 80%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
            <div>
              <SectionLabel color="var(--orange)">The Agentic Core</SectionLabel>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05,
                color: 'var(--text-primary)', marginBottom: 24,
              }}>
                An agentic architecture — not just copilots.
              </h2>
              <p style={{
                fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7,
                fontWeight: 300, maxWidth: 480,
              }}>
                PAL is built as a coordinated system of specialized agents — each with a distinct role — orchestrated through a central intelligence layer that ensures alignment between learning, execution, and compliance.
              </p>
            </div>

            <div style={{
              padding: '40px',
              background: 'var(--bg-3)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--orange)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <GitBranch size={18} color="var(--orange)" />
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)',
                }}>Key Concept: AOP</span>
              </div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.3,
              }}>
                SOPs → Agentic Operating Procedures
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                PAL transforms static Standard Operating Procedures into <strong style={{ color: 'var(--orange)' }}>Agentic Operating Procedures (AOPs)</strong> — living, executable systems that guide, evaluate, and improve work in real time. Procedures become programs.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Tag color="var(--orange)">Living Systems</Tag>
                <Tag color="var(--lime)">Self-Improving</Tag>
                <Tag color="var(--red)">Real-time Guidance</Tag>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Agents grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 3 }}>
          {agents.map((agent, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  padding: '32px 28px',
                  background: agent.featured
                    ? `linear-gradient(135deg, ${agent.color}15, ${agent.color}08)`
                    : 'var(--bg-3)',
                  border: `1px solid ${agent.featured ? agent.color + '50' : 'var(--border)'}`,
                  borderTop: `3px solid ${agent.color}`,
                  position: 'relative', overflow: 'hidden',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = agent.color
                  e.currentTarget.style.background = `${agent.color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = agent.featured ? `${agent.color}50` : 'var(--border)'
                  e.currentTarget.style.background = agent.featured
                    ? `linear-gradient(135deg, ${agent.color}15, ${agent.color}08)`
                    : 'var(--bg-3)'
                }}
              >
                {/* Background watermark */}
                <div style={{
                  position: 'absolute', right: -10, bottom: -10,
                  fontFamily: 'Syne, sans-serif', fontSize: 64, fontWeight: 800,
                  color: agent.color, opacity: 0.05, userSelect: 'none', lineHeight: 1,
                }}>{i + 1}</div>

                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: agent.color, marginBottom: 20,
                }}>{agent.id}</div>

                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${agent.color}18`,
                  border: `1px solid ${agent.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <agent.icon size={18} color={agent.color} />
                </div>

                <h4 style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.3,
                }}>{agent.title}</h4>

                <p style={{
                  fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65,
                  flex: 1,
                }}>{agent.body}</p>

                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {agent.tags.map((t, j) => (
                    <Tag key={j} color={agent.color}>{t}</Tag>
                  ))}
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Orchestration banner */}
        <FadeInUp delay={0.5}>
          <div style={{
            marginTop: 3,
            padding: '32px 48px',
            background: 'linear-gradient(135deg, rgba(241,143,34,0.08) 0%, rgba(165,207,79,0.05) 50%, rgba(238,62,65,0.05) 100%)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--lime)', animation: 'ping 1.5s infinite' }} />
              <span style={{
                fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--lime)',
              }}>Orchestration Layer Active</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 600, lineHeight: 1.6 }}>
              All agents are coordinated through a central orchestrator — ensuring alignment between learning, execution, and compliance across every interaction, in real time.
            </p>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #agentic > div > div:nth-child(2) { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          #agentic > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #agentic > div > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #agentic > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}