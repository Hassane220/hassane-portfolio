import { useState, useEffect, useRef } from 'react'
import { Download, ArrowRight, Mail } from 'lucide-react'


import { CONTENT } from '../content.js'
import Reveal from './Reveal.jsx'

function useTyping(strings, typeSpeed = 65, deleteSpeed = 32, pause = 1700) {
  const [out, setOut] = useState('')
  const [i, setI] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = strings[i % strings.length]
    let t
    if (typing) {
      if (out.length < target.length) {
        t = setTimeout(() => setOut(target.slice(0, out.length + 1)), typeSpeed)
      } else {
        t = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (out.length > 0) {
        t = setTimeout(() => setOut((o) => o.slice(0, -1)), deleteSpeed)
      } else {
        setI((x) => x + 1)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [out, typing, i, strings])

  return out
}

function CountUp({ value, duration = 1500 }) {
  const m = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/)
  const ref = useRef(null)
  const [disp, setDisp] = useState(m ? m[1] + '0' + m[3] : value)

  useEffect(() => {
    if (!m) { setDisp(value); return }
    const prefix = m[1], target = parseFloat(m[2]), suffix = m[3]
    const decimals = (m[2].split('.')[1] || '').length
    const el = ref.current
    let raf, started = false
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisp(prefix + (target * eased).toFixed(decimals) + suffix)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) { started = true; run(); io.disconnect() }
      })
    }, { threshold: 0.4 })
    if (el) io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])

  return <span ref={ref}>{disp}</span>
}

function CvButton({ t, lang }) {
  const [missing, setMissing] = useState(false)

  const onClick = (e) => {
    e.preventDefault()
    const url = '/assets/CV-Soumahoro-Hassane.pdf'
    fetch(url, { method: 'HEAD' })
      .then((r) => {
        if (r.ok) { window.open(url, '_blank') }
        else { setMissing(true); setTimeout(() => setMissing(false), 3200) }
      })
      .catch(() => { setMissing(true); setTimeout(() => setMissing(false), 3200) })
  }

  return (
    <a
      href="/assets/CV-Soumahoro-Hassane.pdf"
      download
      onClick={onClick}
      className="btn btn-ghost"
      style={{ position: 'relative' }}
    >
      <Download size={14} />
      {missing ? (lang === 'fr' ? 'CV bientôt disponible' : 'CV coming soon') : t.hero.ctaCv}
    </a>
  )
}

function PhotoRing({ t }) {
  return (
    <div className="hero-visual">
      <div className="hero-aside">
        <div className="photo-wrap">
          <div className="photo-glow" />
          <div className="photo-ring">
            <svg viewBox="0 0 384 384">
              <defs>
                <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                  <stop offset="35%" stopColor="var(--accent)" />
                  <stop offset="75%" stopColor="var(--accent-2)" />
                  <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g className="ring-rot">
                <circle cx="192" cy="192" r="184" fill="none" stroke="url(#ring1)" strokeWidth="5" strokeDasharray="270 130" strokeLinecap="round" />
              </g>
              <g className="ring-rot rev">
                <circle cx="192" cy="192" r="170" fill="none" stroke="var(--accent-2)" strokeWidth="1.5" strokeDasharray="60 130" strokeLinecap="round" opacity="0.5" />
              </g>
            </svg>
          </div>
          <div className="photo-img">
            <img src="/photo.jpg" alt="Soumahoro Hassane" />
          </div>
          <div className="photo-badge">
            <span className="ping" />
            {t.hero.open.split('—')[0].trim()}
          </div>
        </div>
        <div className="stat-grid">
          {t.hero.stats.slice(0, 4).map((s, i) => (
            <Reveal key={i} delay={i * 80} className="stat">
              <div className="v"><CountUp value={s.value} /></div>
              <div className="l">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ t, lang }) {
  const ref = useRef(null)
  const role = useTyping(t.hero.roles)

  useEffect(() => {
    const el = ref.current
    const id = requestAnimationFrame(() => el && el.classList.add('in'))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = ((e.clientX - r.left) / r.width - 0.5) * 2
        const py = ((e.clientY - r.top) / r.height - 0.5) * 2
        el.style.setProperty('--px', px.toFixed(3))
        el.style.setProperty('--py', py.toFixed(3))
      })
    }
    const onLeave = () => {
      el.style.setProperty('--px', '0')
      el.style.setProperty('--py', '0')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-grid">
          <div className="hero-text">
            <div className="pill">
              <span className="ping" />
              {t.hero.location}
            </div>
            <h1 className="hero-name">
              <span className="l1">
                <span className="reveal-clip">{t.hero.first}</span>
              </span>
              <span className="l2">
                <span className="reveal-clip" style={{ transitionDelay: '.12s' }}>
                  <span>{t.hero.last}</span>
                </span>
              </span>
            </h1>
            <div className="role">
              <span className="mono">{role || ' '}</span>
              <span className="caret" />
            </div>
            <p className="hero-desc">{t.hero.description}</p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                {t.hero.ctaPrimary}
                <span className="arr"><ArrowRight size={14} /></span>
              </a>
              <CvButton t={t} lang={lang} />
              <a href="#contact" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
            </div>
            <div className="socials">
              <a className="social" href={'mailto:' + CONTENT.social.email}>
                <Mail size={16} />Email
              </a>
            </div>
          </div>
          <PhotoRing t={t} />
        </div>
      </div>
    </section>
  )
}
