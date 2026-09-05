import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, AlertTriangle, ShieldCheck, MapPin, Wrench, ArrowRight } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
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
    serviceType: preselectedService || 'Refrigerator & Freezer Repairs',
    brand: preselectedBrand || 'Whirlpool',
    applianceAge: '3-6 years',
    issueDescription: '',
    urgency: 'Standard',
    serviceArea: 'Columbus',
    streetAddress: '',
    zipCode: '43215',
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
      // Generate booking confirmation for Ohio Pro Care Services
      const conf: BookingConfirmation = {
        confirmationId: `OPC-${Math.floor(100000 + Math.random() * 900000)}`,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto">
        
        {/* Header Bar */}
        <div className="bg-[#121212] text-white p-5 sm:p-6 flex items-center justify-between relative border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl tracking-wide text-white leading-tight">
                SCHEDULE SERVICE APPOINTMENT
              </h3>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            id="close-booking-modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator (for steps 1-3) */}
        {step < 4 && (
          <div className="bg-neutral-100 px-6 py-3 border-b border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-600">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#FFD000] text-black font-black shadow' : 'bg-neutral-300'}`}>1</span>
              <span className={step === 1 ? 'text-neutral-900 font-extrabold' : ''}>Appliance</span>
            </div>
            <div className="w-8 h-[2px] bg-neutral-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#FFD000] text-black font-black shadow' : 'bg-neutral-300'}`}>2</span>
              <span className={step === 2 ? 'text-neutral-900 font-extrabold' : ''}>Ohio Location</span>
            </div>
            <div className="w-8 h-[2px] bg-neutral-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#FFD000] text-black font-black shadow' : 'bg-neutral-300'}`}>3</span>
              <span className={step === 3 ? 'text-neutral-900 font-extrabold' : ''}>Confirm &amp; Book</span>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Appliance Service Needed
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                >
                  {SERVICE_ITEMS.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Brand / Manufacturer
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                  >
                    {BRANDS_LIST.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                    <option value="Other">Other Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Approximate Appliance Age
                  </label>
                  <select
                    value={formData.applianceAge}
                    onChange={(e) => setFormData({ ...formData, applianceAge: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                  >
                    <option value="Under 2 years">Under 2 years</option>
                    <option value="3-6 years">3-6 years</option>
                    <option value="7-10 years">7-10 years</option>
                    <option value="10+ years">10+ years</option>
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
                  className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                />
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="btn-yellow px-8 py-3.5 rounded-xl text-base font-black tracking-wide cursor-pointer flex items-center gap-2 shadow-lg shadow-yellow-500/25"
                  id="booking-step1-next"
                >
                  <span>Continue to Location</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Select Ohio Service Region
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICE_AREAS.slice(0, 9).map((area) => (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceArea: area.name, zipCode: area.zipCode })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between ${
                        formData.serviceArea === area.name
                          ? 'border-[#FFD000] bg-neutral-950 text-white shadow-md'
                          : 'border-neutral-200 hover:border-[#FFD000] bg-white text-neutral-800'
                      }`}
                    >
                      <span className={formData.serviceArea === area.name ? 'text-[#FFD000]' : ''}>{area.name}</span>
                      <span className="text-[10px] opacity-75">{area.zipCode}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 245 High Street"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Ohio Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-bold text-sm hover:bg-neutral-100 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-yellow px-8 py-3.5 rounded-xl text-base font-black tracking-wide cursor-pointer flex items-center gap-2 shadow-lg shadow-yellow-500/25"
                  id="booking-step2-next"
                >
                  <span>Continue to Contact</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Transparent $79.95 Diagnostic Fee:</span> Includes complete technician travel across Ohio, comprehensive diagnostic troubleshooting, and upfront repair quote. Parts and labor are quoted before any work starts.
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (614) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. robert@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Access / Parking Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ring front bell, park in driveway"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-bold text-sm hover:bg-neutral-100 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-yellow px-8 py-3.5 rounded-xl font-black text-base tracking-wide transition-all shadow-lg shadow-yellow-500/30 cursor-pointer active:scale-95"
                  id="confirm-booking-btn"
                >
                  Confirm Appointment ($79.95 Fee)
                </button>
              </div>
            </form>
          )}

          {step === 4 && confirmation && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-[#FFD000]/20 border-2 border-[#FFD000] rounded-full flex items-center justify-center mx-auto text-black shadow-lg">
                <CheckCircle className="w-10 h-10 text-neutral-900" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  Appointment Confirmed
                </span>
                <h3 className="font-condensed text-4xl sm:text-5xl text-neutral-900 tracking-tight mt-3">
                  YOU'RE ON THE SCHEDULE!
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-neutral-900">{confirmation.data.fullName}</span>. A certified technician from <span className="font-bold text-neutral-900">OHIO Pro Care Services</span> will arrive at your location.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-xs font-bold text-neutral-500 uppercase">Booking ID</span>
                  <span className="font-mono font-bold text-base text-amber-600">{confirmation.confirmationId}</span>
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
                      {confirmation.data.streetAddress}, {confirmation.data.serviceArea}, OH {confirmation.data.zipCode}
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
                  className="btn-yellow px-8 py-3 rounded-xl text-sm font-black transition-colors cursor-pointer shadow-md"
                >
                  Return to Home
                </button>
                <a
                  href="tel:6148882273"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-amber-400 hover:bg-amber-50 text-neutral-900 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Call Dispatch: (614) 888-CARE
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
