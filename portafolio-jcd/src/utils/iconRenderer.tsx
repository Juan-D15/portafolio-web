import React from 'react';
import {
  siPython,
  siJavascript,
  siTypescript,
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
  siRedis,
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
  siNestjs,
  siUv,
  siExpress,
  siFigma,
} from 'simple-icons';
import {
  Hash,
  Coffee,
  Database,
  Server,
  Flower,
  Package,
} from 'lucide-react';

import { SimpleIcon } from '../types';

// Icono personalizado de Windows (logo 4 rectángulos) compatible con fill="currentColor"
const siWindowsCustom: SimpleIcon = {
  svg: '<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>'
};

export const iconMap: Record<string, SimpleIcon | null> = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
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
  redis: siRedis,
  docker: siDocker,
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
  uv: siUv,
  dokploy: null,
  windows: siWindowsCustom,
  server: null,
  daisyui: null,
  nestjs: siNestjs,
  express: siExpress,
  figma: siFigma,
};

export const lucideFallbacks: Record<string, (sizeClass: string) => React.ReactNode> = {
  csharp: (sizeClass) => <Hash className={sizeClass} />,
  java: (sizeClass) => <Coffee className={sizeClass} />,
  microsoftsqlserver: (sizeClass) => <Database className={sizeClass} />,
  server: (sizeClass) => <Server className={sizeClass} />,
  daisyui: (sizeClass) => <Flower className={sizeClass} />,
  pip: (sizeClass) => <Package className={sizeClass} />,
};

export const renderIcon = (iconSlug: string | null | undefined, sizeClass: string = "w-12 h-12 md:w-16 md:h-16"): React.ReactNode => {
  if (!iconSlug) return null;
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
      <span
        className={`${sizeClass} dokploy-icon inline-block`}
        role="img"
        aria-label="Dokploy"
      />
    );
  }


  
  const fallbackFn = lucideFallbacks[iconSlug];
  return fallbackFn ? fallbackFn(sizeClass) : null;
};
