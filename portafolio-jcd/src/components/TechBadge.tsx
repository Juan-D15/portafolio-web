// src/components/TechBadge.jsx
import React from 'react';
import { getTechIcon } from '../utils/techIconMapper';
import { renderIcon } from '../utils/iconRenderer';

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const iconSlug = getTechIcon(name);
  const icon = renderIcon(iconSlug, 'w-4 h-4');
  
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
      {icon && (
        <span className="text-gray-600">
          {icon}
        </span>
      )}
      {name}
    </span>
  );
};

export default TechBadge;
