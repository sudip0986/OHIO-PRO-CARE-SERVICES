import React, { useState } from 'react';
import { X, Wrench, AlertOctagon, ThumbsUp, DollarSign, ArrowRight, HelpCircle } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
import { DIY_GUIDE_APPLIANCES } from '../data/applianceData';

interface DiyDecisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DiyDecisionModal: React.FC<DiyDecisionModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [selectedType, setSelectedType] = useState('Refrigerator');
  const [applianceAge, setApplianceAge] = useState<number>(4);
  const [estimatedNewCost, setEstimatedNewCost] = useState<number>(1400);

  if (!isOpen) return null;

  const currentAppliance = DIY_GUIDE_APPLIANCES.find((a) => a.type === selectedType) || DIY_GUIDE_APPLIANCES[0];

  // The 50% appliance rule calculation
  const lifespanPercent = Math.min(100, Math.round((applianceAge / currentAppliance.lifespanYears) * 100));
  const avgRepair = currentAppliance.avgRepairCost;
  const isWorthRepairing = applianceAge <= (currentAppliance.lifespanYears * 0.65) && (avgRepair < estimatedNewCost * 0.5);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#121212] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES | DECISION GUIDE
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                DIY IT OR SAY GOODBYE TO IT?
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-diy-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Wondering whether you should tackle the fix yourself, invest in professional repair with our $79.95 diagnostic guarantee, or say goodbye and replace the unit? Use the calculator below to evaluate your appliance based on the standard <strong>50% Lifespan &amp; Cost Rule</strong>.
          </p>

          {/* Interactive Calculator Inputs */}
          <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Appliance Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  const found = DIY_GUIDE_APPLIANCES.find((a) => a.type === e.target.value);
                  if (found) setEstimatedNewCost(found.avgNewCost);
                }}
                className="w-full border border-neutral-300 rounded-xl p-2.5 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#FFD000]"
              >
                {DIY_GUIDE_APPLIANCES.map((a) => (
                  <option key={a.type} value={a.type}>
                    {a.type} (Lifespan ~{a.lifespanYears} yrs)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Current Age:
                </label>
                <span className="font-bold text-xs text-amber-600">{applianceAge} Years Old</span>
              </div>
              <input
                type="range"
                min="1"
                max={currentAppliance.lifespanYears + 4}
                value={applianceAge}
                onChange={(e) => setApplianceAge(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>1 Year</span>
                <span>Average: {currentAppliance.lifespanYears} Yrs</span>
                <span>{currentAppliance.lifespanYears + 4}+ Yrs</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Replacement Unit Cost ($)
              </label>
              <input
                type="number"
                value={estimatedNewCost}
                onChange={(e) => setEstimatedNewCost(Number(e.target.value) || 0)}
                className="w-full border border-neutral-300 rounded-xl p-2.5 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
          </div>

          {/* Assessment Verdict Box */}
          <div
            className={`rounded-2xl p-5 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isWorthRepairing
                ? 'bg-amber-50/70 border-amber-300'
                : 'bg-neutral-100 border-neutral-300'
            }`}
          >
            <div className="flex items-start gap-3.5">
              {isWorthRepairing ? (
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center shrink-0 shadow-md">
                  <ThumbsUp className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-neutral-800 text-[#FFD000] flex items-center justify-center shrink-0 shadow-md">
                  <AlertOctagon className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700">
                  OHIO PRO CARE VERDICT
                </span>
                <h4 className="font-extrabold text-lg text-neutral-900">
                  {isWorthRepairing
                    ? 'Definitely Repair It! (High Value ROI)'
                    : 'Consider Replacement Or Request Diagnostic'}
                </h4>
                <p className="text-xs text-neutral-700 mt-1 max-w-md">
                  {isWorthRepairing
                    ? `At ${applianceAge} years old, your ${selectedType} still has roughly ${Math.max(
                        0,
                        currentAppliance.lifespanYears - applianceAge
                      )} years of useful life remaining. Average repair is ~$${avgRepair}, saving you over $${
                        estimatedNewCost - avgRepair
                      } compared to buying a replacement!`
                    : `At ${applianceAge} years old, this ${selectedType} is approaching or past its expected ${currentAppliance.lifespanYears}-year lifespan. Our flat $79.95 diagnostic visit across Ohio can give you an exact expert assessment.`}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn-yellow px-6 py-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
            >
              <span>Book $79.95 Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* DIY Safety Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h5 className="font-extrabold text-neutral-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-amber-600" />
                Tasks You Can Usually DIY:
              </h5>
              <ul className="space-y-1.5 text-neutral-600 list-disc list-inside">
                {currentAppliance.diyFriendlyIssues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200">
              <h5 className="font-extrabold text-neutral-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4 text-amber-600" />
                Call Ohio Pro Care For Safety (High Risk):
              </h5>
              <ul className="space-y-1.5 text-neutral-700 list-disc list-inside">
                {currentAppliance.professionalOnlyIssues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
