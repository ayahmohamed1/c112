import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FloralGarland } from './FloralElements';

export default function Guestbook({ couple }) {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim() || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Save wish in localStorage quietly if needed
      try {
        const saved = JSON.parse(localStorage.getItem('wedding_guestbook_wishes') || '[]');
        saved.unshift({
          id: 'w-' + Date.now(),
          name: name.trim(),
          wishes: wishes.trim(),
          timestamp: 'Just now',
        });
        localStorage.setItem('wedding_guestbook_wishes', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      setName('');
      setWishes('');

      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#6B0F23', '#C8B896', '#7B112E'],
        });
      } catch (err) {
        console.error(err);
      }

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4500);
    }, 500);
  };

  return (
    <section id="guestbook" className="py-10 sm:py-14 px-4 max-w-md mx-auto text-center">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#6B0F23] mb-1">
        دفتر التهاني والتبريكات
      </h2>
      <p className="font-serif text-xs sm:text-sm text-[#6B0F23]/80 tracking-wide mb-6">
        شاركونا أجمل التهاني والدعوات لـ {couple?.primary || 'العريس أحمد'}
      </p>

      {/* Success Alert */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3.5 rounded-2xl bg-[#6B0F23] text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-serif shadow-md overflow-hidden"
            dir="rtl"
          >
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>شكراً لكم! تم إرسال تهنئتكم ودعواتكم الجميلة بنجاح ❤️</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Form Box Area */}
      <form onSubmit={handleSubmit} className="space-y-3.5 text-right" dir="rtl">
        <div>
          <input
            type="text"
            required
            placeholder="الاسم الكريم"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6B0F23]/20 focus:border-[#7B112E] focus:outline-none text-xs sm:text-sm text-[#6B0F23] shadow-xs"
          />
        </div>

        <div>
          <textarea
            required
            rows={3}
            placeholder="اكتب تهنئتك ومباركتك للعريس..."
            value={wishes}
            onChange={(e) => setWishes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6B0F23]/20 focus:border-[#7B112E] focus:outline-none text-xs sm:text-sm text-[#6B0F23] shadow-xs resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-[#6B0F23] hover:bg-[#500A1A] text-white font-serif text-xs sm:text-sm tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isSubmitting ? 'جارِ الإرسال...' : 'إرسال التهنئة'}</span>
        </motion.button>
      </form>

      <div className="w-full flex justify-center mt-8">
        <FloralGarland className="w-48 sm:w-56" />
      </div>
    </section>
  );
}
