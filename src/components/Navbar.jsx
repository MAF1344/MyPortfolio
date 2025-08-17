import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({darkMode, toggleDarkMode}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-yellow-400">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>
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
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
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
