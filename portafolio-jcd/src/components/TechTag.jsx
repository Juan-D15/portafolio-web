// src/components/TechTag.jsx
import React from 'react';
import { getTechIcon } from '../utils/techIconMapper';
import { renderIcon } from '../utils/iconRenderer';

const TechTag = ({ name }) => {
  const iconSlug = getTechIcon(name);
  const icon = renderIcon(iconSlug, 'w-8 h-8');
  
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default">
      <div className="text-primary hover:scale-110 transition-transform duration-300">
        {icon || <span className="w-8 h-8 block" />}
      </div>
      <span className="text-sm font-medium text-gray-800 text-center">{name}</span>
    </div>
  );
};

export default TechTag;
