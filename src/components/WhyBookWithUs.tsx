import React from 'react';
import { Receipt, CalendarCheck, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface WhyBookWithUsProps {
  onOpenPricing: () => void;
  onOpenBooking: () => void;
}

export const WhyBookWithUs: React.FC<WhyBookWithUsProps> = ({
  onOpenPricing,
  onOpenBooking
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-200" id="why-book-with-us-section">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            THE OHIO PRO CARE DIFFERENCE
          </span>
          <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-neutral-900 tracking-tight mt-3">
            WHY BOOK <span className="text-amber-500">WITH US?</span>
          </h2>
        </div>

        {/* 4 Value Proposition Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Pillar 1: No Hidden Fees */}
          <button
            onClick={onOpenPricing}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-all p-6 rounded-2xl bg-neutral-50 hover:bg-amber-50/50 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-lg"
            id="pillar-no-hidden-fees"
          >
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] group-hover:scale-110 transition-transform shadow-md">
              <Receipt className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-xl mb-1">No Hidden Fees</h3>
            <p className="text-neutral-600 text-sm">Transparent $79.95 Diagnostic Fee</p>
            <span className="link-yellow text-xs font-bold mt-3 inline-flex items-center gap-1 text-amber-600">
              View Fee Details <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Pillar 2: Easy Booking */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-all p-6 rounded-2xl bg-neutral-50 hover:bg-amber-50/50 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-lg"
            id="pillar-easy-booking"
          >
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] group-hover:scale-110 transition-transform shadow-md">
              <CalendarCheck className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-xl mb-1">Instant Booking</h3>
            <p className="text-neutral-600 text-sm">Pick Your Date &amp; Window in 60s</p>
            <span className="link-yellow text-xs font-bold mt-3 inline-flex items-center gap-1 text-amber-600">
              Book Appointment <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Pillar 3: Money-Back Guarantee */}
          <div className="flex flex-col items-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] shadow-md">
              <ShieldAlert className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-xl mb-1">90-Day Warranty</h3>
            <p className="text-neutral-600 text-sm">Worry-Free Parts &amp; Labor Guarantee</p>
            <span className="text-xs text-neutral-500 mt-3 font-semibold">
              100% Guaranteed Workmanship
            </span>
          </div>

          {/* Pillar 4: Generous Discounts */}
          <div className="flex flex-col items-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] shadow-md">
              <Sparkles className="w-8 h-8 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-xl mb-1">Ohio Community First</h3>
            <p className="text-neutral-600 text-sm">Military, Senior &amp; Multi-Appliance</p>
            <span className="text-xs text-neutral-500 mt-3 font-semibold">
              Special Local Savings Available
            </span>
          </div>
        </div>

        {/* Bottom Booking Banner with Yellow Action Button */}
        <div className="mt-14 p-8 rounded-3xl bg-[#121212] border-2 border-[#FFD000]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-condensed text-3xl sm:text-4xl text-white tracking-wide">
              READY TO FIX YOUR APPLIANCE TODAY?
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base mt-1">
              Lock in your diagnostic slot across Central &amp; Greater Ohio in less than 2 minutes.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-yellow px-8 py-4 text-base font-black tracking-wider uppercase rounded-xl cursor-pointer whitespace-nowrap shadow-lg shadow-[#FFD000]/30 hover:scale-105 transition-all"
            id="why-book-cta-btn"
          >
            SCHEDULE NOW
          </button>
        </div>
      </div>
    </section>
  );
};
