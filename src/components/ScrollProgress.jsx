import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [w, setW] = useState(0)

  useEffect(() => {
    const h = () => {
      const st = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setW(max > 0 ? (st / max) * 100 : 0)
    }
    h()
    window.addEventListener('scroll', h, { passive: true })
    window.addEventListener('resize', h)
    return () => {
      window.removeEventListener('scroll', h)
      window.removeEventListener('resize', h)
    }
  }, [])

  return <div className="progress" style={{ width: w + '%' }} />
}
