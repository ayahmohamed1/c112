import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function VenueLocation({ venue }) {
  return (
    <section id="venue" className="py-8 sm:py-12 px-4 max-w-md mx-auto text-center">
      {/* Venue Header */}
      <div className="mb-6">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#6B0F23] mb-1">
          موقع الحفل
        </h2>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#6B0F23] font-bold tracking-wide mt-2">
          {venue.name}
        </h3>
        {venue.subtitle && (
          <p className="font-serif text-xs sm:text-sm text-[#6B0F23]/80 tracking-wide mt-1">
            {venue.subtitle}
          </p>
        )}
        {venue.address && (
          <p className="font-serif text-xs sm:text-sm text-[#6B0F23]/70 tracking-wide mt-0.5">
            {venue.address}
          </p>
        )}
      </div>

      {/* Map Card */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#E7E2D8] shadow-md border border-[#D9D3C7]">
        {/* Floating "Open in Maps" Button in Top-Left */}
        <div className="absolute top-3 left-3 z-20">
          <a
            href={venue.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white/95 hover:bg-white text-[#6B0F23] border border-[#6B0F23]/15 text-xs font-serif font-medium shadow-md transition-all cursor-pointer"
          >
            <span>فتح في خرائط جوجل</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6B0F23]" />
          </a>
        </div>

        {/* Map Iframe */}
        <iframe
          title="Wedding Reception Venue Map"
          src={venue.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[10%] contrast-[1.05]"
        />
      </div>
    </section>
  );
}
