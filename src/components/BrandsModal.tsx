import React, { useState } from 'react';
import { X, Search, CheckCircle2, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { BRANDS_LIST } from '../data/applianceData';
import { KingsLogo } from './KingsLogo';

interface BrandsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBrandForBooking: (brandName: string) => void;
}

export const BrandsModal: React.FC<BrandsModalProps> = ({
  isOpen,
  onClose,
  onSelectBrandForBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('All');

  if (!isOpen) return null;

  const filteredBrands = BRANDS_LIST.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.popularAppliances.some((app) => app.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTier = selectedTier === 'All' || brand.tier === selectedTier;

    return matchesSearch && matchesTier;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#262626] text-white p-6 flex items-center justify-between border-b-2 border-[#18ff35]">
          <div className="flex items-center gap-3">
            <KingsLogo size="sm" showPhone={false} className="w-20 h-14 scale-75" />
            <div>
              <span className="text-[10px] tracking-widest text-[#18ff35] uppercase font-bold">
                Door County Coverage
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                WE SERVICE YOUR FAVORITE BRANDS
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-brands-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-neutral-50 p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brand, model, appliance..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {['All', 'Top Residential', 'Premium / Luxury'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedTier === tier
                    ? 'bg-black text-[#18ff35]'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="border border-neutral-200 hover:border-neutral-400 rounded-2xl p-5 bg-white transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-extrabold text-lg text-neutral-900">
                      {brand.name}
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                      {brand.tier}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    {brand.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {brand.popularAppliances.map((app) => (
                      <span
                        key={app}
                        className="text-[10px] bg-neutral-50 border border-neutral-200 text-neutral-700 px-2 py-0.5 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-medium mb-4">
                    {brand.truckStockedParts && (
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Truck className="w-3.5 h-3.5 text-emerald-600" />
                        Common parts stocked on trucks
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-neutral-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                      OEM Specs
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectBrandForBooking(brand.name);
                    onClose();
                  }}
                  className="w-full bg-[#d95c2b] hover:bg-[#c14d20] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <span>Book {brand.name} Repair</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12 text-neutral-500 text-sm">
              No brands matching "{searchTerm}". We repair virtually all makes and models! Call us at{' '}
              <a href="tel:9208395515" className="font-bold underline text-black">
                920-839-5515
              </a>{' '}
              to check your model.
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="bg-neutral-100 p-4 px-6 border-t border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>*We stock our trucks with the most common OEM appliance parts for rapid turnarounds.</span>
          <a href="tel:9208395515" className="font-bold text-neutral-900 underline">
            Direct Tech Line: 920-839-5515
          </a>
        </div>

      </div>
    </div>
  );
};
