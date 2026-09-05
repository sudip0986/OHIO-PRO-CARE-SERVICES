import React from 'react';
import { Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-200" id="about-us-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-widest uppercase mb-3">
          <span>THE OHIO PRO CARE PROMISE</span>
        </div>

        {/* Big Bold Section Title */}
        <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-neutral-900 tracking-tight mb-14">
          ABOUT <span className="text-amber-500">OHIO PRO CARE</span>
        </h2>

        {/* 3 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <Award className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg md:text-xl mb-3">
              Reliable, Quality Service
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Your one-stop destination for Ohio home appliance repairs &amp; installations! No matter the make, model, or age, our certified team repairs and installs them all.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <HeartHandshake className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg md:text-xl mb-3">
              Ohio Local Experts
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Over a decade of hands-on appliance repair and home care experience, proudly serving Columbus, Cleveland, Cincinnati, Dayton, Akron, and surrounding Ohio communities.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-amber-400 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#121212] flex items-center justify-center text-[#FFD000] mb-5 group-hover:scale-110 transition-transform shadow-md">
              <ShieldCheck className="w-7 h-7 text-[#FFD000]" />
            </div>
            <h3 className="font-extrabold text-neutral-900 text-lg md:text-xl mb-3">
              Satisfaction Guaranteed
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Whether it's a minor tune-up or a complex sealed-system overhaul, every job is backed by our clear $79.95 diagnostic policy and comprehensive 90-day parts &amp; labor warranty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
