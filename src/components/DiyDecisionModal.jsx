import React, { useState } from 'react';
import { X, Wrench, AlertOctagon, ThumbsUp, DollarSign, ArrowRight, Droplets } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
import { DIY_PLUMBING_GUIDE } from '../data/plumbingData';

export const DiyDecisionModal = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [selectedType, setSelectedType] = useState('Water Heater');
  const [fixtureAge, setFixtureAge] = useState(5);
  const [estimatedNewCost, setEstimatedNewCost] = useState(1650);

  if (!isOpen) return null;

  const currentItem = DIY_PLUMBING_GUIDE.find((a) => a.type === selectedType) || DIY_PLUMBING_GUIDE[0];

  const lifespanPercent = Math.min(100, Math.round((fixtureAge / currentItem.lifespanYears) * 100));
  const avgRepair = currentItem.avgRepairCost;
  const isWorthRepairing = fixtureAge <= (currentItem.lifespanYears * 0.65) && (avgRepair < estimatedNewCost * 0.5);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">

        {/* Header Bar */}
        <div className="bg-[#0B1E36] text-white p-6 flex items-center justify-between border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES | PLUMBING DECISION GUIDE
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                DIY PLUMBING OR CALL A PRO?
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
            id="close-diy-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Wondering whether you can safely clear a minor clog yourself, need professional plumbing repairs with our $85.50 diagnostic visit, or should replace the plumbing fixture? Use our Ohio City plumbing calculator based on the standard <strong>50% Lifespan &amp; Cost Rule</strong>.
          </p>

          {/* Interactive Calculator Inputs */}
          <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Plumbing Fixture / System
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  const found = DIY_PLUMBING_GUIDE.find((a) => a.type === e.target.value);
                  if (found) setEstimatedNewCost(found.avgNewCost);
                }}
                className="w-full border border-neutral-300 rounded-xl p-2.5 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#FFD000]"
              >
                {DIY_PLUMBING_GUIDE.map((a) => (
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
                <span className="font-bold text-xs text-amber-600">{fixtureAge} Years Old</span>
              </div>
              <input
                type="range"
                min="1"
                max={currentItem.lifespanYears + 4}
                value={fixtureAge}
                onChange={(e) => setFixtureAge(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>1 Year</span>
                <span>Average: {currentItem.lifespanYears} Yrs</span>
                <span>{currentItem.lifespanYears + 4}+ Yrs</span>
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
            className={`rounded-2xl p-5 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isWorthRepairing
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
                  OHIO CITY PLUMBING VERDICT
                </span>
                <h4 className="font-extrabold text-lg text-neutral-900">
                  {isWorthRepairing
                    ? 'Repair It! (High Value & Cost Savings)'
                    : 'Consider Replacement Or Call For Diagnostic'}
                </h4>
                <p className="text-xs text-neutral-700 mt-1 max-w-md">
                  {isWorthRepairing
                    ? `At ${fixtureAge} years old, your ${selectedType} still has roughly ${Math.max(
                      0,
                      currentItem.lifespanYears - fixtureAge
                    )} years of useful service remaining. Average repair is ~$${avgRepair}, saving you over $${estimatedNewCost - avgRepair
                    } compared to a full replacement!`
                    : `At ${fixtureAge} years old, this ${selectedType} is approaching or past its normal ${currentItem.lifespanYears}-year lifespan. Our flat $85.50 diagnostic visit across Ohio City provides an exact written estimate before any work.`}
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
              <span>Book $85.50 Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* DIY Safety Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h5 className="font-extrabold text-neutral-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-amber-600" />
                Plumbing Tasks You Can DIY:
              </h5>
              <ul className="space-y-1.5 text-neutral-600 list-disc list-inside">
                {currentItem.diyFriendlyIssues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200">
              <h5 className="font-extrabold text-neutral-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4 text-amber-600" />
                Call Ohio Pro Care (High Flood &amp; Gas Risk):
              </h5>
              <ul className="space-y-1.5 text-neutral-700 list-disc list-inside">
                {currentItem.professionalOnlyIssues.map((issue, idx) => (
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

export default DiyDecisionModal;
