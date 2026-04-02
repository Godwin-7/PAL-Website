import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const links = {
  Product: [
    { label: 'Platform', to: '/' },
    { label: 'Foundry', to: '/foundry' },
    { label: 'Learning & Impact', to: '/learning' },
  ],
  Company: [
    { label: 'About', to: '/#about' },
    { label: 'Team', to: '/team' },
    { label: 'Contact', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '64px 2rem 40px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, marginBottom: 48 }}>
          <div style={{ maxWidth: 340 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[['P','var(--orange)'],['A','var(--lime)'],['L','var(--red)']].map(([l,c],i) => (
                  <span key={i} style={{
                    width: 22, height: 22, background: c, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: 11, borderRadius: 3,
                  }}>{l}</span>
                ))}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>PalGenie</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              A cognitive operating system for service operations — connecting learning, execution, and quality into a continuous loop.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                ><Icon size={14} /></a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 60 }}>
            {Object.entries(links).map(([cat, items]) => (
              <div key={cat}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>{cat}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(it => (
                    <Link key={it.to} to={it.to} style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                    >{it.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© 2024 PalGenie Technologies. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" style={{ fontSize: 12, color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
          footer > div > div:first-child > div:last-child { flex-direction: column; gap: 32px; }
        }
      `}</style>
    </footer>
  )
}