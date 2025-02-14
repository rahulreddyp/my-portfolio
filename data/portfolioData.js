export const portfolioData = {
  personalInfo: {
    name: "Rahul Reddy Puchakayala",
    role: "Full Stack Developer",
    bio: "Crafting exceptional digital experiences with modern web technologies. Specialized in building scalable full-stack applications with 4.5 years of experience.",
    email: "rahulreddyp77@gmail.com",
    profileImage: "/profile.jpg",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/rahulreddyp", 
        iconPath:
          "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-reddyps",
        iconPath:
          "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      },
    ],
  },
  skills: [
    { name: "Java", icon: "Java"},
    { name: "Springboot", icon: "springboot"},
    { name: "React", icon: "react" },    
    { name: "Angular", icon: "angular" },
    { name: "Node.js", icon: "nodejs" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "SQL Server", icon: "sqlserver" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql"},
    { name: "Git", icon: "git" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker"}
  ],
  experiences: [
    {
      company: "Canada Revenue Agency",
      location: "Vancouver, Canada (remote)",
      period: "November 2023 - Present",
      role: "Software Developer 2",
      responsibilities: [
        "Developing custom web application features for international clients.",
        "Implementing secure backend systems with Spring Boot while modernizing legacy ColdFusion.",        
        "Creating RESTful APIs and managing Microsoft SQL Server databases.",
        "Introducing automated testing strategies with Microsoft Playwright.",
      ],
      icon: "/icons/CRA.svg",
    },
    {
      company: "Canada Revenue Agency",
      location: "Vancouver, Canada (remote)",
      period: "May 2022 - October 2023",
      role: "Software Developer 1",
      responsibilities: [
        "Built responsive and scalable frontend interfaces using Angular for improved user experience.",
        "Created frontend unit tests with Jasmine and Karma, achieving 50% test coverage.",
        "Designed and facilitated sprint planning, retrospectives, and backlog grooming as Scrum Master.",
        "Analyzed end-user needs, delivering Proof of Concepts through stakeholder communication.",
      ],
      icon: "/icons/CRA.svg",
    },
    {
      company: "Uangteman Technologies Private Limited",
      location: "Hyderabad, India",
      period: "June 2019 - December 2020",
      role: "Software Developer",
      responsibilities: [
        "Designed responsive UIs with React.js, improving user satisfaction by 15%.",
        "Migrated Laravel PHP backend to Spring Boot microservices, reducing server load by 30%.",
        "Built and optimized REST APIs with OAuth authentication and third-party integrations.",
        "Automated repayments and optimized MySQL queries, cutting processing time and load time.",
      ],
      icon: "/icons/Uangteman.png",
    },
  ],
  education: [
    {
      degree: "Master's Degree in Applied Computer Science",
      institution: "Dalhousie University, Halifax, Canada",
      period: "January 2021 – August 2022",
      achievements: [
        "Graduated with honors",
        "Specialized in Web Technologies and Artificial Intelligence",
        "Completed capstone project on 'Intelligent Web Application for Healthcare'",
      ],
      icon: "/icons/Dalhousie_University.svg",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Jawaharlal Nehru Technological University, Hyderabad, India",
      period: "August 2015 – April 2019",
      achievements: [
        "Graduated with honors",
        "Specialized in Web Technologies and Artificial Intelligence",
        "Completed capstone project on 'Intelligent Web Application for Healthcare'",
      ],
      icon: "/icons/JNTU_Hyderabad.png",
    },
  ],
  projects: [
    {
      title: "LettuceEat - food ordering platform",
      description: "A full-stack user-friendly solution catering to local restaurants, enhanced UX and streamlined deployments with CI/CD automation.",
      image: "/LettuceEat.png",
      tags: ["MongoDB", "Express", "React.js", "Node.js"],
      githubLink: "https://github.com/rahulreddyp/lettuce-eat-restaurant-application",
    },
    {
      title: "SafeDeposit - cloud plumbing system",
      description: "A serverless, scalable, on-demand data processing application leveraging a multi-cloud Backend-as-a-Service model.",
      image: "/projects/task-manager.jpg",
      tags: ["AWS", "DynamoDB", "Lambda", "GCP Firebase"],
      githubLink: "https://github.com/rahulreddyp/safe-deposit-cloud-plumbing-system",
    },
    {
      title: "Analysis of customer spending pattern",
      description: "A customer spending analysis made using Machine Learning models, by creating data-driven dashboards for insights on products, marketing, and purchasing.",
      image: "/projects/weather-dashboard.jpg",
      tags: ["Python", "NumPy", "Matplotlib", "Plotly", "Slearn"],
      githubLink: "https://github.com/rahulreddyp/analysis-of-customer-behaviour-pattern",
    },
  ],
}

