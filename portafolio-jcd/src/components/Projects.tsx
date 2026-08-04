import React, { useState } from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PER_PAGE = 4;

const Projects = () => {
  const sectionRef = useScrollReveal();
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projectsData.length / PER_PAGE);
  const paged = projectsData.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const goTo = (p: number) => {
    if (p >= 0 && p < totalPages) setPage(p);
  };

  return (
    <section id="proyectos" className="animated-gradient-warm py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <div data-reveal data-reveal-delay="1" className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p data-reveal data-reveal-delay="2" className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div
          key={page}
          data-reveal data-reveal-delay="3"
          className="grid md:grid-cols-2 gap-8 animate-[fadeIn_0.35s_ease-out_forwards]"
        >
          {paged.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination — only shown when there are multiple pages */}
        {totalPages > 1 && (
          <div data-reveal data-reveal-delay="4" className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === page
                      ? 'bg-primary scale-125'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
