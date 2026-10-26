import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

// 40 Wide-spreading Floral particles erupting across the entire screen from the Open button
const floralBurstParticles = [
  // Ring 1: Medium reach (220px - 280px)
  { id: 1, angle: 0, distance: 230, scale: 1.2, rot: 180, type: 'flower' },
  { id: 2, angle: 25, distance: 260, scale: 0.95, rot: -240, type: 'petal' },
  { id: 3, angle: 50, distance: 285, scale: 1.3, rot: 320, type: 'flower' },
  { id: 4, angle: 75, distance: 245, scale: 0.9, rot: -180, type: 'rose' },
  { id: 5, angle: 100, distance: 275, scale: 1.25, rot: 270, type: 'flower' },
  { id: 6, angle: 125, distance: 265, scale: 0.95, rot: -290, type: 'petal' },
  { id: 7, angle: 150, distance: 235, scale: 1.15, rot: 210, type: 'flower' },
  { id: 8, angle: 175, distance: 275, scale: 0.9, rot: -160, type: 'rose' },
  { id: 9, angle: 200, distance: 255, scale: 1.2, rot: 300, type: 'flower' },
  { id: 10, angle: 225, distance: 285, scale: 0.95, rot: -220, type: 'petal' },
  { id: 11, angle: 250, distance: 245, scale: 1.15, rot: 240, type: 'flower' },
  { id: 12, angle: 275, distance: 265, scale: 0.9, rot: -190, type: 'rose' },
  { id: 13, angle: 300, distance: 285, scale: 1.3, rot: 330, type: 'flower' },
  { id: 14, angle: 325, distance: 255, scale: 0.95, rot: -260, type: 'petal' },
  { id: 15, angle: 350, distance: 275, scale: 1.1, rot: 200, type: 'flower' },

  // Ring 2: Wide outreach (380px - 520px) - Flies way past the card onto the screen!
  { id: 16, angle: 15, distance: 430, scale: 1.1, rot: 480, type: 'flower' },
  { id: 17, angle: 38, distance: 490, scale: 0.9, rot: -520, type: 'petal' },
  { id: 18, angle: 62, distance: 460, scale: 1.2, rot: 540, type: 'rose' },
  { id: 19, angle: 85, distance: 520, scale: 1.0, rot: -460, type: 'flower' },
  { id: 20, angle: 108, distance: 470, scale: 0.9, rot: 500, type: 'petal' },
  { id: 21, angle: 132, distance: 500, scale: 1.15, rot: -540, type: 'flower' },
  { id: 22, angle: 155, distance: 450, scale: 0.85, rot: 470, type: 'rose' },
  { id: 23, angle: 178, distance: 480, scale: 1.1, rot: -510, type: 'flower' },
  { id: 24, angle: 202, distance: 530, scale: 0.9, rot: 530, type: 'petal' },
  { id: 25, angle: 225, distance: 470, scale: 1.15, rot: -490, type: 'flower' },
  { id: 26, angle: 248, distance: 500, scale: 0.85, rot: 520, type: 'rose' },
  { id: 27, angle: 272, distance: 450, scale: 1.05, rot: -480, type: 'flower' },
  { id: 28, angle: 295, distance: 510, scale: 0.9, rot: 540, type: 'petal' },
  { id: 29, angle: 318, distance: 470, scale: 1.2, rot: -500, type: 'flower' },
  { id: 30, angle: 342, distance: 490, scale: 0.85, rot: 520, type: 'rose' },

  // Ring 3: Ultra-wide high velocity petals & flowers (520px - 620px)
  { id: 31, angle: 30, distance: 560, scale: 0.9, rot: 600, type: 'petal' },
  { id: 32, angle: 70, distance: 540, scale: 1.05, rot: -620, type: 'flower' },
  { id: 33, angle: 110, distance: 580, scale: 0.85, rot: 580, type: 'petal' },
  { id: 34, angle: 150, distance: 550, scale: 1.0, rot: -640, type: 'flower' },
  { id: 35, angle: 190, distance: 570, scale: 0.9, rot: 610, type: 'petal' },
  { id: 36, angle: 230, distance: 540, scale: 1.05, rot: -590, type: 'flower' },
  { id: 37, angle: 270, distance: 580, scale: 0.85, rot: 630, type: 'petal' },
  { id: 38, angle: 310, distance: 550, scale: 1.0, rot: -600, type: 'flower' },
  { id: 39, angle: 330, distance: 530, scale: 0.9, rot: 580, type: 'rose' },
  { id: 40, angle: 90, distance: 510, scale: 0.95, rot: -620, type: 'rose' },
];

export default function EnvelopeCover({ couple, eventDate, isOpened, onOpen, onStartAudio }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpened || isOpening) return;
    setIsOpening(true);

    if (onStartAudio) {
      onStartAudio();
    }

    try {
      // 1. Central high-energy floral burst
      confetti({
        particleCount: 80,
        spread: 140,
        startVelocity: 45,
        origin: { y: 0.72 },
        colors: ['#6B0F23', '#8B1E37', '#5E0D22', '#C8B896', '#FAF8F5'],
        scalar: 1.3,
      });

      // 2. Wide-angled side cannons shooting outward
      setTimeout(() => {
        // Left cannon shooting up and right
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.15, y: 0.75 },
          colors: ['#7B112E', '#9E1B32', '#C8B896', '#E8C8D0'],
          scalar: 1.2,
        });
        // Right cannon shooting up and left
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.85, y: 0.75 },
          colors: ['#7B112E', '#9E1B32', '#C8B896', '#E8C8D0'],
          scalar: 1.2,
        });
      }, 150);

      // 3. Falling romantic shower of golden and burgundy petals from the top
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 160,
          startVelocity: 30,
          origin: { y: 0.25 },
          colors: ['#8B1538', '#5E0D22', '#D4AF37', '#FAF8F5'],
          scalar: 1.2,
          gravity: 0.75,
        });
      }, 280);
    } catch (e) {
      console.error(e);
    }

    // Allow user to witness the massive floral explosion before unveiling
    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1250);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="envelope-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#4D0817] p-4 sm:p-6 select-none overflow-hidden"
        >
          {/* SVG Definitions for Rose Petals */}
          <svg className="absolute w-0 h-0 pointer-events-none">
            <defs>
              <linearGradient id="burgundyPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9E1B32" />
                <stop offset="50%" stopColor="#6B0F23" />
                <stop offset="100%" stopColor="#430713" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Invitation Card with Clean Ivory Texture & Subtle Burgundy Floral Wallpaper */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[340px] sm:max-w-[370px] bg-[#FAF8F5] rounded-[32px] p-8 sm:p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-[#E9E4DB] overflow-visible"
          >
            {/* Subtle Burgundy Floral Wallpaper in Card Background */}
            <div
              className="absolute inset-0 opacity-12 pointer-events-none bg-cover bg-center rounded-[32px] overflow-hidden"
              style={{ backgroundImage: 'url(/images/floral-bg.jpg)' }}
            />

            {/* Inner Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Top Heart Badge with Soft Burgundy Glow */}
              <div className="relative my-2 mb-6">
                <div className="absolute inset-0 rounded-full bg-[#6B0F23]/35 blur-md scale-150" />
                <div className="relative w-14 h-14 rounded-full bg-[#6B0F23] flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Couple / Groom & Bride Name in Burgundy (Groom on top, Bride underneath) */}
              {couple.coverBride ? (
                <div className="space-y-0.5 my-1">
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#6B0F23] uppercase">
                    {couple.coverGroom || couple.groom || 'AHMED'}
                  </h1>
                  <p className="font-serif italic text-lg text-[#6B0F23]/80 font-normal">
                    &
                  </p>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#6B0F23] uppercase">
                    {couple.coverBride}
                  </h1>
                </div>
              ) : (
                <div className="space-y-1 my-2">
                  <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#6B0F23]/70 font-semibold">
                    Wedding Invitation
                  </p>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.2em] text-[#6B0F23] uppercase">
                    {couple.coverGroom || 'AHMED'}
                  </h1>
                </div>
              )}

              {/* Thin line with diamond ornament in Burgundy */}
              <div className="flex items-center justify-center gap-2 w-32 my-4">
                <div className="h-[0.8px] bg-[#6B0F23]/30 flex-1" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#6B0F23]/50 bg-[#6B0F23]/20" />
                <div className="h-[0.8px] bg-[#6B0F23]/30 flex-1" />
              </div>

              {/* Date in Burgundy */}
              <p className="font-serif text-base sm:text-lg text-[#6B0F23] font-normal tracking-wide">
                {eventDate.display}
              </p>

              {/* Subtitle: Cordially Invites */}
              <p className="font-serif text-sm sm:text-base text-[#6B0F23]/80 tracking-wide mt-3 mb-6">
                Cordially Invites
              </p>

              {/* Royal Burgundy Pill "Open" Button Container */}
              <div className="relative w-full flex items-center justify-center">
                {/* 360-degree Massive Flying Flowers & Petals Explosion */}
                {isOpening && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                    {floralBurstParticles.map((p) => {
                      const rad = (p.angle * Math.PI) / 180;
                      const targetX = Math.cos(rad) * p.distance;
                      const targetY = Math.sin(rad) * p.distance;

                      return (
                        <motion.div
                          key={p.id}
                          initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                          animate={{
                            x: [0, targetX * 0.35, targetX],
                            y: [0, targetY * 0.35 - 35, targetY],
                            scale: [0, p.scale * 1.45, p.scale],
                            opacity: [0, 1, 1, 0],
                            rotate: [0, p.rot * 0.5, p.rot],
                          }}
                          transition={{
                            duration: 1.2,
                            ease: [0.12, 0.95, 0.22, 1],
                          }}
                          className="absolute pointer-events-none select-none drop-shadow-2xl"
                        >
                          {p.type === 'flower' ? (
                            <img
                              src="/images/floral-bouquet.png"
                              alt="Blooming flower"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                          ) : p.type === 'petal' ? (
                            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                              <path
                                d="M12 2 C7 2 3 7 3 13 C3 18.5 7.5 22 12 22 C16.5 22 21 18.5 21 13 C21 7 17 2 12 2 Z"
                                fill="url(#burgundyPetalGrad)"
                              />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
                              <circle cx="12" cy="12" r="10" fill="#5E0D22" />
                              <path
                                d="M12 5 C8.5 5 7 8 7 12 C7 16.5 12 19 12 19 C12 19 17 16.5 17 12 C17 8 15.5 5 12 5 Z"
                                fill="#9E1B32"
                              />
                              <circle cx="12" cy="11" r="2.5" fill="#FAF8F5" />
                            </svg>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* The Open Button */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenClick}
                  disabled={isOpening}
                  className="w-full max-w-[200px] py-3 rounded-full bg-[#6B0F23] hover:bg-[#500A1A] text-white font-serif tracking-wider font-semibold text-sm sm:text-base shadow-[0_8px_20px_rgba(107,15,35,0.38)] transition-all duration-300 cursor-pointer relative z-10"
                >
                  {isOpening ? 'Opening...' : 'Open'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
