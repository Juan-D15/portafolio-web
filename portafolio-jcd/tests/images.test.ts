import { describe, expect, test } from 'vitest';
import projects from '../src/data/projectsData';
import { IMAGE_WIDTHS, imageSrc } from '../src/utils/image';
import indexHtml from '../index.html?raw';

// Solo se listan las rutas (no se importa el contenido de las imágenes)
const toPublicUrl = (path: string) => path.replace(/^\/public/, '');
const publicFiles = new Set(
  Object.keys(import.meta.glob('/public/**/*.{webp,jpg,jpeg,png}')).map(toPublicUrl),
);
const originals = Object.keys(import.meta.glob('/image-sources/**/*.{png,jpg,jpeg}'));

describe('imágenes de proyectos', () => {
  test('las referencias en projectsData usan la ruta base, sin tamaño ni extensión', () => {
    const invalid = projects.flatMap((p) => p.images).filter((img) => !/^\/images\/[^.]+$/.test(img) || /-\d+$/.test(img));
    expect(invalid, 'usar "/images/<carpeta>/<nombre>" (ver AGENTS.md)').toEqual([]);
  });

  test('cada imagen referenciada tiene sus WebP generados (ejecuta `pnpm images`)', () => {
    const missing = projects
      .flatMap((p) => p.images)
      .flatMap((base) => IMAGE_WIDTHS.map((w) => imageSrc(base, w)))
      .filter((url) => !publicFiles.has(url));
    expect(missing).toEqual([]);
  });

  test('cada original de image-sources/ tiene sus WebP generados (ejecuta `pnpm images`)', () => {
    expect(originals.length).toBeGreaterThan(0);
    const missing = originals
      .map((path) => path.replace(/^\/image-sources/, '/images').replace(/\.(png|jpe?g)$/i, ''))
      .flatMap((base) => IMAGE_WIDTHS.map((w) => imageSrc(base, w)))
      .filter((url) => !publicFiles.has(url));
    expect(missing).toEqual([]);
  });

  test('no hay PNG/JPG en public/images/<carpeta>/ (vercel.json los redirige a WebP)', () => {
    const shadowed = [...publicFiles].filter((url) => /^\/images\/[^/]+\/.+\.(png|jpe?g)$/i.test(url));
    expect(shadowed, 'los originales van en image-sources/, no en public/').toEqual([]);
  });
});

describe('imagen Open Graph', () => {
  test('og-image.jpg existe', () => {
    expect(publicFiles.has('/images/og-image.jpg')).toBe(true);
  });

  test('index.html usa og-image.jpg en og:image y twitter:image', () => {
    for (const prop of ['property="og:image"', 'name="twitter:image"']) {
      const tag = indexHtml.split('\n').find((line) => line.includes(prop));
      expect(tag, `falta ${prop} en index.html`).toBeDefined();
      expect(tag).toContain('/images/og-image.jpg');
    }
  });
});
