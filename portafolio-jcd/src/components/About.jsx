import React from 'react';
import { MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="animated-gradient-light py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded mb-8"></div>
        
        <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Cuento con experiencia en la creación de aplicaciones web escalables 
          y gestión de infraestructura. Apasionado por resolver problemas complejos con 
          soluciones elegantes y eficientes. Siempre aprendiendo nuevas tecnologías y mejorando 
          mis habilidades.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Ubicación</p>
            <p className="text-sm text-gray-500">Guatemala</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Formación</p>
            <p className="text-sm text-gray-500">Ingeniería en Ciencias y Sistemas</p>
            <p className="text-sm text-gray-500">5to. año - 10mo. Semestre</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Experiencia</p>
            <p className="text-sm text-gray-500">Desarrollo de aplicaciones web modernas</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">Idiomas</p>
            <p className="text-sm text-gray-500">Español - Nativo</p>
            <p className="text-sm text-gray-500">Inglés - Intermedio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
