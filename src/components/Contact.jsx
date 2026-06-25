import { useRef, useEffect } from 'react'
import { Mail, Phone, ArrowRight } from 'lucide-react'


import { CONTENT } from '../content.js'
import Reveal from './Reveal.jsx'

function hexToRgb(hex) {
  hex = hex.replace('#', '')
  if (hex.length === 3) hex = hex.split('').map((x) => x + x).join('')
  const n = parseInt(hex, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function Globe({ styleKey }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#8b5cf6'
    const c = hexToRgb(accent)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const size = 300
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = size + 'px'
    canvas.style.height = size + 'px'
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    const cx = size / 2, cy = size / 2, R = 124, tilt = 20 * Math.PI / 180
    const rgba = (a) => `rgba(${c.r},${c.g},${c.b},${a})`
    const cities = [
      { lat: 5.4, lon: -4.0, p: true },
      { lat: 48.9, lon: 2.3 },
      { lat: 51.5, lon: -0.1 },
      { lat: 40.7, lon: -74 },
      { lat: 25.2, lon: 55.3 },
      { lat: 1.3, lon: 103.8 },
    ]
    const project = (lat, lon, rot) => {
      const la = lat * Math.PI / 180, lo = lon * Math.PI / 180 + rot
      const x3 = R * Math.cos(la) * Math.sin(lo)
      const y3 = R * Math.sin(la)
      const z3 = R * Math.cos(la) * Math.cos(lo)
      const yS = -(y3 * Math.cos(tilt) - z3 * Math.sin(tilt))
      const zS = y3 * Math.sin(tilt) + z3 * Math.cos(tilt)
      return { x: cx + x3, y: cy + yS, z: zS }
    }
    const lats = [-60, -30, 0, 30, 60]
    let raf
    const start = Date.now()
    const draw = () => {
      const el = (Date.now() - start) / 1000, rot = el * 0.18
      ctx.clearRect(0, 0, size, size)
      lats.forEach((lat) => {
        const la = lat * Math.PI / 180
        const rx = R * Math.cos(la)
        const ry = rx * Math.sin(tilt)
        const ey = cy - R * Math.sin(la) * Math.cos(tilt)
        ctx.beginPath()
        ctx.ellipse(cx, ey, Math.max(rx, 0), Math.max(ry, 0.01), 0, 0, Math.PI * 2)
        ctx.strokeStyle = rgba(0.4)
        ctx.lineWidth = 0.8
        ctx.stroke()
      })
      for (let i = 0; i < 7; i++) {
        const ph = rot + (i / 7) * Math.PI
        const arx = R * Math.abs(Math.sin(ph))
        if (arx < 1) continue
        ctx.beginPath()
        ctx.ellipse(cx, cy, arx, R * Math.cos(tilt * 0.5), 0, 0, Math.PI * 2)
        ctx.strokeStyle = rgba(0.18 + 0.3 * Math.abs(Math.sin(ph)))
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
      const pts = cities.map((c2) => ({ ...c2, ...project(c2.lat, c2.lon, rot) }))
      const vis = pts.filter((p) => p.z > 0)
      for (let i = 0; i < vis.length; i++) {
        for (let j = i + 1; j < vis.length; j++) {
          ctx.beginPath()
          ctx.moveTo(vis[i].x, vis[i].y)
          ctx.lineTo(vis[j].x, vis[j].y)
          ctx.strokeStyle = rgba(0.16)
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
      pts.forEach((c2) => {
        if (c2.z <= 0) return
        if (c2.p) {
          const pr = 7 + 3.5 * Math.sin(el * 2.5)
          ctx.beginPath()
          ctx.arc(c2.x, c2.y, pr, 0, Math.PI * 2)
          ctx.strokeStyle = rgba(0.5 + 0.3 * Math.sin(el * 2.5))
          ctx.lineWidth = 1.4
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(c2.x, c2.y, c2.p ? 3.6 : 2.3, 0, Math.PI * 2)
        ctx.fillStyle = c2.p ? rgba(0.95) : rgba(0.7)
        ctx.fill()
      })
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = rgba(0.7)
      ctx.lineWidth = 1.3
      ctx.stroke()
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [styleKey])

  return <canvas ref={ref} style={{ display: 'block' }} />
}

export default function Contact({ t, lang, styleKey }) {
  const links = [
    { ic: <Mail size={16} />, k: 'Email', v: CONTENT.social.email, h: 'mailto:' + CONTENT.social.email },
    { ic: <Phone size={16} />, k: lang === 'fr' ? 'Téléphone' : 'Phone', v: CONTENT.social.phone, h: 'tel:' + CONTENT.social.phone.replace(/\s/g, '') },
  ]

  return (
    <section id="contact" className="section tint">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Reveal tag="div" className="kicker">{t.contact.kicker}</Reveal>
            <Reveal tag="h2" className="h2" delay={60}>{t.contact.title}</Reveal>
            <Reveal tag="p" className="lead" delay={100} style={{ maxWidth: '48ch' }}>
              {t.contact.lead}
            </Reveal>
            <Reveal delay={140}>
              <a className="contact-cta" href={'mailto:' + CONTENT.social.email}>
                <Mail size={16} />
                {t.contact.cta}
                <ArrowRight size={14} />
              </a>
            </Reveal>
            <div className="contact-links">
              {links.map((l, i) => (
                <Reveal
                  tag="a"
                  key={l.k}
                  className="clink"
                  delay={160 + i * 70}
                  href={l.h}
                  target={l.h.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="ic">{l.ic}</span>
                  <span className="ct">
                    <span className="k">{l.k}</span>
                    <span className="v">{l.v}</span>
                  </span>
                  <ArrowRight size={14} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="globe-wrap">
            <div className="globe-glow" />
            <Globe styleKey={styleKey} />
            <div className="globe-cap">
              {lang === 'fr' ? 'Disponible partout dans le monde' : 'Available worldwide'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
