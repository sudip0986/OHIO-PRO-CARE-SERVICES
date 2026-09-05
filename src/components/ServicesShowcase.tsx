import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, Flame, Cpu } from 'lucide-react';

interface ServicesShowcaseProps {
  onOpenDryerVent: () => void;
  onOpenBrands: () => void;
  onOpenDiyGuide: () => void;
  onOpenPricing: () => void;
  onSelectServiceForBooking?: (serviceName: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onOpenDryerVent,
  onOpenBrands,
  onOpenDiyGuide,
  onOpenPricing,
  onSelectServiceForBooking
}) => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 border-t border-neutral-200" id="services-showcase-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            COMPREHENSIVE OHIO HOME &amp; APPLIANCE SOLUTIONS
          </span>
          <h2 className="font-condensed text-5xl sm:text-6xl md:text-7xl text-neutral-900 tracking-tight mt-3">
            EXPLORE OUR <span className="text-amber-500">SERVICES &amp; BRANDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Services Card & Listing */}
          <div className="flex flex-col bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-neutral-200 hover:border-amber-400 transition-all group" id="col-services">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC8qb6L76s0mh3FxwPhnUC1rtU_wlABtYO60EBNBRgUh_xNDtnXlD8TJ61-RJ2jQIi84yLFpTeZu7F4163Wo4-b8i_joJK-8mh57ek-iw7Ni0GursjRDpu2G8u8gsSJ-ZgJxlD9JIdQwtDv9UcjF6A2NUXSwZxh0lW8Qi0s0zh3K0NMnknpbpc_iq6DmCh-cbN4ANUjRMHKpsDsnQDiUkbvz88OCHdja8E3XhVmM4lRR0BJzMpuzW"
                alt="Plumbing fixtures and appliances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD000]/40 text-[#FFD000] text-xs font-bold flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#FFD000]" />
                Appliance &amp; Home Care
              </div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                Appliance Services
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                Keep your home running smoothly with certified repairs, safety inspections, and installation services across Ohio!
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Services include but are <span className="text-neutral-900 underline font-extrabold">NOT</span> limited to:
              </p>

              <ul className="text-sm font-semibold text-neutral-800 space-y-2">
                {[
                  'Refrigerator & Freezer Repairs',
                  'Washer + Dryer Repairs',
                  'Dishwasher Repairs',
                  'Oven/Stove/Range Repairs',
                  'Cooktop Repairs',
                  'Microwave Repairs',
                  'Garbage Disposal & Water Lines',
                  'Appliance Installation'
                ].map((service) => (
                  <li key={service} className="flex items-center justify-between group/item">
                    <button
                      onClick={() => onSelectServiceForBooking?.(service)}
                      className="text-left text-neutral-700 hover:text-amber-600 font-medium transition-colors cursor-pointer flex items-center gap-2"
                      title={`Book ${service}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/item:scale-150 transition-transform"></span>
                      <span>{service}</span>
                    </button>
                    <button
                      onClick={() => onSelectServiceForBooking?.(service)}
                      className="link-yellow text-xs font-bold opacity-0 group-hover/item:opacity-100 transition-opacity"
                    >
                      Book →
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                ⚡ We stock our service vans with genuine OEM parts for same-day repair in Columbus, Cleveland, Cincinnati &amp; across Ohio.
              </div>

              {/* Yellow Button CTA */}
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenDryerVent}
                  className="btn-yellow w-full py-3 text-sm font-black uppercase tracking-wider shadow-md hover:shadow-yellow-400/30 cursor-pointer flex items-center justify-center gap-2"
                  id="btn-dryer-vent-cleaning"
                >
                  <Flame className="w-4 h-4 text-black" />
                  DRYER VENT CLEANING
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Brands We Service Card & Listing */}
          <div className="flex flex-col bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-neutral-200 hover:border-amber-400 transition-all group" id="col-brands">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB6e3VGq1T08opim3vce-Uos3h6Jq8kNrS9hYBgwFvemCPqoJrO3aCKOMhrhVefMbljvFgqx6Sfvx9jU8blz-DQ5sJ3zz2H6fw7AIr0kvaWlCuZjbdUwvAogZVkY7Q4gRwt6GBYDg8h3QsR7FX__0RaDPnkimXQ2Xs5huPBy-5c58hrD7cu5Al3cIuBlRLk5PzKaujKmpUuAL1R0-69nCPwS4qMbUmzdRc-aVNehJUGmRr9wUj21yB"
                alt="Quality Appliance Brands Serviced"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD000]/40 text-[#FFD000] text-xs font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#FFD000]" />
                All Major Brands
              </div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                All Major Brands
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                We repair and maintain all major residential and commercial appliance brands throughout Ohio.
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Including top rated brands:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {['Whirlpool', 'Maytag', 'GE / Cafe', 'Samsung', 'LG', 'Bosch', 'KitchenAid', 'Sub-Zero'].map((brand) => (
                  <button
                    key={brand}
                    onClick={onOpenBrands}
                    className="p-2.5 rounded-xl bg-neutral-50 hover:bg-amber-50 border border-neutral-200 hover:border-amber-400 text-left text-xs font-bold text-neutral-800 hover:text-amber-700 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{brand}</span>
                    <span className="text-amber-500 text-[10px]">✓</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenBrands}
                  className="btn-yellow w-full py-3 text-sm font-black uppercase tracking-wider shadow-md hover:shadow-yellow-400/30 cursor-pointer flex items-center justify-center gap-2"
                  id="btn-view-brands"
                >
                  <span>VIEW ALL BRANDS</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: DIY / Money Guide Stacked Cards */}
          <div className="flex flex-col gap-6" id="col-guides">
            
            {/* Card 3A: DIY Or Say Goodbye To It? */}
            <div
              onClick={onOpenDiyGuide}
              className="bg-white rounded-3xl p-6 shadow-lg border border-neutral-200 hover:border-amber-400 transition-all cursor-pointer group flex flex-col"
              id="card-diy-guide"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN3hQWjS6i_SruqmeybmQ9HXBSLLvERbCpkNQeIz7qw2Hq40kptkQBTUYdUlhHyvmDqRo6y93vz5mtvP4uZVzgwr4CMEOO6juuO1f_ngAfRju6tCQSircB8K-Adviuywqltrng4Wbvs0L3Hkq8H_V4kyEecgCPvz9kYHm7j2Yf9dFzm8yWXFty0AvLfGtQ_opdNnrU501UI2D0L08YbCTdCYRYg4241WQ1Q0oFc6iW5WpLtiqixPB3"
                  alt="Repair Tools and Guides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD000]/40 text-[#FFD000] text-xs font-bold">
                  50% Appliance Rule
                </div>
              </div>

              <div className="mt-4 text-left">
                <h4 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  DIY It Or Say Goodbye To It?
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Calculate whether repairing or replacing your appliance makes financial sense.
                </p>
                <div className="mt-3 link-yellow text-xs font-extrabold flex items-center gap-1 text-amber-600">
                  <span>Launch Decision Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 3B: No Hidden Fees Card */}
            <div
              onClick={onOpenPricing}
              className="bg-white rounded-3xl p-6 shadow-lg border border-neutral-200 hover:border-amber-400 transition-all cursor-pointer group flex flex-col"
              id="card-no-hidden-fees"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnFs77elN0dZa4I4marSxroKKSJUTUayMsvC742piTDrbSwAqGhEjNsnCQQks32BeNZngL6kzHfJ6YVavYVeP-6bdzXAKGTs-3EotLTkX-9wVTKgWdjhJ5hwNyYCzRE4bwUozBwKv8lS1H_CRtrXC7yUyIzaOmfCmgUsRKkiak15E-fYU2K8Nhh7cpdOkGf0Q8JB8r4-yvSnMxPckFQCMTg2FTDOhjQmFia1_LZGIXaGBYO9v6Ga3"
                  alt="Transparent Pricing and Savings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD000]/40 text-[#FFD000] text-xs font-bold">
                  Upfront Pricing
                </div>
              </div>

              <div className="mt-4 text-left">
                <h4 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  No Hidden Fees Guarantee
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Flat $79.95 diagnostic visit includes complete multi-point inspection with zero surprise markups.
                </p>
                <div className="mt-3 link-yellow text-xs font-extrabold flex items-center gap-1 text-amber-600">
                  <span>See Transparent Pricing Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
