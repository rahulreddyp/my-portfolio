"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const skills = [
  { name: "Java", icon: "/icons/java.svg", color: "text-red-500" },
  { name: "React", icon: "/icons/react.svg", color: "text-blue-500" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "text-yellow-400" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "text-blue-600" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "text-green-500" },
  { name: "Python", icon: "/icons/python.svg", color: "text-blue-500" },
  { name: "HTML5", icon: "/icons/html5.svg", color: "text-orange-500" },
  { name: "CSS3", icon: "/icons/css3.svg", color: "text-blue-400" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "text-green-500" },
  { name: "Git", icon: "/icons/git.svg", color: "text-orange-600" },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                <div className="relative w-16 h-16 mb-4">
                  <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} layout="fill" objectFit="contain" />
                </div>
                <h3 className={`text-lg font-semibold ${skill.color}`}>{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

