import { describe, expect, test } from 'vitest';
import es from '../src/locales/es.json';
import en from '../src/locales/en.json';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

/** Rutas de todas las hojas: "hero.typingStrings[0]", "navbar.about"... */
const leafPaths = (node: Json, prefix = ''): Map<string, Json> => {
  const out = new Map<string, Json>();
  if (Array.isArray(node)) {
    node.forEach((v, i) => leafPaths(v, `${prefix}[${i}]`).forEach((val, k) => out.set(k, val)));
  } else if (node !== null && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      leafPaths(v, prefix ? `${prefix}.${k}` : k).forEach((val, key) => out.set(key, val));
    }
  } else {
    out.set(prefix, node);
  }
  return out;
};

const esLeaves = leafPaths(es as Json);
const enLeaves = leafPaths(en as Json);
const locales = { es: esLeaves, en: enLeaves };

const hasKey = (leaves: Map<string, Json>, key: string) =>
  [...leaves.keys()].some((p) => p === key || p.startsWith(`${key}.`) || p.startsWith(`${key}[`));

describe('traducciones es/en', () => {
  test('ambos idiomas tienen exactamente las mismas claves', () => {
    const onlyEs = [...esLeaves.keys()].filter((k) => !enLeaves.has(k));
    const onlyEn = [...enLeaves.keys()].filter((k) => !esLeaves.has(k));
    expect(onlyEs, 'claves que faltan en en.json').toEqual([]);
    expect(onlyEn, 'claves que faltan en es.json').toEqual([]);
  });

  test('ningún texto está vacío', () => {
    for (const [lang, leaves] of Object.entries(locales)) {
      const empty = [...leaves].filter(([, v]) => typeof v === 'string' && v.trim() === '').map(([k]) => k);
      expect(empty, `textos vacíos en ${lang}.json`).toEqual([]);
    }
  });

  test('las variables {{...}} coinciden entre idiomas', () => {
    const vars = (v: Json) => (typeof v === 'string' ? (v.match(/{{\s*\w+\s*}}/g) ?? []).sort() : []);
    const mismatched = [...esLeaves.keys()]
      .filter((k) => enLeaves.has(k))
      .filter((k) => JSON.stringify(vars(esLeaves.get(k)!)) !== JSON.stringify(vars(enLeaves.get(k)!)));
    expect(mismatched, 'claves con variables distintas en es/en').toEqual([]);
  });
});

describe('claves usadas en el código', () => {
  // Todo el código fuente como texto
  const sources = import.meta.glob<string>('/src/**/*.{ts,tsx}', { query: '?raw', import: 'default', eager: true });
  const namespaces = Object.keys(es).join('|');
  // Literales tipo 'navbar.about' o "hero.viewCv" (las plantillas con ${} se validan en projects.test.ts)
  const keyRegex = new RegExp(`['"\`]((?:${namespaces})\\.[A-Za-z0-9_.-]+)['"\`]`, 'g');

  const usedKeys = new Map<string, string>();
  for (const [file, code] of Object.entries(sources)) {
    for (const m of code.matchAll(keyRegex)) usedKeys.set(m[1], file);
  }

  test('se detectan claves en el código', () => {
    expect(usedKeys.size).toBeGreaterThan(20);
  });

  test('toda clave literal usada existe en es.json y en.json', () => {
    for (const [lang, leaves] of Object.entries(locales)) {
      const missing = [...usedKeys].filter(([key]) => !hasKey(leaves, key)).map(([key, file]) => `${key} (${file})`);
      expect(missing, `claves usadas que faltan en ${lang}.json`).toEqual([]);
    }
  });
});
