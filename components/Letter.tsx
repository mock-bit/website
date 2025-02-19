"use client"

import { useState } from "react"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

export default function Letter() {
  const [isEditing, setIsEditing] = useState(false)
  const [letter, setLetter] = useState(
    "Dearest Lavanya,\n\nHappiiest Birthdayyyy My dearr Penguinnnn!!!!!\nI know this is not much but from my side this is small mini chotu Websitee for you for your 19th Birthdayy!!!\nI Hope you stayyyy happpppyyy happppy foreverrrrrrr .....\n\nWithhhh Alllll My Loveeeeeee\nYours Parth,",
  )

  return (
    <section className="py-16 px-4 bg-[url('/parchment.jpg')] bg-cover">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-rose-gold text-center mb-6">A Birthday Letter</h2>
        {isEditing ? (
          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            className={`${dancingScript.className} w-full h-64 p-4 text-xl bg-transparent border-2 border-rose-gold/50 rounded-lg focus:outline-none focus:border-rose-gold`}
          />
        ) : (
          <p className={`${dancingScript.className} whitespace-pre-wrap text-xl`}>{letter}</p>
        )}
        <div className="mt-6 flex justify-center">
        </div>
      </div>
    </section>
  )
}

