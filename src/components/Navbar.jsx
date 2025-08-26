import {useState} from 'react';

export default function Navbar({darkMode, toggleDarkMode}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 left-0 bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <a href="#top" className="text-xl font-bold">
        MyPortfolio
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
        <a href="#projects" className="hover:text-yellow-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
        <button onClick={toggleDarkMode} className="px-3 py-1 border rounded hover:bg-gray-700">
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-15 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <button
            onClick={() => {
              toggleDarkMode();
              setIsOpen(false);
            }}
            className="px-3 py-1 border rounded hover:bg-gray-700">
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      )}
    </nav>
  );
}
