import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';

const ScrollToTop = () => {
  const { visible, scrollToTop } = useScrollToTop();
  const { t } = useTranslation();

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('scrollToTop.ariaLabel')}
      className={`group fixed bottom-8 right-8 z-50 p-3 rounded-full border border-white/15 bg-slate-900/60 backdrop-blur-xl text-gray-200 shadow-xl shadow-black/20 navbar-pill cursor-pointer transition-all duration-300 hover:text-white hover:bg-slate-800/80 hover:border-white/30 hover:scale-110 active:scale-95 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={22} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTop;
