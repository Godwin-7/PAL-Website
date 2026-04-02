import { FadeUp } from '../../components/Animate'

const values = [
  { label: 'Intelligence First', body: 'Every feature is built around making humans and systems smarter together, not replacing human judgment.' },
  { label: 'Continuous Loop', body: 'Learning, execution, and quality are not separate phases — they form one self-improving loop.' },
  { label: 'Human-in-the-Loop', body: 'Humans retain judgment and authority. Agents amplify capabilities, they do not replace people.' },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <FadeUp>
            <p className="section-label">About PalGenie</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Built for the future<br />
              <em style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>of service operations.</em>
            </h2>
            <p className="body-text" style={{ marginBottom: 20 }}>
              PalGenie Technologies was founded with a singular mission: to eliminate the gap between workforce learning and real-world execution. We build cognitive systems that connect knowledge, skill, and performance into a continuously improving loop.
            </p>
            <p className="body-text">
              Our platform serves some of the world's most complex service operations — helping organizations achieve faster proficiency, higher quality, and meaningful scale without proportional cost increases.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  padding: '22px 26px',
                  border: '1px solid var(--border-strong)',
                  borderLeft: '3px solid var(--border-strong)',
                  background: 'var(--bg2)',
                  transition: 'border-left-color 0.25s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--orange)'; e.currentTarget.style.background = 'var(--surface-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--bg2)'; }}
                >
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 7 }}>{v.label}</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}