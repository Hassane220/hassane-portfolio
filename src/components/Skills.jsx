import { CONTENT } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Skills({ t, lang }) {
  return (
    <section id="skills" className="section tint">
      <div className="wrap">
        <Reveal tag="div" className="kicker">{t.skills.kicker}</Reveal>
        <Reveal tag="h2" className="h2" delay={60}>{t.skills.title}</Reveal>
        <Reveal tag="p" className="lead" delay={100} style={{ marginBottom: 52 }}>
          {t.skills.lead}
        </Reveal>
        <div className="skill-grid">
          {CONTENT.skillCats.map((cat, ci) => (
            <Reveal key={ci} delay={ci * 70}>
              <div className="skill-cat-label">{cat.label[lang]}</div>
              <div className="skill-list">
                {cat.techs.map((tech) => (
                  <div className="skill" key={tech.name}>
                    <span
                      className="swatch"
                      style={{
                        background: tech.color + '1f',
                        border: '1px solid ' + tech.color + '44',
                        color: tech.color,
                      }}
                    >
                      {tech.name[0]}
                    </span>
                    <span className="nm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
