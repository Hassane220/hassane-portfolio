import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const spotRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!spotRef.current) return
      spotRef.current.style.left = `${e.clientX}px`
      spotRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        transition: 'left 0.12s ease, top 0.12s ease',
      }}
    />
  )
}
