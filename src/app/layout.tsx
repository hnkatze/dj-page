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
  keywords: "DJ cristiano Houston, fiestas 15 años, bodas cristianas, cumpleaños, animación, música cristiana, Texas, sonido profesional, eventos cristianos, iluminación para eventos, DJ para quinceañeras, música familiar",
  authors: [{ name: "Camilo Henriquez", url: "https://camilohenriquez.com" }],
  creator: "Camilo Henriquez",
  publisher: "Sonido Celestia TX",
  // metadataBase: new URL("https://sonidocelestia.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sonido Celestia TX - DJ Cristiano para Fiestas de 15 Años, Cumpleaños y Bodas en Houston",
    description:
      "Servicio profesional de DJ cristiano en Houston, Texas. Especialistas en fiestas de 15 años, cumpleaños y bodas. Llevando buen ambiente, buena música y muy buena animación para toda fiesta cristiana.",
    url: "https://sonidocelestia.com",
    siteName: "Sonido Celestia TX",
    images: [
      { 
        url: "https://i.postimg.cc/L6SSRK6L/2.jpg", 
        alt: "Evento de Sonido Celestia TX",
        width: 1200,
        height: 630
      },
      { 
        url: "https://i.postimg.cc/PqCsKd2s/6.jpg", 
        alt: "DJ Cristiano en Houston", 
        width: 1200,
        height: 630
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonido Celestia TX - DJ Cristiano en Houston",
    description: "Servicio profesional de DJ cristiano para fiestas de 15 años, bodas y cumpleaños en Houston, Texas.",
    images: ["https://i.postimg.cc/L6SSRK6L/2.jpg"],
    creator: "@sonidocelestiaTX",
    site: "@sonidocelestiaTX",
  },
  verification: {
    // google: "verificación-google", // Agregar tu código de verificación de Google cuando lo tengas
  },
  category: "entertainment",
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
