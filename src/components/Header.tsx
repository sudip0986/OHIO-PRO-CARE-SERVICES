import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { MapPin, Globe, Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenServiceAreas: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenServiceAreas }) => {
  return (
    <header className="bg-[#121212] text-white py-5 px-4 md:px-8 border-b border-neutral-800 shadow-xl" id="top-navigation-header">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        
        {/* Left: Schedule Online & Phone Quick Access */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FFD000] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-300">
              FAST ONLINE SCHEDULING:
            </span>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-[#FFD000] font-extrabold text-base md:text-lg underline underline-offset-4 decoration-[#FFD000] hover:text-white hover:decoration-white transition-all cursor-pointer text-left flex items-center gap-1.5"
            id="header-booking-link"
          >
            <Calendar className="w-4 h-4 inline-block text-[#FFD000]" />
            SCHEDULE APPOINTMENT ONLINE
          </button>

          <div className="flex items-center gap-2 text-xs text-neutral-300 pt-0.5">
            <Phone className="w-3.5 h-3.5 text-[#FFD000]" />
            <span>Call / Text: </span>
            <a href="tel:6148882273" className="font-bold text-[#FFD000] hover:underline">
              (614) 888-CARE (2273)
            </a>
          </div>
        </div>

        {/* Center: Ohio Pro Care Services Diamond Logo */}
        <div className="w-full lg:w-1/3 flex justify-center py-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block transition-transform hover:scale-105 duration-200 cursor-pointer"
            title="OHIO Pro Care Services"
            id="header-logo-btn"
          >
            <OhioProLogo size="md" />
          </button>
        </div>

        {/* Right: Ohio Service Areas & Dispatch info */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2.5 text-xs">
          <div>
            <button
              onClick={onOpenServiceAreas}
              className="font-extrabold uppercase leading-snug tracking-tight text-white max-w-lg hover:text-[#FFD000] transition-colors cursor-pointer text-center lg:text-right"
              id="header-service-areas-btn"
            >
              <u className="underline decoration-[#FFD000] decoration-2">OHIO SERVICE AREAS:</u>{' '}
              COLUMBUS, DUBLIN, WESTERVILLE, UPPER ARLINGTON, POWELL, NEW ALBANY, GROVE CITY, CLEVELAND, CINCINNATI, DAYTON, AKRON + SURROUNDING
            </button>
          </div>

          {/* Social Media & Action Badges */}
          <div className="flex items-center space-x-2 pt-0.5">
            <button
              onClick={onOpenBooking}
              className="btn-yellow px-3 py-1 text-xs font-black tracking-wider uppercase cursor-pointer"
              id="header-book-now-pill"
            >
              Book Service
            </button>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
              title="Facebook"
              id="social-facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
              title="Instagram"
              id="social-instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Maps */}
            <a
              href="https://maps.google.com/?q=Columbus+OH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
              title="Google Maps"
              id="social-maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          <p className="font-extrabold tracking-wide uppercase text-neutral-200">
            HEADQUARTERS &amp; DISPATCH:{' '}
            <span className="font-normal text-neutral-300">
              CENTRAL OHIO REGION | COLUMBUS, OH
            </span>
          </p>
        </div>

      </div>
    </header>
  );
};
