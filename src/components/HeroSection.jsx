import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const whatsappLink = `https://wa.me/jaktees?text=${encodeURIComponent('Hello Jaktees, I want to order custom apparel…')}`;

export default function HeroSection({ lang = 'en', onGetQuote }) {
  const t = {
    en: {
      h1Top: 'MAKE A',
      h1Bottom: 'STATEMENT',
      sub: 'Custom apparel for brands, events, and teams—fast, clean, consistent since 2012.',
      ctaQuote: 'Get a Quote',
      ctaChat: 'Chat on WhatsApp',
      trust: '200,000+ T-shirts printed • Strict QC • Reliable timelines • Premium blanks',
      since: 'Established 2012',
      brand: 'MAKE A STATEMENT WITH JAKTEES'
    },
    id: {
      h1Top: 'TEGASKAN',
      h1Bottom: 'GAYA ANDA',
      sub: 'Custom apparel untuk brand, event, dan komunitas—cepat, rapi, konsisten sejak 2012.',
      ctaQuote: 'Dapatkan Penawaran',
      ctaChat: 'Chat di WhatsApp',
      trust: '200.000+ kaos tercetak • QC ketat • Tepat waktu • Bahan premium',
      since: 'Berdiri sejak 2012',
      brand: 'MAKE A STATEMENT WITH JAKTEES'
    }
  }[lang];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0D0D10] text-[#E8E8EC]">
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.04), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05), transparent 35%)'
        }} />
      </div>

      {/* Ink gradient accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30" style={{
        background: 'linear-gradient(135deg, #FF7A00, #FFD23A)'
      }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-25" style={{
        background: 'linear-gradient(135deg, #A855F7, #70E000)'
      }} />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-28 pb-16 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-sm tracking-widest text-[#FFD23A]/90">
          {t.since}
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="leading-[0.95] text-6xl font-black uppercase md:text-8xl lg:text-[9rem]"
            style={{ fontStretch: 'condensed' }}
          >
            <span className="block text-[#E8E8EC]">{t.h1Top}</span>
            <span className="block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #FF7A00, #FFD23A)' }}>{t.h1Bottom}</span>
          </motion.h1>

          {/* Masked image strip for poster feel */}
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-28 w-full -translate-y-1/2 overflow-hidden md:block" aria-hidden>
            <div className="h-full w-full opacity-70" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 6px)'
            }} />
          </div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-2xl text-lg text-[#E8E8EC]/80">
          {t.sub}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center gap-4">
          <button onClick={onGetQuote} className="group inline-flex items-center gap-2 rounded-full bg-[#FF7A00] px-6 py-3 font-semibold text-[#0D0D10] transition hover:brightness-110">
            {t.ctaQuote}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#E8E8EC]/20 bg-[#17181C] px-5 py-3 text-[#E8E8EC] transition hover:bg-[#1d1f24]">
            <MessageCircle className="h-4 w-4 text-[#70E000]" />
            {t.ctaChat}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-4 text-sm text-[#E8E8EC]/60">
          {t.trust}
        </motion.div>

        <div className="mt-8 text-xs tracking-widest text-[#E8E8EC]/40">{t.brand}</div>
      </div>
    </section>
  );
}
