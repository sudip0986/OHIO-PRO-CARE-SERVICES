import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, AlertTriangle, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { KingsLogo } from './KingsLogo';
import { SERVICE_ITEMS, BRANDS_LIST, SERVICE_AREAS } from '../data/applianceData';
import { BookingFormState, BookingConfirmation } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedBrand?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedBrand = ''
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [formData, setFormData] = useState<BookingFormState>({
    serviceType: preselectedService || 'Refrigerator Repairs',
    brand: preselectedBrand || 'Whirlpool',
    applianceAge: '3-6 years',
    issueDescription: '',
    urgency: 'Standard',
    serviceArea: 'Sturgeon Bay',
    streetAddress: '',
    zipCode: '54235',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as any);
    } else {
      // Generate booking confirmation
      const conf: BookingConfirmation = {
        confirmationId: `KAS-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        data: { ...formData },
        estimatedDiagnosticFee: 79.95
      };
      setConfirmation(conf);
      setStep(4);
    }
  };

  const resetForm = () => {
    setConfirmation(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#262626] text-white p-5 sm:p-6 flex items-center justify-between relative border-b-2 border-[#18ff35]">
          <div className="flex items-center gap-3">
            <KingsLogo size="sm" showPhone={false} className="w-20 h-14 scale-75" />
            <div>
              <span className="text-[10px] tracking-widest text-[#18ff35] uppercase font-bold">
                Online Booking Portal
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl tracking-wide text-white leading-tight">
                SCHEDULE APPLIANCE SERVICE
              </h3>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
            id="close-booking-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator (for steps 1-3) */}
        {step < 4 && (
          <div className="bg-neutral-100 px-6 py-3 border-b border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-600">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-black text-[#18ff35]' : 'bg-neutral-300'}`}>1</span>
              <span>Appliance</span>
            </div>
            <div className="w-8 h-[2px] bg-neutral-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-black text-[#18ff35]' : 'bg-neutral-300'}`}>2</span>
              <span>Location & Time</span>
            </div>
            <div className="w-8 h-[2px] bg-neutral-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-black text-[#18ff35]' : 'bg-neutral-300'}`}>3</span>
              <span>Contact & Confirm</span>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Select Appliance or Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: item.name })}
                      className={`p-3 text-left rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                        formData.serviceType === item.name
                          ? 'border-black bg-neutral-900 text-white shadow-md'
                          : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                      }`}
                    >
                      <span className="font-semibold text-xs sm:text-sm">{item.name}</span>
                      {item.isPopular && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                          formData.serviceType === item.name ? 'bg-[#18ff35] text-black' : 'bg-orange-100 text-[#d95c2b]'
                        }`}>
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Appliance Brand
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  >
                    {BRANDS_LIST.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} {b.truckStockedParts ? '• (Truck Stocked Parts)' : ''}
                      </option>
                    ))}
                    <option value="Other Brand">Other / Not Listed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Approximate Age
                  </label>
                  <select
                    value={formData.applianceAge}
                    onChange={(e) => setFormData({ ...formData, applianceAge: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  >
                    <option value="Under 2 years">Under 2 years (Recent)</option>
                    <option value="3-6 years">3 - 6 years (Average)</option>
                    <option value="7-12 years">7 - 12 years (Older unit)</option>
                    <option value="12+ years">12+ years (Vintage / Long-lived)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Describe What's Happening
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Refrigerator is not cooling properly, fresh food section is warm while freezer is still cold..."
                  value={formData.issueDescription}
                  onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                  className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#2d2d2d] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  id="booking-step1-next"
                >
                  <span>Continue to Location</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Door County Area Location
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICE_AREAS.slice(0, 9).map((area) => (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceArea: area.name, zipCode: area.zipCode })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between ${
                        formData.serviceArea === area.name
                          ? 'border-black bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                      }`}
                    >
                      <span>{area.name}</span>
                      <span className="text-[10px] opacity-75">{area.zipCode}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Street Address in Door County
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1031 W Spruce Dr"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Preferred Arrival Window
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as any })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                    <option value="First Available">First Available Technician</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-bold text-sm hover:bg-neutral-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#2d2d2d] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  id="booking-step2-next"
                >
                  <span>Continue to Contact</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-neutral-500">
                    Transparent Diagnostic Promise
                  </span>
                  <span className="bg-[#18ff35]/20 text-neutral-900 border border-[#18ff35] text-[11px] font-extrabold px-2 py-0.5 rounded">
                    NO HIDDEN FEES
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-extrabold text-neutral-900 text-lg">
                    Diagnostic Inspection & Estimate:
                  </span>
                  <span className="font-condensed text-3xl font-black text-neutral-900">
                    $79.95
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Includes full diagnostic inspection of your appliance by a Door County expert technician and an upfront, itemized repair estimate before any work begins.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Peterson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number (For ETA Alerts)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 920-555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Gate Code / Parking Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cottage driveway on left, park behind garage"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-bold text-sm hover:bg-neutral-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#d95c2b] hover:bg-[#c14d20] text-white font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer active:scale-95"
                  id="confirm-booking-btn"
                >
                  Confirm Appointment ($79.95 Fee)
                </button>
              </div>
            </form>
          )}

          {step === 4 && confirmation && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-[#18ff35]/20 border-2 border-[#18ff35] rounded-full flex items-center justify-center mx-auto text-black">
                <CheckCircle className="w-10 h-10 text-neutral-900" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Appointment Confirmed
                </span>
                <h3 className="font-condensed text-4xl sm:text-5xl text-neutral-900 tracking-tight mt-1">
                  YOU'RE ON THE SCHEDULE!
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-neutral-900">{confirmation.data.fullName}</span>. A technician from Kings Appliance Service will arrive at your Door County location.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-xs font-bold text-neutral-500 uppercase">Booking ID</span>
                  <span className="font-mono font-bold text-base text-neutral-900">{confirmation.confirmationId}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Service:</span>
                    <span className="font-bold text-neutral-900">{confirmation.data.serviceType}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Brand:</span>
                    <span className="font-bold text-neutral-900">{confirmation.data.brand}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Appointment Date:</span>
                    <span className="font-bold text-neutral-900">{confirmation.data.preferredDate}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Time Window:</span>
                    <span className="font-bold text-neutral-900">{confirmation.data.preferredTimeSlot}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-neutral-500 block">Address:</span>
                    <span className="font-bold text-neutral-900">
                      {confirmation.data.streetAddress}, {confirmation.data.serviceArea}, WI {confirmation.data.zipCode}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex justify-between items-center text-xs">
                  <span className="text-neutral-600">Diagnostic Due at Visit:</span>
                  <span className="font-bold text-base text-neutral-900">$79.95</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={resetForm}
                  className="bg-[#262626] text-white hover:bg-black font-bold px-8 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Return to Home
                </button>
                <a
                  href="tel:9208395515"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Call Headquarters: 920-839-5515
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
