import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  ExternalLink, 
  Code, 
  Info, 
  ListChecks, 
  Layers 
} from 'lucide-react';
import projectsData from '../data/projectsData';
import TechTag from '../components/TechTag';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
    <div className="min-h-screen bg-gray-50">
      {/* Header con gradiente */}
      <div className="animated-gradient-hero py-16 md:py-24 px-4 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            to="/#proyectos"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a proyectos
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {project.title}
          </h1>
          
          <p className="text-xl text-white/80 text-center max-w-2xl mx-auto">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Tecnologías con iconos */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tecnologías</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {project.technologies.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden h-[250px] md:h-[300px] bg-gray-200 group relative ${
                  index === 0 && project.images.length > 2 ? 'md:col-span-2 md:row-span-2 md:h-[620px]' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    Imagen {index + 1} de {project.images.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-4">
              <Info className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Descripción</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pl-4">
              {project.fullDescription}
            </p>
          </div>
        </div>

        {/* Características */}
        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ListChecks className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Características</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="p-1 bg-primary rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg text-lg px-8 hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-lg text-lg px-8 hover:scale-105 transition-transform duration-300"
            >
              <Code className="w-5 h-5 mr-2" />
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
