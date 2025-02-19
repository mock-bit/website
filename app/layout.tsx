import type React from "react"
import "./globals.css"
import { Dancing_Script, Cormorant_Garamond } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"] })

export const metadata = {
  title: "Happy 19th Birthday, Lavanya!",
  description: "A dreamy celebration of Lavanya's 19th birthday",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorantGaramond.className}>{children}</body>
    </html>
  )
}



import './globals.css'