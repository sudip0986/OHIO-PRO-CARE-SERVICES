import React from 'react';
import { X, Flame, CheckCircle, Clock, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { KingsLogo } from './KingsLogo';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Top Header */}
        <div className="bg-[#262626] text-white p-6 flex items-center justify-between border-b-2 border-[#d95c2b]">
          <div className="flex items-center gap-3">
            <KingsLogo size="sm" showPhone={false} className="w-20 h-14 scale-75" />
            <div>
              <span className="text-[10px] tracking-widest text-[#d95c2b] uppercase font-bold">
                Specialty Service
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
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d95c2b] text-white flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-base">
                Protect Your Door County Home from Fire Hazards
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                According to the US Fire Administration, failure to clean dryer lint ducts is the #1 cause of over 2,900 residential dryer fires annually. A clogged vent also doubles utility bills and burns out heating elements prematurely.
              </p>
            </div>
          </div>

          {/* Warning Signs Checklist */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              Signs Your Dryer Vent Needs Immediate Cleaning:
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
                  <ShieldAlert className="w-4 h-4 text-[#d95c2b] shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Clean It */}
          <div className="bg-neutral-900 text-white p-5 rounded-2xl">
            <h4 className="font-condensed text-2xl text-white tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#18ff35]" />
              THE KINGS PROFESSIONAL CLEANING METHOD
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We utilize high-velocity rotary nylon brushes and high-CFM vacuum extraction along the entire length of your ductwork—from the back of the appliance through internal walls to the exterior roof or side vent cap. We also inspect the flexible transition duct and test airflow CFM before and after.
            </p>
          </div>

          {/* Transparent Fee & Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
            <div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase block">
                Clear & Transparent Rate
              </span>
              <span className="font-condensed text-3xl font-black text-neutral-900">
                $149 - $189
              </span>
              <span className="text-xs text-neutral-600 block">
                (Discounted to $99 when added onto any repair service)
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookDryerVent();
              }}
              className="w-full sm:w-auto bg-[#d95c2b] hover:bg-[#c14d20] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-sm"
              id="book-dryer-vent-now"
            >
              <span>Schedule Vent Cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
