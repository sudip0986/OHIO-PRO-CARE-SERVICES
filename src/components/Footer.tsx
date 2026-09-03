import React from 'react';
import { KingsLogo } from './KingsLogo';
import { MapPin, Globe, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms
}) => {
  return (
    <footer className="bg-[#262626] text-white pt-16 pb-12 mt-12" id="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Col 1: Logo & Company Description */}
        <div className="md:col-span-5 flex flex-col items-start space-y-6">
          <KingsLogo size="md" />

          <div className="text-xs text-neutral-300 space-y-3 leading-relaxed">
            <h4 className="font-extrabold text-white text-xs tracking-wider uppercase">
              KINGS APPLIANCE SERVICE
            </h4>
            <p>
              Your one-stop shop for innovative solutions to appliance repairs + installations. Our family-owned business, established in 2020, catered to Colorado for the past 5 years, but starting this May, our headquarters will now be located in Sturgeon Bay, Wisconsin; where you'll find local, award-winning service throughout the Door County Area.
            </p>
            <p>
              Every service is backed by our customer satisfaction guarantee, so you won't find any hidden fees here! You'll only be charged a $79.95 service fee, which includes an estimate. Our team of experts are ready to tackle any repair or installation challenge, no matter the make or model, so let The Kings do the heavy-lifting, + bring it back to life!
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white">
            QUICK LINKS
          </h4>
          <ul className="text-xs space-y-2.5 font-bold tracking-wider text-neutral-300">
            <li>
              <button
                onClick={onOpenBooking}
                className="hover:text-[#18ff35] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-booking"
              >
                BOOKING FORM
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPrivacy}
                className="hover:text-[#18ff35] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-privacy"
              >
                PRIVACY POLICY
              </button>
            </li>
            <li>
              <button
                onClick={onOpenTerms}
                className="hover:text-[#18ff35] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-terms"
              >
                TERMS OF USE
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info & Hours */}
        <div className="md:col-span-4 flex flex-col space-y-3 text-xs">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white">
            CONTACT US:
          </h4>
          <div className="space-y-1">
            <p className="font-extrabold uppercase text-white">OUR HEADQUARTERS:</p>
            <p className="text-neutral-300">1031 WEST SPRUCE DRIVE</p>
            <p className="text-neutral-300">STURGEON BAY, WI 54235</p>
          </div>

          <div className="pt-2 space-y-2 text-neutral-300">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <a
                href="mailto:Kingsapplianceservice@gmail.com"
                className="hover:text-white transition-colors"
                id="footer-email"
              >
                Kingsapplianceservice@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <a
                href="tel:9208395515"
                className="hover:text-white transition-colors font-semibold"
                id="footer-phone"
              >
                920-839-5515
              </a>
            </p>

            <p className="text-neutral-400 pt-1">
              Hours: Mon-Fri 8:00AM - 5:00PM
            </p>
          </div>

          {/* Social Icons in Footer */}
          <div className="flex items-center space-x-2 pt-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Facebook"
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
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Map */}
            <a
              href="https://maps.google.com/?q=1031+West+Spruce+Drive+Sturgeon+Bay+WI+54235"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Google Maps"
            >
              <MapPin className="w-4 h-4 text-white" />
            </a>

            {/* Houzz */}
            <a
              href="https://houzz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-white hover:text-[#18ff35] transition-colors"
              title="Houzz"
            >
              <Globe className="w-4 h-4 text-white" />
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-[10px] text-neutral-400 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} Kings Appliance Service LLC. All rights reserved.</p>
            <p>Door County, Wisconsin Local Service</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
