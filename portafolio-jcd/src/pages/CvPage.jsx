import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CvPage = () => {
  return (
    <div className="h-screen animated-gradient-hero flex flex-col">
      <div className="py-6 px-4 flex-shrink-0">
        <div className="max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Portafolio
          </Link>
        </div>
      </div>
      <div className="flex-1 px-4 pb-4 min-h-0">
        <embed
          src="/cv/CV%20Juan%20Carlos%20Eduardo%20Chen%20D%C3%ADaz.pdf"
          type="application/pdf"
          className="w-full h-full rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default CvPage;
