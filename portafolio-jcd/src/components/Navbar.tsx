import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const { isOpen, scrolled, toggleMenu, handleClick } = useNavbar();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">Portafolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
