import React, { useState } from 'react';
import { X, MapPin, Search, CheckCircle, Navigation, ArrowRight } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
import { SERVICE_AREAS } from '../data/applianceData';

interface ServiceAreasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAreaForBooking: (areaName: string) => void;
}

export const ServiceAreasModal: React.FC<ServiceAreasModalProps> = ({
  isOpen,
  onClose,
  onSelectAreaForBooking
}) => {
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    const found = SERVICE_AREAS.find((a) => a.zipCode === cleanZip || a.name.toLowerCase().includes(cleanZip.toLowerCase()));
    if (found) {
      setSearchResult(`Great news! ${found.name} (ZIP ${found.zipCode}) is in our daily core service route with ${found.turnaroundDays}.`);
    } else if (cleanZip.startsWith('43') || cleanZip.startsWith('44') || cleanZip.startsWith('45')) {
      setSearchResult(`Yes! Zip code ${cleanZip} is in Ohio. We service your neighborhood! Book online or call (614) 888-CARE.`);
    } else {
      setSearchResult(`We primarily service Ohio (ZIP codes starting with 43xxx, 44xxx, 45xxx). Please call us at (614) 888-CARE to confirm prompt dispatch.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#121212] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                OHIO SERVICE AREAS
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-areas-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Quick ZIP Check Tool */}
          <form onSubmit={handleZipCheck} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
              Check Your Ohio ZIP Code Or City:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter Ohio ZIP code (e.g. 43215) or city..."
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                className="flex-1 border border-neutral-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#FFD000]"
              />
              <button
                type="submit"
                className="btn-yellow px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer shadow-md"
              >
                Check Coverage
              </button>
            </div>
            {searchResult && (
              <p className="mt-3 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-300 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                {searchResult}
              </p>
            )}
          </form>

          {/* Service Areas Directory */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              Key Ohio Regions &amp; Municipalities We Regularly Dispatch To:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="p-3.5 rounded-xl border border-neutral-200 hover:border-amber-400 bg-white transition-all flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-neutral-900">{area.name}</span>
                      <span className="text-[10px] font-mono text-neutral-500">{area.zipCode}</span>
                    </div>
                    <span className="text-[11px] text-neutral-500 block mt-1">{area.county}</span>
                    <span className="text-[10px] font-semibold text-amber-700 block mt-0.5">
                      {area.turnaroundDays}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectAreaForBooking(area.name);
                    }}
                    className="link-yellow mt-3 text-left text-[11px] font-bold text-amber-600 hover:text-amber-700 cursor-pointer flex items-center gap-1"
                  >
                    <span>Schedule in {area.name}</span>
                    <ArrowRight className="w-3 h-3 text-amber-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters Info */}
          <div className="bg-[#121212] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#FFD000]/30 shadow-lg">
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold block">
                Central Operations &amp; Dispatch
              </span>
              <h5 className="font-bold text-base text-white mt-0.5">
                OHIO PRO CARE SERVICES HQ
              </h5>
              <p className="text-xs text-neutral-300">
                Columbus, OH • Dispatch Hotlines: (614) 888-CARE • Mon-Fri 8:00 AM - 6:00 PM
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectAreaForBooking('Columbus');
              }}
              className="btn-yellow px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap cursor-pointer"
            >
              Book in Ohio
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
