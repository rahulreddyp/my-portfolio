"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { portfolioData } from "@/data/portfolioData"

export default function Experience() {
  const { experiences } = portfolioData

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-bl-full z-0 opacity-20 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10 flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Image
                    src={exp.icon || "/placeholder.svg"}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="rounded-full bg-blue-700 p-2"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-200 flex items-center">
                    {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-300" /> : null}
                    {exp.company}
                  </h3>
                  <p className="text-blue-300 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </p>
                  <p className="text-blue-300 mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>
                  <p className="text-xl font-medium mb-4 text-blue-100 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {exp.role}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-200">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

