import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import ScrollProgressBar from './components/ScrollProgressBar'
import WaveDivider from './components/WaveDivider'

export default function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <WaveDivider color="var(--surface)" />
      <About />
      <Skills />
      <WaveDivider color="var(--surface)" />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <WaveDivider color="var(--surface)" />
      <Achievements />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  )
}
