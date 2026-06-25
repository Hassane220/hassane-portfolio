import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const links = [
    { l: t.nav.projects, h: '#projects' },
    { l: t.nav.skills, h: '#skills' },
    { l: t.nav.about, h: '#about' },
  ]

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'projects', 'skills', 'about', 'contact']
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="logo">
          Hassane<span className="dot">.</span>
        </a>
        <ul className="nav-links">
          {links.map((x) => (
            <li key={x.h}>
              <a href={x.h} className={active === x.h.slice(1) ? 'active' : ''}>
                {x.l}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang" role="group" aria-label={lang === 'fr' ? 'Choix de la langue' : 'Language selector'}>
            <button
              className={lang === 'fr' ? 'on' : ''}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              className={lang === 'en' ? 'on' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <a href="#contact" className="nav-cta">{t.nav.cta}</a>
          <button
            className="burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>
      {open && (
        <div style={{
          padding: '18px var(--pad)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          borderTop: '1px solid var(--border-soft)',
          background: 'var(--bg)',
        }}>
          {links.map((x) => (
            <a
              key={x.h}
              href={x.h}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--text-2)', fontSize: 15 }}
            >
              {x.l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
