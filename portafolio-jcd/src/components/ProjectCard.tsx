import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import TechBadge from './TechBadge';
import { useProjectCard } from '../hooks/useProjectCard';
import { useTranslation } from 'react-i18next';

import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    currentImage,
    isHovered,
    setIsHovered,
    displayImages,
    hasMultipleImages,
    goToImage,
    nextImage,
    prevImage,
  } = useProjectCard(project);

  const { t } = useTranslation();

  const translatedTitle = t(`projects.data.${project.id}.title`);
  const translatedShortDescription = t(`projects.data.${project.id}.shortDescription`);

  const renderImage = (src: string, index: number) => {
    return (
      <img
        src={src}
        alt={`${translatedTitle} - ${index + 1}`}
        className="w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.display = 'none';
          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (nextSibling) {
            nextSibling.style.display = 'flex';
          }
        }}
      />
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div
        className="relative aspect-video overflow-hidden bg-gray-100 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full">
          {displayImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            >
              {renderImage(img, index)}
              <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 text-gray-500">
                <span className="text-sm font-medium">{t('projects.projectImage')}</span>
              </div>
            </div>
          ))}
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {translatedTitle}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {translatedShortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/proyecto/${project.id}`}
            className="inline-flex items-center text-primary font-semibold hover:underline group"
          >
            {t('projects.viewDetails')}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
              aria-label={t('projects.visitWebsite')}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
