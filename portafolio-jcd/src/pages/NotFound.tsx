import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen animated-gradient-hero flex items-center justify-center px-4">
      {/* Al ser una SPA el servidor responde 200: noindex evita que Google indexe URLs inexistentes */}
      <meta name="robots" content="noindex" />

      {/* relative z-10: por encima del degradado animado (::before) de .animated-gradient-hero */}
      <div className="text-center max-w-xl mx-auto relative z-10">
        <p className="text-7xl md:text-9xl font-bold text-white/10 mb-2 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('notFound.title')}</h1>
        <p className="text-lg text-slate-300 font-light mb-8">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 text-gray-300 font-semibold text-lg hover:bg-primary/20 hover:border-primary/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          <ChevronLeft size={20} />
          {t('notFound.backHome')}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
