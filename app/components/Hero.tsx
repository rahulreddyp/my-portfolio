"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolioData"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#3B82F6"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

const CodeIcon = () => (
  <svg className="w-16 h-16 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SocialIcon = ({ href, label, children }: any) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function Hero() {
  const { name, role, bio, email, profileImage, socialLinks } = portfolioData.personalInfo

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-100 text-gray-900"
    >
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-blue-400 to-purple-500"></div>
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center lg:items-start mb-6">
              <CodeIcon />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">Hi, I'm {name}</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">{role}</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{bio}</p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            {socialLinks.map((link, index) => (
                <SocialIcon key={index} href={link.url} label={link.name}>
                  <span className="sr-only">{link.name}</span>
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={link.iconPath} clipRule="evenodd" />
                  </svg>
                </SocialIcon>
              ))}
              <SocialIcon href={`mailto:${email}`} label="Email Me">
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </SocialIcon>
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={profileImage || "/placeholder.svg?height=384&width=384"}
                  alt={name}
                  width={384}
                  height={384}
                  objectFit="cover"
                  priority
                />
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
        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}

