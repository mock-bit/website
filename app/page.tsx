import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import Letter from "@/components/Letter"
import CursorTrail from "@/components/CursorTrail"

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <CursorTrail />
      <Hero />
      <Gallery />
      <Letter />
    </main>
  )
}

