import React from 'react';
import { X, Check, ShieldCheck, DollarSign, Award, Clock } from 'lucide-react';
import { KingsLogo } from './KingsLogo';

interface DiagnosticPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DiagnosticPricingModal: React.FC<DiagnosticPricingModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#262626] text-white p-6 flex items-center justify-between border-b-2 border-[#18ff35]">
          <div className="flex items-center gap-3">
            <KingsLogo size="sm" showPhone={false} className="w-20 h-14 scale-75" />
            <div>
              <span className="text-[10px] tracking-widest text-[#18ff35] uppercase font-bold">
                Transparent Pricing Guarantee
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                NO HIDDEN FEES
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-pricing-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Main Price Callout */}
          <div className="bg-neutral-900 text-white p-6 rounded-3xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#18ff35] font-bold">
                Flat-Rate Service Call
              </span>
              <div className="font-condensed text-6xl sm:text-7xl font-black text-white mt-1 mb-2 leading-none">
                $79.95
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Comprehensive in-home diagnostic inspection and upfront itemized repair estimate. Never any surprise trip charges or undisclosed add-ons.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              What Is Included in Your $79.95 Fee:
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {[
                {
                  title: 'Travel to Any Door County Community',
                  desc: 'From Forestville and Sturgeon Bay all the way up to Sister Bay, Ellison Bay, and beyond.'
                },
                {
                  title: 'Full In-Depth System Troubleshooting',
                  desc: 'Comprehensive electrical, mechanical, and safety testing with professional diagnostic tools.'
                },
                {
                  title: 'Upfront, Written Repair Estimate',
                  desc: 'Clear breakdown of parts and labor before any tools touch your appliance. You are never obligated to proceed.'
                },
                {
                  title: 'Truck-Stocked Immediate Repairs',
                  desc: 'If you choose to proceed and we have the part on the truck, repair work can often happen in the same visit.'
                },
                {
                  title: '90-Day Satisfaction Warranty',
                  desc: 'All installed OEM parts and labor are backed by our warranty guarantee.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#18ff35] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">{item.title}</span>
                    <span className="text-neutral-600 text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 bg-[#d95c2b] hover:bg-[#c14d20] text-white font-extrabold py-3.5 px-6 rounded-xl transition-colors cursor-pointer text-sm shadow-md active:scale-95 text-center"
            >
              Book Service ($79.95 Diagnostic)
            </button>
            <a
              href="tel:9208395515"
              className="px-6 py-3.5 border border-neutral-300 rounded-xl text-neutral-800 font-bold text-sm text-center hover:bg-neutral-100"
            >
              Call 920-839-5515
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
