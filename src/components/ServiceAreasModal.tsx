import React, { useState } from 'react';
import { X, MapPin, Search, CheckCircle, Navigation } from 'lucide-react';
import { KingsLogo } from './KingsLogo';
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
    const found = SERVICE_AREAS.find((a) => a.zipCode === cleanZip || a.name.toLowerCase() === cleanZip.toLowerCase());
    if (found) {
      setSearchResult(`Great news! ${found.name} (ZIP ${found.zipCode}) is within our core service area with ${found.turnaroundDays}.`);
    } else if (cleanZip.startsWith('542')) {
      setSearchResult(`Yes! Zip code ${cleanZip} is in Door County / Kewaunee area. We service your neighborhood!`);
    } else {
      setSearchResult(`We primarily service Door County, WI (ZIP codes 542xx). Please call us at 920-839-5515 to confirm out-of-area dispatch.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#262626] text-white p-6 flex items-center justify-between border-b-2 border-[#18ff35]">
          <div className="flex items-center gap-3">
            <KingsLogo size="sm" showPhone={false} className="w-20 h-14 scale-75" />
            <div>
              <span className="text-[10px] tracking-widest text-[#18ff35] uppercase font-bold">
                Door County, Wisconsin
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                WI SERVICE AREAS
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
              Check Your Door County ZIP Code Or Town:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter ZIP code (e.g. 54235) or town..."
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                className="flex-1 border border-neutral-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm bg-white"
              />
              <button
                type="submit"
                className="bg-[#2d2d2d] hover:bg-black text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-colors"
              >
                Check Coverage
              </button>
            </div>
            {searchResult && (
              <p className="mt-3 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                {searchResult}
              </p>
            )}
          </form>

          {/* Service Areas Directory */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              Door County Communities We Regularly Visit:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="p-3.5 rounded-xl border border-neutral-200 hover:border-neutral-400 bg-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-neutral-900">{area.name}</span>
                      <span className="text-[10px] font-mono text-neutral-500">{area.zipCode}</span>
                    </div>
                    <span className="text-[11px] text-neutral-500 block mt-1">{area.county}</span>
                    <span className="text-[10px] font-medium text-emerald-700 block mt-0.5">
                      {area.turnaroundDays}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectAreaForBooking(area.name);
                    }}
                    className="mt-3 text-left text-[11px] font-bold text-[#d95c2b] hover:underline cursor-pointer"
                  >
                    Schedule in {area.name} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters Info */}
          <div className="bg-[#262626] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-widest text-[#18ff35] uppercase font-bold block">
                Central Operations Hub
              </span>
              <h5 className="font-bold text-base text-white mt-0.5">
                Our Headquarters: 1031 West Spruce Drive
              </h5>
              <p className="text-xs text-neutral-300">
                Sturgeon Bay, WI - 54235 • Hours: Mon-Fri 8:00 AM - 5:00 PM
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=1031+West+Spruce+Drive+Sturgeon+Bay+WI+54235"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-neutral-200 transition-colors whitespace-nowrap"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
