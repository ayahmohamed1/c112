import React from 'react';
import { motion } from 'framer-motion';
import { FloralGarland, FloralBouquetCorner } from './FloralElements';

export default function Announcement({ couple, eventDate }) {
  return (
    <section className="relative pt-6 pb-8 px-4 text-center overflow-hidden">
      {/* Background Side Watercolor Florals (Transparent PNGs, Zero White Box) */}
      <FloralBouquetCorner position="top-left" className="w-32 sm:w-40 -top-6 -left-8 opacity-80" />
      <FloralBouquetCorner position="top-right" className="w-32 sm:w-40 -top-6 -right-8 opacity-80" />
      <FloralBouquetCorner position="mid-left" className="w-28 sm:w-36 -left-8 opacity-60" />
      <FloralBouquetCorner position="mid-right" className="w-28 sm:w-36 -right-8 opacity-60" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center pt-2">
        {/* 1. Exact Rococo Cartouche Floral Frame in Burgundy & Antique Gold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-72 sm:w-80 max-w-[340px] aspect-[348/444] my-3 flex items-center justify-center select-none"
        >
          {/* Exact Transparent Reference Frame in Burgundy & Gold */}
          <img
            src="/images/baroque-frame.png"
            alt="Exact Rococo Cartouche Floral Frame in Burgundy & Gold"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-sm"
          />

          {/* Names Inside the Spacious Frame */}
          <div className="relative z-10 flex flex-col items-center justify-center px-10 text-center -mt-1">
            {couple.bride ? (
              <>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#6B0F23] leading-tight">
                  {couple.groom}
                </h2>
                <p className="font-serif italic text-base sm:text-lg text-[#6B0F23]/70 my-1">
                  &
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#6B0F23] leading-tight">
                  {couple.bride}
                </h2>
              </>
            ) : (
              <>
                <span className="font-serif text-sm sm:text-base text-[#6B0F23]/80 font-semibold mb-1">
                  حفل زفاف
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-[#6B0F23] leading-tight">
                  {couple.groom}
                </h2>
              </>
            )}
          </div>
        </motion.div>

        {/* 2. Ceremony Info Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 mb-6 text-center"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#6B0F23] mb-2">
            {couple.ceremonyHeader || 'تفاصيل الحفل'}
          </h3>

          <div className="space-y-1">
            <p className="font-serif text-sm sm:text-base text-[#6B0F23] font-normal">
              {couple.announcementLine1 || 'بكل بهجة وسرور نتشرف بدعوتكم'}
            </p>
            <p className="font-serif text-sm sm:text-base text-[#6B0F23] font-normal">
              {couple.announcementLine2 || 'لحضور حفل زفاف نجلنا الغالي'}
            </p>
          </div>
        </motion.div>

        {/* 3. Detailed Names with Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="my-3 space-y-3"
        >
          {/* Groom */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-3xl sm:text-4xl text-[#6B0F23] font-bold tracking-wide">
              {couple.groom}
            </h4>
            <span className="text-xs sm:text-sm tracking-widest text-[#6B0F23]/80 font-medium mt-1.5">
              {couple.groomTitle || 'العريس'}
            </span>
          </div>

          {/* Bride if available */}
          {couple.bride && (
            <>
              <div className="font-serif italic text-xl sm:text-2xl text-[#6B0F23]/70 py-0.5">
                &
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-serif text-3xl sm:text-4xl text-[#6B0F23] font-bold tracking-wide">
                  {couple.bride}
                </h4>
                <span className="text-xs sm:text-sm tracking-widest text-[#6B0F23]/80 font-medium mt-1.5">
                  {couple.brideTitle || 'العروس'}
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* 4. Bottom Horizontal Floral Garland Divider (100% Transparent PNG) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full flex justify-center mt-7 mb-2"
        >
          <FloralGarland className="w-60 sm:w-76" />
        </motion.div>
      </div>
    </section>
  );
}
