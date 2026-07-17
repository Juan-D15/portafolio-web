import React from 'react';
import skillsData from '../data/skillsData';
import { renderIcon } from '../utils/iconRenderer.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="habilidades" className="animated-gradient-dark py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-white mb-4">
            Habilidades
          </h2>
          <div data-reveal data-reveal-delay="1" className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, catIdx) => (
            <div key={category.category} data-reveal data-reveal-delay={Math.min(catIdx + 2, 6).toString()}>
              <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                  >
                    <div className="text-white group-hover:text-primary transition-colors duration-300">
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

