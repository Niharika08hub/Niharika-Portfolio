import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0F] shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          Niharika
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">

            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white transition"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#achievements"
                className="text-gray-300 hover:text-white transition"
              >
                Achievements & Cert
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B0F] border-t border-white/10">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#achievements"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-white"
          >
            Achievements & Certifications
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-white"
          >
            Contact
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;