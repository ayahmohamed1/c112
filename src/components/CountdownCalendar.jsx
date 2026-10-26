import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CelestialCalendarFrame, FloralBouquetCorner } from './FloralElements';

export default function CountdownCalendar({ eventDate, venue, couple }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [status, setStatus] = useState('attending');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(eventDate.targetIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [eventDate.targetIso]);

  // Calendar setup (Starting Monday: Mo Tu We Th Fr Sa Su)
  const year = parseInt(eventDate.year, 10) || 2026;
  const monthIndex = eventDate.monthIndex ?? 8; // September = 8
  const highlightDay = eventDate.highlightDay || 11;

  // Day of week for 1st of month: JS Date returns 0 for Sunday.
  // Converting to Monday-based: 0 -> Mo, 1 -> Tu ... 6 -> Su
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const startDay = firstDay === 0 ? 6 : firstDay - 1; // 0 for Monday, 6 for Sunday
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const calendarSlots = [];
  for (let i = 0; i < startDay; i++) {
    calendarSlots.push({ day: null, isCurrent: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarSlots.push({
      day: d,
      isCurrent: true,
      isHighlighted: d === highlightDay,
    });
  }

  // Handle Add to Calendar (.ics download)
  const handleAddToCalendar = (e) => {
    e.preventDefault();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Engagement Celebration: ${couple.primary}`,
      `DESCRIPTION:Join us for the engagement celebration of ${couple.primary} at ${venue.name}.`,
      `LOCATION:${venue.name}, ${venue.address}`,
      'DTSTART:20260911T170000Z',
      'DTEND:20260911T230000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${couple.primary.replace(/\s+/g, '_')}_Event.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmAttendance = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSuccess(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#6B0F23', '#C8B896', '#7B112E'],
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsAttendanceModalOpen(false);
      setIsSuccess(false);
      setGuestName('');
    }, 2000);
  };

  return (
    <section id="reception" className="relative py-8 sm:py-12 px-4 max-w-md mx-auto text-center overflow-hidden">
      {/* Side watercolor florals */}
      <FloralBouquetCorner position="top-right" className="w-24 sm:w-32 -top-4 -right-4 opacity-75" />
      <FloralBouquetCorner position="bottom-left" className="w-24 sm:w-32 -bottom-4 -left-4 opacity-75" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Title: RECEPTION INFO */}
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#6B0F23] mb-1">
          موعد ومكان الحفل
        </h2>

        {/* Subtitle */}
        <p className="font-serif text-xs sm:text-sm font-semibold tracking-wide text-[#6B0F23] mt-1 mb-5">
          يقام الحفل بمشيئة الله تعالى في:
        </p>

        {/* Time */}
        <div className="font-serif text-2xl sm:text-3xl text-[#6B0F23] font-bold tracking-wide mb-3">
          {eventDate.time}
        </div>

        {/* Date Row: الجمعة | 20 | نوفمبر */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 text-[#6B0F23]">
          <span className="font-serif text-sm sm:text-base font-semibold">
            {eventDate.dayOfWeek}
          </span>
          <span className="text-[#6B0F23]/40 text-base font-light">|</span>
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            {eventDate.dayNumber}
          </span>
          <span className="text-[#6B0F23]/40 text-base font-light">|</span>
          <span className="font-serif text-sm sm:text-base font-semibold">
            {eventDate.monthName}
          </span>
        </div>

        {/* Year */}
        <div className="font-serif text-base sm:text-lg text-[#6B0F23] font-normal tracking-wide mt-1 mb-1">
          {eventDate.year}
        </div>

        {/* Venue */}
        {venue?.name && (
          <p className="font-serif text-sm sm:text-base font-bold tracking-wide text-[#6B0F23]/90 mb-6">
            {venue.name}
          </p>
        )}

        {/* COUNTDOWN */}
        <div className="mb-7">
          <h3 className="font-serif text-sm sm:text-base font-bold tracking-wide text-[#6B0F23] mb-2">
            العد التنازلي
          </h3>
          <p className="font-serif text-xs sm:text-sm text-[#8B1E37] font-semibold tracking-wide" dir="rtl">
            {timeLeft.days} يوم • {timeLeft.hours} ساعة • {timeLeft.minutes} دقيقة • {timeLeft.seconds} ثانية
          </p>
        </div>

        {/* Celestial Ornate Calendar Card */}
        <div className="w-full my-4">
          <CelestialCalendarFrame className="w-full">
            {/* Calendar Month Header */}
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#6B0F23] mb-4 text-center">
              {eventDate.monthName} {eventDate.year}
            </h4>

            {/* Weekday Row: إثن ثلا أرب خمي جمع سبت أحد */}
            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-[#6B0F23]/80 mb-2">
              <span>إثن</span>
              <span>ثلا</span>
              <span>أرب</span>
              <span>خمي</span>
              <span>جمع</span>
              <span>سبت</span>
              <span>أحد</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs sm:text-sm">
              {calendarSlots.map((slot, idx) => (
                <div key={idx} className="h-7 sm:h-8 flex items-center justify-center relative">
                  {!slot.isCurrent ? (
                    <span className="text-transparent" />
                  ) : slot.isHighlighted ? (
                    // Solid dark burgundy HEART with white number inside!
                    <div className="relative flex items-center justify-center">
                      <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#6B0F23] fill-[#6B0F23]" />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white font-serif">
                        {slot.day}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[#6B0F23]/85 font-normal">
                      {slot.day}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CelestialCalendarFrame>
        </div>

        {/* Add to Calendar Link */}
        <button
          onClick={handleAddToCalendar}
          className="font-serif text-xs sm:text-sm text-[#6B0F23] underline underline-offset-4 hover:text-[#500A1A] my-5 tracking-wide cursor-pointer transition-colors"
        >
          حفظ الموعد في التقويم
        </button>

        {/* Confirm Attendance Pill Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsAttendanceModalOpen(true)}
          className="w-full max-w-[280px] py-3.5 px-6 rounded-full bg-[#6B0F23] hover:bg-[#500A1A] text-white font-serif tracking-wider font-semibold text-xs sm:text-sm uppercase shadow-[0_6px_20px_rgba(107,15,35,0.3)] transition-all cursor-pointer"
        >
          تأكيد الحضور
        </motion.button>
      </div>

      {/* Attendance Modal */}
      <AnimatePresence>
        {isAttendanceModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#4D0817]/80 backdrop-blur-xs flex items-center justify-center p-4 select-none"
            onClick={() => setIsAttendanceModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-sm w-full bg-[#FAF8F5] rounded-3xl p-6 shadow-2xl border border-[#C8B896] text-center"
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
            >
              <button
                onClick={() => setIsAttendanceModalOpen(false)}
                className="absolute top-4 left-4 text-[#6B0F23]/60 hover:text-[#6B0F23] p-1.5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-xl font-bold text-[#6B0F23] mb-1">
                تأكيد الحضور
              </h3>
              <p className="text-xs text-[#6B0F23]/70 mb-5">
                يسعدنا ويشرفنا معرفة إمكانية حضوركم الكريم!
              </p>

              {isSuccess ? (
                <div className="py-6 flex flex-col items-center justify-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#6B0F23]" />
                  <p className="font-serif text-base font-bold text-[#6B0F23]">
                    تم تأكيد الحضور بنجاح!
                  </p>
                  <p className="text-xs text-[#6B0F23]/70">
                    شكراً لك {guestName}! نتشرف بكم ونسعد بلقائكم.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmAttendance} className="space-y-4 text-right">
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#6B0F23] mb-1">
                      الاسم الكريم
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: أحمد والأسرة"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#6B0F23]/20 focus:border-[#6B0F23] focus:outline-none text-xs text-[#6B0F23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold text-[#6B0F23] mb-1">
                      حالة الحضور
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setStatus('attending')}
                        className={`py-2 px-2 rounded-xl text-xs font-medium border cursor-pointer ${
                          status === 'attending'
                            ? 'bg-[#6B0F23] text-white border-[#6B0F23]'
                            : 'bg-white text-[#6B0F23] border-[#6B0F23]/20'
                        }`}
                      >
                        يشرفني الحضور
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus('declined')}
                        className={`py-2 px-2 rounded-xl text-xs font-medium border cursor-pointer ${
                          status === 'declined'
                            ? 'bg-[#6B0F23] text-white border-[#6B0F23]'
                            : 'bg-white text-[#6B0F23] border-[#6B0F23]/20'
                        }`}
                      >
                        أعتذر عن الحضور
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-full bg-[#6B0F23] hover:bg-[#500A1A] text-white font-serif text-xs uppercase tracking-wider font-semibold shadow-md cursor-pointer"
                  >
                    إرسال التأكيد
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
