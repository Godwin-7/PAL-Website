import { FadeUp } from '../../components/Animate'

const values = [
  { label: 'Intelligence First', body: 'Every feature is built around making humans and systems smarter together.' },
  { label: 'Continuous Loop', body: 'Learning, execution, and quality are not separate phases — they are one loop.' },
  { label: 'Human + AI', body: 'Humans retain judgment and authority; agents amplify, not replace.' },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <FadeUp>
            <p className="label-tag">About PalGenie</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Built for the future of service operations.
            </h2>
            <p className="body-text" style={{ marginBottom: 20 }}>
              PalGenie Technologies was founded with a singular mission: to eliminate the gap between workforce learning and real-world execution. We build cognitive systems that connect knowledge, skill, and performance into a continuously improving loop.
            </p>
            <p className="body-text">
              Our platform serves some of the world's most complex service operations — helping organizations achieve faster proficiency, higher quality, and meaningful scale without proportional cost increases.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  padding: '24px 28px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  borderLeft: '2px solid var(--border)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderLeftColor = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'var(--border)'}
                >
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{v.label}</h4>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}