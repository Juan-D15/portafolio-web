import { describe, expect, test } from 'vitest';
import projects from '../src/data/projectsData';
import skills from '../src/data/skillsData';
import es from '../src/locales/es.json';
import en from '../src/locales/en.json';
import { getTechIcon } from '../src/utils/techIconMapper';
import { renderIcon } from '../src/utils/iconRenderer';

const locales = { es, en } as const;

describe('projectsData', () => {
  test('hay al menos un proyecto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  test('los ids son únicos y válidos para la URL /proyecto/<id>', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size, 'ids duplicados').toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  test.each(projects.map((p) => [p.id, p] as const))('%s: tiene imágenes, tecnologías y enlaces válidos', (_, p) => {
    expect(p.images.length, 'sin imágenes (la primera es la portada de la tarjeta)').toBeGreaterThan(0);
    expect(p.technologies.length, 'sin tecnologías').toBeGreaterThan(0);
    for (const url of [p.liveUrl, p.githubUrl]) {
      // "" oculta el botón; si hay URL debe ser https
      if (url) expect(url).toMatch(/^https:\/\//);
    }
  });

  test('toda tecnología de un proyecto tiene icono (techIconMapper + iconRenderer)', () => {
    const missing = [...new Set(projects.flatMap((p) => p.technologies))].filter(
      (tech) => renderIcon(getTechIcon(tech)) === null,
    );
    expect(missing, 'tecnologías sin icono: mapearlas en techIconMapper.ts / iconRenderer.tsx').toEqual([]);
  });
});

describe('textos de proyectos (la UI los lee SOLO de los locales)', () => {
  for (const [lang, locale] of Object.entries(locales)) {
    const data = locale.projects.data as Record<string, Record<string, unknown>>;

    test.each(projects.map((p) => [p.id] as const))(`${lang}.json → projects.data.%s está completo`, (id) => {
      const entry = data[id];
      expect(entry, `falta projects.data.${id} en ${lang}.json`).toBeDefined();
      for (const field of ['title', 'shortDescription', 'fullDescription']) {
        expect(typeof entry[field], `${field} debe ser texto`).toBe('string');
        expect((entry[field] as string).trim(), `${field} vacío`).not.toBe('');
      }
      expect(Array.isArray(entry.features), 'features debe ser un array').toBe(true);
      expect((entry.features as unknown[]).length, 'features vacío').toBeGreaterThan(0);
    });

    test(`${lang}.json no tiene textos de proyectos que ya no existen`, () => {
      const ids = new Set(projects.map((p) => p.id));
      expect(Object.keys(data).filter((id) => !ids.has(id))).toEqual([]);
    });
  }
});

describe('skillsData', () => {
  test('todas las habilidades tienen un icono que se puede renderizar', () => {
    const missing = skills.flatMap((c) => c.items).filter((s) => renderIcon(s.icon) === null).map((s) => s.name);
    expect(missing).toEqual([]);
  });

  test('todas las categorías están traducidas en ambos idiomas', () => {
    for (const [lang, locale] of Object.entries(locales)) {
      const categories = locale.skills.categories as Record<string, string>;
      const missing = skills.map((c) => c.category).filter((c) => !categories[c]);
      expect(missing, `categorías sin traducir en ${lang}.json`).toEqual([]);
    }
  });
});
