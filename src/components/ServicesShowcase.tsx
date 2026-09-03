import React from 'react';

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
    <section className="py-12 md:py-16 bg-white" id="services-showcase-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Services Card & Listing */}
          <div className="flex flex-col" id="col-services">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-64 sm:h-72 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC8qb6L76s0mh3FxwPhnUC1rtU_wlABtYO60EBNBRgUh_xNDtnXlD8TJ61-RJ2jQIi84yLFpTeZu7F4163Wo4-b8i_joJK-8mh57ek-iw7Ni0GursjRDpu2G8u8gsSJ-ZgJxlD9JIdQwtDv9UcjF6A2NUXSwZxh0lW8Qi0s0zh3K0NMnknpbpc_iq6DmCh-cbN4ANUjRMHKpsDsnQDiUkbvz88OCHdja8E3XhVmM4lRR0BJzMpuzW"
                alt="Plumbing and Brass Faucets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlapping Floating Card */}
            <div className="-mt-20 mx-4 relative z-10 bg-white rounded-2xl shadow-lg p-6 sm:p-7 text-center border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Keep your home safe and operating efficiently with quality repairs and installation services!
              </p>
            </div>

            {/* Services Details List & CTA */}
            <div className="mt-6 px-2">
              <p className="text-sm font-semibold text-gray-800 mt-6 mb-3">
                Services include but are <span className="underline font-bold">NOT</span> limited to:
              </p>

              <ul className="text-xs sm:text-sm font-bold text-neutral-900 space-y-1.5 list-disc list-inside">
                {[
                  'Oven/Stove/Range Repairs',
                  'Cooktop Repairs',
                  'Dishwasher Repairs',
                  'Microwave Repairs',
                  'Refrigerator Repairs',
                  'Washer + Dryer Repairs',
                  'Appliance Installation'
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => onSelectServiceForBooking?.(service)}
                      className="text-left hover:text-[#d95c2b] transition-colors cursor-pointer"
                      title={`Book ${service}`}
                    >
                      {service}
                    </button>
                  </li>
                ))}
                <li className="text-[#d95c2b] font-bold">
                  <button
                    onClick={onOpenDryerVent}
                    className="hover:underline cursor-pointer text-left font-bold"
                  >
                    DRYER VENT CLEANING
                  </button>
                </li>
                <li>+ MORE</li>
              </ul>

              <p className="text-xs text-neutral-500 italic mt-5 leading-relaxed">
                *We stock our trucks with the most common appliance parts so we can be just as efficient as your home
              </p>

              <div className="mt-6">
                <button
                  onClick={onOpenDryerVent}
                  className="inline-block bg-[#d95c2b] hover:bg-[#c14d20] text-white font-bold px-7 py-3 rounded text-sm uppercase tracking-wider shadow transition-colors cursor-pointer active:scale-95"
                  id="btn-dryer-vent-cleaning"
                >
                  DRYER VENT CLEANING
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Brands We Service Card & Listing */}
          <div className="flex flex-col" id="col-brands">
            {/* Top image container */}
            <div className="rounded-2xl overflow-hidden shadow-sm relative h-64 sm:h-72 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB6e3VGq1T08opim3vce-Uos3h6Jq8kNrS9hYBgwFvemCPqoJrO3aCKOMhrhVefMbljvFgqx6Sfvx9jU8blz-DQ5sJ3zz2H6fw7AIr0kvaWlCuZjbdUwvAogZVkY7Q4gRwt6GBYDg8h3QsR7FX__0RaDPnkimXQ2Xs5huPBy-5c58hrD7cu5Al3cIuBlRLk5PzKaujKmpUuAL1R0-69nCPwS4qMbUmzdRc-aVNehJUGmRr9wUj21yB"
                alt="Deals Deals Deals Letterboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlapping Floating Card */}
            <div className="-mt-20 mx-4 relative z-10 bg-white rounded-2xl shadow-lg p-6 sm:p-7 text-center border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                We Service Your Favorite Brands
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                We repair and maintain a variety of brands for both residential and commercial applications.
              </p>
            </div>

            {/* Brands Details List & CTA */}
            <div className="mt-6 px-2">
              <p className="text-sm font-semibold text-gray-800 mt-6 mb-3">
                Including these top brands:
              </p>

              <ul className="text-xs sm:text-sm font-bold text-neutral-900 space-y-1.5 list-disc list-inside">
                {['Whirlpool', 'Maytag', 'GE', 'Hotpoint', 'Amana', 'JennAir', 'LG'].map((brand) => (
                  <li key={brand}>
                    <button
                      onClick={onOpenBrands}
                      className="text-left hover:text-[#d95c2b] transition-colors cursor-pointer"
                    >
                      {brand}
                    </button>
                  </li>
                ))}
                <li>+MORE</li>
              </ul>

              <div className="mt-8">
                <button
                  onClick={onOpenBrands}
                  className="inline-block bg-[#d95c2b] hover:bg-[#c14d20] text-white font-bold px-7 py-3 rounded text-sm uppercase tracking-wider shadow transition-colors cursor-pointer active:scale-95"
                  id="btn-view-brands"
                >
                  VIEW BRANDS HERE
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: DIY / Money Guide Stacked Cards */}
          <div className="flex flex-col" id="col-guides">
            {/* Card 3A: DIY Or Say Goodbye To It? */}
            <div
              onClick={onOpenDiyGuide}
              className="flex flex-col cursor-pointer group"
              id="card-diy-guide"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-60">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN3hQWjS6i_SruqmeybmQ9HXBSLLvERbCpkNQeIz7qw2Hq40kptkQBTUYdUlhHyvmDqRo6y93vz5mtvP4uZVzgwr4CMEOO6juuO1f_ngAfRju6tCQSircB8K-Adviuywqltrng4Wbvs0L3Hkq8H_V4kyEecgCPvz9kYHm7j2Yf9dFzm8yWXFty0AvLfGtQ_opdNnrU501UI2D0L08YbCTdCYRYg4241WQ1Q0oFc6iW5WpLtiqixPB3"
                  alt="Tools flatlay on workbench"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="-mt-16 mx-4 relative z-10 bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 group-hover:border-neutral-300 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#d95c2b] transition-colors">
                  DIY It Or Say Goodbye To It?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Not sure if you should DIY, say goodbye, or buy? Become an expert in no time.
                </p>
                <div className="mt-3 text-xs font-bold text-[#d95c2b] flex items-center justify-center gap-1">
                  Launch Decision Calculator →
                </div>
              </div>
            </div>

            {/* Card 3B: No Hidden Fees Coin Jar */}
            <div
              onClick={onOpenPricing}
              className="flex flex-col mt-8 cursor-pointer group"
              id="card-no-hidden-fees"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm relative h-56 sm:h-60">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnFs77elN0dZa4I4marSxroKKSJUTUayMsvC742piTDrbSwAqGhEjNsnCQQks32BeNZngL6kzHfJ6YVavYVeP-6bdzXAKGTs-3EotLTkX-9wVTKgWdjhJ5hwNyYCzRE4bwUozBwKv8lS1H_CRtrXC7yUyIzaOmfCmgUsRKkiak15E-fYU2K8Nhh7cpdOkGf0Q8JB8r4-yvSnMxPckFQCMTg2FTDOhjQmFia1_LZGIXaGBYO9v6Ga3"
                  alt="Plant growing in glass jar of coins"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="-mt-16 mx-4 relative z-10 bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 group-hover:border-neutral-300 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#18ff35] transition-colors">
                  No Hidden Fees
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We charge a $79.95 diagnostic fee, which includes an estimate if your appliance needs to be repaired—parts and labor not included.
                </p>
                <div className="mt-3 text-xs font-bold text-neutral-800 flex items-center justify-center gap-1">
                  See Transparent Pricing Breakdown →
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
