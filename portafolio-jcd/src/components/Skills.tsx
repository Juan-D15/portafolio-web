import React, { useState } from 'react';
import skillsData from '../data/skillsData';
import { renderIcon } from '../utils/iconRenderer.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useScrollReveal('[data-reveal]', 0.15, [activeIdx]);
  const { t } = useTranslation();
  const activeCategory = skillsData[activeIdx];

  return (
    <section id="habilidades" className="animated-gradient-dark py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <div data-reveal data-reveal-delay="1" className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Tab buttons — mobile: arrow selector pill, desktop: glass pill with all tabs */}
        <div data-reveal data-reveal-delay="2" className="mb-10">
          {/* Mobile layout — pill with < Category > arrows */}
          <div className="flex md:hidden justify-center">
            <div className="inline-flex items-center gap-1 px-2 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-xl shadow-black/20">
              <button
                onClick={() => setActiveIdx((activeIdx - 1 + skillsData.length) % skillsData.length)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Previous category"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="px-4 py-1 text-sm font-medium text-white min-w-[160px] text-center">
                {t(`skills.categories.${activeCategory.category}`)}
              </span>
              <button
                onClick={() => setActiveIdx((activeIdx + 1) % skillsData.length)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Next category"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex justify-center">
            <div className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-xl shadow-black/20">
              {skillsData.map((category, idx) => (
                <button
                  key={category.category}
                  onClick={() => setActiveIdx(idx)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer shrink-0 ${
                    idx === activeIdx
                      ? 'text-white bg-white/15 shadow-inner shadow-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t(`skills.categories.${category.category}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active category content */}
        <div key={activeIdx} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeCategory.items.map((tech, i) => (
            <div
              key={tech.name}
              data-reveal
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group h-full">
                <div className="text-white group-hover:text-primary transition-colors duration-300">
                  {renderIcon(tech.icon)}
                </div>
                <span className="text-white text-sm font-medium text-center">
                  {t(`skills.items.${tech.name}`, tech.name)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
