import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { invitationConfig } from './data/invitationData';

import EnvelopeCover from './components/EnvelopeCover';
import Announcement from './components/Announcement';
import PhotoGallery from './components/PhotoGallery';
import CountdownCalendar from './components/CountdownCalendar';
import VenueLocation from './components/VenueLocation';
import Guestbook from './components/Guestbook';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

export default function App() {
  // Envelope open state
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentCouple = invitationConfig.couple;
  const currentDate = invitationConfig.eventDate;
  const currentVenue = invitationConfig.venue;

  const handleStartAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    handleStartAudio();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReopenEnvelope = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#6B0F23] relative selection:bg-[#6B0F23] selection:text-white font-serif antialiased overflow-x-hidden">
      {/* 1. Global Luxury Floral Background Wallpaper (Enriches entire page with burgundy roses & gold swirls) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.24] z-0 bg-repeat bg-[length:380px_auto]"
        style={{ backgroundImage: 'url(/images/floral-bg.jpg)' }}
      />
      {/* 2. Soft Burgundy Ambient Tone */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#7B112E]/[0.02] via-transparent to-[#7B112E]/[0.03] z-0" />

      {/* Floating Audio Player (Bottom-right matching reference) */}
      <AudioPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        onTogglePlay={handleToggleMusic}
      />

      {/* Floating Top Control Toolbar */}
      <div className="fixed top-3 left-0 right-0 z-40 px-3 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="w-8 h-8 rounded-full bg-[#6B0F23] text-white text-xs font-bold flex items-center justify-center shadow-md">
            {currentCouple.monogram}
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Reopen Cover button */}
          <button
            onClick={handleReopenEnvelope}
            title="عرض شاشة الغلاف"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#6B0F23]/20 text-xs font-serif text-[#6B0F23] shadow-xs hover:bg-[#6B0F23] hover:text-white transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#7B112E]" />
            <span>الغلاف</span>
          </button>
        </div>
      </div>

      {/* Section 1: Cover Screen with Envelope Reveal (Transparent Floral Borders, No White Boxes) */}
      <EnvelopeCover
        couple={currentCouple}
        eventDate={currentDate}
        isOpened={isOpened}
        onOpen={handleOpenEnvelope}
        onStartAudio={handleStartAudio}
      />

      {/* Main Page Content (Centered Mobile-First Frame with Floral Pattern) */}
      <div className="w-full max-w-md mx-auto shadow-sm min-h-screen bg-[#FAF8F5]/95 relative overflow-hidden" dir="rtl">
        {/* Subtle Inner Floral Background Accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14] z-0 bg-repeat bg-[length:320px_auto]"
          style={{ backgroundImage: 'url(/images/floral-bg.jpg)' }}
        />

        {/* Section 2: Announcement (Slender Wide Frame & Ceremony Info) */}
        <Announcement couple={currentCouple} eventDate={currentDate} />

        {/* Section 3: Photo Gallery (2 side-by-side photos & garland) */}
        <PhotoGallery gallery={invitationConfig.gallery} />

        {/* Section 4: Reception Info, Countdown & Celestial Calendar with Heart marker */}
        <CountdownCalendar
          eventDate={currentDate}
          venue={currentVenue}
          couple={currentCouple}
        />

        {/* Section 5: Venue Location Map with Open in Maps button */}
        <VenueLocation venue={currentVenue} />

        {/* Section 6: Guestbook & Blessings (Input Box Area Only) */}
        <Guestbook couple={currentCouple} />

        {/* Footer */}
        <Footer couple={currentCouple} eventDate={currentDate} />
      </div>
    </div>
  );
}
