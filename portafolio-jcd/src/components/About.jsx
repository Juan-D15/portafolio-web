import React from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="animated-gradient-light py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded mb-8"></div>
        
        <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Desarrollador Full Stack con experiencia en la creación de aplicaciones web escalables 
          y gestión de infraestructura DevOps. Apasionado por resolver problemas complejos con 
          soluciones elegantes y eficientes. Siempre aprendiendo nuevas tecnologías y mejorando 
          mis habilidades.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Ubicación</p>
            <p className="text-sm text-gray-500">Tu ciudad</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Formación</p>
            <p className="text-sm text-gray-500">Tu título</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Experiencia</p>
            <p className="text-sm text-gray-500">X años</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
