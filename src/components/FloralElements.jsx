import React from 'react';

/**
 * Ornate Horizontal Floral Garland Divider (100% Transparent PNG, No white box)
 */
export function FloralGarland({ className = 'w-56 sm:w-72 my-4' }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src="/images/floral-garland.png"
        alt="Floral garland divider"
        className="w-full h-auto object-contain pointer-events-none drop-shadow-xs"
      />
    </div>
  );
}

/**
 * Blue watercolor floral corner bouquet (100% Transparent PNG, No white box)
 */
export function FloralBouquetCorner({ position = 'top-right', className = 'w-28 sm:w-36' }) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 -scale-x-100';
      case 'bottom-right':
        return 'bottom-0 right-0 -scale-y-100';
      case 'bottom-left':
        return 'bottom-0 left-0 -scale-x-100 -scale-y-100';
      case 'mid-left':
        return 'top-1/2 -translate-y-1/2 left-0 -scale-x-100';
      case 'mid-right':
        return 'top-1/2 -translate-y-1/2 right-0';
      default:
        return 'top-0 right-0';
    }
  };

  return (
    <div className={`absolute pointer-events-none select-none z-0 ${getPositionClasses()} ${className}`}>
      <img
        src="/images/floral-bouquet.png"
        alt="Watercolor floral corner"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

/**
 * Celestial Calendar Frame with Crescent Moon & Stars Corner Medallions
 */
export function CelestialCalendarFrame({ children, className = '' }) {
  return (
    <div className={`relative p-5 sm:p-7 rounded-2xl bg-[#FCFBF7]/95 backdrop-blur-xs border-[1.5px] border-[#C8B896] shadow-[0_4px_25px_rgba(20,40,70,0.06)] overflow-hidden ${className}`}>
      {/* Top Left Medallion */}
      <div className="absolute top-1 left-1 w-10 h-10 sm:w-12 sm:h-12 pointer-events-none z-10">
        <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
          <circle cx="22" cy="22" r="16" fill="#5A0B1D" />
          <path d="M 23 12 A 10 10 0 0 0 23 32 A 8 8 0 0 1 23 12 Z" fill="#FCFBF7" />
          <circle cx="26" cy="18" r="1" fill="#D4AF37" />
          <circle cx="28" cy="24" r="0.8" fill="#D4AF37" />
          <path d="M 4 22 C 4 10, 10 4, 22 4" stroke="#C8B896" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 32 C 2 8, 8 2, 32 2" stroke="#5A0B1D" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 2" />
          <circle cx="6" cy="6" r="2" fill="#C8B896" />
        </svg>
      </div>

      {/* Top Right Medallion */}
      <div className="absolute top-1 right-1 w-10 h-10 sm:w-12 sm:h-12 pointer-events-none z-10 -scale-x-100">
        <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
          <circle cx="22" cy="22" r="16" fill="#5A0B1D" />
          <path d="M 23 12 A 10 10 0 0 0 23 32 A 8 8 0 0 1 23 12 Z" fill="#FCFBF7" />
          <circle cx="26" cy="18" r="1" fill="#D4AF37" />
          <circle cx="28" cy="24" r="0.8" fill="#D4AF37" />
          <path d="M 4 22 C 4 10, 10 4, 22 4" stroke="#C8B896" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 32 C 2 8, 8 2, 32 2" stroke="#5A0B1D" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 2" />
          <circle cx="6" cy="6" r="2" fill="#C8B896" />
        </svg>
      </div>

      {/* Bottom Left Medallion */}
      <div className="absolute bottom-1 left-1 w-10 h-10 sm:w-12 sm:h-12 pointer-events-none z-10 -scale-y-100">
        <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
          <circle cx="22" cy="22" r="16" fill="#5A0B1D" />
          <path d="M 23 12 A 10 10 0 0 0 23 32 A 8 8 0 0 1 23 12 Z" fill="#FCFBF7" />
          <circle cx="26" cy="18" r="1" fill="#D4AF37" />
          <circle cx="28" cy="24" r="0.8" fill="#D4AF37" />
          <path d="M 4 22 C 4 10, 10 4, 22 4" stroke="#C8B896" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 32 C 2 8, 8 2, 32 2" stroke="#5A0B1D" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 2" />
          <circle cx="6" cy="6" r="2" fill="#C8B896" />
        </svg>
      </div>

      {/* Bottom Right Medallion */}
      <div className="absolute bottom-1 right-1 w-10 h-10 sm:w-12 sm:h-12 pointer-events-none z-10 -scale-x-100 -scale-y-100">
        <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
          <circle cx="22" cy="22" r="16" fill="#5A0B1D" />
          <path d="M 23 12 A 10 10 0 0 0 23 32 A 8 8 0 0 1 23 12 Z" fill="#FCFBF7" />
          <circle cx="26" cy="18" r="1" fill="#D4AF37" />
          <circle cx="28" cy="24" r="0.8" fill="#D4AF37" />
          <path d="M 4 22 C 4 10, 10 4, 22 4" stroke="#C8B896" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 32 C 2 8, 8 2, 32 2" stroke="#5A0B1D" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1 2" />
          <circle cx="6" cy="6" r="2" fill="#C8B896" />
        </svg>
      </div>

      {/* Inner thin gold border */}
      <div className="absolute inset-2 sm:inset-3 border border-[#C8B896]/60 rounded-xl pointer-events-none" />

      {/* Calendar Contents */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
