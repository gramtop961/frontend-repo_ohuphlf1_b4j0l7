import { motion } from 'framer-motion';

const works = [
  { title: 'Corporate Summit Tees', tag: 'Corporate' },
  { title: 'Tech Community Drop', tag: 'Community' },
  { title: 'Music Festival Staff', tag: 'Event' },
  { title: 'Brand Launch Merch', tag: 'Brand' },
  { title: 'University Orientation', tag: 'Event' },
  { title: 'Fintech Promo Pack', tag: 'Corporate' }
];

const clients = ['Grab', 'Telkomsel', 'Bank Indonesia', 'Google Cloud'];

export default function PortfolioSection({ lang = 'en' }) {
  const t = {
    en: {
      title: 'Portfolio / Case Studies',
      filters: ['All', 'Corporate', 'Event', 'Community', 'Brand'],
      clientsTitle: 'Trusted by',
      selected: 'Selected Works'
    },
    id: {
      title: 'Portofolio / Studi Kasus',
      filters: ['Semua', 'Corporate', 'Event', 'Komunitas', 'Brand'],
      clientsTitle: 'Dipercaya oleh',
      selected: 'Karya Pilihan'
    }
  }[lang];

  return (
    <section id="portfolio" className="relative w-full bg-[#0D0D10] py-20 text-[#E8E8EC]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-3xl font-extrabold uppercase tracking-wide">
          {t.title}
        </motion.h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {t.filters.map((f, i) => (
            <button key={i} className="rounded-full border border-[#E8E8EC]/15 bg-[#17181C] px-4 py-2 text-sm text-[#E8E8EC]/80 hover:bg-[#1d1f24]">
              {f}
            </button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_300px_at_0%_0%,rgba(255,122,0,0.1),transparent),radial-gradient(700px_200px_at_100%_100%,rgba(168,85,247,0.12),transparent)] opacity-60" />
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-wider text-[#FFD23A]">{w.tag}</div>
                <div className="mt-2 text-lg font-semibold">{w.title}</div>
                <div className="mt-8 h-32 w-full rounded-md bg-gradient-to-br from-[#FF7A00]/20 to-[#A855F7]/20" />
              </div>
            </div>
          ))}
        </motion.div>

        <h3 className="mt-12 mb-4 text-sm uppercase tracking-wider text-[#E8E8EC]/60">{t.selected}</h3>

        <div className="mt-4 rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
          <div className="mb-4 text-xs uppercase tracking-wider text-[#E8E8EC]/60">{t.clientsTitle}</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clients.map((c) => (
              <div key={c} className="flex items-center justify-center rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] py-4 text-[#E8E8EC]/80">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
