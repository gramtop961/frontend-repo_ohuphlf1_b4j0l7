import { motion } from 'framer-motion';
import { Brush, Droplets, Layers, SunMedium } from 'lucide-react';

export default function ServicesSection({ lang = 'en' }) {
  const t = {
    en: {
      title: 'Services',
      screen: 'Screen Printing',
      screenDesc: 'Plastisol & discharge for bold detail and soft hand. (start from Rp65k)',
      dtg: 'DTG',
      dtgDesc: 'Water-based direct print for intricate, full-color art. (start from Rp150k)',
      dtf: 'DTF',
      dtfDesc: 'Film transfer—vivid colors, great on dark tees. (start from Rp65k)',
      uv: 'UV Printing',
      uvDesc: 'Durable prints for promo items, cured by UV.',
      processTitle: 'Process',
      process: ['Brief', 'Mockup', 'Approve', 'Production', 'Ship'],
      aboutTitle: 'About',
      about:
        'Founded in 2012, Jaktees crafts high-quality custom apparel and merch using screen printing, DTG, DTF, and UV. We blend premium materials with strict QC for vibrant, long-lasting results.',
      pricingTitle: 'Pricing',
      pricing:
        'Pricing depends on technique, colors, placements, fabric, and deadline. Typical starters: Screen/DTF from Rp65k, DTG from Rp150k per tee.'
    },
    id: {
      title: 'Layanan',
      screen: 'Screen Printing',
      screenDesc: 'Plastisol & discharge—detail tegas, rasa kain tetap lembut. (mulai Rp65k)',
      dtg: 'DTG',
      dtgDesc: 'Cetak langsung berbasis air untuk desain detail & full-color. (mulai Rp150k)',
      dtf: 'DTF',
      dtfDesc: 'Transfer film—warna hidup, optimal untuk kaos gelap. (mulai Rp65k)',
      uv: 'UV Printing',
      uvDesc: 'Cetak awet untuk merchandise promosi dengan curing UV.',
      processTitle: 'Proses',
      process: ['Brief', 'Mockup', 'Approve', 'Produksi', 'Kirim'],
      aboutTitle: 'Tentang',
      about:
        'Berdiri sejak 2012, Jaktees memproduksi custom apparel & merchandise berkualitas melalui screen printing, DTG, DTF, dan UV—dengan material premium dan QC ketat untuk hasil tajam dan tahan lama.',
      pricingTitle: 'Harga',
      pricing:
        'Harga bergantung teknik, jumlah warna, posisi cetak, bahan, dan tenggat. Estimasi awal: Sablon/DTF mulai Rp65k, DTG mulai Rp150k per kaos.'
    }
  }[lang];

  const services = [
    { icon: Brush, title: t.screen, desc: t.screenDesc, accent: 'from-[#FF7A00] to-[#FFD23A]' },
    { icon: Droplets, title: t.dtg, desc: t.dtgDesc, accent: 'from-[#A855F7] to-[#70E000]' },
    { icon: Layers, title: t.dtf, desc: t.dtfDesc, accent: 'from-[#FF7A00] to-[#FFD23A]' },
    { icon: SunMedium, title: t.uv, desc: t.uvDesc, accent: 'from-[#A855F7] to-[#70E000]' }
  ];

  return (
    <section id="services" className="relative w-full bg-[#0D0D10] py-20 text-[#E8E8EC]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden style={{
        backgroundImage: 'radial-gradient(ellipse at 30% 10%, rgba(255,255,255,0.06), transparent 40%)'
      }} />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-extrabold uppercase tracking-wide text-[#E8E8EC]">
          {t.title}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-5">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.accent} opacity-30 blur-2xl`} />
              <s.icon className="mb-4 h-6 w-6 text-[#FFD23A]" />
              <div className="mb-2 text-lg font-semibold">{s.title}</div>
              <p className="text-sm text-[#E8E8EC]/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
            <h3 className="mb-3 text-xl font-bold uppercase">{t.processTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {t.process.map((step, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 rounded-full border border-[#E8E8EC]/10 bg-[#0D0D10] px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FFD23A]" />
                  {step}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
              <h3 className="mb-2 text-xl font-bold uppercase">{t.aboutTitle}</h3>
              <p className="text-[#E8E8EC]/80">{t.about}</p>
            </div>
            <div className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
              <h3 className="mb-2 text-xl font-bold uppercase">{t.pricingTitle}</h3>
              <p className="text-[#E8E8EC]/80">{t.pricing}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
