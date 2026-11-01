// Las imágenes de proyectos se generan con `pnpm images` (scripts/optimize-images.mjs)
// como "<base>-<ancho>.webp". En los datos se guarda solo la ruta base sin extensión.

// Debe coincidir con WIDTHS en scripts/optimize-images.mjs
export const IMAGE_WIDTHS = [640, 960, 1280, 1920] as const;

type ImageWidth = (typeof IMAGE_WIDTHS)[number];

export const imageSrc = (base: string, width: ImageWidth = 1280): string => `${base}-${width}.webp`;

export const imageSrcSet = (base: string): string =>
  IMAGE_WIDTHS.map((w) => `${imageSrc(base, w)} ${w}w`).join(', ');

/** Tarjeta de proyecto: 1 columna en móvil, 2 columnas (máx. ~560px) desde md */
export const PROJECT_CARD_SIZES = '(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw';
