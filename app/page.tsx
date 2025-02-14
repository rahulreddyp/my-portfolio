import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen pt-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

