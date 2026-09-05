import React from 'react';
import { X, Check, ShieldCheck, DollarSign, Award, Clock } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';

export const DiagnosticPricingModal = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">

        {/* Header Bar */}
        <div className="bg-[#0B1E36] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES | OHIO CITY
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                TRANSPARENT $85.50 PLUMBING DIAGNOSTIC
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
            id="close-pricing-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">

          {/* Main Price Callout */}
          <div className="bg-[#0B1E36] text-white p-6 rounded-3xl text-center relative overflow-hidden border-2 border-[#FFD000] shadow-xl">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#FFD000] font-black">
                Flat-Rate Plumber Visit in Ohio City
              </span>
              <div className="font-condensed text-6xl sm:text-7xl font-black text-[#FFD000] mt-1 mb-2 leading-none">
                $85.50
              </div>
              <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
                Comprehensive in-home plumbing diagnostic inspection and upfront itemized repair estimate. Zero surprise travel charges or undisclosed add-on fees.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
              What Is Included in Your $85.50 Plumbing Diagnostic:
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {[
                {
                  title: 'Travel Across Ohio City & Surrounding Neighborhoods',
                  desc: 'Direct dispatch to Ohio City Market District, Franklin Blvd, Bridge Ave, Tremont, Detroit Shoreway, Lakewood & Greater Cleveland.'
                },
                {
                  title: 'Complete Pressure, Leak & Drain Inspection',
                  desc: 'Acoustic testing, main line flow evaluation, and fixture troubleshooting by a licensed Ohio plumber.'
                },
                {
                  title: 'Upfront, Written Repair Estimate',
                  desc: 'Itemized breakdown of parts, fittings, and labor before any tools touch your pipes. Never any high-pressure tactics.'
                },
                {
                  title: 'Truck-Stocked Same-Day Plumbing Repairs',
                  desc: 'Our vans carry heavy-duty PEX lines, copper pipe fittings, cartridges, and valves to resolve most issues on the initial visit.'
                },
                {
                  title: '90-Day Parts & Labor Warranty',
                  desc: 'All installed plumbing materials and professional labor are fully guaranteed.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#FFD000] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
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

          {/* Action CTA with Yellow Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn-yellow flex-1 py-3.5 px-6 rounded-xl font-black text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-yellow-500/30 text-center"
            >
              Book Plumber ($85.50 Diagnostic)
            </button>
            <a
              href="tel:2168882273"
              className="px-6 py-3.5 border border-neutral-300 rounded-xl text-neutral-900 font-bold text-sm text-center hover:border-amber-400 hover:bg-amber-50 transition-colors"
            >
              Call (216) 888-CARE
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiagnosticPricingModal;
