import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CV_PATH = '/cv/CV%20Juan%20Carlos%20Eduardo%20Chen%20D%C3%ADaz.pdf';

const CvPage = () => {
  return (
    <div
      className="flex flex-col bg-slate-950"
      style={{ height: '100dvh' }}
    >
      <div className="py-4 px-4 flex-shrink-0">
        <Link
          to="/"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/10 bg-white/5"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Portafolio
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

