import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Platform from './sections/Platform'
import Architecture from './sections/Architecture'
import AgenticCore from './sections/AgenticCore'
import HumanAI from './sections/HumanAI'
import Intelligence from './sections/Intelligence'
import Infrastructure from './sections/Infrastructure'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import './index.css'

function AppContent() {
  const { isDark } = useTheme()

  useEffect(() => {
    document.body.className = isDark ? 'theme-dark' : 'theme-light'
  }, [isDark])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <Architecture />
        <AgenticCore />
        <Intelligence />
        <HumanAI />
        <Infrastructure />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}