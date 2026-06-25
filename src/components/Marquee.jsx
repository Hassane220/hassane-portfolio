export default function Marquee() {
  const items = ["Orange Côte d'Ivoire", "SAG Corporation", "ESATIC", "ISCAT", "Node.js", "React", "PostgreSQL"]
  const run = items.concat(items)

  return (
    <div className="marquee">
      <div className="marquee-track">
        {run.map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </div>
    </div>
  )
}
