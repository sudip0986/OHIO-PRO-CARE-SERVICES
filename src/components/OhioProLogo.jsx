import React from 'react';

export const OhioProLogo = ({
  size = 'md',
  className = '',
  showPhone = false
}) => {
  const sizeMap = {
    sm: 'h-14 w-auto max-w-[160px]',
    md: 'h-28 sm:h-36 md:h-44 w-auto max-w-[360px] sm:max-w-[420px]',
    header: 'h-28 sm:h-36 md:h-44 w-auto max-w-[360px] sm:max-w-[420px]',
    footer: 'h-24 sm:h-32 md:h-40 w-auto max-w-[320px] sm:max-w-[400px]',
    lg: 'h-52 sm:h-64 md:h-80 w-auto max-w-[550px]',
    xl: 'h-64 sm:h-80 md:h-96 w-auto max-w-[650px]'
  };

  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none group ${className}`} id={`ohio-pro-logo-${size}`}>
      <div className="relative">
        {/* Glow ambient background behind diamond */}
        <div className="absolute inset-0 bg-[#FFD000]/20 rounded-full blur-xl scale-90 group-hover:scale-105 transition-transform duration-300 opacity-75 pointer-events-none" />
        
        {/* Actual high-res Logo Image */}
        <img
          src="/images/logo.png?v=20260905-2"
          alt="OHIO Pro Care Services Logo - Professional Plumbing & Home Care"
          className={`relative z-10 object-contain drop-shadow-[0_4px_16px_rgba(255,208,0,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_6px_22px_rgba(255,208,0,0.6)] ${sizeMap[size]}`}
          loading="eager"
        />
      </div>

      {showPhone && (
        <span className="mt-1 text-xs sm:text-sm font-black tracking-wider text-[#FFD000] drop-shadow">
          (216) 888-CARE
        </span>
      )}
    </div>
  );
};

export const KingsLogo = OhioProLogo;
export default OhioProLogo;
