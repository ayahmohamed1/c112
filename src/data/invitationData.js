import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';

export const invitationConfig = {
  // Couple details (Ahmed on top, Mawish underneath)
  couple: {
    groom: "أحمد",
    groomTitle: "العريس",
    groomEn: "Ahmed",
    bride: "ماويش",
    brideTitle: "العروس",
    brideEn: "Mawish",
    coverGroom: "AHMED",
    coverBride: "MAWISH",
    primary: "أحمد وماويش",
    primaryEn: "Ahmed & Mawish",
    initials: "A & M",
    monogram: "AM",
    ceremonyHeader: "تفاصيل الحفل",
    announcementLine1: "بكل بهجة وسرور نتشرف بدعوتكم",
    announcementLine2: "لحضور حفل زفاف العروسين",
    quote: "يسعدنا حضوركم ومشاركتكم فرحتنا بهذه الليلة المباركة",
  },

  // Date & Time (20/11/2026 - Friday - 7:00 PM)
  eventDate: {
    display: "Friday, November 20, 2026", // English for Cover
    displayAr: "الجمعة، 20 نوفمبر 2026",
    dayOfWeek: "الجمعة",
    dayOfWeekEn: "FRIDAY",
    dayNumber: "20",
    monthName: "نوفمبر",
    monthNameEn: "NOVEMBER",
    year: "2026",
    time: "7:00 م",
    timeEn: "7:00 PM",
    targetIso: "2026-11-20T19:00:00",
    monthIndex: 10, // 0-based: November = 10
    highlightDay: 20,
  },

  // Venue details (Palm Club - جسر السويس)
  venue: {
    name: "Palm Club",
    nameEn: "Palm Club",
    subtitle: "قاعة الاحتفالات",
    address: "أمام محطة مترو الجراج، تقاطع شارع 6 أكتوبر، جسر السويس",
    city: "القاهرة",
    googleMapsLink: "https://maps.app.goo.gl/A92UHXgS9bN6JDdd9",
    mapEmbedUrl: "https://maps.google.com/maps?cid=4250933672947934352&hl=ar&output=embed",
  },

  // Photos (Groom first, Bride second)
  gallery: [
    {
      id: 1,
      role: "العريس",
      src: p1,
      title: "أحمد",
    },
    {
      id: 2,
      role: "العروس",
      src: p2,
      title: "ماويش",
    },
  ],

  // Schedule / Timeline in Arabic
  timeline: [
    { time: "19:00", title: "استقبال الضيوف الكرام" },
    { time: "19:30", title: "بدء مراسم الحفل" },
    { time: "20:30", title: "العشاء والاحتفال" },
    { time: "22:00", title: "تقطيع التورتة والصور التذكارية" },
  ],

  // Initial guestbook wishes in Arabic
  initialWishes: [
    {
      id: "w-1",
      name: "طارق وياسمين",
      wishes: "ألف ألف مبروك يا أحمد ويا ماويش! بارك الله لكما وبارك عليكما وجمع بينكما في خير!",
      timestamp: "اليوم",
      likes: 14,
    },
    {
      id: "w-2",
      name: "محمود وسلمى",
      wishes: "ألف مبروك لأجمل عروسين، ربنا يتمم لكم على خير ويسعد كل أيامكم!",
      timestamp: "اليوم",
      likes: 9,
    },
  ],
};
