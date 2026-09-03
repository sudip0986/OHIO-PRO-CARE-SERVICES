import React from 'react';

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
        <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-center text-neutral-800 tracking-tight mb-16">
          WHY BOOK WITH US?
        </h2>

        {/* 4 Value Proposition Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Pillar 1: No Hidden Fees */}
          <button
            onClick={onOpenPricing}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform p-4 rounded-xl hover:bg-neutral-50"
            id="pillar-no-hidden-fees"
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center text-neutral-900 group-hover:text-[#d95c2b] transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="11" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">No Hidden Fees</h3>
            <p className="text-neutral-600 text-sm">Just One $79.95 Diagnostic Fee!</p>
            <span className="text-[11px] font-semibold text-[#d95c2b] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              View Fee Details →
            </span>
          </button>

          {/* Pillar 2: Easy Booking */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform p-4 rounded-xl hover:bg-neutral-50"
            id="pillar-easy-booking"
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center text-neutral-900 group-hover:text-[#18ff35] transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                <circle cx="12" cy="18" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Easy Booking</h3>
            <p className="text-neutral-600 text-sm">Hassle-Free Online Booking</p>
            <span className="text-[11px] font-semibold text-neutral-800 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Book Appointment →
            </span>
          </button>

          {/* Pillar 3: Money-Back Guarantee */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 mb-4 flex items-center justify-center text-neutral-900">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Money-Back Guarantee</h3>
            <p className="text-neutral-600 text-sm">Worry-Free Claims</p>
          </div>

          {/* Pillar 4: Generous Discounts */}
          <div className="flex flex-col items-center p-4">
            <div className="w-14 h-14 mb-4 flex items-center justify-center text-neutral-900">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 8v13m0-13V4a2 2 0 114 0v4m-4 0V4a2 2 0 10-4 0v4m-5 4h18a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg mb-1">Generous Discounts</h3>
            <p className="text-neutral-600 text-sm">For Multiple Types Of Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};
