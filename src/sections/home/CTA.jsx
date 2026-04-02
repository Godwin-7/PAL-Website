import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '../../components/Animate'

export default function CTA() {
  return (
    <section className="section" style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div className="container">
        <FadeUp>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <p className="label-tag" style={{ justifyContent: 'center' }}>Get started</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 52px)',
              lineHeight: 1.1, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', marginBottom: 20,
            }}>
              The future of service operations
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                is not automation alone.
              </span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
              It is intelligent systems that learn, adapt, and scale.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/foundry" className="btn-primary">
                Explore Foundries <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Request Access
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}