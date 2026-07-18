import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';
import { useTranslation } from 'react-i18next';

const navLinkKeys = [
  { key: 'navbar.about', href: '#sobre-mi' },
  { key: 'navbar.skills', href: '#habilidades' },
  { key: 'navbar.projects', href: '#proyectos' },
  { key: 'navbar.contact', href: '#contacto' },
];

const languages = [
  { code: 'es', labelKey: 'navbar.langEs', flag: '🇪🇸' },
  { code: 'en', labelKey: 'navbar.langEn', flag: '🇺🇸' },
];

const Navbar = () => {
  const { isOpen, scrolled, activeSection, toggleMenu, handleClick } = useNavbar();
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Desktop — floating glass pill */}
      <div
        className={`hidden md:inline-flex items-center gap-3 mt-4 px-2 py-2 rounded-full border transition-all duration-500 pointer-events-auto navbar-pill ${scrolled
          ? 'bg-slate-900/60 backdrop-blur-xl border-white/15 shadow-xl shadow-black/20'
          : 'bg-white/[0.06] backdrop-blur-md border-white/10 shadow-lg shadow-black/10'
          }`}
      >
        {navLinkKeys.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                ? 'text-white bg-white/15 shadow-inner shadow-white/5'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {t(link.key)}
            </a>
          );
        })}

        {/* Language dropdown — desktop */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen((prev) => !prev)}
            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 flex items-center gap-1.5"
            aria-label="Change language"
          >
            <Globe size={14} />
            <span>{currentLang.flag}</span>
          </button>

          {/* Dropdown panel */}
          <div
            className={`absolute right-0 top-full mt-2 min-w-[150px] rounded-xl border border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden transition-all duration-200 origin-top-right ${langOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 -translate-y-1 pointer-events-none'
              }`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${i18n.language === lang.code
                  ? 'text-white bg-white/15'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{t(lang.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
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
          {navLinkKeys.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                  ? 'text-white bg-white/15'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {t(link.key)}
              </a>
            );
          })}

          {/* Language selector — mobile */}
          <div className="border-t border-white/10 mt-1 pt-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  selectLanguage(lang.code);
                  toggleMenu();
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${i18n.language === lang.code
                  ? 'text-white bg-white/15'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{t(lang.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
