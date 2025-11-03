import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const allWorks = [
  { title: 'Corporate Summit Tees', tag: 'Corporate', colorFrom: '#FF7A00', colorTo: '#FFD23A' },
  { title: 'Tech Community Drop', tag: 'Community', colorFrom: '#A855F7', colorTo: '#70E000' },
  { title: 'Music Festival Staff', tag: 'Event', colorFrom: '#FF7A00', colorTo: '#A855F7' },
  { title: 'Brand Launch Merch', tag: 'Brand', colorFrom: '#70E000', colorTo: '#A855F7' },
  { title: 'University Orientation', tag: 'Event', colorFrom: '#FFD23A', colorTo: '#FF7A00' },
  { title: 'Fintech Promo Pack', tag: 'Corporate', colorFrom: '#A855F7', colorTo: '#FFD23A' }
];

const filters = ['All', 'Corporate', 'Event', 'Community', 'Brand'];

export default function PortfolioSection({ lang = 'en' }) {
  const t = {
    en: { title: 'Portfolio / Case Studies', selected: 'Selected Works' },
    id: { title: 'Portofolio / Studi Kasus', selected: 'Karya Pilihan' }
  }[lang];

  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const works = useMemo(() => {
    if (active === 'All') return allWorks;
    return allWorks.filter((w) => w.tag === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative w-full bg-[#0D0D10] py-20 text-[#E8E8EC]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-3xl font-extrabold uppercase tracking-wide">
          {t.title}
        </motion.h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => {
            const activeTab = f === active;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition border ${
                  activeTab
                    ? 'bg-[#FF7A00] text-[#0D0D10] border-transparent'
                    : 'border-[#E8E8EC]/15 bg-[#17181C] text-[#E8E8EC]/80 hover:bg-[#1d1f24]'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <button
              key={`${w.title}-${i}`}
              onClick={() => setLightbox(w)}
              className="group relative overflow-hidden rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-5 text-left"
            >
              <div className="pointer-events-none absolute inset-0 opacity-60" style={{
                background: `radial-gradient(1200px 300px at 0% 0%, ${w.colorFrom}22, transparent), radial-gradient(700px 200px at 100% 100%, ${w.colorTo}22, transparent)`
              }} />
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-wider text-[#FFD23A]">{w.tag}</div>
                <div className="mt-2 text-lg font-semibold">{w.title}</div>
                <div
                  className="mt-8 h-32 w-full rounded-md"
                  style={{ background: `linear-gradient(135deg, ${w.colorFrom}44, ${w.colorTo}44)` }}
                />
              </div>
            </button>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E8E8EC]/10 bg-[#0D0D10]"
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full border border-[#E8E8EC]/20 bg-[#17181C] p-1.5 text-[#E8E8EC]/80 hover:bg-[#1d1f24]"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="h-72 w-full" style={{ background: `linear-gradient(135deg, ${lightbox.colorFrom}, ${lightbox.colorTo})` }} />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-[#FFD23A]">{lightbox.tag}</div>
                  <h3 className="mt-1 text-xl font-bold">{lightbox.title}</h3>
                  <p className="mt-2 text-sm text-[#E8E8EC]/80">
                    High-level overview of process, inks, fabric, and timeline. Replace with real case study details and gallery images.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
