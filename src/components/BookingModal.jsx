import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, AlertTriangle, ShieldCheck, MapPin, Wrench, ArrowRight, Droplets } from 'lucide-react';
import { OhioProLogo } from './OhioProLogo';
import { PLUMBING_SERVICES, PLUMBING_BRANDS, SERVICE_AREAS } from '../data/plumbingData';

export const BookingModal = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedBrand = ''
}) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    serviceType: preselectedService || 'Emergency Pipe Repair & Leak Detection',
    brand: preselectedBrand || 'Moen',
    applianceAge: '3-6 years',
    issueDescription: '',
    urgency: 'Standard',
    serviceArea: 'Ohio City (Market District)',
    streetAddress: '',
    zipCode: '44113',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [confirmation, setConfirmation] = useState(null);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      const conf = {
        confirmationId: `OPC-PLUMB-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        data: { ...formData },
        estimatedDiagnosticFee: 85.50
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
        <div className="bg-[#0B1E36] text-white p-5 sm:p-6 flex items-center justify-between relative border-b-2 border-[#FFD000]">
          <div className="flex items-center gap-3">
            <OhioProLogo size="sm" showPhone={false} className="w-16 h-12" />
            <div>
              <span className="text-[10px] tracking-widest text-[#FFD000] uppercase font-bold">
                OHIO PRO CARE SERVICES | OHIO CITY
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl tracking-wide text-white leading-tight">
                SCHEDULE PLUMBING SERVICE
              </h3>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-sky-300 hover:text-white p-2 rounded-full hover:bg-sky-900/50 transition-colors cursor-pointer"
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
              <span className={step === 1 ? 'text-neutral-900 font-extrabold' : ''}>Plumbing Issue</span>
            </div>
            <div className="w-8 h-[2px] bg-neutral-300" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#FFD000] text-black font-black shadow' : 'bg-neutral-300'}`}>2</span>
              <span className={step === 2 ? 'text-neutral-900 font-extrabold' : ''}>Ohio City Location</span>
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
                  Plumbing Service Needed
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                >
                  {PLUMBING_SERVICES.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Fixture / Tank Brand (If Known)
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                  >
                    {PLUMBING_BRANDS.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                    <option value="Other / Unknown">Other / Unsure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50 font-medium"
                  >
                    <option value="Standard">Standard (Within 24-48 Hours)</option>
                    <option value="Urgent">Urgent (Same-Day Needed)</option>
                    <option value="Emergency">Emergency (Active Leak / Burst Pipe)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Describe the Plumbing Issue
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Clogged main kitchen drain, slow drainage in upstairs tub, water heater leaking from base, or running toilet..."
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
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    We Work Across All Places in Ohio City (44113)
                  </label>
                  <a
                    href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-sky-700 hover:text-amber-600 underline flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-amber-500" />
                    <span>View Location on Google Maps</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICE_AREAS.slice(0, 9).map((area) => (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceArea: area.name, zipCode: area.zipCode })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between ${formData.serviceArea === area.name
                          ? 'border-2 border-sky-500 bg-sky-50 text-[#0B1E36] shadow-md font-black'
                          : 'border-neutral-200 hover:border-sky-300 bg-white text-neutral-800'
                        }`}
                    >
                      <span className={formData.serviceArea === area.name ? 'text-sky-800 font-black' : ''}>{area.name}</span>
                      <span className="text-[10px] opacity-75">{area.zipCode}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Street Address in Ohio City / Region
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1951 W 25th St / Franklin Blvd"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Zip Code (Ohio City: 44113)
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
                    Arrival Window
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
                  <span className="font-bold">Transparent $85.50 Diagnostic Fee:</span> Covers full licensed plumber dispatch across Ohio City, thorough pressure/leak/drain inspection, and upfront written quote. Parts and labor are quoted before any work starts.
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
                    placeholder="e.g. Michael Vance"
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
                      placeholder="e.g. (216) 555-0199"
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
                      placeholder="e.g. michael@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#FFD000] focus:border-[#FFD000] bg-neutral-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Access / Basement Entry / Parking Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Basement access from side door, park in driveway"
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
                  Confirm Plumbing Appointment ($85.50 Fee)
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
                  Plumbing Appointment Confirmed
                </span>
                <h3 className="font-condensed text-4xl sm:text-5xl text-neutral-900 tracking-tight mt-3">
                  A PLUMBER IS DISPATCHED!
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-neutral-900">{confirmation.data.fullName}</span>. A licensed plumbing specialist from <span className="font-bold text-neutral-900">OHIO Pro Care Services</span> will arrive at your address.
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
                    <span className="text-neutral-500 block">Brand / Fixture:</span>
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
                  <span className="font-bold text-base text-neutral-900">$85.50</span>
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
                  href="tel:2168882273"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-amber-400 hover:bg-amber-50 text-neutral-900 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Call Dispatch: (216) 888-CARE
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
