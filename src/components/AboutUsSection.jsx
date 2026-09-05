import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Droplets } from 'lucide-react';

export const AboutUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-sky-100" id="about-us-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold tracking-widest uppercase mb-3 border border-sky-200">
          <Droplets className="w-3.5 h-3.5 text-sky-600" />
          <span>THE OHIO PRO CARE SERVICES PROMISE</span>
        </div>

        {/* Big Bold Section Title */}
        <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-[#0B1E36] tracking-tight mb-14">
          ABOUT <span className="text-sky-600">OHIO PRO CARE SERVICES</span>
        </h2>

        {/* 3 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#F4F9FD] border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <Award className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-lg md:text-xl mb-3">
              Precision Plumbing Solutions
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm">
              Your comprehensive destination for leak detection, drain clearing, water heaters, toilet rebuilds, garbage disposals, and pipe repairs across Ohio City.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#F4F9FD] border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <HeartHandshake className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-lg md:text-xl mb-3">
              All Places Across Ohio City
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm">
              We work across all places and streets throughout full Ohio City—specialized expertise in historic plumbing and modern residences across Market District, Franklin Blvd, Bridge Ave, SoLo, and every 44113 address.
            </p>
            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-xs font-bold text-sky-700 hover:text-amber-600 underline flex items-center gap-1"
            >
              <span>View Location on Google Maps</span>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#F4F9FD] border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <ShieldCheck className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-[#0B1E36] text-lg md:text-xl mb-3">
              100% Guaranteed Workmanship
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm">
              Every job is performed by certified plumbers and protected by our upfront $85.50 diagnostic rate and a 90-day warranty on all parts and labor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
