import { useState, useCallback, useMemo } from 'react';
import skillsData from '../data/skillsData';
import { Skill, FloatingSlot, Position } from '../types';

const SLOT_COUNT = 8;
const MIN_DISTANCE = 20; // distancia mínima en % entre iconos

// Encuentra una posición aleatoria que respete la distancia mínima con los iconos existentes
const getRandomPosition = (existingPositions: Position[] = []): Position => {
  let bestLeft = 0, bestTop = 0, bestMinDist = -1;

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

export const useFloatingIcons = () => {
  const allTechs = useMemo(() =>
    skillsData.flatMap((category) => category.items),
    []
  );

  // Elige una tecnología aleatoria, evitando los iconos visibles actualmente
  const getRandomTech = useCallback((excludeIcons: string[] = []): Skill => {
    const available = allTechs.filter(t => !excludeIcons.includes(t.icon));
    const pool = available.length > 0 ? available : allTechs;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [allTechs]);

  // Inicializa los espacios con distanciamiento obligatorio
  const [slots, setSlots] = useState(() => {
    const shuffled = [...allTechs].sort(() => Math.random() - 0.5);
    const initialSlots: FloatingSlot[] = [];

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
  const handleAnimationIteration = useCallback((slotIndex: number) => {
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

  return {
    slots,
    handleAnimationIteration,
  };
};
