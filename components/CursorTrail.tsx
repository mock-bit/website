"use client"

import { useEffect, useState } from "react"

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prevTrail) => [{ x: e.clientX, y: e.clientY }, ...prevTrail.slice(0, 19)])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-rose-gold rounded-full"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - index * 0.05,
            transform: `scale(${1 - index * 0.05})`,
          }}
        />
      ))}
    </div>
  )
}

