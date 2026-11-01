// Genera versiones WebP responsivas de las imágenes de proyectos.
//
// Originales (PNG/JPG, sin desplegar):  image-sources/<carpeta>/<nombre>.<ext>
// Salida (servida por Vite/Vercel):     public/images/<carpeta>/<nombre>-<ancho>.webp
//
// Uso:  pnpm images
// Al agregar una imagen nueva, colócala en image-sources/ y referencia en
// projectsData.ts la ruta base sin extensión, p. ej. "/images/amg/inicio2-amg".
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Debe coincidir con IMAGE_WIDTHS en src/utils/image.ts
export const WIDTHS = [640, 960, 1280, 1920];
const QUALITY = 78;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'image-sources');
const outDir = path.join(root, 'public', 'images');
const OG_SOURCE = path.join(srcDir, 'portfolio', 'ini-port.png');

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return files.flat().filter((f) => /\.(png|jpe?g)$/i.test(f));
};

const isUpToDate = async (src, out) => {
  try {
    return (await stat(out)).mtimeMs >= (await stat(src)).mtimeMs;
  } catch {
    return false;
  }
};

const files = await walk(srcDir);
let written = 0;

for (const file of files) {
  const rel = path.relative(srcDir, file);
  const base = rel.replace(/\.(png|jpe?g)$/i, '');
  const { width: originalWidth = 0 } = await sharp(file).metadata();
  await mkdir(path.join(outDir, path.dirname(rel)), { recursive: true });

  for (const width of WIDTHS) {
    const out = path.join(outDir, `${base}-${width}.webp`);
    if (await isUpToDate(file, out)) continue;
    // Nunca ampliar: si el original es más pequeño se conserva su ancho real
    await sharp(file)
      .resize({ width: Math.min(width, originalWidth), withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(out);
    written++;
  }
}

// Imagen Open Graph / Twitter (1200×630, JPG para máxima compatibilidad con redes sociales)
const ogOut = path.join(outDir, 'og-image.jpg');
if (!(await isUpToDate(OG_SOURCE, ogOut))) {
  await sharp(OG_SOURCE)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogOut);
  written++;
}

console.log(`Imágenes procesadas: ${files.length} originales, ${written} archivos generados.`);
