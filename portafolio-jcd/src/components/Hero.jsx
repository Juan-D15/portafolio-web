import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import skillsData from '../data/skillsData';
import { renderIcon } from '../utils/iconRenderer.jsx';

const SLOT_COUNT = 8;
const MIN_DISTANCE = 20; // distancia mínima en % entre iconos

// Encuentra una posición aleatoria que respete la distancia mínima con los iconos existentes
const getRandomPosition = (existingPositions = []) => {
  let bestLeft, bestTop, bestMinDist = -1;

  for (let attempt = 0; attempt < 60; attempt++) {
    const left = Math.random() * 82 + 5;  // 5% to 87%
    const top = Math.random() * 78 + 8;   // 8% to 86%

    let minDist = Infinity;
    for (const pos of existingPositions) {
      const dist = Math.sqrt((left - pos.numLeft) ** 2 + (top - pos.numTop) ** 2);
      minDist = Math.min(minDist, dist);
    }

    // Posición válida encontrada
    if (existingPositions.length === 0 || minDist >= MIN_DISTANCE) {
      return { left: `${left}%`, top: `${top}%`, numLeft: left, numTop: top };
    }

    // Guarda el mejor candidato en caso de que no haya una coincidencia perfecta
    if (minDist > bestMinDist) {
      bestMinDist = minDist;
      bestLeft = left;
      bestTop = top;
    }
  }

  return { left: `${bestLeft}%`, top: `${bestTop}%`, numLeft: bestLeft, numTop: bestTop };
};

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allTechs = useMemo(() =>
    skillsData.flatMap((category) => category.items),
    []);

  // Elige una tecnología aleatoria, evitando los iconos visibles actualmente
  const getRandomTech = useCallback((excludeIcons = []) => {
    const available = allTechs.filter(t => !excludeIcons.includes(t.icon));
    const pool = available.length > 0 ? available : allTechs;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [allTechs]);

  // Inicializa los espacios con distanciamiento obligatorio
  const [slots, setSlots] = useState(() => {
    const shuffled = [...allTechs].sort(() => Math.random() - 0.5);
    const initialSlots = [];

    for (let i = 0; i < SLOT_COUNT; i++) {
      const pos = getRandomPosition(initialSlots);
      initialSlots.push({
        tech: shuffled[i % shuffled.length],
        ...pos,
        duration: `${10 + Math.random() * 6}s`,
        delay: `${i * 1.5}s`,
      });
    }

    return initialSlots;
  });

  // Cuando el ciclo de animación termina (opacidad = 0), cambia a un nuevo icono y posición distanciada
  const handleAnimationIteration = useCallback((slotIndex) => {
    setSlots(prev => {
      const newSlots = [...prev];
      const currentIcons = newSlots.map(s => s.tech.icon);
      const newTech = getRandomTech(currentIcons);

      // Obtiene las posiciones de todos los OTROS espacios activos para la verificación de distancia
      const otherPositions = newSlots.filter((_, i) => i !== slotIndex);
      const newPos = getRandomPosition(otherPositions);

      newSlots[slotIndex] = {
        ...newSlots[slotIndex],
        tech: newTech,
        ...newPos,
      };
      return newSlots;
    });
  }, [getRandomTech]);

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
