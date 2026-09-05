import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, Flame, Droplets, Sparkles, Pipette } from 'lucide-react';
import { PLUMBING_SERVICES, PLUMBING_BRANDS } from '../data/plumbingData';

export const ServicesShowcase = ({
  onOpenDrainModal,
  onOpenBrands,
  onOpenDiyGuide,
  onOpenPricing,
  onSelectServiceForBooking
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-sky-100" id="services-showcase-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            DEDICATED OHIO CITY PLUMBING EXPERTISE
          </span>
          <h2 className="font-condensed text-5xl sm:text-6xl md:text-7xl text-[#0B1E36] tracking-tight mt-3">
            EXPLORE OUR <span className="text-sky-600">PLUMBING SERVICES &amp; FIXTURES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Column 1: Plumbing Services Card & Listing */}
          <div className="flex flex-col bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-sky-100 hover:border-sky-300 transition-all group" id="col-services">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC8qb6L76s0mh3FxwPhnUC1rtU_wlABtYO60EBNBRgUh_xNDtnXlD8TJ61-RJ2jQIi84yLFpTeZu7F4163Wo4-b8i_joJK-8mh57ek-iw7Ni0GursjRDpu2G8u8gsSJ-ZgJxlD9JIdQwtDv9UcjF6A2NUXSwZxh0lW8Qi0s0zh3K0NMnknpbpc_iq6DmCh-cbN4ANUjRMHKpsDsnQDiUkbvz88OCHdja8E3XhVmM4lRR0BJzMpuzW"
                alt="Plumbing pipes and brass valves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0B1E36]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-sky-400/40 text-[#FFD000] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Droplets className="w-3.5 h-3.5 text-[#FFD000]" />
                100% Plumbing Care
              </div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                Plumbing Services
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                Keep your home leak-free and drains flowing cleanly with expert diagnostics, repairs, and installations in Ohio City!
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Plumbing solutions include:
              </p>

              <ul className="text-sm font-semibold text-neutral-800 space-y-2">
                {PLUMBING_SERVICES.map((service) => (
                  <li key={service.id} className="flex items-center justify-between group/item">
                    <button
                      onClick={() => onSelectServiceForBooking?.(service.name)}
                      className="text-left text-neutral-700 hover:text-amber-600 font-medium transition-colors cursor-pointer flex items-center gap-2"
                      title={`Book ${service.name}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/item:scale-150 transition-transform"></span>
                      <span>{service.name}</span>
                    </button>
                    <button
                      onClick={() => onSelectServiceForBooking?.(service.name)}
                      className="link-yellow text-xs font-bold opacity-0 group-hover/item:opacity-100 transition-opacity"
                    >
                      Book →
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                ⚡ Our service vans carry extensive PEX, copper, and brass fittings for fast single-visit repairs across Ohio City.
              </div>

              {/* Yellow Button CTA */}
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenDrainModal}
                  className="btn-yellow w-full py-3 text-sm font-black uppercase tracking-wider shadow-md hover:shadow-yellow-400/30 cursor-pointer flex items-center justify-center gap-2 text-[#0B1E36]"
                  id="btn-hydro-jetting"
                >
                  <Droplets className="w-4 h-4 text-[#0B1E36]" />
                  EMERGENCY DRAIN &amp; SEWER JETTING
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Fixture Brands We Service */}
          <div className="flex flex-col bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-sky-100 hover:border-sky-300 transition-all group" id="col-brands">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-64">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB6e3VGq1T08opim3vce-Uos3h6Jq8kNrS9hYBgwFvemCPqoJrO3aCKOMhrhVefMbljvFgqx6Sfvx9jU8blz-DQ5sJ3zz2H6fw7AIr0kvaWlCuZjbdUwvAogZVkY7Q4gRwt6GBYDg8h3QsR7FX__0RaDPnkimXQ2Xs5huPBy-5c58hrD7cu5Al3cIuBlRLk5PzKaujKmpUuAL1R0-69nCPwS4qMbUmzdRc-aVNehJUGmRr9wUj21yB"
                alt="Quality Plumbing Fixtures and Hardware"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0B1E36]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-sky-400/40 text-[#FFD000] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Wrench className="w-3.5 h-3.5 text-[#FFD000]" />
                Top Fixture Brands
              </div>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                Preferred Fixtures &amp; Tanks
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                We service, rebuild, and install all major residential and commercial plumbing brands in Ohio City.
              </p>

              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Including top manufacturers:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {PLUMBING_BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={onOpenBrands}
                    className="p-2.5 rounded-xl bg-neutral-50 hover:bg-amber-50 border border-neutral-200 hover:border-amber-400 text-left text-xs font-bold text-neutral-800 hover:text-amber-700 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{brand.name}</span>
                    <span className="text-amber-500 text-[10px]">✓</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenBrands}
                  className="btn-yellow w-full py-3 text-sm font-black uppercase tracking-wider shadow-md hover:shadow-yellow-400/30 cursor-pointer flex items-center justify-center gap-2 text-[#0B1E36]"
                  id="btn-view-fixtures"
                >
                  <span>VIEW ALL FIXTURES &amp; BRANDS</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1E36]" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: DIY / Money Guide Stacked Cards */}
          <div className="flex flex-col gap-6" id="col-guides">

            {/* Card 3A: DIY Plumbing Or Call A Pro? */}
            <div
              onClick={onOpenDiyGuide}
              className="bg-white rounded-3xl p-6 shadow-lg border border-sky-100 hover:border-sky-300 transition-all cursor-pointer group flex flex-col"
              id="card-diy-guide"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN3hQWjS6i_SruqmeybmQ9HXBSLLvERbCpkNQeIz7qw2Hq40kptkQBTUYdUlhHyvmDqRo6y93vz5mtvP4uZVzgwr4CMEOO6juuO1f_ngAfRju6tCQSircB8K-Adviuywqltrng4Wbvs0L3Hkq8H_V4kyEecgCPvz9kYHm7j2Yf9dFzm8yWXFty0AvLfGtQ_opdNnrU501UI2D0L08YbCTdCYRYg4241WQ1Q0oFc6iW5WpLtiqixPB3"
                  alt="Plumbing Tools and Pipe Wrenches"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1E36]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-sky-400/40 text-[#FFD000] text-xs font-bold shadow-sm">
                  Plumbing Decision Guide
                </div>
              </div>

              <div className="mt-4 text-left">
                <h4 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  DIY It Or Call Ohio Pro Care?
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Calculate whether repairing or replacing your water heater, drain line, or fixtures makes the most sense.
                </p>
                <div className="mt-3 link-yellow text-xs font-extrabold flex items-center gap-1 text-amber-600">
                  <span>Launch Plumbing Decision Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 3B: Transparent $85.50 Diagnostic Fee Card */}
            <div
              onClick={onOpenPricing}
              className="bg-white rounded-3xl p-6 shadow-lg border border-sky-100 hover:border-sky-300 transition-all cursor-pointer group flex flex-col"
              id="card-no-hidden-fees"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnFs77elN0dZa4I4marSxroKKSJUTUayMsvC742piTDrbSwAqGhEjNsnCQQks32BeNZngL6kzHfJ6YVavYVeP-6bdzXAKGTs-3EotLTkX-9wVTKgWdjhJ5hwNyYCzRE4bwUozBwKv8lS1H_CRtrXC7yUyIzaOmfCmgUsRKkiak15E-fYU2K8Nhh7cpdOkGf0Q8JB8r4-yvSnMxPckFQCMTg2FTDOhjQmFia1_LZGIXaGBYO9v6Ga3"
                  alt="Transparent Pricing and Coin Savings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1E36]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-sky-400/40 text-[#FFD000] text-xs font-bold shadow-sm">
                  Upfront Plumbing Rates
                </div>
              </div>

              <div className="mt-4 text-left">
                <h4 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  No Hidden Fees Guarantee
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Flat $85.50 diagnostic visit includes complete multi-point plumbing inspection with zero surprise markups.
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

export default ServicesShowcase;
