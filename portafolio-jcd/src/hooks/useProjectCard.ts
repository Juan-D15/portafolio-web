import { useState, useEffect } from 'react';

import { Project } from '../types';

export const useProjectCard = (project: Project) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  const displayImages = project?.images?.slice(0, 4) || [];
  const hasMultipleImages = displayImages.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, hasMultipleImages, autoPlayKey, displayImages.length]);

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
    currentImage,
    isHovered,
    setIsHovered,
    displayImages,
    hasMultipleImages,
    goToImage,
    nextImage,
    prevImage,
  };
};
