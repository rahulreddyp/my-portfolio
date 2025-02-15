import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Header from "./components/Header"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rahul Reddy - Portfolio",
  description:
    "Portfolio of Rahul Reddy Puchakayala, a Full Stack Developer specializing in web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'