import { motion } from 'framer-motion'
import { Database, BookOpen, Cpu, Layers, Lock } from 'lucide-react'
import { SectionLabel, FadeInUp } from '../components/UI'

const layers = [
  {
    num: '01',
    icon: Database,
    title: 'Data Layer',
    subtitle: 'Azure · Vector Stores · Synthetic Data',
    body: 'Multi-modal ingestion pipelines built on Azure — handling audio, text, screen recordings, and structured data. Vector stores power semantic retrieval at scale.',
    specs: ['Azure Data Lake', 'Pinecone / Weaviate', 'Synthetic Data Gen', 'Real-time Streaming'],
    color: 'var(--orange)',
  },
  {
    num: '02',
    icon: BookOpen,
    title: 'Knowledge Layer',
    subtitle: 'Ontology · SOP Graphs · Taxonomy',
    body: 'Dynamic semantic indexing and ontology mapping converts institutional knowledge into a navigable, machine-readable graph that grows with your organization.',
    specs: ['Knowledge Graph', 'Ontology Engine', 'SOP Structuring', 'Taxonomy Mgmt'],
    color: 'var(--lime)',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Model Layer',
    subtitle: 'LLMs · Domain Models · Fine-Tuning',
    body: 'Federated fine-tuned LLMs optimized for specific vertical tasks — from compliance summarization to behavioral coaching. Domain-specific models outperform generalist approaches.',
    specs: ['Custom LLMs', 'Domain Fine-Tuning', 'Federated Learning', 'Model Registry'],
    color: 'var(--red)',
  },
  {
    num: '04',
    icon: Layers,
    title: 'Interaction Layer',
    subtitle: 'Co-pilots · Dashboards · APIs',
    body: 'Latency-optimized interfaces for zero-friction human-AI collaboration. Real-time co-pilots surface in the associate\'s existing tools without workflow disruption.',
    specs: ['Real-time Co-pilots', 'Analytics Dashboards', 'REST & GraphQL APIs', 'SDK Libraries'],
    color: 'var(--orange)',
  },
  {
    num: '05',
    icon: Lock,
    title: 'Governance Layer',
    subtitle: 'Security · Compliance · Privacy',
    body: 'End-to-end encryption, SOC 2 Type II certification, and bias mitigation protocols. Role-based access control and full audit trails meet enterprise security requirements.',
    specs: ['SOC 2 Type II', 'GDPR / HIPAA Ready', 'Role-Based Access', 'Audit Logs'],
    color: 'var(--lime)',
  },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" style={{ background: 'var(--bg)', padding: '120px 2rem', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <SectionLabel color="var(--orange)">Substrate Layers</SectionLabel>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800, letterSpacing: '-0.02em',
              color: 'var(--text-primary)', marginBottom: 20, lineHeight: 1.05,
            }}>
              Enterprise-grade architecture.
            </h2>
            <p style={{
              fontSize: 18, color: 'var(--text-secondary)',
              maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
            }}>
              Five hardened infrastructure layers — from raw data ingestion to governance — built for the scale and security demands of enterprise service operations.
            </p>
          </div>
        </FadeInUp>

        {/* Stack visualization */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {layers.map((layer, i) => (
            <FadeInUp key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ x: 6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 280px 1fr',
                  gap: 0,
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = layer.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                {/* Left accent strip */}
                <div style={{
                  background: `${layer.color}12`,
                  borderRight: `1px solid ${layer.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '32px 0',
                }}>
                  <span style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 800,
                    color: layer.color, writingMode: 'vertical-rl',
                    textTransform: 'uppercase', letterSpacing: '0.15em',
                  }}>L{layer.num}</span>
                </div>

                {/* Title + specs */}
                <div style={{
                  padding: '32px 36px',
                  borderRight: '1px solid var(--border)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: `${layer.color}15`,
                    border: `1px solid ${layer.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <layer.icon size={16} color={layer.color} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em',
                  }}>{layer.title}</h3>
                  <p style={{
                    fontSize: 11, color: layer.color, fontFamily: 'Syne, sans-serif',
                    fontWeight: 600, letterSpacing: '0.05em', marginBottom: 20,
                  }}>{layer.subtitle}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {layer.specs.map((s, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: layer.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div style={{
                  padding: '32px 40px',
                  display: 'flex', alignItems: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                    fontFamily: 'Syne, sans-serif', fontSize: 100, fontWeight: 800,
                    color: layer.color, opacity: 0.03, userSelect: 'none',
                  }}>{layer.num}</div>
                  <p style={{
                    fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7,
                    maxWidth: 560,
                  }}>{layer.body}</p>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Compliance badges */}
        <FadeInUp delay={0.5}>
          <div style={{
            marginTop: 60, padding: '32px 48px',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
          }}>
            <span style={{
              fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)',
            }}>Certifications & Compliance</span>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'HIPAA Eligible', 'Azure Certified'].map((badge, i) => (
                <div key={i} style={{
                  padding: '8px 18px',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  fontSize: 11,
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.08em',
                }}>{badge}</div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #infrastructure > div > div:nth-child(2) > div > div {
            grid-template-columns: 60px 1fr !important;
          }
          #infrastructure > div > div:nth-child(2) > div > div > div:nth-child(3) {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          #infrastructure > div > div:nth-child(2) > div > div {
            grid-template-columns: 1fr !important;
          }
          #infrastructure > div > div:nth-child(2) > div > div > div:first-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}