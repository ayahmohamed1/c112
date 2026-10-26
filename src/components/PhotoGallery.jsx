import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { FloralGarland } from './FloralElements';

export default function PhotoGallery({ gallery }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Take the first 2 photos for the side-by-side layout
  const photos = gallery.slice(0, 2);

  return (
    <section id="gallery" className="py-6 sm:py-8 px-4 max-w-lg mx-auto text-center">
      {/* Title */}
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#6B0F23] mb-6">
        معرض الصور
      </h2>

      {/* Photos Grid (Centers 1 photo or shows 2 side-by-side) */}
      <div className={`grid ${photos.length === 1 ? 'grid-cols-1 max-w-[280px] mx-auto' : 'grid-cols-2'} gap-3 sm:gap-4`}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id || index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAE6DF] shadow-md border border-[#D9D3C7] cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title || `Gallery photo ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Subtle inner gold frame */}
            <div className="absolute inset-1.5 border border-white/40 rounded-xl pointer-events-none group-hover:border-white/80 transition-colors" />

            {/* Quick zoom icon overlay */}
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/30 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Garland Divider below Gallery */}
      <div className="w-full flex justify-center mt-8">
        <FloralGarland className="w-56 sm:w-72" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#4D0817]/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
