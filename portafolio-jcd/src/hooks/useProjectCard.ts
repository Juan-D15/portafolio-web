import { useState, useEffect, useRef } from 'react';
import { useInView } from './useInView';

import { Project } from '../types';

export const useProjectCard = (project: Project) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoPlayKey, setAutoPlayKey] = useState(0);
  // Índices ya mostrados: su <img> se mantiene montada para no recargarla al volver
  const [visited, setVisited] = useState<ReadonlySet<number>>(() => new Set([0]));
  const cardRef = useRef<HTMLDivElement>(null);
  // Solo reproducir el carrusel cuando la tarjeta está en pantalla
  const inView = useInView(cardRef, false);

  const displayImages = project?.images?.slice(0, 4) || [];
  const hasMultipleImages = displayImages.length > 1;
  const nextIndex = hasMultipleImages ? (currentImage + 1) % displayImages.length : currentImage;

  useEffect(() => {
    setVisited((prev) => (prev.has(currentImage) ? prev : new Set(prev).add(currentImage)));
  }, [currentImage]);

  useEffect(() => {
    if (!hasMultipleImages || isHovered || !inView) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, inView, hasMultipleImages, autoPlayKey, displayImages.length]);

  /** La imagen actual, la siguiente (precarga para la transición) y las ya vistas */
  const shouldRenderImage = (index: number) =>
    index === currentImage || index === nextIndex || visited.has(index);

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setAutoPlayKey((prev) => prev + 1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % displayImages.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  return {
    cardRef,
    currentImage,
    isHovered,
    setIsHovered,
    displayImages,
    hasMultipleImages,
    shouldRenderImage,
    goToImage,
    nextImage,
    prevImage,
  };
};
