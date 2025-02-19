"use client"

import { useEffect, useRef } from "react"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveParticles = (e: MouseEvent) => {
      const particles = particlesRef.current?.children
      if (particles) {
        Array.from(particles).forEach((particle: Element, i) => {
          const p = particle as HTMLElement
          const x = (e.clientX - window.innerWidth / 2) / (i + 1) / 10
          const y = (e.clientY - window.innerHeight / 2) / (i + 1) / 10
          p.style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }

    window.addEventListener("mousemove", moveParticles)
    return () => window.removeEventListener("mousemove", moveParticles)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lavanya.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 to-rose-300/70" />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-rose-gold/30 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <h1 className={`${dancingScript.className} text-5xl md:text-7xl text-rose-gold text-center z-10 animate-reveal`}>
        Happy 19th Birthday, Lavanya! 💖
      </h1>
    </section>
  )
}

