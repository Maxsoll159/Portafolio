import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martin Rios Tineo',
  description: 'Bienvenido a mi portafolio, donde muestro mis habilidades y proyectos en desarrollo web y diseño.',
  keywords: "desarrollo web, diseño, portafolio, proyectos, React, programador Front-End, Front-End, programador, Martin Rios Tineo, Martin Jesus Rios Tineo",
  authors: [{name: "Martin Rios Tineo", url: "https://martin-rios-tineo.vercel.app"}],
  openGraph:{
    url: "https://martin-rios-tineo.vercel.app",
    title: "Martin Rios Tineo",
    description: "Bienvenido a mi portafolio, donde muestro mis habilidades y proyectos en desarrollo web y diseño.",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#121824] to-[#061326] w-full">{children}</body>
    </html>
  )
}
