import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  ChevronLeft,
  ChevronRight,
  ExternalLink, 
  Info, 
  ListChecks, 
  Layers,
  Maximize2,
  X
} from 'lucide-react';
import { siGithub } from 'simple-icons';
import projectsData from '../data/projectsData';
import TechTag from '../components/TechTag';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryPage, setGalleryPage] = useState(0);
  const { t } = useTranslation();

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    if (!project) return;
    setSelectedImage((prev) => prev !== null ? (prev + 1) % project.images.length : 0);
  };

  const prevImage = () => {
    if (!project) return;
    setSelectedImage((prev) => prev !== null ? (prev - 1 + project.images.length) % project.images.length : 0);
  };

  const nextGalleryPage = () => {
    setGalleryPage((prev) => (prev + 1) % totalPages);
  };

  const prevGalleryPage = () => {
    setGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('projectDetail.notFound')}
        </h1>
        <Link
          to="/#proyectos"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('projectDetail.backToProjects')}
        </Link>
      </div>
    );
  }

  const IMAGES_PER_PAGE = 4;
  const totalPages = Math.ceil(project.images.length / IMAGES_PER_PAGE);
  const startIndex = galleryPage * IMAGES_PER_PAGE;
  const visibleImages = project.images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const translatedTitle = t(`projects.data.${project.id}.title`);
  const translatedShortDescription = t(`projects.data.${project.id}.shortDescription`);
  const translatedFullDescription = t(`projects.data.${project.id}.fullDescription`);
  const translatedFeatures = t(`projects.data.${project.id}.features`, { returnObjects: true }) as string[];

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
            {t('projectDetail.backToProjects')}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {translatedTitle}
          </h1>
          
          <p className="text-xl text-white/80 text-center max-w-2xl mx-auto">
            {translatedShortDescription}
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
            <h2 className="text-2xl font-bold text-gray-900">{t('projectDetail.technologies')}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {project.technologies.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Galería de imágenes */}
        {project.images.length > 0 && (
          <div className="mb-10 relative">
            {totalPages > 1 && (
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={prevGalleryPage}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors"
                  aria-label={t('projectDetail.previousPage')}
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm text-gray-500 font-medium">
                  {t('projectDetail.pageOf', { current: galleryPage + 1, total: totalPages })}
                </span>
                <button
                  onClick={nextGalleryPage}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors"
                  aria-label={t('projectDetail.nextPage')}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {visibleImages.map((img, localIndex) => {
                const globalIndex = startIndex + localIndex;

                return (
                  <div
                    key={globalIndex}
                    onClick={() => openModal(globalIndex)}
                    className="rounded-xl shadow-lg overflow-hidden bg-gray-200 group relative cursor-pointer aspect-video"
                  >
                    <img
                      src={img}
                      alt={`${translatedTitle} - ${globalIndex + 1}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        <Maximize2 size={28} className="sm:w-9 sm:h-9" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Descripción */}
        <div className="mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-4">
              <Info className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">{t('projectDetail.description')}</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pl-4">
              {translatedFullDescription}
            </p>
          </div>
        </div>

        {/* Características */}
        {Array.isArray(translatedFeatures) && translatedFeatures.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ListChecks className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t('projectDetail.features')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {translatedFeatures.map((feature, index) => (
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg text-lg px-8 hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t('projectDetail.viewWeb')}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-lg text-lg px-8 hover:scale-105 transition-transform duration-300"
            >
              <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor" dangerouslySetInnerHTML={{ __html: siGithub.svg }} />
              {t('projectDetail.viewProject')}
            </a>
          )}
        </div>
      </div>

      {/* Modal de imagen */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            aria-label={t('projectDetail.close')}
          >
            <X size={32} />
          </button>

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-50"
                aria-label={t('projectDetail.previousImage')}
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-50"
                aria-label={t('projectDetail.nextImage')}
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <img
            src={project.images[selectedImage]}
            alt={`${translatedTitle} - ${selectedImage + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {t('projectDetail.imageOf', { current: selectedImage + 1, total: project.images.length })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
