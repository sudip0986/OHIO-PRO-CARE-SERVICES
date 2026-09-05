import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RepairsDoneRight } from './components/RepairsDoneRight';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyBookWithUs } from './components/WhyBookWithUs';
import { ServicesShowcase } from './components/ServicesShowcase';
import { Footer } from './components/Footer';

// Modals / Interactive Screens
import { BookingModal } from './components/BookingModal';
import { BrandsModal } from './components/BrandsModal';
import { DryerVentModal } from './components/DryerVentModal';
import { DiyDecisionModal } from './components/DiyDecisionModal';
import { DiagnosticPricingModal } from './components/DiagnosticPricingModal';
import { ServiceAreasModal } from './components/ServiceAreasModal';
import { LegalModal } from './components/LegalModal';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedBrand, setPreselectedBrand] = useState('');
  
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isDryerVentOpen, setIsDryerVentOpen] = useState(false);
  const [isDiyGuideOpen, setIsDiyGuideOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Trigger booking with specific service preselected
  const handleOpenBookingWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  // Trigger booking with specific brand preselected
  const handleOpenBookingWithBrand = (brandName: string) => {
    setPreselectedBrand(brandName);
    setIsBookingOpen(true);
  };

  // Trigger booking for Dryer Vent Cleaning
  const handleBookDryerVent = () => {
    setPreselectedService('Dryer Vent Cleaning');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col selection:bg-[#FFD000] selection:text-black">
      
      {/* 1. Top Header */}
      <Header
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
        onOpenServiceAreas={() => setIsServiceAreasOpen(true)}
      />

      {/* 2. Hero Section */}
      <main className="flex-grow">
        <HeroSection
          onOpenBooking={() => {
            setPreselectedService('');
            setIsBookingOpen(true);
          }}
        />

        {/* 3. Repairs Done Right Section */}
        <RepairsDoneRight
          onOpenBooking={() => {
            setPreselectedService('');
            setIsBookingOpen(true);
          }}
        />

        {/* 4. About Us Section */}
        <AboutUsSection />

        {/* 5. Why Book With Us? Section */}
        <WhyBookWithUs
          onOpenPricing={() => setIsPricingOpen(true)}
          onOpenBooking={() => {
            setPreselectedService('');
            setIsBookingOpen(true);
          }}
        />

        {/* 6. Services & Brands Grid Section */}
        <ServicesShowcase
          onOpenDryerVent={() => setIsDryerVentOpen(true)}
          onOpenBrands={() => setIsBrandsOpen(true)}
          onOpenDiyGuide={() => setIsDiyGuideOpen(true)}
          onOpenPricing={() => setIsPricingOpen(true)}
          onSelectServiceForBooking={handleOpenBookingWithService}
        />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        preselectedBrand={preselectedBrand}
      />

      {/* Brands Directory Modal */}
      <BrandsModal
        isOpen={isBrandsOpen}
        onClose={() => setIsBrandsOpen(false)}
        onSelectBrandForBooking={handleOpenBookingWithBrand}
      />

      {/* Dryer Vent Cleaning Special Feature Modal */}
      <DryerVentModal
        isOpen={isDryerVentOpen}
        onClose={() => setIsDryerVentOpen(false)}
        onBookDryerVent={handleBookDryerVent}
      />

      {/* DIY It Or Say Goodbye To It? Calculator Modal */}
      <DiyDecisionModal
        isOpen={isDiyGuideOpen}
        onClose={() => setIsDiyGuideOpen(false)}
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
      />

      {/* Diagnostic Fee & No Hidden Fees Modal */}
      <DiagnosticPricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
      />

      {/* Service Areas & Coverage Lookup Modal */}
      <ServiceAreasModal
        isOpen={isServiceAreasOpen}
        onClose={() => setIsServiceAreasOpen(false)}
        onSelectAreaForBooking={(areaName) => {
          setIsBookingOpen(true);
        }}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType || 'privacy'}
      />

      {/* Quick Action Floating Bar for Mobile Users */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex gap-2">
        <a
          href="tel:6148882273"
          className="flex-1 flex items-center justify-center gap-2 bg-[#141414] border border-[#FFD000]/60 text-white py-3 rounded-2xl shadow-2xl font-bold text-xs active:scale-95"
          id="mobile-quick-call-btn"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD000]" />
          <span>(614) 888-CARE</span>
        </a>
        <button
          onClick={() => {
            setPreselectedService('');
            setIsBookingOpen(true);
          }}
          className="flex-1 btn-yellow py-3 rounded-2xl shadow-2xl font-black text-xs uppercase flex items-center justify-center gap-1.5 active:scale-95"
          id="mobile-quick-book-btn"
        >
          <Calendar className="w-3.5 h-3.5 text-black" />
          <span>Book Now</span>
        </button>
      </div>

    </div>
  );
}
