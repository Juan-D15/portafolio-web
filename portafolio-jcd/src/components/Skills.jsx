import React from 'react';
import skillsData from '../data/skillsData';
import {
  siPython,
  siJavascript,
  siC,
  siCplusplus,
  siReact,
  siDjango,
  siNodedotjs,
  siDotnet,
  siHtml5,
  siCss,
  siWordpress,
  siPostgresql,
  siMysql,
  siDocker,
  siUbuntu,
  siVite,
} from 'simple-icons';
import {
  Hash,
  Coffee,
  Database,
  Monitor,
  Cloud,
  Server,
} from 'lucide-react';

const iconMap = {
  python: siPython,
  javascript: siJavascript,
  csharp: siC,
  cplusplus: siCplusplus,
  java: null,
  react: siReact,
  django: siDjango,
  nodedotjs: siNodedotjs,
  dotnet: siDotnet,
  html5: siHtml5,
  css3: siCss,
  wordpress: siWordpress,
  postgresql: siPostgresql,
  mysql: siMysql,
  microsoftsqlserver: null,
  docker: siDocker,
  windows: null,
  ubuntu: siUbuntu,
  vite: siVite,
  dokploy: null,
  server: null,
};

const lucideFallbacks = {
  csharp: <Hash className="w-12 h-12 md:w-16 md:h-16" />,
  java: <Coffee className="w-12 h-12 md:w-16 md:h-16" />,
  microsoftsqlserver: <Database className="w-12 h-12 md:w-16 md:h-16" />,
  windows: <Monitor className="w-12 h-12 md:w-16 md:h-16" />,
  dokploy: <Cloud className="w-12 h-12 md:w-16 md:h-16" />,
  server: <Server className="w-12 h-12 md:w-16 md:h-16" />,
};

const Skills = () => {
  const renderIcon = (iconSlug) => {
    const icon = iconMap[iconSlug];
    
    if (icon) {
      return (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-12 h-12 md:w-16 md:h-16"
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      );
    }
    
    return lucideFallbacks[iconSlug] || null;
  };

  return (
    <section id="habilidades" className="animated-gradient-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías que domino
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                  >
                    <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                      {renderIcon(tech.icon)}
                    </div>
                    <span className="text-white text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
