import { CONTENT } from '../content.js'
import Reveal from './Reveal.jsx'

export default function About({ t, lang }) {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <Reveal tag="div" className="kicker">{t.about.kicker}</Reveal>
            <Reveal tag="h2" className="h2" delay={60}>{t.about.title}</Reveal>
            <div className="about-body">
              {t.about.body.map((para, i) => (
                <Reveal tag="p" key={i} delay={120 + i * 60}>{para}</Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <div className="info-title">{t.about.infoTitle}</div>
            {t.about.info.map((row) => {
              const inner = (
                <>
                  <span className="k">{row.label}</span>
                  <span className="val">{row.value}</span>
                </>
              )
              return row.href
                ? <a className="info-row" href={row.href} key={row.label}>{inner}</a>
                : <div className="info-row" key={row.label}>{inner}</div>
            })}
          </Reveal>
        </div>
        <Reveal className="tl-title">{t.about.expTitle}</Reveal>
        <div className="timeline">
          {CONTENT.timeline.map((item, i) => (
            <Reveal key={i} className="tl-item" delay={i * 100} style={{ '--ca': item.accent }}>
              <div className="tl-rail">
                <div className="tl-dot"><i /></div>
                {i < CONTENT.timeline.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <h4>{item.role[lang]}</h4>
                    <div className="co">{item.company}</div>
                  </div>
                  <span className="per">{item.period[lang]}</span>
                </div>
                <ul>
                  {item.tasks[lang].map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
