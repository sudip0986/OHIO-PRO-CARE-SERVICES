import React from 'react';
import { OhioProLogo } from './OhioProLogo';
import { MapPin, Globe, Mail, Phone, Clock, ArrowRight, Droplets } from 'lucide-react';

export const Footer = ({
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms
}) => {
  return (
    <footer className="bg-[#071526] text-white pt-16 pb-12 mt-12 border-t border-sky-900/60 shadow-2xl" id="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

        {/* Col 1: Logo & Company Description */}
        <div className="md:col-span-5 flex flex-col items-start space-y-6">
          <OhioProLogo size="footer" />

          <div className="text-xs text-sky-100 space-y-3 leading-relaxed">
            <h4 className="font-extrabold text-[#FFD000] text-sm tracking-wider uppercase flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-[#FFD000]" />
              OHIO PRO CARE SERVICES
            </h4>
            <p>
              Your trusted Ohio City partner for dependable, licensed solutions in leak detection, emergency pipe repair, water heater replacement, drain cleaning, and fixture installations. Proudly serving Ohio City, Cleveland, and surrounding Ohio communities with upfront pricing and certified plumbers.
            </p>
            <p>
              Every visit is covered by our flat $85.50 diagnostic rate and a comprehensive 90-day parts and labor warranty on all installed plumbing materials. Let Ohio Pro Care Services safeguard your home from water damage!
            </p>
          </div>
        </div>

        {/* Col 2: Quick Links & Yellow Hyperlinks */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white border-b border-sky-900/60 pb-2">
            QUICK LINKS
          </h4>
          <ul className="text-xs space-y-3 font-bold tracking-wider">
            <li>
              <button
                onClick={onOpenBooking}
                className="link-yellow transition-colors uppercase text-left cursor-pointer flex items-center gap-1.5 text-[#FFD000] hover:text-white"
                id="footer-link-booking"
              >
                <span>BOOK A PLUMBER</span>
                <ArrowRight className="w-3 h-3 text-[#FFD000]" />
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPrivacy}
                className="text-sky-200 hover:text-[#FFD000] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-privacy"
              >
                PRIVACY POLICY
              </button>
            </li>
            <li>
              <button
                onClick={onOpenTerms}
                className="text-sky-200 hover:text-[#FFD000] transition-colors uppercase text-left cursor-pointer"
                id="footer-link-terms"
              >
                TERMS OF SERVICE
              </button>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="btn-yellow w-full py-2.5 text-xs font-black tracking-wider uppercase rounded-lg shadow-md cursor-pointer text-[#0B1E36]"
              id="footer-cta-book"
            >
              BOOK PLUMBING SERVICE
            </button>
          </div>
        </div>

        {/* Col 3: Contact Info & Hours */}
        <div className="md:col-span-4 flex flex-col space-y-3 text-xs">
          <h4 className="font-bold text-sm tracking-wider uppercase text-white border-b border-sky-900/60 pb-2">
            OHIO CITY DISPATCH:
          </h4>
          <div className="space-y-1">
            <p className="font-extrabold uppercase text-[#FFD000]">PLUMBING HEADQUARTERS:</p>
            <p className="text-sky-100">All Places Across Full Ohio City (Cleveland, OH - 44113)</p>
            <p className="text-sky-300">Market District, Franklin Blvd, Bridge Ave, SoLo, W 25th &amp; All Neighborhoods</p>
            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD000] hover:underline font-bold text-xs inline-flex items-center gap-1 pt-1"
              id="footer-google-maps-link"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFD000]" />
              <span>View Ohio City Dispatch on Google Maps</span>
            </a>
          </div>

          <div className="pt-2 space-y-2.5 text-sky-100">
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
                href="tel:2168882273"
                className="hover:text-white transition-colors font-bold text-sm text-[#FFD000]"
                id="footer-phone"
              >
                (216) 888-CARE (2273)
              </a>
            </p>

            <p className="flex items-center gap-2 text-sky-300 pt-1">
              <Clock className="w-4 h-4 text-[#FFD000] shrink-0" />
              <span>24/7 Emergency Line | Mon-Fri: 7:00 AM - 7:00 PM</span>
            </p>
          </div>

          {/* Social Icons in Footer with Yellow Hover */}
          <div className="flex items-center space-x-2 pt-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#0B1E36] hover:bg-[#FFD000] border border-sky-800/60 hover:border-[#FFD000] flex items-center justify-center text-sky-200 hover:text-[#0B1E36] transition-all"
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
              className="w-8 h-8 rounded-lg bg-[#0B1E36] hover:bg-[#FFD000] border border-sky-800/60 hover:border-[#FFD000] flex items-center justify-center text-sky-200 hover:text-[#0B1E36] transition-all"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Map */}
            <a
              href="https://maps.app.goo.gl/eRbZChGvteivUpCTA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#0B1E36] hover:bg-[#FFD000] border border-sky-800/60 hover:border-[#FFD000] flex items-center justify-center text-sky-200 hover:text-[#0B1E36] transition-all"
              title="View on Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-sky-900/60 text-[11px] text-sky-300 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} OHIO Pro Care Services LLC. All rights reserved.</p>
            <p className="text-[#FFD000] font-bold">Ohio City Proud Plumbing Service</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
