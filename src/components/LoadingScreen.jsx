import React, { useState, useEffect, useRef } from 'react';
import { Droplets, Sparkles, ArrowRight } from 'lucide-react';

export const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState('Connecting to All Places Across Full Ohio City (44113)...');
  const hasFinishedRef = useRef(false);

  const handleEnter = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish?.();
    }, 550);
  };

  useEffect(() => {
    // Preload logo in memory to eliminate render flash
    const img = new Image();
    img.src = '/images/logo.png?v=20260905-2';

    // Ultra-smooth monotonic progress timer based on real timestamp (1.6s total)
    const startTime = Date.now();
    const duration = 1600;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(pct);

      if (pct < 30) {
        setStatusText('Connecting to All Places Across Full Ohio City (44113)...');
      } else if (pct < 65) {
        setStatusText('Preparing Leak Detection & Hydro Jetting Equipment...');
      } else if (pct < 95) {
        setStatusText('Verifying Upfront $85.50 Diagnostic Availability...');
      } else {
        setStatusText('Welcome to OHIO Pro Care Services!');
      }

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          handleEnter();
        }, 250);
      }
    }, 25);

    // Absolute fallback failsafe (guarantees entry within 2.5s even if tab loses focus)
    const failsafe = setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
      handleEnter();
    }, 2500);

    // ESC key support
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      clearTimeout(failsafe);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071526] text-white overflow-hidden transition-all duration-700 ease-out select-none ${isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      id="splash-loading-screen"
    >
      {/* Background Ambient Plumbing Light & Water Droplet Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0F2D52_0%,_#071526_70%,_#030B14_100%)] pointer-events-none" />

      {/* Floating Water Droplet Particles in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <Droplets className="absolute top-[15%] left-[12%] w-10 h-10 text-sky-400 animate-floating" style={{ animationDuration: '4s' }} />
        <Droplets className="absolute top-[25%] right-[18%] w-14 h-14 text-sky-300 animate-floating" style={{ animationDuration: '5.5s', animationDelay: '1s' }} />
        <Droplets className="absolute bottom-[20%] left-[22%] w-12 h-12 text-[#FFD000] animate-floating" style={{ animationDuration: '4.8s', animationDelay: '0.5s' }} />
        <Droplets className="absolute bottom-[28%] right-[14%] w-8 h-8 text-sky-400 animate-floating" style={{ animationDuration: '3.8s', animationDelay: '1.5s' }} />
      </div>

      {/* Dynamic Animated Sea Water Waves Across Bottom */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-56 sm:h-72 md:h-84 w-full z-0">
        {/* SVG Gradients for Multi-depth Sea Water Waves */}
        <svg className="sr-only" aria-hidden="true">
          <defs>
            <linearGradient id="seaGradientBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#071526" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="seaGradientMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0369A1" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="seaGradientFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#0284C7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0B1E36" stopOpacity="0.98" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave 1: Deep Ocean Tide (Back Layer) */}
        <div className="absolute inset-0 w-[200%] h-full animate-sea-wave-back flex">
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,80 C360,140 720,20 1080,80 C1260,110 1380,60 1440,80 L1440,220 L0,220 Z"
              fill="url(#seaGradientBack)"
            />
          </svg>
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,80 C360,140 720,20 1080,80 C1260,110 1380,60 1440,80 L1440,220 L0,220 Z"
              fill="url(#seaGradientBack)"
            />
          </svg>
        </div>

        {/* Wave 2: Rolling Mid Sea Wave */}
        <div className="absolute inset-0 w-[200%] h-full animate-sea-wave-mid flex">
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,110 C280,40 560,160 840,90 C1120,40 1300,140 1440,110 L1440,220 L0,220 Z"
              fill="url(#seaGradientMid)"
            />
          </svg>
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,110 C280,40 560,160 840,90 C1120,40 1300,140 1440,110 L1440,220 L0,220 Z"
              fill="url(#seaGradientMid)"
            />
          </svg>
        </div>

        {/* Wave 3: Cresting Sea Surface Wave (Front Layer) */}
        <div className="absolute inset-0 w-[200%] h-full animate-sea-wave-front flex">
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,135 C320,80 640,170 960,120 C1200,90 1360,150 1440,135 L1440,220 L0,220 Z"
              fill="url(#seaGradientFront)"
            />
          </svg>
          <svg className="w-1/2 h-full shrink-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path
              d="M0,135 C320,80 640,170 960,120 C1200,90 1360,150 1440,135 L1440,220 L0,220 Z"
              fill="url(#seaGradientFront)"
            />
          </svg>
        </div>

        {/* Floating Ocean Bubbles Rising from Waves */}
        <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden pointer-events-none">
          <div className="absolute bottom-2 left-[15%] w-3.5 h-3.5 rounded-full bg-sky-200/40 blur-[0.5px] border border-white/60 animate-bubble-rise" style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
          <div className="absolute bottom-4 left-[35%] w-2.5 h-2.5 rounded-full bg-sky-300/40 blur-[0.5px] border border-white/50 animate-bubble-rise" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }} />
          <div className="absolute bottom-1 left-[55%] w-4 h-4 rounded-full bg-cyan-200/50 blur-[0.5px] border border-white/70 animate-bubble-rise" style={{ animationDelay: '0.6s', animationDuration: '3.8s' }} />
          <div className="absolute bottom-3 left-[75%] w-3 h-3 rounded-full bg-sky-200/40 blur-[0.5px] border border-white/60 animate-bubble-rise" style={{ animationDelay: '1.8s', animationDuration: '3.2s' }} />
          <div className="absolute bottom-2 left-[88%] w-2 h-2 rounded-full bg-white/60 blur-[0.5px] animate-bubble-rise" style={{ animationDelay: '2.3s', animationDuration: '4.5s' }} />
        </div>
      </div>

      {/* Floating Center Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">

        {/* Floating Logo Area with Concentric Water Ripples */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Concentric Water Pulse Rings */}
          <div className="absolute w-56 h-56 rounded-full border border-sky-400/30 animate-water-ripple pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full border border-[#FFD000]/20 animate-water-ripple pointer-events-none" style={{ animationDelay: '0.9s' }} />
          <div className="absolute inset-0 bg-[#FFD000]/15 rounded-full blur-2xl scale-125 pointer-events-none" />

          {/* Floating Logo itself */}
          <div className="relative z-10 animate-floating transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/logo.png?v=20260905-2"
              alt="OHIO Pro Care Services - Plumbing Care"
              className="h-36 sm:h-44 w-auto max-w-[340px] object-contain drop-shadow-[0_8px_24px_rgba(255,208,0,0.45)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD000]" />
          <span>Ohio City's Dedicated Plumbing Care</span>
        </div>

        {/* Progress Percentage Display */}
        <div className="font-condensed text-4xl sm:text-5xl font-black text-[#FFD000] tracking-wider mb-2">
          {progress}%
        </div>

        {/* Glowing Progress Bar */}
        <div className="w-full max-w-xs h-2.5 bg-[#0B1E36] rounded-full overflow-hidden border border-sky-500/40 shadow-inner p-0.5 mb-4">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-[#FFD000] to-[#FFE033] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,208,0,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Status Text */}
        <p className="text-xs sm:text-sm text-sky-100 font-medium tracking-wide min-h-[24px] mb-8 animate-pulse">
          {statusText}
        </p>

        {/* Fast Entry / Skip Button */}
        <button
          onClick={handleEnter}
          className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#FFD000] border border-sky-400/30 hover:border-[#FFD000] text-xs font-bold text-sky-200 hover:text-[#0B1E36] transition-all cursor-pointer shadow-md"
          id="skip-loading-btn"
        >
          <span>ENTER WEBSITE</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Bottom Dispatch Footer Note */}
      <div className="absolute bottom-6 text-center text-[11px] text-sky-300 font-medium">
        <p>Licensed &amp; Insured Plumbers • Serving All Places Across Full Ohio City • Flat $85.50 Diagnostic Rate</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
