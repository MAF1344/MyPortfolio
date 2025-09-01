import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Welcome'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

// Projects
import Portfolio from './pages/Projects/Portfolio'
import Puskesmas from './pages/Projects/Puskesmas'
import TokoBuku from './pages/Projects/TokoBuku'
import CovidLanding from './pages/Projects/CovidAPI'

// Mini Projects
import Calculator from './pages/miniProjects/Calculator'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <Router>
      <div className="flex min-h-screen flex-col scroll-smooth bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home" className="min-h-screen p-6">
                    <Home />
                  </section>
                  <section id="about" className="min-h-screen p-6">
                    <About />
                  </section>
                  <section id="projects" className="min-h-screen p-6">
                    <Projects />
                  </section>
                  <section id="contact" className="min-h-screen p-6">
                    <Contact />
                  </section>
                </>
              }
            />

            {/* Projects */}
            <Route path="/projects/portfolio" element={<Portfolio />} />
            <Route path="/projects/puskesmas" element={<Puskesmas />} />
            <Route path="/projects/toko-buku" element={<TokoBuku />} />
            <Route path="/projects/covid-api" element={<CovidLanding />} />

            {/* Mini Projects */}
            <Route path="/mini-projects/calculator" element={<Calculator />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}
