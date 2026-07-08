import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { renderIcon } from '../utils/iconRenderer.jsx';
import { useFloatingIcons } from '../hooks/useFloatingIcons';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { slots, handleAnimationIteration } = useFloatingIcons();

  return (
    <section
      id="inicio"
      className="min-h-screen animated-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Iconos flotantes de fondo — ciclan a través de las habilidades */}
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout style paint', zIndex: 1 }}>
        {slots.map((slot, index) => (
          <div
            key={`floating-slot-${index}`}
            className="absolute floating-icon"
            style={{
              left: slot.left,
              top: slot.top,
              animationDelay: slot.delay,
              animationDuration: slot.duration,
            }}
            onAnimationIteration={() => handleAnimationIteration(index)}
          >
            <div className="text-white">
              {renderIcon(slot.tech.icon, "w-14 h-14 md:w-16 md:h-16")}
            </div>
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 flex flex-col items-center">
          <span>Juan Carlos Eduardo</span>
          <span>Chen Díaz</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-2 font-medium">
          Desarrollador de Software Junior | Frontend & Backend
        </p>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Construyendo soluciones web escalables y robustas con tecnologías modernas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/cv"
            className="btn btn-primary btn-lg text-lg px-8 py-3"
          >
            Ver mi CV
          </Link>
          <button
            onClick={handleScrollToProjects}
            className="btn btn-primary btn-lg text-lg px-8 py-3"
          >
            Ver mis proyectos
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce z-10">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
