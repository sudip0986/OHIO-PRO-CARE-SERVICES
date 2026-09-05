import React from 'react';
import { Calendar, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-[660px] flex items-center justify-center overflow-hidden" id="hero-banner">
      {/* Background Image with warm subtle vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKOmWt_Jxw1y3lKMSS_K5-Sf5ForokpdHPrbJ7L9Nv-lTQ100u-GWe7gSzqRDTlf0ylegx5FTGyDM_sHwN_6K3FsD0ogtm2Z2Z2ZuP2G0kBKXy7TICy2Eypi0j7_gJSJdCAjX6vnKLR62Dp3pbblZPduk16rcD8NthKobkwR6esVlvHlLHsLxDU0SHjEP_RtpOAAmg0xAAWqQcFaGP9rWTJCceEnO14gy7_gFrRs91Ne0qTgEwX1kOjQc09TxX3oXBPw"
          alt="Modern luxury kitchen appliances"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
          loading="eager"
        />
        {/* Dark gradient for text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60 pointer-events-none" />
      </div>

      {/* Centered Callout Overlay Card */}
      <div className="relative z-10 max-w-2xl mx-4 my-12 px-8 sm:px-12 py-12 rounded-3xl bg-[#141414]/90 backdrop-blur-md border border-[#FFD000]/30 text-center shadow-[0_12px_45px_rgba(0,0,0,0.85)]">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD000]/15 border border-[#FFD000]/40 text-[#FFD000] text-xs font-extrabold uppercase tracking-widest mb-4">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Ohio's Premier Appliance Care</span>
        </div>

        <h1 className="text-white font-condensed text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase leading-tight drop-shadow-lg">
          NO MATTER THE APPLIANCE, <span className="text-[#FFD000]">WE'VE GOT YOU COVERED</span>
        </h1>

        <p className="text-neutral-200 font-serif-italic text-lg sm:text-xl md:text-2xl mt-4 mb-8 font-normal leading-relaxed">
          Invest in Ohio by trusting local certified technicians for expert appliance repair, installation &amp; care!
        </p>

        {/* Buttons & Hyperlink Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="btn-yellow px-9 py-3.5 rounded-full text-base sm:text-lg font-black tracking-wide cursor-pointer flex items-center gap-2 shadow-[0_4px_20px_rgba(255,208,0,0.4)] hover:scale-105 active:scale-95 transition-all"
            id="hero-book-online-btn"
          >
            <Calendar className="w-5 h-5 text-black" />
            BOOK ONLINE NOW
          </button>

          <button
            onClick={onOpenBooking}
            className="link-yellow inline-flex items-center gap-1.5 text-sm sm:text-base font-bold cursor-pointer hover:text-white"
            id="hero-view-pricing-link"
          >
            <span>View $79.95 Diagnostic Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fast Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 pt-8 mt-8 border-t border-neutral-800 text-center text-xs text-neutral-300">
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">$79.95</div>
            <div className="text-[11px] text-neutral-400">Flat Diagnostics</div>
          </div>
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">Same / Next Day</div>
            <div className="text-[11px] text-neutral-400">Rapid Ohio Dispatch</div>
          </div>
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">90-Day Guarantee</div>
            <div className="text-[11px] text-neutral-400">Parts &amp; Labor Warranty</div>
          </div>
        </div>

      </div>
    </section>
  );
};
