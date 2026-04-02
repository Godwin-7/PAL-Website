import { motion } from 'framer-motion'
import { FadeUp } from '../components/Animate'
import { Linkedin } from 'lucide-react'

const team = [
  { name: 'Arun Krishnamurthy', role: 'Chief Executive Officer', bio: 'Veteran operator with 20+ years in BPO and service operations. Previously led large-scale transformation programs across APAC.', initials: 'AK', c: 'var(--orange)' },
  { name: 'Priya Venkatesh',    role: 'Chief Technology Officer', bio: 'AI/ML architect and former research scientist. Built enterprise-grade NLP systems for Fortune 500 clients across verticals.', initials: 'PV', c: 'var(--lime)' },
  { name: 'Sanjay Rao',         role: 'Chief Product Officer',    bio: 'Product leader with deep experience in workforce tech and learning platforms. Shipped multiple enterprise SaaS products from zero to scale.', initials: 'SR', c: 'var(--red)' },
  { name: 'Divya Menon',        role: 'VP, Learning Science',     bio: 'Instructional design PhD and cognitive scientist. Pioneered adaptive learning methodologies for contact center environments.', initials: 'DM', c: 'var(--orange)' },
  { name: 'Vikram Sharma',      role: 'VP, Engineering',          bio: 'Distributed systems engineer. Previously at Google and Freshworks. Architect of PAL\'s real-time agent orchestration layer.', initials: 'VS', c: 'var(--lime)' },
  { name: 'Ananya Iyer',        role: 'VP, Business Development', bio: 'Strategic partnerships and enterprise sales leader. Built go-to-market from the ground up for two prior AI startups.', initials: 'AI', c: 'var(--red)' },
]

const advisors = [
  { name: 'Dr. Rajesh Nair', role: 'Academic Advisor',    org: 'IIT Madras — AI Research',    c: 'var(--orange)' },
  { name: 'Sarah Mitchell',  role: 'Industry Advisor',    org: 'Former CXO, Global BPO',      c: 'var(--lime)'   },
  { name: 'Marcus Chen',     role: 'Technology Advisor',  org: 'Ex-Amazon, ML Infrastructure', c: 'var(--red)'   },
]

const investors = [
  { name: 'Seed Round', amount: '$2.5M', year: '2022', details: 'Led by SaaSBoomi & angel investors from BPO sector. Focused on product validation and early customer development.' },
  { name: 'Series A',   amount: '$12M',  year: '2023', details: 'Institutional round focused on platform expansion, go-to-market buildout, and international market entry.' },
]

export default function TeamPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Our People</p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 58px)',
              lineHeight: 1.09, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', maxWidth: 600, marginBottom: 20,
            }}>
              Built by operators, scientists, and builders.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 460, lineHeight: 1.73, fontWeight: 300 }}>
              The PalGenie team combines deep domain expertise in service operations, AI research, and enterprise product design.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', paddingTop: 64 }}>
        <div className="container">
          <FadeUp><p className="section-label">Leadership</p></FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
            {team.map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
                  style={{
                    padding: '26px', border: '1px solid var(--border-strong)',
                    borderTop: `2.5px solid ${m.c}`,
                    background: 'var(--bg)', borderRadius: '0 0 10px 10px',
                    boxShadow: 'var(--card-shadow)', transition: 'all 0.25s',
                    display: 'flex', flexDirection: 'column', gap: 14,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%', background: m.c,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontFamily: 'var(--font-display)', fontSize: 15, flexShrink: 0,
                    }}>{m.initials}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{m.name}</p>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.role}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{m.bio}</p>
                  <a href="#" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = m.c}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  ><Linkedin size={14} /></a>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section" style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Advisors</p>
            <h2 className="section-title" style={{ marginBottom: 36 }}>Guided by domain experts.</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {advisors.map((a, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{
                  padding: '24px', border: '1px solid var(--border-strong)', background: 'var(--bg2)',
                  borderRadius: 8, borderLeft: `3px solid ${a.c}`, boxShadow: 'var(--card-shadow)',
                }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{a.name}</p>
                  <p style={{ fontSize: 12, color: a.c, marginBottom: 8, fontWeight: 500 }}>{a.role}</p>
                  <p style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{a.org}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="section" style={{ background: 'var(--bg2)', paddingTop: 64 }}>
        <div className="container">
          <FadeUp>
            <p className="section-label">Investment</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Backed by those who build at scale.</h2>
            <p className="body-text" style={{ marginBottom: 48, maxWidth: 480 }}>
              PalGenie is developed in partnership with global enterprises, academic institutions, and regulated industries — ensuring every system is grounded in real-world complexity.
            </p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
            {investors.map((inv, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: 'var(--card-shadow-hover)' }}
                  style={{
                    padding: '30px', border: '1px solid var(--border-strong)', background: 'var(--bg)',
                    borderRadius: 10, boxShadow: 'var(--card-shadow)', transition: 'all 0.25s',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <div>
                      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 4 }}>{inv.year}</p>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--text-primary)' }}>{inv.name}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: ['var(--orange)', 'var(--lime)'][i] }}>{inv.amount}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{inv.details}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <div style={{ padding: '24px 32px', border: '1px solid var(--border-strong)', background: 'var(--bg)', textAlign: 'center', borderRadius: 10 }}>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 6 }}>Interested in partnering or investing?</p>
              <a href="mailto:hello@palgenie.com" style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
              >hello@palgenie.com</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}