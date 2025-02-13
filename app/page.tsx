import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen pt-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

