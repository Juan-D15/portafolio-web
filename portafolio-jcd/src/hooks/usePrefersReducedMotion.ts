import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

/** true si el usuario pidió reducir el movimiento en su sistema operativo */
export const usePrefersReducedMotion = () => useSyncExternalStore(subscribe, getSnapshot, () => false);
