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
import { FixturesModal } from './components/FixturesModal';
import { DrainCareModal } from './components/DrainCareModal';
import { DiyDecisionModal } from './components/DiyDecisionModal';
import { DiagnosticPricingModal } from './components/DiagnosticPricingModal';
import { ServiceAreasModal } from './components/ServiceAreasModal';
import { LegalModal } from './components/LegalModal';
import { LoadingScreen } from './components/LoadingScreen';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  // Splash Loading Screen state
  const [isLoading, setIsLoading] = useState(true);

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedBrand, setPreselectedBrand] = useState('');
  
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isDrainModalOpen, setIsDrainModalOpen] = useState(false);
  const [isDiyGuideOpen, setIsDiyGuideOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  // Trigger booking with specific plumbing service preselected
  const handleOpenBookingWithService = (serviceName) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  // Trigger booking with specific brand preselected
  const handleOpenBookingWithBrand = (brandName) => {
    setPreselectedBrand(brandName);
    setIsBookingOpen(true);
  };

  // Trigger booking for Emergency Drain / Jetting
  const handleBookDrainService = () => {
    setPreselectedService('Drain Cleaning & Hydro Jetting');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col selection:bg-[#FFD000] selection:text-black">
      
      {/* 0. Introductory Floating Loading Screen */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

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

        {/* 3. Plumbing Done Right Section */}
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

        {/* 6. Plumbing Services & Fixture Brands Showcase */}
        <ServicesShowcase
          onOpenDrainModal={() => setIsDrainModalOpen(true)}
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

      {/* Interactive Plumbing Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        preselectedBrand={preselectedBrand}
      />

      {/* Fixtures & Preferred Brands Modal */}
      <FixturesModal
        isOpen={isBrandsOpen}
        onClose={() => setIsBrandsOpen(false)}
        onSelectBrandForBooking={handleOpenBookingWithBrand}
      />

      {/* Emergency Hydro Jetting & Drain Care Modal */}
      <DrainCareModal
        isOpen={isDrainModalOpen}
        onClose={() => setIsDrainModalOpen(false)}
        onBookService={handleBookDrainService}
      />

      {/* DIY Plumbing Decision Guide Calculator Modal */}
      <DiyDecisionModal
        isOpen={isDiyGuideOpen}
        onClose={() => setIsDiyGuideOpen(false)}
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
      />

      {/* Flat $85.50 Diagnostic Fee & Transparent Pricing Modal */}
      <DiagnosticPricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onOpenBooking={() => {
          setPreselectedService('');
          setIsBookingOpen(true);
        }}
      />

      {/* Ohio City & Regional Service Areas Coverage Modal */}
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
          href="tel:2168882273"
          className="flex-1 flex items-center justify-center gap-2 bg-[#141414] border border-[#FFD000]/60 text-white py-3 rounded-2xl shadow-2xl font-bold text-xs active:scale-95"
          id="mobile-quick-call-btn"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD000]" />
          <span>(216) 888-CARE</span>
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
          <span>Book Plumber</span>
        </button>
      </div>

    </div>
  );
}
