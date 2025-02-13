import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

export default function Footer() {
  const { name, email } = portfolioData.personalInfo
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{name}</h2>
            <p className="text-sm mt-1">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <GitHub className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

