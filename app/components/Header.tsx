"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolioData"
import { Download, Menu, X } from "lucide-react"

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#3B82F6" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
      fontFamily="'Poppins', sans-serif"
    >
      R
    </text>
  </svg>
)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { name } = portfolioData.personalInfo

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
          <Logo />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
          className={`md:flex items-center ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {["About", "Experience", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-colors block md:inline"
                  onClick={() => setIsMenuOpen(false)}
                >
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
