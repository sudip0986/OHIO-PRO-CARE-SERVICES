import React from 'react';

interface OhioProLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showPhone?: boolean;
}

export const OhioProLogo: React.FC<OhioProLogoProps> = ({
  size = 'md',
  className = '',
  showPhone = false
}) => {
  const sizeMap = {
    sm: 'h-14 w-auto max-w-[160px]',
    md: 'h-20 sm:h-24 w-auto max-w-[220px]',
    lg: 'h-32 sm:h-36 w-auto max-w-[320px]',
    xl: 'h-44 sm:h-52 w-auto max-w-[420px]'
  };

  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none group ${className}`} id={`ohio-pro-logo-${size}`}>
      <div className="relative">
        {/* Glow ambient background behind diamond */}
        <div className="absolute inset-0 bg-[#FFD000]/20 rounded-full blur-xl scale-90 group-hover:scale-105 transition-transform duration-300 opacity-75 pointer-events-none" />
        
        {/* Actual high-res Logo Image */}
        <img
          src="/images/logo.png"
          alt="OHIO Pro Care Services Logo"
          className={`relative z-10 object-contain drop-shadow-[0_4px_16px_rgba(255,208,0,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_6px_22px_rgba(255,208,0,0.6)] ${sizeMap[size]}`}
          loading="eager"
        />
      </div>

      {showPhone && (
        <span className="mt-1 text-xs sm:text-sm font-black tracking-wider text-[#FFD000] drop-shadow">
          (614) 888-CARE
        </span>
      )}
    </div>
  );
};

// Backwards compatibility for existing imports
export const KingsLogo = OhioProLogo;
export default OhioProLogo;
