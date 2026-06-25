import { useState, useEffect } from 'react'

export default function SideRail({ t, lang }) {
  const sections = [
    { id: 'hero', l: lang === 'fr' ? 'Accueil' : 'Home' },
    { id: 'projects', l: t.nav.projects },
    { id: 'skills', l: t.nav.skills },
    { id: 'about', l: t.nav.about },
    { id: 'contact', l: t.nav.contact },
  ]
  const [active, setActive] = useState('hero')
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setFill(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      io.disconnect()
    }
  }, [lang])

  return (
    <nav className="siderail" aria-label={lang === 'fr' ? 'Navigation par section' : 'Section navigation'}>
      <span className="srnum">
        {String(sections.findIndex((s) => s.id === active) + 1).padStart(2, '0')}
        <i>/</i>
        {String(sections.length).padStart(2, '0')}
      </span>
      <div className="srtrack">
        <span className="srline" />
        <span className="srfill" style={{ height: (fill * 100) + '%' }} />
        <div className="srdots">
          {sections.map((s) => (
            <a
              key={s.id}
              href={'#' + s.id}
              className={`srdot ${active === s.id ? 'on' : ''}`}
              aria-label={s.l}
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span className="dotc" />
              <span className="dotl">{s.l}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
