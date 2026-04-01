import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Solutions', href: '#agentic' },
  { label: 'Infrastructure', href: '#infrastructure' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 2rem',
        height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {['P','A','L'].map((letter, i) => (
            <span key={i} style={{
              width: 30, height: 30,
              background: i === 0 ? 'var(--orange)' : i === 1 ? 'var(--lime)' : 'var(--red)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 14,
              borderRadius: 4,
              marginRight: i < 2 ? 3 : 0,
            }}>{letter}</span>
          ))}
        </div>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}>Personalized Adaptive Learning</span>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div className="desktop-nav" style={{ display: 'flex', gap: 32 }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--orange)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >{link.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={toggleTheme}
            style={{
              width: 44, height: 24,
              borderRadius: 12,
              background: isDark ? 'rgba(241,143,34,0.2)' : 'rgba(10,15,30,0.15)',
              border: `1px solid ${isDark ? 'var(--orange)' : 'var(--border-hover)'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px 3px',
              transition: 'all 0.3s',
            }}
            title={isDark ? 'Switch to Light' : 'Switch to Dark'}
          >
            <motion.div
              layout
              style={{
                width: 18, height: 18,
                borderRadius: '50%',
                background: isDark ? 'var(--orange)' : '#0a0f1e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginLeft: isDark ? 'auto' : 0,
              }}
            >
              {isDark ? <Sun size={10} color="#fff" /> : <Moon size={10} color="#fff" />}
            </motion.div>
          </button>

          <CTAButton href="#contact">Request Access</CTAButton>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'none' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: 68, left: 0, right: 0,
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '20px 2rem',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 15, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}
              >{link.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}

function CTAButton({ href, children }) {
  return (
    <a href={href} style={{
      background: 'var(--orange)',
      color: '#fff',
      padding: '8px 20px',
      borderRadius: 3,
      fontFamily: 'Inter, sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: 'all 0.2s',
      boxShadow: '0 0 20px rgba(241,143,34,0.25)',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(241,143,34,0.4)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(241,143,34,0.25)' }}
    >{children}</a>
  )
}