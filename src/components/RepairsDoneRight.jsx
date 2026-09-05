import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const RepairsDoneRight = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-sky-100" id="repairs-done-right-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text & CTA Content */}
        <div className="w-full md:w-7/12 flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold tracking-wider uppercase">
            <span>OHIO CITY'S CERTIFIED PLUMBING PROFESSIONALS</span>
          </div>

          <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-[#0B1E36] leading-none tracking-tight">
            PLUMBING <span className="text-sky-600 underline decoration-[#FFD000] decoration-4 underline-offset-4">DONE RIGHT</span>
          </h2>

          <p className="font-serif-italic text-slate-600 text-lg md:text-xl font-normal leading-relaxed pt-2 max-w-xl">
            Servicing all places across full Ohio City—from the West 25th Market District and Franklin Blvd to Bridge Ave, SoLo, and every street in 44113. Our licensed plumbers arrive prepared with state-of-the-art tools and truck-stocked OEM fittings to solve your plumbing problems the first time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2 text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Transparent $85.50 diagnostic visit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>100% Coverage across all Ohio City places</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>90-Day parts &amp; labor guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Truck-stocked brass &amp; PEX fittings</span>
            </div>
          </div>

          {/* Yellow Action Button and Yellow Link */}
          <div className="pt-3 flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenBooking}
              className="btn-yellow px-8 py-3.5 rounded-xl text-base font-black tracking-wide cursor-pointer shadow-lg shadow-[#FFD000]/30 flex items-center gap-2 text-[#0B1E36]"
              id="repairs-book-now-btn"
            >
              <span>BOOK PLUMBING VISIT</span>
              <ArrowRight className="w-5 h-5 text-[#0B1E36]" />
            </button>

            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="link-yellow inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer text-amber-700 hover:text-amber-800"
              id="repairs-google-maps-link"
            >
              <span>View Ohio City on Google Maps</span>
              <span className="text-base font-bold">➔</span>
            </a>
          </div>
        </div>

        {/* Official Ohio Pro Care Services Logo Graphic */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end items-center">
          <OhioProLogo size="lg" />
        </div>
      </div>
    </section>
  );
};

export default RepairsDoneRight;
