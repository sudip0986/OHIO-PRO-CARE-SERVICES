import React from 'react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-[640px] flex items-center justify-center overflow-hidden" id="hero-banner">
      {/* Kitchen Background Image from provided snapshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKOmWt_Jxw1y3lKMSS_K5-Sf5ForokpdHPrbJ7L9Nv-lTQ100u-GWe7gSzqRDTlf0ylegx5FTGyDM_sHwN_6K3FsD0ogtm2Z2Z2ZuP2G0kBKXy7TICy2Eypi0j7_gJSJdCAjX6vnKLR62Dp3pbblZPduk16rcD8NthKobkwR6esVlvHlLHsLxDU0SHjEP_RtpOAAmg0xAAWqQcFaGP9rWTJCceEnO14gy7_gFrRs91Ne0qTgEwX1kOjQc09TxX3oXBPw"
          alt="Modern luxury kitchen appliances"
          className="w-full h-full object-cover object-center brightness-95"
          loading="eager"
        />
        {/* Subtle vignette gradient for depth */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Centered Callout Overlay Card */}
      <div className="relative z-10 max-w-xl mx-4 my-12 px-8 py-12 rounded-3xl bg-[#404040]/90 backdrop-blur-sm border border-neutral-500/30 text-center shadow-2xl">
        <h1 className="text-white font-condensed text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase leading-tight drop-shadow-md">
          NO MATTER THE APPLIANCE, WE'VE GOT YOU COVERED
        </h1>
        <p className="text-neutral-100 font-serif-italic text-lg sm:text-xl md:text-2xl mt-5 mb-8 font-normal leading-relaxed">
          Invest in our community by repairing your appliances locally!
        </p>
        <div>
          <button
            onClick={onOpenBooking}
            className="inline-block bg-white text-neutral-800 font-extrabold px-9 py-3 rounded-full text-base tracking-wide hover:bg-neutral-200 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
            id="hero-book-online-btn"
          >
            BOOK ONLINE
          </button>
        </div>
      </div>
    </section>
  );
};
