import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { MapPin, Globe, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

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
    <footer className="bg-[#101010] text-white pt-16 pb-12 mt-12 border-t border-neutral-800" id="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Col 1: Logo & Company Description */}
        <div className="md:col-span-5 flex flex-col items-start space-y-6">
          <OhioProLogo size="md" />

          <div className="text-xs text-neutral-300 space-y-3 leading-relaxed">
            <h4 className="font-extrabold text-[#FFD000] text-sm tracking-wider uppercase">
              OHIO PRO CARE SERVICES
            </h4>
            <p>
              Your trusted Ohio partner for innovative, dependable solutions in appliance repair, maintenance, installation, and home care. Proudly serving Central and Greater Ohio with certified, background-checked technicians and upfront pricing.
            </p>
            <p>
              Every service visit is protected by our transparent $79.95 flat diagnostic fee and a comprehensive 90-day warranty on all replacement parts and labor. Let Ohio Pro Care Services do the heavy lifting to keep your household running at peak efficiency!
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links & Yellow Hyperlinks */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white border-b border-neutral-800 pb-2">
            QUICK LINKS
          </h4>
          <ul className="text-xs space-y-3 font-bold tracking-wider">
            <li>
              <button
                onClick={onOpenBooking}
                className="link-yellow transition-colors uppercase text-left cursor-pointer flex items-center gap-1.5"
                id="footer-link-booking"
              >
                <span>ONLINE BOOKING</span>
                <ArrowRight className="w-3 h-3 text-[#FFD000]" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPrivacy}
                className="text-neutral-300 hover:text-[#FFD000] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-privacy"
              >
                PRIVACY POLICY
              </button>
            </li>
            <li>
              <button
                onClick={onOpenTerms}
                className="text-neutral-300 hover:text-[#FFD000] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-terms"
              >
                TERMS OF SERVICE
              </button>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="btn-yellow w-full py-2.5 text-xs font-black tracking-wider uppercase rounded-lg shadow-md cursor-pointer"
              id="footer-cta-book"
            >
              BOOK SERVICE ONLINE
            </button>
          </div>
        </div>

        {/* Col 3: Contact Info & Hours */}
        <div className="md:col-span-4 flex flex-col space-y-3 text-xs">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white border-b border-neutral-800 pb-2">
            CONNECT WITH US:
          </h4>
          <div className="space-y-1">
            <p className="font-extrabold uppercase text-[#FFD000]">CENTRAL OHIO DISPATCH:</p>
            <p className="text-neutral-300">Greater Columbus &amp; Regional Service Hubs</p>
            <p className="text-neutral-400">Serving Columbus, Cleveland, Cincinnati &amp; Statewide</p>
          </div>

          <div className="pt-2 space-y-2.5 text-neutral-300">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFD000] shrink-0" />
              <a
                href="mailto:contact@ohioprocareservices.com"
                className="hover:text-[#FFD000] transition-colors"
                id="footer-email"
              >
                contact@ohioprocareservices.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FFD000] shrink-0" />
              <a
                href="tel:6148882273"
                className="hover:text-[#FFD000] transition-colors font-bold text-sm text-[#FFD000]"
                id="footer-phone"
              >
                (614) 888-CARE (2273)
              </a>
            </p>

            <p className="flex items-center gap-2 text-neutral-400 pt-1">
              <Clock className="w-4 h-4 text-[#FFD000] shrink-0" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM</span>
            </p>
          </div>

          {/* Social Icons in Footer with Yellow Hover */}
          <div className="flex items-center space-x-2 pt-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
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
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
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
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Map */}
            <a
              href="https://maps.google.com/?q=Columbus+OH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#FFD000] border border-neutral-700 hover:border-[#FFD000] flex items-center justify-center text-white hover:text-black transition-all"
              title="Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} OHIO Pro Care Services LLC. All rights reserved.</p>
            <p className="text-[#FFD000]">Ohio Proud Local Service</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
