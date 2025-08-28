import { useState } from 'react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-gray-900 px-6 py-4 text-white">
      <a href="/" className="text-xl font-bold">
        MyPortfolio
      </a>

      {/* Desktop Menu */}
      <div className="hidden gap-6 md:flex">
        <a href="/#about" className="hover:text-yellow-400">
          Tentang
        </a>
        <a href="/#projects" className="hover:text-yellow-400">
          Proyek
        </a>
        <a href="/#contact" className="hover:text-yellow-400">
          Kontak
        </a>
        <button onClick={toggleDarkMode} className="rounded border px-3 py-1 hover:bg-gray-700">
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-15 left-0 flex w-full flex-col items-center gap-4 bg-gray-800 py-4 md:hidden">
          <a href="#about" onClick={() => setIsOpen(false)}>
            Tentang
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Proyek
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Kontak
          </a>
          <button
            onClick={() => {
              toggleDarkMode()
              setIsOpen(false)
            }}
            className="rounded border px-3 py-1 hover:bg-gray-700"
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      )}
    </nav>
  )
}
