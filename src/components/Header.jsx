import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { MapPin, Phone, Calendar, Wrench } from 'lucide-react';

export const Header = ({ onOpenBooking, onOpenServiceAreas }) => {
  return (
    <header className="bg-[#0B1E36] text-white py-5 px-4 md:px-8 border-b-2 border-sky-500/30 shadow-2xl" id="top-navigation-header">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">

        {/* Left: Schedule Online & Direct Hotline */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FFD000] ring-2 ring-sky-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-sky-200">
              OHIO CITY PLUMBING DISPATCH:
            </span>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-[#FFD000] font-extrabold text-base md:text-lg underline underline-offset-4 decoration-[#FFD000] hover:text-white hover:decoration-white transition-all cursor-pointer text-left flex items-center gap-1.5"
            id="header-booking-link"
          >
            <Calendar className="w-4 h-4 inline-block text-[#FFD000]" />
            SCHEDULE PLUMBING SERVICE ONLINE
          </button>

          <div className="flex items-center gap-2 text-xs text-sky-100 pt-0.5">
            <Phone className="w-3.5 h-3.5 text-[#FFD000]" />
            <span>Emergency Plumbing: </span>
            <a href="tel:2168882273" className="font-extrabold text-[#FFD000] hover:underline">
              (216) 888-CARE (2273)
            </a>
          </div>
        </div>

        {/* Center: Ohio Pro Care Services Diamond Emblem Logo */}
        <div className="w-full lg:w-1/3 flex justify-center py-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block transition-transform hover:scale-105 duration-200 cursor-pointer"
            title="OHIO Pro Care Services - Plumbing Specialists"
            id="header-logo-btn"
          >
            <OhioProLogo size="header" />
          </button>
        </div>

        {/* Right: Ohio City Coverage & Fast Action */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2.5 text-xs">
          <div>
            <button
              onClick={onOpenServiceAreas}
              className="font-extrabold uppercase leading-snug tracking-tight text-white max-w-lg hover:text-[#FFD000] transition-colors cursor-pointer text-center lg:text-right"
              id="header-service-areas-btn"
            >
              <u className="underline decoration-[#FFD000] decoration-2">FULL COVERAGE ACROSS ALL OHIO CITY:</u>{' '}
              WE WORK IN EVERY PLACE &amp; STREET ACROSS FULL OHIO CITY (44113) • MARKET DISTRICT • FRANKLIN • BRIDGE • W 25TH • SOLO • ALL CORRIDORS
            </button>
          </div>

          {/* Action Badges & Social Links */}
          <div className="flex items-center space-x-2 pt-0.5">
            <button
              onClick={onOpenBooking}
              className="btn-yellow px-4 py-1.5 text-xs font-black tracking-wider uppercase cursor-pointer shadow-md text-[#0B1E36]"
              id="header-book-now-pill"
            >
              Book Plumber
            </button>

            {/* Maps Button */}
            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071526] hover:bg-[#FFD000] border border-sky-600/40 hover:border-[#FFD000] text-sky-200 hover:text-[#0B1E36] font-bold text-xs transition-all shadow-sm"
              title="Open Location on Google Maps"
              id="header-google-maps-btn"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFD000] group-hover:text-[#0B1E36]" />
              <span>Ohio City Map</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#071526] hover:bg-[#FFD000] border border-sky-800/60 hover:border-[#FFD000] flex items-center justify-center text-sky-200 hover:text-[#0B1E36] transition-all"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold tracking-wide uppercase text-sky-200 hover:text-[#FFD000] transition-colors inline-flex items-center gap-1"
          >
            DISPATCH HQ:{' '}
            <span className="font-semibold text-white underline decoration-[#FFD000] decoration-2">
              ALL PLACES ACROSS FULL OHIO CITY (VIEW MAP)
            </span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
