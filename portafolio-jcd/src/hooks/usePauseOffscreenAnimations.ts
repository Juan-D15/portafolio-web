import { useEffect } from 'react';

const ANIMATED_SECTIONS =
  '.animated-gradient-dark, .animated-gradient-light, .animated-gradient-warm, .animated-gradient-hero';

/**
 * Pausa las animaciones CSS infinitas (degradados de fondo, iconos flotantes, cursor...)
 * de las secciones que no están en pantalla, marcándolas con `data-anim-paused`.
 * Las reglas de pausa están en index.css.
 */
export const usePauseOffscreenAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(ANIMATED_SECTIONS);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.toggleAttribute('data-anim-paused', !entry.isIntersecting);
      }
    });

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
