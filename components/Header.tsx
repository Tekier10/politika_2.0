import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Politika 2.0</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          <a href="/manifest" className="text-sm text-blue-600 hover:underline">
            Manifest
          </a>
          <a href="/data" className="text-sm text-blue-600 hover:underline">
            Data
          </a>
        </nav>

        {/* Hamburger icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </header>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow px-6 py-4 space-y-2">
          <a href="/manifest" className="block text-blue-600 hover:underline">
            Manifest
          </a>
          <a href="/data" className="block text-blue-600 hover:underline">
            Data
          </a>
        </div>
      )}
    </>
  );
}
