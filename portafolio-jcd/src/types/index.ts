// Tipos para proyectos
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

// Tipos para habilidades
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

// Tipos para iconos
export interface SimpleIcon {
  svg: string;
  title?: string;
  slug?: string;
  hex?: string;
}



// Tipos para floating icons
export interface FloatingSlot {
  tech: Skill;
  left: string;
  top: string;
  numLeft: number;
  numTop: number;
  duration: string;
  delay: string;
}

export interface Position {
  left: string;
  top: string;
  numLeft: number;
  numTop: number;
}
