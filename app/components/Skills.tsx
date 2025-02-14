"use client"

import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { portfolioData } from "@/data/portfolioData"
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiRedux,
  SiSpring,
  SiMysql,
  SiAngular,
  SiPython,
} from "react-icons/si"
import { FaJava, FaBolt, FaNodeJs, FaServer, FaAws, FaDocker } from "react-icons/fa"
import type { IconType } from "react-icons"

const iconMap: { [key: string]: IconType } = {
  java: FaJava,
  springboot: SiSpring,
  angular: SiAngular,
  react: SiReact,
  nodejs: FaNodeJs,
  javascript: SiJavascript,
  python: SiPython,
  sqlserver: FaServer,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
  html5: SiHtml5,
  css3: SiCss3,
  aws: FaAws,
  docker: FaDocker,
}

const BackgroundPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-blue-200 dark:stroke-blue-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
  </svg>
)

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      <BackgroundPattern />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Tools" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon.toLowerCase()] || FaBolt
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full group">
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

