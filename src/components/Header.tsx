import React from 'react';
import { KingsLogo } from './KingsLogo';
import { MapPin, Globe } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenServiceAreas: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenServiceAreas }) => {
  return (
    <header className="bg-[#262626] text-white py-6 px-4 md:px-8 border-b border-neutral-800" id="top-navigation-header">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Schedule Online Quick Link */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-300">
            SCHEDULE ONLINE:
          </span>
          <button
            onClick={onOpenBooking}
            className="text-white font-bold text-base md:text-lg underline underline-offset-4 hover:text-[#18ff35] transition-colors mt-1 cursor-pointer text-left"
            id="header-booking-link"
          >
            BIT.LY/KINGSAPPLIANCEBOOKINGFORM
          </button>
        </div>

        {/* Center: Kings Diamond Emblem Logo */}
        <div className="w-full lg:w-1/3 flex justify-center py-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block transition-transform hover:scale-105 duration-200 cursor-pointer"
            title="Kings Appliance Service"
            id="header-logo-btn"
          >
            <KingsLogo size="md" />
          </button>
        </div>

        {/* Right: Service Areas, Social Icons & HQ Address */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2.5 text-xs">
          <div>
            <button
              onClick={onOpenServiceAreas}
              className="font-extrabold uppercase leading-snug tracking-tight text-white max-w-lg hover:text-[#18ff35] transition-colors cursor-pointer text-center lg:text-right"
              id="header-service-areas-btn"
            >
              <u className="underline decoration-[#18ff35] decoration-2">WI SERVICE AREAS:</u>{' '}
              FORESTVILLE, STURGEON BAY, EGG HARBOR, BAILEYS HARBOR, GIBRALTAR, FISH CREEK, EPHRAIM, SISTER BAY, ELLISON BAY, GILLS ROCK, WASHINGTON ISLAND, + MORE
            </button>
          </div>

          {/* Social Media Icon Badges */}
          <div className="flex items-center space-x-2 pt-1 pb-1">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
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
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Instagram"
              id="social-instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="LinkedIn"
              id="social-linkedin"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Map / Location */}
            <a
              href="https://maps.google.com/?q=1031+West+Spruce+Drive+Sturgeon+Bay+WI+54235"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Google Maps"
              id="social-maps"
            >
              <MapPin className="w-4 h-4 text-white" />
            </a>

            {/* Yelp */}
            <a
              href="https://yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Yelp"
              id="social-yelp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.016 13.725l1.64 4.672c.237.674-.298 1.342-.988 1.23l-4.887-.79c-.588-.095-.824-.803-.437-1.258l3.18-3.742a.798.798 0 011.492-.112zm-2.046-2.484L5.27 9.878c-.672-.243-.787-1.127-.215-1.572l4.053-3.155c.489-.38 1.189-.047 1.253.564l.519 4.88a.8.8 0 01-1.41.646zm2.846.52l4.63-1.755c.668-.253 1.272.378 1.12 1.07l-1.073 4.834c-.13.585-.858.824-1.325.438l-3.805-3.141a.8.8 0 01.453-1.446zm1.19-2.025l1.39-4.755c.201-.687-.417-1.312-1.096-1.112l-4.808 1.416c-.579.17-.736.887-.291 1.303l3.63 3.398a.798.798 0 001.175-.25z" />
              </svg>
            </a>

            {/* Houzz / Home */}
            <a
              href="https://houzz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Houzz"
              id="social-houzz"
            >
              <Globe className="w-4 h-4 text-white" />
            </a>
          </div>

          <p className="font-extrabold tracking-wide uppercase text-neutral-200">
            OUR HEADQUARTERS:{' '}
            <span className="font-normal text-neutral-300">
              1031 WEST SPRUCE DRIVE | STURGEON BAY, WI - 54235
            </span>
          </p>
        </div>

      </div>
    </header>
  );
};
