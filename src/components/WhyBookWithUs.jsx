import React from 'react';
import { Receipt, CalendarCheck, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export const WhyBookWithUs = ({
  onOpenPricing,
  onOpenBooking
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F9FD] border-t border-sky-100" id="why-book-with-us-section">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            THE OHIO PRO CARE SERVICES DIFFERENCE
          </span>
          <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-[#0B1E36] tracking-tight mt-3">
            WHY TRUST US <span className="text-sky-600">FOR YOUR PLUMBING?</span>
          </h2>
        </div>

        {/* 4 Value Proposition Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Pillar 1: No Hidden Fees */}
          <button
            onClick={onOpenPricing}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-all p-6 rounded-2xl bg-white hover:bg-sky-50/60 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl"
            id="pillar-no-hidden-fees"
          >
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] group-hover:scale-110 transition-transform shadow-md">
              <Receipt className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-xl mb-1">No Hidden Fees</h3>
            <p className="text-slate-600 text-sm">Transparent $85.50 Diagnostic Visit</p>
            <span className="link-yellow text-xs font-bold mt-3 inline-flex items-center gap-1 text-amber-700">
              View Fee Details <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Pillar 2: Easy Booking */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-all p-6 rounded-2xl bg-white hover:bg-sky-50/60 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-xl"
            id="pillar-easy-booking"
          >
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] group-hover:scale-110 transition-transform shadow-md">
              <CalendarCheck className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-xl mb-1">Instant Scheduling</h3>
            <p className="text-slate-600 text-sm">Pick Your Date &amp; Window in 60s</p>
            <span className="link-yellow text-xs font-bold mt-3 inline-flex items-center gap-1 text-amber-700">
              Book Plumber <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Pillar 3: Money-Back Guarantee */}
          <div className="flex flex-col items-center p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] shadow-md">
              <ShieldAlert className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-xl mb-1">90-Day Warranty</h3>
            <p className="text-slate-600 text-sm">Worry-Free Plumbing Parts &amp; Labor</p>
            <span className="text-xs text-sky-800 mt-3 font-semibold">
              Licensed &amp; Insured Plumbers
            </span>
          </div>

          {/* Pillar 4: Generous Discounts */}
          <div className="flex flex-col items-center p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] shadow-md">
              <Sparkles className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-xl mb-1">Ohio City Community</h3>
            <p className="text-slate-600 text-sm">Multi-Fixture &amp; Senior Savings</p>
            <span className="text-xs text-sky-800 mt-3 font-semibold">
              Trusted Local Neighborhood Care
            </span>
          </div>
        </div>

        {/* Bottom Booking Banner with Yellow Action Button */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0B1E36] border-2 border-[#FFD000] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="font-condensed text-3xl sm:text-4xl text-white tracking-wide">
              HAVE A LEAK, CLOGGED DRAIN, OR WATER HEATER ISSUE TODAY?
            </h4>
            <p className="text-sky-100 text-sm sm:text-base mt-1">
              Lock in your $85.50 diagnostic visit across all places in full Ohio City &amp; Greater Cleveland in under 2 minutes.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-yellow px-8 py-4 text-base font-black tracking-wider uppercase rounded-xl cursor-pointer whitespace-nowrap shadow-lg shadow-[#FFD000]/30 hover:scale-105 transition-all text-[#0B1E36]"
            id="why-book-cta-btn"
          >
            SCHEDULE PLUMBER
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
