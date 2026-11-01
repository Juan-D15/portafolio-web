import React, { useMemo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { renderIcon } from '../utils/iconRenderer.jsx';
import { useFloatingIcons } from '../hooks/useFloatingIcons';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTranslation } from 'react-i18next';
import { FloatingSlot } from '../types';

// Memoized floating icon — only re-renders when its own slot data changes
interface FloatingIconProps {
  slot: FloatingSlot;
  index: number;
  onIteration: (index: number) => void;
}

const FloatingIcon = React.memo(({ slot, index, onIteration }: FloatingIconProps) => (
  <div
    className="absolute floating-icon"
    style={{
      left: slot.left,
      top: slot.top,
      animationDelay: slot.delay,
      animationDuration: slot.duration,
    }}
    onAnimationIteration={() => onIteration(index)}
  >
    <div className="text-white">
      {renderIcon(slot.tech.icon, "w-14 h-14 md:w-16 md:h-16")}
    </div>
  </div>
));

FloatingIcon.displayName = 'FloatingIcon';

const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const heroInView = useInView(sectionRef);
  const reducedMotion = usePrefersReducedMotion();

  // Memoize to preserve reference stability across renders
  const typingStrings = useMemo(
    () => t('hero.typingStrings', { returnObjects: true }) as string[],
    [t]
  );

  const handleScrollToProjects = useCallback(() => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const { slots, handleAnimationIteration } = useFloatingIcons();
  // La escritura (re-render cada 40–80 ms) se detiene con el Hero fuera de pantalla
  const { displayText } = useTypingAnimation({
    strings: typingStrings,
    paused: !heroInView || reducedMotion,
  });
  const typedText = reducedMotion ? typingStrings[0] : displayText;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="min-h-screen animated-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Iconos flotantes de fondo — ciclan a través de las habilidades */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ contain: 'layout style paint', zIndex: 1 }}>
        {slots.map((slot, index) => (
          <FloatingIcon
            key={`floating-slot-${index}`}
            slot={slot}
            index={index}
            onIteration={handleAnimationIteration}
          />
        ))}
      </div>

      {/* Contenido principal — entrada solo con transform: el texto es visible desde el primer pintado (LCP) */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="hero-rise text-5xl md:text-7xl font-bold text-white mb-4 flex flex-col items-center">
          <span>Juan Carlos Eduardo</span>
          <span>Chen Díaz</span>
        </h1>
        <div style={{ animationDelay: '0.1s' }} className="hero-rise h-8 md:h-10 flex items-center justify-center mb-6">
          <span className="text-slate-300 text-base sm:text-lg md:text-xl font-normal tracking-wide">
            {typedText}
          </span>
          <span aria-hidden="true" className="typing-cursor text-cyan-400 text-base sm:text-lg md:text-xl font-normal ml-0.5">|</span>
        </div>
        <p style={{ animationDelay: '0.2s' }} className="hero-rise text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          {t('hero.description')}
        </p>
        <div style={{ animationDelay: '0.3s' }} className="hero-fade flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/cv"
            className="inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 text-gray-300 font-semibold text-lg hover:bg-primary/20 hover:border-primary/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            {t('hero.viewCv')}
          </Link>
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 text-gray-300 font-semibold text-lg hover:bg-primary/20 hover:border-primary/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {t('hero.viewProjects')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce z-10" aria-hidden="true">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;

