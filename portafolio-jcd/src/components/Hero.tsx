import React, { useMemo, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { renderIcon } from '../utils/iconRenderer.jsx';
import { useFloatingIcons } from '../hooks/useFloatingIcons';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
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
  const contentRef = useRef<HTMLDivElement>(null);

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
  const { displayText } = useTypingAnimation({ strings: typingStrings });

  // Trigger reveal on mount — Hero is already in viewport so IntersectionObserver won't fire
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Small delay so the browser paints the hidden state first
    requestAnimationFrame(() => {
      el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((child) =>
        child.classList.add('scroll-revealed'),
      );
    });
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen animated-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Iconos flotantes de fondo — ciclan a través de las habilidades */}
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout style paint', zIndex: 1 }}>
        {slots.map((slot, index) => (
          <FloatingIcon
            key={`floating-slot-${index}`}
            slot={slot}
            index={index}
            onIteration={handleAnimationIteration}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div ref={contentRef} className="text-center max-w-4xl mx-auto relative z-10">
        <h1 data-reveal style={{ transitionDuration: '1s' }} className="text-5xl md:text-7xl font-bold text-white mb-4 flex flex-col items-center">
          <span>Juan Carlos Eduardo</span>
          <span>Chen Díaz</span>
        </h1>
        <div data-reveal style={{ transitionDelay: '0.5s', transitionDuration: '1s' }} className="h-8 md:h-10 flex items-center justify-center mb-6">
          <span className="text-slate-300 text-base sm:text-lg md:text-xl font-normal tracking-wide">
            {displayText}
          </span>
          <span className="typing-cursor text-cyan-400 text-base sm:text-lg md:text-xl font-normal ml-0.5">|</span>
        </div>
        <p data-reveal style={{ transitionDelay: '1s', transitionDuration: '1s' }} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          {t('hero.description')}
        </p>
        <div data-reveal style={{ transitionDelay: '1.5s', transitionDuration: '1s' }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

      <div className="absolute bottom-8 animate-bounce z-10">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;

