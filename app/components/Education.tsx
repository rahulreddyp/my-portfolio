"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolioData"

export default function Education() {
  const { education } = portfolioData

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-br-full z-0 opacity-20"></div>
              <div className="relative z-10 flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Image
                    src={edu.icon || "/placeholder.svg"}
                    alt={edu.institution}
                    width={64}
                    height={64}
                    className="rounded-full bg-blue-100 dark:bg-blue-800 p-2"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2" />
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </p>
                  {/* <h4 className="text-lg font-medium mb-2 text-blue-800 dark:text-blue-200 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

