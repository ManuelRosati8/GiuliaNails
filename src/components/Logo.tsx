import React from 'react';
import logoImage from '@/assets/Logo_giulia_nails.png';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => {
  return (
    <img
      src={logoImage}
      alt="Logo Giulia Nails"
      className={className}
    />
  );
};

export default Logo;
