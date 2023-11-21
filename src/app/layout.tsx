import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martin Rios Tineo',
  description: 'Portafolio de proyecto de Martin Rios Tineo',
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
