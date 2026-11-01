import { describe, expect, test } from 'vitest';
import { IMAGE_WIDTHS, imageSrc, imageSrcSet } from '../src/utils/image';
import { getTechIcon } from '../src/utils/techIconMapper';
import { renderIcon } from '../src/utils/iconRenderer';
import optimizeImagesScript from '../scripts/optimize-images.mjs?raw';

describe('utils/image', () => {
  test('imageSrc genera la ruta WebP del ancho pedido (1280 por defecto)', () => {
    expect(imageSrc('/images/amg/logo', 960)).toBe('/images/amg/logo-960.webp');
    expect(imageSrc('/images/amg/logo')).toBe('/images/amg/logo-1280.webp');
  });

  test('imageSrcSet lista todos los anchos con su descriptor w', () => {
    expect(imageSrcSet('/images/amg/logo')).toBe(
      IMAGE_WIDTHS.map((w) => `/images/amg/logo-${w}.webp ${w}w`).join(', '),
    );
  });

  test('IMAGE_WIDTHS coincide con los anchos que genera scripts/optimize-images.mjs', () => {
    const match = optimizeImagesScript.match(/export const WIDTHS = \[([^\]]+)\]/);
    expect(match, 'no se encontró WIDTHS en optimize-images.mjs').not.toBeNull();
    const scriptWidths = match![1].split(',').map((w) => Number(w.trim()));
    expect(scriptWidths).toEqual([...IMAGE_WIDTHS]);
  });
});

describe('utils/techIconMapper', () => {
  test('mapea nombres y alias directos', () => {
    expect(getTechIcon('Python')).toBe('python');
    expect(getTechIcon('TS')).toBe('typescript');
    expect(getTechIcon('Node.js')).toBe('nodedotjs');
    expect(getTechIcon('SQL Server')).toBe('microsoftsqlserver');
  });

  test('ignora mayúsculas/minúsculas', () => {
    expect(getTechIcon('tailwind css')).toBe('tailwindcss');
    expect(getTechIcon('POSTGRESQL')).toBe('postgresql');
  });

  test('normaliza nombres desconocidos a un slug', () => {
    expect(getTechIcon('Svelte Kit')).toBe('sveltekit');
    expect(getTechIcon('F#')).toBe('fsharp');
  });

  test('devuelve null sin nombre', () => {
    expect(getTechIcon(null)).toBeNull();
    expect(getTechIcon(undefined)).toBeNull();
    expect(getTechIcon('')).toBeNull();
  });
});

describe('utils/iconRenderer', () => {
  test('renderiza iconos de simple-icons, lucide y el icono personalizado de Dokploy', () => {
    expect(renderIcon('python')).not.toBeNull();
    expect(renderIcon('java')).not.toBeNull();
    expect(renderIcon('dokploy')).not.toBeNull();
  });

  test('devuelve null para slugs vacíos o desconocidos', () => {
    expect(renderIcon(null)).toBeNull();
    expect(renderIcon('no-existe')).toBeNull();
  });
});
