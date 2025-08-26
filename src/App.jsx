import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Welcome';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen scroll-smooth bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <div className="flex-grow">
        <section id="home" className="p-6 min-h-screen">
          <Home />
        </section>

        <section id="about" className="p-6 min-h-screen">
          <About />
        </section>

        <section id="projects" className="p-6 min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="p-6 min-h-screen">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}
