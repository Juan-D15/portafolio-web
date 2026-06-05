// src/utils/techIconMapper.js
// Mapea nombres de tecnología (como aparecen en projectsData) a slugs de iconos

const nameToSlugMap = {
  // Lenguajes
  'Python': 'python',
  'JavaScript': 'javascript',
  'JS': 'javascript',
  'HTML5': 'html5',
  'HTML': 'html5',
  'CSS': 'css3',
  'CSS3': 'css3',
  'C#': 'csharp',
  'C++': 'cplusplus',
  'Java': 'java',
  
  // Frameworks & Web
  'Django': 'django',
  'Vite': 'vite',
  'FastAPI': 'fastapi',
  'React': 'react',
  'WordPress': 'wordpress',
  '.NET': 'dotnet',
  'Node.js': 'nodedotjs',
  'Node': 'nodedotjs',
  'Tailwind CSS': 'tailwindcss',
  'Tailwind': 'tailwindcss',
  'DaisyUI': 'daisyui',
  'Daisy UI': 'daisyui',
  
  // Bases de Datos
  'PostgreSQL': 'postgresql',
  'MySQL': 'mysql',
  'SQL Server': 'microsoftsqlserver',
  
  // Infraestructura & DevOps
  'Docker': 'docker',
  'Dokploy': 'dokploy',
  'Windows Server': 'windows',
  'Ubuntu Server': 'ubuntu',
  'Administración VPS': 'server',
  'Git': 'git',
  'GitHub': 'github',
  'pip': 'pip',
  'uv': 'uv',
  'Bun': 'bun',
  'npm': 'npm',
  'pnpm': 'pnpm',
};

export const getTechIcon = (techName) => {
  if (!techName) return null;
  
  // 1. Buscar mapeo directo
  if (nameToSlugMap[techName]) {
    return nameToSlugMap[techName];
  }
  
  // 2. Buscar case-insensitive
  const lowerName = techName.toLowerCase();
  for (const [key, value] of Object.entries(nameToSlugMap)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }
  
  // 3. Normalizar: lowercase, reemplazar espacios, puntos
  const normalized = techName
    .toLowerCase()
    .replace(/\./g, 'dot')
    .replace(/\+/g, 'plus')
    .replace(/\s+/g, '')
    .replace(/#/g, 'sharp');
  
  return normalized;
};

export default getTechIcon;
