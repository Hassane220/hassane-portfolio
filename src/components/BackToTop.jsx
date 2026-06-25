import { useState, useEffect } from 'react'

export default function BackToTop({ lang }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <button
      className={`to-top ${show ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'fr' ? 'Retour en haut' : 'Back to top'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
