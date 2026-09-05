import React from 'react';
import { X, Flame, CheckCircle, Clock, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';

interface DryerVentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDryerVent: () => void;
}

export const DryerVentModal: React.FC<DryerVentModalProps> = ({
  isOpen,
  onClose,
  onBookDryerVent
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Top Header */}
        <div className="bg-[#121212] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                DRYER VENT CLEANING
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-dryer-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Hero Callout */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-md">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-base">
                Protect Your Ohio Home from Dryer Fire Hazards
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                According to the US Fire Administration, failure to clean dryer lint ductwork is the #1 cause of over 2,900 residential dryer fires annually. A clogged vent doubles electricity bills and strains heating elements to premature failure.
              </p>
            </div>
          </div>

          {/* Warning Signs Checklist */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              Signs Your Dryer Vent Needs Immediate Service:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
              {[
                'Clothes take more than one cycle to dry completely',
                'Dryer top or laundry room feels unusually hot during a cycle',
                'Slight burning or scorching lint odor while operating',
                'Outside exhaust vent flapper barely opens or is choked with lint',
                'Dryer shuts off randomly due to safety high-limit thermal tripping',
                'More than 12 months since the last comprehensive duct brush out'
              ].map((sign, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Clean It */}
          <div className="bg-neutral-950 text-white p-5 rounded-2xl border border-[#FFD000]/30 shadow-lg">
            <h4 className="font-condensed text-2xl text-white tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFD000]" />
              THE OHIO PRO CARE PROFESSIONAL CLEANING METHOD
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We utilize high-velocity rotary nylon brushes and high-CFM extraction vacuums along the entire length of your ductwork—from behind the dryer through interior walls to the exterior roof or side vent cap. We also inspect the flexible transition duct and test airflow before and after.
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
                (Discounted to $99 when bundled with any appliance repair)
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookDryerVent();
              }}
              className="btn-yellow w-full sm:w-auto px-8 py-3.5 rounded-xl shadow-lg font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              id="book-dryer-vent-now"
            >
              <span>Schedule Vent Cleaning</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
