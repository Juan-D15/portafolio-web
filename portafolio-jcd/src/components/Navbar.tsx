import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';

const navLinks = [
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const { isOpen, scrolled, activeSection, toggleMenu, handleClick } = useNavbar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Desktop — floating glass pill */}
      <div
        className={`hidden md:inline-flex items-center gap-3 mt-4 px-2 py-2 rounded-full border transition-all duration-500 pointer-events-auto navbar-pill ${scrolled
          ? 'bg-slate-900/60 backdrop-blur-xl border-white/15 shadow-xl shadow-black/20'
          : 'bg-white/[0.06] backdrop-blur-md border-white/10 shadow-lg shadow-black/10'
          }`}
      >
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                ? 'text-white bg-white/15 shadow-inner shadow-white/5'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Mobile — hamburger button (top-right) */}
      <div className="md:hidden absolute top-4 right-4 pointer-events-auto">
        <button
          onClick={toggleMenu}
          className={`p-2.5 rounded-full border transition-all duration-300 ${isOpen
            ? 'bg-white/15 backdrop-blur-xl border-white/20 text-white'
            : scrolled
              ? 'bg-slate-900/60 backdrop-blur-xl border-white/15 text-gray-300 shadow-lg shadow-black/20'
              : 'bg-white/[0.06] backdrop-blur-md border-white/10 text-gray-300 shadow-lg shadow-black/10'
            }`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile — dropdown glass panel */}
      <div
        className={`md:hidden absolute top-16 right-4 min-w-[200px] rounded-2xl border border-white/15 bg-slate-900/70 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden pointer-events-auto transition-all duration-300 origin-top-right ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-90 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="p-2 space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                  ? 'text-white bg-white/15'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

