import React from 'react';
import { Calendar, ShieldCheck, Zap, ArrowRight, Droplets, MapPin } from 'lucide-react';

export const HeroSection = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-[660px] flex items-center justify-center overflow-hidden" id="hero-banner">
      {/* Background Image with warm subtle vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC8qb6L76s0mh3FxwPhnUC1rtU_wlABtYO60EBNBRgUh_xNDtnXlD8TJ61-RJ2jQIi84yLFpTeZu7F4163Wo4-b8i_joJK-8mh57ek-iw7Ni0GursjRDpu2G8u8gsSJ-ZgJxlD9JIdQwtDv9UcjF6A2NUXSwZxh0lW8Qi0s0zh3K0NMnknpbpc_iq6DmCh-cbN4ANUjRMHKpsDsnQDiUkbvz88OCHdja8E3XhVmM4lRR0BJzMpuzW"
          alt="Professional plumbing fixtures and brass craftsmanship"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
          loading="eager"
        />
        {/* Dark water gradient for text contrast and premium plumbing atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/95 via-[#0B1E36]/70 to-[#071526]/80 pointer-events-none" />
      </div>

      {/* Centered Callout Overlay Card */}
      <div className="relative z-10 max-w-2xl mx-4 my-12 px-8 sm:px-12 py-12 rounded-3xl bg-[#0B1E36]/90 backdrop-blur-md border-2 border-[#FFD000] text-center shadow-[0_20px_50px_rgba(7,21,38,0.7)]">

        {/* Top Badge with Map Link */}
        <a
          href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-200 hover:text-[#FFD000] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm transition-all"
          title="Open Location on Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-[#FFD000]" />
          <span>Servicing All Places Across Full Ohio City • View Map</span>
        </a>

        <h1 className="text-white font-condensed text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase leading-tight drop-shadow-lg">
          NO MATTER THE PLUMBING ISSUE, <span className="text-[#FFD000]">WE'VE GOT YOU COVERED</span>
        </h1>

        <p className="text-sky-100 font-serif-italic text-lg sm:text-xl md:text-2xl mt-4 mb-8 font-normal leading-relaxed">
          Complete plumbing coverage across all places in Ohio City — trusting local certified plumbers for leaks, drains, water heaters &amp; emergency pipe care!
        </p>

        {/* Buttons & Hyperlink Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="btn-yellow px-9 py-3.5 rounded-full text-base sm:text-lg font-black tracking-wide cursor-pointer flex items-center gap-2 shadow-[0_4px_20px_rgba(255,208,0,0.45)] hover:scale-105 active:scale-95 transition-all text-[#0B1E36]"
            id="hero-book-online-btn"
          >
            <Calendar className="w-5 h-5 text-[#0B1E36]" />
            BOOK PLUMBER NOW
          </button>

          <button
            onClick={onOpenBooking}
            className="link-yellow inline-flex items-center gap-1.5 text-sm sm:text-base font-bold cursor-pointer text-[#FFD000] hover:text-white"
            id="hero-view-pricing-link"
          >
            <span>View $85.50 Diagnostic Details</span>
            <ArrowRight className="w-4 h-4 text-[#FFD000]" />
          </button>
        </div>

        {/* Fast Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 pt-8 mt-8 border-t border-sky-800/60 text-center text-xs text-sky-100">
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">$85.50</div>
            <div className="text-[11px] text-sky-200 font-medium">Flat Diagnostic Fee</div>
          </div>
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">Same-Day Dispatch</div>
            <div className="text-[11px] text-sky-200 font-medium">Ohio City &amp; Greater Area</div>
          </div>
          <div>
            <div className="text-[#FFD000] font-black text-sm sm:text-base">Licensed &amp; Insured</div>
            <div className="text-[11px] text-sky-200 font-medium">90-Day Parts &amp; Labor</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
