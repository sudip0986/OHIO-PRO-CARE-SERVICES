import React from 'react';
import { X, Shield } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';

export const LegalModal = ({ isOpen, onClose, type }) => {
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
                OHIO PRO CARE SERVICES LLC
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight uppercase">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Plumbing Service'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
            id="close-legal-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p><strong>Effective Date:</strong> January 1, 2025</p>
              <p>
                At OHIO Pro Care Services, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your details when you request plumbing services, drain clearing, or emergency pipe repairs in Ohio City and surrounding communities.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Information We Collect</h4>
              <p>
                When booking an appointment via our online portal or telephone, we collect your name, physical service address in Ohio, email address, phone number, and plumbing issue description.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">How We Use Your Information</h4>
              <p>
                We use your details strictly to dispatch certified plumbers, communicate arrival ETAs, provide itemized estimates, and honor our 90-day parts and labor guarantees. We never sell or share your contact info with third parties.
              </p>
            </>
          ) : (
            <>
              <p><strong>Last Updated:</strong> January 1, 2025</p>
              <h4 className="font-bold text-neutral-900 text-sm">Plumbing Diagnostic Fee &amp; Estimates</h4>
              <p>
                OHIO Pro Care Services charges an upfront $85.50 diagnostic service fee. This fee covers plumber travel across Ohio City / Cleveland and comprehensive diagnostic inspection with pressure and acoustic tools. An itemized estimate for all parts and labor is provided before any repairs are performed.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Plumbing Warranty &amp; Guarantee</h4>
              <p>
                All replacement parts, cartridges, valves, and pipes installed by OHIO Pro Care Services are OEM-grade and backed by our standard 90-day parts and labor warranty. If the identical repaired plumbing component fails under normal use within 90 days, we return and resolve it at zero extra labor cost.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Service Region</h4>
              <p>
                We proudly serve Ohio City (44113 - Market District, Franklin Blvd, Bridge Ave), Tremont, Detroit Shoreway, Lakewood, Downtown Cleveland, and Greater Ohio.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-neutral-200 flex justify-end">
            <button
              onClick={onClose}
              className="btn-yellow font-black px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
