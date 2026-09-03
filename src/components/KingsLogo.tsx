import React from 'react';

interface KingsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showPhone?: boolean;
}

export const KingsLogo: React.FC<KingsLogoProps> = ({
  size = 'md',
  className = '',
  showPhone = true
}) => {
  // Dimensions for different placements
  const sizeConfig = {
    sm: {
      wrapper: 'w-44 h-24',
      diamond: 'w-24 h-24 border-[3px]',
      title: 'text-2xl',
      sub: 'text-[7px] tracking-[0.2em] border-b pb-0.5',
      phone: 'text-[11px] mt-0.5'
    },
    md: {
      wrapper: 'w-48 h-28',
      diamond: 'w-28 h-28 border-4',
      title: 'text-3xl',
      sub: 'text-[8px] tracking-[0.2em] border-b pb-0.5',
      phone: 'text-xs mt-1'
    },
    lg: {
      wrapper: 'w-64 h-64 sm:w-72 sm:h-72',
      diamond: 'w-48 h-48 sm:w-56 sm:h-56 border-[6px]',
      title: 'text-5xl sm:text-6xl',
      sub: 'text-[10px] sm:text-xs tracking-[0.25em] border-b pb-1 mt-1',
      phone: 'text-sm sm:text-base mt-2'
    },
    xl: {
      wrapper: 'w-72 h-72 sm:w-80 sm:h-80',
      diamond: 'w-56 h-56 sm:w-64 sm:h-64 border-[7px]',
      title: 'text-6xl sm:text-7xl',
      sub: 'text-xs tracking-[0.3em] border-b pb-1 mt-1',
      phone: 'text-base sm:text-lg mt-2 font-bold'
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${config.wrapper} ${className}`} id={`kings-logo-${size}`}>
      {/* 45-degree Rotated Diamond with Neon Green Border and Glow */}
      <div
        className={`bg-black border-[#18ff35] transform rotate-45 flex items-center justify-center shadow-xl neon-diamond-border ${config.diamond}`}
        style={{
          boxShadow: '0 0 15px rgba(24, 255, 53, 0.4), inset 0 0 8px rgba(24, 255, 53, 0.2)'
        }}
      />

      {/* Unrotated Text Overlay Centered in Diamond */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <span className={`text-white font-condensed font-black tracking-tight leading-none drop-shadow-md ${config.title}`}>
          KINGS
        </span>
        <span className={`text-neutral-300 font-bold uppercase border-neutral-400 ${config.sub}`}>
          APPLIANCE SERVICE
        </span>
        {showPhone && (
          <span className={`text-white font-bold tracking-wider ${config.phone}`}>
            920-839-5515
          </span>
        )}
      </div>
    </div>
  );
};
