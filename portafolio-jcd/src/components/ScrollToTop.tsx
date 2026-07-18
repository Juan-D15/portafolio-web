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
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } bg-primary text-white hover:scale-110 hover:shadow-xl`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
