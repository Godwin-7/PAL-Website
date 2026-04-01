import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  Platform: ['Overview', 'Foundries', 'Architecture', 'Integrations', 'Changelog'],
  Intelligence: ['Learning Engine', 'QA/QC Super Agent', 'AOP Framework', 'Knowledge Graph', 'Simulation'],
  Company: ['About PAL', 'Careers', 'Press', 'Partners', 'Contact'],
  Resources: ['Documentation', 'Security Whitepaper', 'Case Studies', 'Blog', 'Status'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '80px 2rem 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large watermark text */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        overflow: 'hidden', height: 140, userSelect: 'none', pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: 'Syne, sans-serif', fontSize: 200, fontWeight: 800,
          letterSpacing: '-0.05em', lineHeight: 1,
          opacity: 0.025,
          display: 'flex', alignItems: 'flex-end',
        }}>
          <span style={{ color: 'var(--orange)' }}>P</span>
          <span style={{ color: 'var(--lime)' }}>A</span>
          <span style={{ color: 'var(--red)' }}>L</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80, marginBottom: 80 }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 20 }}>
              <div style={{ display: 'flex' }}>
                {[['P', 'var(--orange)'], ['A', 'var(--lime)'], ['L', 'var(--red)']].map(([l, c], i) => (
                  <span key={i} style={{
                    width: 28, height: 28,
                    background: c,
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13,
                    borderRadius: 3, marginRight: i < 2 ? 2 : 0,
                  }}>{l}</span>
                ))}
              </div>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>Systems</span>
            </a>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28, maxWidth: 240 }}>
              A cognitive operating system for service operations — connecting learning, execution, and quality into a continuous loop.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3 }}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--orange)'
                    e.currentTarget.style.color = 'var(--orange)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h5 style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: 'var(--text-primary)', marginBottom: 20,
                }}>{section}</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" style={{
                        fontSize: 13, color: 'var(--text-muted)',
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 32 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{
            fontFamily: 'Syne, sans-serif', fontSize: 11, color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            © 2024 PAL Systems. All rights reserved. Secure terminal access only.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" style={{
                fontSize: 11, color: 'var(--text-muted)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 48px !important; }
          footer > div > div:first-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child > div:last-child { grid-template-columns: 1fr !important; }
          footer > div > div:nth-child(3) { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}