import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sonido Celestia TX - DJ Cristiano para Fiestas de 15 Años, Cumpleaños y Bodas en Houston",
  description:
    "Servicio profesional de DJ cristiano en Houston, Texas. Especialistas en fiestas de 15 años, cumpleaños y bodas. Llevando buen ambiente, buena música y muy buena animación para toda fiesta cristiana.",
  keywords: "DJ cristiano Houston, fiestas 15 años, bodas cristianas, cumpleaños, animación, música cristiana, Texas",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
