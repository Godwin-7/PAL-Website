import Hero from '../sections/home/Hero'
import Problem from '../sections/home/Problem'
import PlatformOverview from '../sections/home/PlatformOverview'
import Architecture from '../sections/home/Architecture'
import AgenticCore from '../sections/home/AgenticCore'
import Intelligence from '../sections/home/Intelligence'
import About from '../sections/home/About'
import CTA from '../sections/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <PlatformOverview />
      <Architecture />
      <AgenticCore />
      <Intelligence />
      <About />
      <CTA />
    </>
  )
}