import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const hasMultipleImages = project.images.length > 1;

  const renderImage = (src, index) => {
    return (
      <img
        src={src}
        alt={`${project.title} - ${index + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-video max-h-[240px] md:max-h-[300px] overflow-hidden bg-gray-100">
        <div className="w-full h-full">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-300"
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            >
              {renderImage(img, index)}
              <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 text-gray-500">
                <span className="text-sm font-medium">Imagen del proyecto</span>
              </div>
            </div>
          ))}
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
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
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <Link
          to={`/proyecto/${project.id}`}
          className="inline-flex items-center text-primary font-semibold hover:underline group"
        >
          Ver detalles
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
