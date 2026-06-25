import { useState, useEffect } from 'react'
import { CONTENT } from './content.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import SideRail from './components/SideRail'
import './index.css'

function SkipLink({ lang }) {
  return (
    <a className="skip-link" href="#projects">
      {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
    </a>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('ptf_lang') || 'fr')
  const [demo, setDemo] = useState(null)

  // Apply aurora style once on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-style', 'aurora')
  }, [])

  // Apply lang to <html>
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  // Persist lang
  useEffect(() => {
    localStorage.setItem('ptf_lang', lang)
  }, [lang])

  const t = CONTENT[lang]

  return (
    <>
      <SkipLink lang={lang} />
      <ScrollProgress />
      <SideRail t={t} lang={lang} />
      <div className="bgdeco">
        <div className="grid" />
        <div className="glow g1" />
        <div className="glow g2" />
      </div>

      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} lang={lang} />
        <Marquee />
        <Projects t={t} lang={lang} onDemo={setDemo} />
        <Skills t={t} lang={lang} />
        <About t={t} lang={lang} />
        <Contact t={t} lang={lang} styleKey="aurora" />
      </main>
      <Footer t={t} />

      <BackToTop lang={lang} />
      {demo && <DemoModal p={demo} lang={lang} onClose={() => setDemo(null)} />}
    </>
  )
}
