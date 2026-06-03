import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ExternalLink, Code } from 'lucide-react';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Proyecto no encontrado
        </h1>
        <Link
          to="/#proyectos"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/#proyectos"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a proyectos
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden h-[220px] md:h-[280px] bg-gray-200 group"
            >
              <img
                src={img}
                alt={`${project.title} - ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Descripción
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Características
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Ver demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Code className="w-5 h-5" />
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
