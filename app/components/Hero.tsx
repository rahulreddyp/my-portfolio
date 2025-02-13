"use client"

import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolioData"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="currentColor"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

const LogoIcon = () => (
  <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  const { name, role, bio, email, profileImage } = portfolioData.personalInfo

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gray-900 text-gray-100">
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>
      <div className="absolute inset-0 z-0 opacity-30 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x"></div>
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <LogoIcon />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ml-4">Hi, I'm {name}</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">{role}</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{bio}</p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="#"
                className="p-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6 text-blue-200" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-blue-200" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-blue-200" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src={profileImage || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}

