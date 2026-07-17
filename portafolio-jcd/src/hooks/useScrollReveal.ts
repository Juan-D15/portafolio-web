import { useEffect, useRef } from 'react';

/**
 * Hook that adds a 'scroll-revealed' class to child elements matching `selector`
 * when they enter the viewport. Each element animates only once per page load.
 *
 * @param selector - CSS selector for elements to observe (default: '[data-reveal]')
 * @param threshold - Visibility threshold to trigger (0–1, default 0.15)
 */
export const useScrollReveal = (
  selector = '[data-reveal]',
  threshold = 0.15,
) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('scroll-revealed');
            observer.unobserve(entry.target); // only once
          }
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);

  return containerRef;
};
