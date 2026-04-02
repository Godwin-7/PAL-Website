import Hero from '../sections/home/Hero'
import PlatformOverview from '../sections/home/PlatformOverview'
import AgenticCore from '../sections/home/AgenticCore'
import About from '../sections/home/About'
import CTA from '../sections/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <AgenticCore />
      <About />
      <CTA />
    </>
  )
}