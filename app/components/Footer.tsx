import { portfolioData } from "@/data/portfolioData"

const SocialIcon = ({ href, label, iconPath }: any) => (
  <a
    href={href}
    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
    </svg>
  </a>
)

export default function Footer() {
  const { name, email, socialLinks } = portfolioData.personalInfo
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{name}</h2>
            <p className="text-sm mt-1">MERN Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.url} label={link.name} iconPath={link.iconPath} />
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  )
}

