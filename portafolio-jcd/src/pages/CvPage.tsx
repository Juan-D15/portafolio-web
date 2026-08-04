import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CV_PATH = '/cv/CV%20Juan%20Carlos%20Eduardo%20Chen%20D%C3%ADaz.pdf';

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col bg-slate-950"
      style={{ height: '100dvh' }}
    >
      <div className="py-4 px-4 flex-shrink-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 text-gray-300 font-medium hover:bg-primary/20 hover:border-primary/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          <ChevronLeft size={18} />
          {t('cv.backToPortfolio')}
        </Link>
      </div>
      <div className="flex-1 px-4 pb-4 min-h-0">
        <embed
          src={CV_PATH}
          type="application/pdf"
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default CvPage;
