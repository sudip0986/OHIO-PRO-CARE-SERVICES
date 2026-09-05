import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface RepairsDoneRightProps {
  onOpenBooking: () => void;
}

export const RepairsDoneRight: React.FC<RepairsDoneRightProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-200" id="repairs-done-right-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text & CTA Content */}
        <div className="w-full md:w-7/12 flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase">
            <span>OHIO'S APPLIANCE REPAIR &amp; HOME CARE EXPERTS</span>
          </div>

          <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-neutral-900 leading-none tracking-tight">
            REPAIRS <span className="text-amber-500 underline decoration-amber-400 decoration-4 underline-offset-4">DONE RIGHT</span>
          </h2>

          <p className="font-serif-italic text-neutral-600 text-lg md:text-xl font-normal leading-relaxed pt-2 max-w-xl">
            With a comprehensive range of appliance repair, installation, and home care services across Central &amp; Greater Ohio, we'll get your appliances running smoothly and restore your peace of mind!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2 text-sm text-neutral-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Flat $79.95 diagnostic across Ohio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Certified &amp; insured technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>90-Day parts &amp; labor warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Truck-stocked OEM factory parts</span>
            </div>
          </div>

          {/* Yellow Action Button and Yellow Link */}
          <div className="pt-3 flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenBooking}
              className="btn-yellow px-8 py-3.5 rounded-xl text-base font-black tracking-wide cursor-pointer shadow-lg shadow-amber-400/30 flex items-center gap-2"
              id="repairs-book-now-btn"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={onOpenBooking}
              className="link-yellow inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer text-amber-600 hover:text-amber-700"
              id="repairs-quick-diagnostic-link"
            >
              <span>Schedule Diagnostic Visit</span>
              <span className="text-base font-bold">➔</span>
            </button>
          </div>
        </div>

        {/* Official Ohio Pro Care Services Logo Graphic */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative transform hover:scale-105 transition-transform duration-300 p-4 rounded-3xl bg-[#121212] shadow-2xl border-2 border-[#FFD000]/40">
            <OhioProLogo size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
