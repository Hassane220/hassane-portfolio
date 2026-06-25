import { useState, useEffect, useRef } from 'react'
import { CONTENT } from '../content.js'
import Reveal from './Reveal.jsx'

function ArrowExtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function CardCarousel({ images, accent }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!images || images.length <= 1) return
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(timerRef.current)
  }, [images])

  if (!images || images.length === 0) {
    return (
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${accent}28 0%, transparent 72%)`,
      }} />
    )
  }

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top left',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      ))}
      {/* indicateurs */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 5, zIndex: 2,
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); clearInterval(timerRef.current) }}
              style={{
                width: i === idx ? 18 : 6, height: 6,
                borderRadius: 3, border: 'none', cursor: 'pointer',
                background: i === idx ? accent : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ p, lang, onDemo }) {
  return (
    <Reveal className="card" style={{ '--ca': p.accent }}>
      <div className="card-top" style={{ background: 'var(--surface-2)' }}>
        <CardCarousel images={p.images} accent={p.accent} />
        {/* overlay dégradé bas pour lisibilité de la browser bar */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 50%, transparent 60%, rgba(0,0,0,0.2) 100%)',
        }} />
        <span className="bignum" style={{ position: 'relative', zIndex: 2 }}>{p.number}</span>
      </div>
      <div className="card-body">
        <div className="tagrow">
          <span className="tag">{p.tag[lang]}</span>
          <span className="tag-status">{p.status[lang]}</span>
        </div>
        <h3>{p.title[lang]}</h3>
        <p>{p.desc[lang]}</p>
        <div className="card-foot">
          <div className="stack">
            {p.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          {p.hasDemo && (
            <button className="demo-link" onClick={() => onDemo(p)}>
              {lang === 'fr' ? 'Demander un accès' : 'Request access'}
              <ArrowExtIcon />
            </button>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects({ t, lang, onDemo }) {
  const D = CONTENT.projectData

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="head-row">
          <div>
            <Reveal tag="div" className="kicker">{t.projects.kicker}</Reveal>
            <Reveal tag="h2" className="h2" delay={60}>{t.projects.title}</Reveal>
          </div>
          <Reveal className="lead" delay={120} style={{ marginBottom: 4 }}>
            {t.projects.lead}
          </Reveal>
        </div>
        {t.projects.groups.map((g, gi) => (
          <div className="proj-group" key={gi}>
            <div className="group-label">{g.label}</div>
            <div className="proj-grid">
              {g.items.map((k) => (
                <ProjectCard key={k} p={D[k]} lang={lang} onDemo={onDemo} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
