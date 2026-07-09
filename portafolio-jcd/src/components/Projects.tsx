import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="proyectos" className="animated-gradient-warm py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Aquí puedes ver algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
