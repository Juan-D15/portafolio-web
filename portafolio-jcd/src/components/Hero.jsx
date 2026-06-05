import React, { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import skillsData from '../data/skillsData';
import { renderIcon } from '../utils/iconRenderer.jsx';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate distributed floating icons
  const floatingIcons = useMemo(() => {
    // Flatten all techs and shuffle
    const allTechs = skillsData.flatMap((category) => category.items);
    const shuffled = [...allTechs].sort(() => Math.random() - 0.5);
    
    // Pick only 10 random techs
    const selectedTechs = shuffled.slice(0, 10);
    
    // Generate positions with minimum distance
    const positions = [];
    const minDistance = 25; // Minimum % distance between icons
    
    for (let i = 0; i < selectedTechs.length; i++) {
      let left, top, valid;
      let attempts = 0;
      
      do {
        valid = true;
        left = Math.random() * 85 + 7; // 7% to 92%
        top = Math.random() * 75 + 12; // 12% to 87%
        
        // Check distance from all existing positions
        for (const pos of positions) {
          const distance = Math.sqrt(
            Math.pow(left - pos.left, 2) + Math.pow(top - pos.top, 2)
          );
          if (distance < minDistance) {
            valid = false;
            break;
          }
        }
        attempts++;
      } while (!valid && attempts < 50);
      
      positions.push({ left, top });
      
      const randomDelay = Math.random() * 8; // 0-8s random delay
      const randomDuration = 12 + Math.random() * 8; // 12-20s float cycle
      
      selectedTechs[i] = {
        ...selectedTechs[i],
        left: `${left}%`,
        top: `${top}%`,
        delay: `${randomDelay}s`,
        duration: `${randomDuration}s`,
      };
    }
    
    return selectedTechs;
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen animated-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((tech, index) => (
          <div
            key={`${tech.icon}-${index}`}
            className="absolute floating-icon"
            style={{
              left: tech.left,
              top: tech.top,
              animationDelay: tech.delay,
              animationDuration: tech.duration,
            }}
          >
            <div className="opacity-[0.22] hover:opacity-[0.35] transition-opacity duration-300 text-white">
              {renderIcon(tech.icon, "w-14 h-14 md:w-16 md:h-16")}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Juan Carlos Eduardo Chen Díaz
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-2 font-medium">
          Desarrollador de Software Junior | Frontend & Backend
        </p>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Construyendo soluciones web escalables y robustas con tecnologías modernas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cv/CV%20Juan%20Carlos%20Eduardo%20Chen%20D%C3%ADaz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg text-lg px-8 py-3"
          >
            Ver mi CV
          </a>
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
