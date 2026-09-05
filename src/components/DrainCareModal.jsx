import React from 'react';
import { X, Droplets, CheckCircle, Clock, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';

export const DrainCareModal = ({
  isOpen,
  onClose,
  onBookService
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">

        {/* Top Header */}
        <div className="bg-[#0B1E36] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                SPECIALTY PLUMBING SERVICE
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                HYDRO JETTING &amp; DRAIN CLEARING
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
            id="close-drain-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">

          {/* Hero Callout */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-md">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-base">
                Protect Your Ohio City Home From Sewer Backups &amp; Floods
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                Historic Ohio City homes frequently have aging clay tile or cast iron sewer lines vulnerable to tree root intrusion and heavy grease buildup. Commercial-grade hydro jetting clears 100% of pipe wall obstructions without damaging older lines.
              </p>
            </div>
          </div>

          {/* Warning Signs Checklist */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              Signs Your Main Drain Line Needs Immediate Jetting:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
              {[
                'Multiple drains in the house run slowly simultaneously',
                'Water surfaces in basement floor drains when running washing machine',
                'Persistent sewer gas odors in bathrooms or kitchen',
                'Gurgling noises from toilets when kitchen sink drains',
                'Repeated clogs every few months despite chemical treatments',
                'Trees in front yard near the street cleanout line'
              ].map((sign, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Clean It */}
          <div className="bg-[#0B1E36] text-white p-5 rounded-2xl border-2 border-[#FFD000] shadow-lg">
            <h4 className="font-condensed text-2xl text-white tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFD000]" />
              THE OHIO PRO CARE HYDRO JETTING METHOD
            </h4>
            <p className="text-xs text-sky-100 leading-relaxed">
              We send a high-pressure 4,000 PSI rotating stream of water through your main sewer line that cuts through stubborn tree roots, emulsifies solid grease, and strips calcified mineral scale, leaving your pipes clean to the municipal sewer tie-in.
            </p>
          </div>

          {/* Transparent Fee & Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
            <div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase block">
                Clear &amp; Transparent Rate
              </span>
              <span className="font-condensed text-3xl font-black text-amber-600">
                $149 - $189
              </span>
              <span className="text-xs text-neutral-600 block">
                (Discounted to $99 when bundled with any plumbing repair)
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookService();
              }}
              className="btn-yellow w-full sm:w-auto px-8 py-3.5 rounded-xl shadow-lg font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              id="book-drain-cleaning-now"
            >
              <span>Schedule Drain Clearing</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export const DryerVentModal = DrainCareModal;
export default DrainCareModal;
