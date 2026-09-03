import React from 'react';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-neutral-200" id="about-us-section">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
        {/* Big Bold Section Title */}
        <h2 className="font-condensed text-6xl sm:text-7xl md:text-8xl text-neutral-800 tracking-tight mb-14">
          ABOUT US
        </h2>

        {/* 3 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <h3 className="font-extrabold text-neutral-800 text-lg md:text-xl mb-3">
              Reliable, Quality Service
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Your one-stop shop for home appliance repairs + installations! No matter the make or model of the appliance, we'll repair + install them all
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <h3 className="font-extrabold text-neutral-800 text-lg md:text-xl mb-3">
              Family-Owned Experts
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Over 10+ years of appliance repair and installation industry experience, + now primarily catering to the Door County Area
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <h3 className="font-extrabold text-neutral-800 text-lg md:text-xl mb-3">
              Satisfaction Guaranteed
            </h3>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-sm">
              Whether it's a simple repair or a complex installation, our team of experts can handle any appliance make or model with expertise and care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
