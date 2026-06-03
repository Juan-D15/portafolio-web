import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen animated-gradient-hero flex flex-col items-center justify-center px-4 relative"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Tu Nombre
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-2 font-medium">
          Desarrollador Full Stack | DevOps
        </p>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Construyendo soluciones web escalables y robustas con tecnologías modernas
        </p>
        <button
          onClick={handleScrollToProjects}
          className="btn btn-primary btn-lg text-lg px-8 py-3"
        >
          Ver mis proyectos
        </button>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
