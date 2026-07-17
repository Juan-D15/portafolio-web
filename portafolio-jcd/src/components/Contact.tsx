import React from 'react';
import { Mail } from 'lucide-react';
import { siGithub } from 'simple-icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

// SVG oficial de LinkedIn (no disponible en simple-icons con ese nombre exacto)
const LinkedInIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  const sectionRef = useScrollReveal();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/juan-chendiaz/',
      label: 'linkedin.com/in/juan-chendiaz'
    },
    {
      name: 'GitHub',
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: siGithub.svg }}
        />
      ),
      url: 'https://github.com/Juan-D15',
      label: 'github.com/Juan-D15'
    },
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8" />,
      url: 'mailto:jdiaz45c@gmail.com',
      label: 'jdiaz45c@gmail.com'
    }
  ];

  return (
    <section id="contacto" className="animated-gradient-dark py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-reveal className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contacto
        </h2>
        <div data-reveal data-reveal-delay="1" className="w-20 h-1 bg-primary mx-auto rounded mb-6"></div>
        
        <p data-reveal data-reveal-delay="2" className="text-gray-400 text-lg mb-10">
          ¿Tienes un proyecto en mente?
        </p>

        <div data-reveal data-reveal-delay="3" className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex flex-col items-center gap-3 text-white hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <div className="p-4 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                {link.icon}
              </div>
              <span className="font-medium">{link.name}</span>
              <span className="text-sm text-gray-400">{link.label}</span>
            </a>
          ))}
        </div>

        <div data-reveal data-reveal-delay="4" className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Juan Carlos Eduardo Chen Díaz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

