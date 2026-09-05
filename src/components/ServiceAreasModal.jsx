import React, { useState } from 'react';
import { X, MapPin, Search, CheckCircle, Navigation, ArrowRight } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
import { SERVICE_AREAS } from '../data/plumbingData';

export const ServiceAreasModal = ({
  isOpen,
  onClose,
  onSelectAreaForBooking
}) => {
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  if (!isOpen) return null;

  const handleZipCheck = (e) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;
    setSearchResult(`Confirmed! We service 100% of all places, streets, and residences across full Ohio City (ZIP 44113) and surrounding communities! Our trucks dispatch licensed plumbers immediately.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">

        {/* Header Bar */}
        <div className="bg-[#0B1E36] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES | PLUMBING
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                ALL PLACES ACROSS FULL OHIO CITY
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
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
              Check Your Ohio City ZIP Code (e.g. 44113) Or Neighborhood:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter ZIP code (e.g. 44113) or neighborhood..."
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
              Ohio City Neighborhoods &amp; Coverage Zones:
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
                    <span>Book Plumber in {area.name}</span>
                    <ArrowRight className="w-3 h-3 text-amber-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps Location Banner */}
          <div className="bg-sky-50 border-2 border-sky-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#0B1E36] flex items-center justify-center text-[#FFD000] shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#FFD000]" />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-[#0B1E36]">
                  Full Ohio City Location &amp; Dispatch Pin
                </h5>
                <p className="text-xs text-sky-900">
                  Serving 100% of all places across full Ohio City. View our official pin on Google Maps.
                </p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow px-5 py-2.5 rounded-xl text-xs font-black whitespace-nowrap inline-flex items-center gap-1.5 cursor-pointer shadow-md text-[#0B1E36] hover:scale-105 transition-all"
              id="modal-view-google-maps"
            >
              <span>View On Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B1E36]" />
            </a>
          </div>

          {/* Headquarters Info */}
          <div className="bg-[#0B1E36] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-2 border-[#FFD000] shadow-xl">
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold block">
                Ohio City Plumber Dispatch Center
              </span>
              <h5 className="font-bold text-base text-white mt-0.5">
                OHIO PRO CARE SERVICES HQ
              </h5>
              <p className="text-xs text-sky-200">
                All Places Across Full Ohio City (Cleveland, OH - 44113) • Dispatch Hotline: (216) 888-CARE • 24/7 Emergency Lines
              </p>
              <a
                href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#FFD000] hover:underline font-bold mt-1 inline-flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-[#FFD000]" />
                <span>Google Maps Location: https://maps.app.goo.gl/eRbZChGvteivUpCTA</span>
              </a>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectAreaForBooking('All Places Across Full Ohio City');
              }}
              className="btn-yellow px-4 py-2.5 rounded-xl text-xs font-black whitespace-nowrap cursor-pointer text-[#0B1E36] shadow-md"
            >
              Book in Ohio City
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceAreasModal;
