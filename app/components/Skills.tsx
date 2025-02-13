"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { portfolioData } from "@/data/portfolioData"

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Tools" />
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                <div className="relative w-10 h-10 mb-2">
                  <Image src={`/icons/${skill.icon}.svg`} alt={skill.name} layout="fill" objectFit="contain" />
                </div>
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
