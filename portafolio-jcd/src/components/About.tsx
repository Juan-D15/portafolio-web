import React from 'react';
import { MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

const About = () => {
  const sectionRef = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="animated-gradient-light py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-reveal className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('about.title')}
        </h2>
        <div data-reveal data-reveal-delay="1" className="w-20 h-1 bg-primary mx-auto rounded mb-8"></div>

        <p data-reveal data-reveal-delay="2" className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {t('about.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div data-reveal data-reveal-delay="3" className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">{t('about.location')}</p>
            <p className="text-sm text-gray-500">{t('about.locationValue')}</p>
          </div>
          <div data-reveal data-reveal-delay="4" className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">{t('about.education')}</p>
            <p className="text-sm text-gray-500">{t('about.educationValue')}</p>
            <p className="text-sm text-gray-500">{t('about.educationDetail')}</p>
          </div>
          <div data-reveal data-reveal-delay="5" className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">{t('about.experience')}</p>
            <p className="text-sm text-gray-500">{t('about.experienceValue')}</p>
          </div>
          <div data-reveal data-reveal-delay="6" className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-gray-900 font-semibold mb-1">{t('about.languages')}</p>
            <p className="text-sm text-gray-500">{t('about.languageSpanish')}</p>
            <p className="text-sm text-gray-500">{t('about.languageEnglish')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
