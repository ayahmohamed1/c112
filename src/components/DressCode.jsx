import React from 'react';
import { motion } from 'framer-motion';

export default function DressCode({ dressCode }) {
  return (
    <section id="dresscode" className="py-8 sm:py-10 px-4 max-w-md mx-auto text-center">
      {/* Title */}
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#6B0F23] mb-1">
        ألوان الحفل المقترحة
      </h2>

      {/* Subtitle */}
      <p className="font-serif text-xs sm:text-sm text-[#6B0F23]/80 tracking-wide mt-1 mb-6">
        {dressCode.theme || 'نبيتي • زيتي • بيج فاتح'}
      </p>

      {/* 3 Horizontal Color Palette Circles */}
      <div className="flex items-center justify-center gap-5 sm:gap-8 my-5">
        {dressCode.palettes.map((item, index) => (
          <motion.div
            key={item.name || index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 border-white/80 ring-1 ring-[#6B0F23]/15 transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{ backgroundColor: item.hex }}
              title={item.name}
            />
            <span className="font-serif text-[11px] sm:text-xs tracking-wider text-[#6B0F23]/85 font-medium">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
