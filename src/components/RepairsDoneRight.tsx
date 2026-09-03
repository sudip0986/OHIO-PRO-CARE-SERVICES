import React from 'react';
import { KingsLogo } from './KingsLogo';

interface RepairsDoneRightProps {
  onOpenBooking: () => void;
}

export const RepairsDoneRight: React.FC<RepairsDoneRightProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-300" id="repairs-done-right-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text & CTA Content */}
        <div className="w-full md:w-7/12 flex flex-col items-start space-y-4">
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-neutral-600">
            APPLIANCE REPAIR + INSTALLATION SERVICES IN THE DOOR COUNTY AREA
          </span>
          <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-neutral-800 leading-none tracking-tight">
            REPAIRS DONE RIGHT
          </h2>
          <p className="font-serif-italic text-neutral-600 text-lg md:text-xl font-normal leading-relaxed pt-2 max-w-xl">
            With a wide range of appliance repair and install services, we'll get your appliances up and running smoothly, or we'll simply bring them back to working order again!
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#2d2d2d] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl hover:bg-black transition-colors duration-150 cursor-pointer active:scale-95 shadow-md"
              id="repairs-book-now-btn"
            >
              <span>BOOK NOW</span>
              <span className="text-lg">➔</span>
            </button>
          </div>
        </div>

        {/* Neon Green Kings Emblem Graphic */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <KingsLogo size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
