import React from 'react';
import {
  siPython,
  siJavascript,
  siC,
  siCplusplus,
  siReact,
  siDjango,
  siNodedotjs,
  siNextdotjs,
  siDotnet,
  siHtml5,
  siCss,
  siWordpress,
  siPostgresql,
  siMysql,
  siDocker,
  siUbuntu,
  siVite,
  siFastapi,
  siTailwindcss,
  siGit,
  siGithub,
  siBun,
  siNpm,
  siPnpm,
} from 'simple-icons';
import {
  Hash,
  Coffee,
  Database,
  Monitor,
  Server,
  Flower,
  Package,
  Box,
} from 'lucide-react';

export const iconMap = {
  python: siPython,
  javascript: siJavascript,
  csharp: siC,
  cplusplus: siCplusplus,
  java: null,
  react: siReact,
  django: siDjango,
  nodedotjs: siNodedotjs,
  nextdotjs: siNextdotjs,
  dotnet: siDotnet,
  html5: siHtml5,
  css3: siCss,
  wordpress: siWordpress,
  postgresql: siPostgresql,
  mysql: siMysql,
  docker: siDocker,
  windows: null,
  ubuntu: siUbuntu,
  vite: siVite,
  fastapi: siFastapi,
  tailwindcss: siTailwindcss,
  git: siGit,
  github: siGithub,
  bun: siBun,
  npm: siNpm,
  pnpm: siPnpm,
  pip: null,
  uv: null,
  dokploy: null,
  server: null,
  daisyui: null,
};

export const lucideFallbacks = {
  csharp: (sizeClass) => <Hash className={sizeClass} />,
  java: (sizeClass) => <Coffee className={sizeClass} />,
  microsoftsqlserver: (sizeClass) => <Database className={sizeClass} />,
  windows: (sizeClass) => <Monitor className={sizeClass} />,
  server: (sizeClass) => <Server className={sizeClass} />,
  daisyui: (sizeClass) => <Flower className={sizeClass} />,
  pip: (sizeClass) => <Package className={sizeClass} />,
  uv: (sizeClass) => <Box className={sizeClass} />,
};

export const renderIcon = (iconSlug, sizeClass = "w-12 h-12 md:w-16 md:h-16") => {
  const icon = iconMap[iconSlug];
  
  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={sizeClass}
        fill="currentColor"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
    );
  }

  if (iconSlug === 'dokploy') {
    return (
      <img
        src="/dokploy.webp"
        alt="Dokploy"
        className={`${sizeClass} object-contain brightness-0 invert`}
        loading="lazy"
      />
    );
  }
  
  const fallbackFn = lucideFallbacks[iconSlug];
  return fallbackFn ? fallbackFn(sizeClass) : null;
};
