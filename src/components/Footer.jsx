import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ couple, eventDate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 text-center border-t border-[#6B0F23]/10 mt-6 bg-[#FAF8F5]">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
        <h3 className="font-serif text-lg font-bold tracking-wide text-[#6B0F23]">
          {couple.primary}
        </h3>

        <p className="font-serif text-xs text-[#6B0F23]/80 tracking-wide">
          {eventDate.displayAr || eventDate.display}
        </p>

        <button
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6B0F23] text-white text-xs font-serif hover:bg-[#500A1A] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowUp className="w-3 h-3" />
          <span>العودة للأعلى</span>
        </button>
      </div>
    </footer>
  );
}
