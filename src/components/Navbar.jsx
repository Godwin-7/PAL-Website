import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Platform', to: '/' },
  { label: 'Foundry', to: '/foundry' },
  { label: 'Learning', to: '/learning' },
  { label: 'Team', to: '/team' },
]

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [loc])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 2 }}>
          {[['P', 'var(--orange)'], ['A', 'var(--lime)'], ['L', 'var(--red)']].map(([l, c], i) => (
            <span key={i} style={{
              width: 26, height: 26,
              background: c, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 13, borderRadius: 4,
            }}>{l}</span>
          ))}
        </div>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>PalGenie</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} style={{
            fontSize: 13, fontWeight: 500,
            color: loc.pathname === l.to ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'color 0.2s',
            position: 'relative',
          }}>
            {l.label}
            {loc.pathname === l.to && (
              <motion.div layoutId="nav-indicator" style={{
                position: 'absolute', bottom: -4, left: 0, right: 0,
                height: 1.5, background: 'var(--text-primary)', borderRadius: 1,
              }} />
            )}
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={toggle} style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'var(--surface)', border: '1px solid var(--border)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-secondary)', transition: 'all 0.2s',
        }}>
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <Link to="/contact" className="btn-primary nav-cta" style={{ padding: '9px 20px', fontSize: 12 }}>
          Request Access <ArrowRight size={13} />
        </Link>

        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-primary)', display: 'none',
        }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'var(--nav-bg)', backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              padding: '20px 2rem', display: 'flex', flexDirection: 'column', gap: 16,
            }}
          >
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontSize: 15, fontWeight: 500, color: 'var(--text-secondary)',
              }}>{l.label}</Link>
            ))}
            <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Request Access
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}