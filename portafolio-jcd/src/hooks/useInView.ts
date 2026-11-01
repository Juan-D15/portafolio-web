import { useEffect, useState, type RefObject } from 'react';

/** true mientras el elemento referenciado intersecta el viewport */
export const useInView = (ref: RefObject<Element | null>, initial = true) => {
  const [inView, setInView] = useState(initial);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
};
