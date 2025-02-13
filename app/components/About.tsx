"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-300" />, title: "Frontend", description: "Angular, React.js, Next.js" },
    { icon: <Server className="w-8 h-8 text-green-300" />, title: "Backend", description: "Springboot, Node.js, Django" },
    { icon: <Database className="w-8 h-8 text-purple-300" />, title: "Database", description: "SQL, NoSQL" },
    { icon: <Cloud className="w-8 h-8 text-yellow-300" />, title: "Cloud", description: "AWS, GCP, Azure" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
            As a passionate Software Engineer, I specialize in building robust and scalable web applications. With expertise in Java, Spring Boot, JavaScript, Angular, React, and cloud technologies, I create seamless full-stack solutions that drive efficiency and innovation.
            </p>
            <p className="text-xl text-blue-100 leading-relaxed">
            My experience spans frontend and backend development, API design, and scalable architecture, with a strong foundation in Agile and DevOps. I am committed to writing clean, efficient code and staying up-to-date with industry trends to deliver cutting-edge solutions that enhance user experiences.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-200">{skill.title}</h3>
                <p className="text-blue-100">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

