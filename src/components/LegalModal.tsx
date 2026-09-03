import React from 'react';
import { X, Shield } from 'lucide-react';
import { KingsLogo } from './KingsLogo';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
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
                Kings Appliance Service LLC
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight uppercase">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-legal-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p><strong>Effective Date:</strong> May 1, 2024</p>
              <p>
                At Kings Appliance Service, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your details when you request appliance repairs or installations in the Door County, Wisconsin area.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Information We Collect</h4>
              <p>
                When booking an appointment via our online form or telephone, we collect your name, physical service address, email address, phone number, and appliance details (make, model, symptoms).
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">How We Use Your Information</h4>
              <p>
                We use your details strictly to dispatch technicians, communicate estimated times of arrival (ETAs), provide itemized estimates and receipts, and honor our 90-day parts and labor guarantees. We never sell, rent, or trade your contact information to any third parties.
              </p>
            </>
          ) : (
            <>
              <p><strong>Last Updated:</strong> May 1, 2024</p>
              <h4 className="font-bold text-neutral-900 text-sm">Diagnostic Fee &amp; Estimates</h4>
              <p>
                Kings Appliance Service charges a transparent $79.95 diagnostic service fee. This fee covers dispatch to your Door County address and comprehensive diagnostic inspection by an expert technician. An itemized estimate for necessary parts and labor is provided before any repairs are performed.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Warranty &amp; Satisfaction Guarantee</h4>
              <p>
                All replacement parts installed by Kings Appliance Service are OEM-grade and backed by our standard 90-day parts and labor warranty. If the identical part or repair fails under normal operating conditions within 90 days, we will return and resolve it at no extra labor cost.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-3">Service Boundaries</h4>
              <p>
                We proudly serve Door County communities including Sturgeon Bay, Egg Harbor, Fish Creek, Ephraim, Sister Bay, Baileys Harbor, Ellison Bay, Gills Rock, and Washington Island.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-neutral-200 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#262626] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-black transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
