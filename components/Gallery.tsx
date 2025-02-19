"use client"

import { useState } from "react"
import Image from "next/image"

const images = [
  { src: "/gallery/1.jpg", caption: "Sweet memories" },
  { src: "/gallery/2.jpg", caption: "Unforgettable moments" },
  { src: "/gallery/3.jpg", caption: "Laughter and joy" },
  { src: "/gallery/4.jpg", caption: "Beautiful Lavanya" },
  { src: "/gallery/5.jpg", caption: "Cherished times" },
  { src: "/gallery/6.jpg", caption: "Forever young" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 bg-pink-100/50">
      <h2 className="text-4xl text-rose-gold text-center mb-8">Memories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:rotate-2">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded"
              />
              <p className="mt-2 text-center text-rose-gold/80 font-handwriting">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt="Enlarged view"
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}

