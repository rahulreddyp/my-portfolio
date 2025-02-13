"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolioData"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { name } = portfolioData.personalInfo

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          {name}
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {["About", "Experience", "Skills", "Services", "Education", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

