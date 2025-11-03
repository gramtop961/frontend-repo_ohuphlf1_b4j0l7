import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, Phone, Mail, MapPin } from 'lucide-react';

const whatsappPrefill = encodeURIComponent('Hello Jaktees, I want to order custom apparel…');
const whatsappHref = `https://wa.me/jaktees?text=${whatsappPrefill}`;

export default function QuoteContactSection({ lang = 'en' }) {
  const t = {
    en: {
      quoteTitle: 'Get a Quote',
      step1: 'What do you need?',
      step2: 'Quantities & Print',
      step3: 'Files & Deadline',
      step4: 'Contact & Shipping',
      useCase: 'Use case',
      technique: 'Technique',
      colors: 'Colors',
      locations: 'Print locations',
      deadline: 'Deadline',
      ship: 'Ship-to address',
      sizes: 'Quantities by size',
      upload: 'Upload files (AI/PDF/PNG)',
      link: 'Drive link',
      designHelp: 'Need design help?',
      sendWA: 'Also send via WhatsApp',
      next: 'Next',
      back: 'Back',
      submit: 'Submit Request',
      contactTitle: 'Contact',
      address: 'Jl. H. Goden Raya no. 17A, Pondok Pinang, Jakarta 12310',
      email: 'jakteesstudio@gmail.com',
      phone: '+62 8211 491 7878'
    },
    id: {
      quoteTitle: 'Minta Penawaran',
      step1: 'Kebutuhan Anda',
      step2: 'Jumlah & Cetak',
      step3: 'File & Deadline',
      step4: 'Kontak & Pengiriman',
      useCase: 'Tujuan',
      technique: 'Teknik',
      colors: 'Jumlah warna',
      locations: 'Lokasi cetak',
      deadline: 'Deadline',
      ship: 'Alamat kirim',
      sizes: 'Jumlah per ukuran',
      upload: 'Upload file (AI/PDF/PNG)',
      link: 'Tautan Drive',
      designHelp: 'Butuh bantu desain?',
      sendWA: 'Kirim juga via WhatsApp',
      next: 'Lanjut',
      back: 'Kembali',
      submit: 'Kirim Permintaan',
      contactTitle: 'Kontak',
      address: 'Jl. H. Goden Raya no. 17A, Pondok Pinang, Jakarta 12310',
      email: 'jakteesstudio@gmail.com',
      phone: '+62 8211 491 7878'
    }
  }[lang];

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ sendWA: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <section id="quote" className="relative w-full bg-[#0D0D10] py-20 text-[#E8E8EC]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-3xl font-extrabold uppercase tracking-wide">
          {t.quoteTitle}
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Multi-step form */}
          <div className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#E8E8EC]/60">
              <span className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-[#FF7A00]' : 'bg-[#2a2b31]'}`} /> {t.step1}
              <span className="mx-1">→</span>
              <span className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-[#FF7A00]' : 'bg-[#2a2b31]'}`} /> {t.step2}
              <span className="mx-1">→</span>
              <span className={`h-2 w-2 rounded-full ${step >= 3 ? 'bg-[#FF7A00]' : 'bg-[#2a2b31]'}`} /> {t.step3}
              <span className="mx-1">→</span>
              <span className={`h-2 w-2 rounded-full ${step >= 4 ? 'bg-[#FF7A00]' : 'bg-[#2a2b31]'}`} /> {t.step4}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.useCase}</label>
                  <input name="useCase" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" placeholder="Brand / Event / Team" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.sizes}</label>
                  <input name="sizes" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" placeholder="S:50, M:100, L:80, XL:20" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.technique}</label>
                  <select name="technique" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]">
                    <option>Screen Printing</option>
                    <option>DTF</option>
                    <option>DTG</option>
                    <option>UV Printing</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.colors}</label>
                  <input name="colors" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" placeholder="1-6" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.locations}</label>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    {['Front', 'Back', 'Sleeve'].map((loc) => (
                      <label key={loc} className="flex items-center gap-2 rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-2">
                        <input type="checkbox" name={`loc_${loc}`} onChange={handleChange} /> {loc}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.deadline}</label>
                  <input type="date" name="deadline" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.upload}</label>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-[#E8E8EC]/20 bg-[#0D0D10] px-4 py-3 text-sm">
                      <Upload className="h-4 w-4 text-[#FFD23A]" /> Upload
                      <input type="file" className="hidden" multiple />
                    </label>
                    <input name="link" onChange={handleChange} placeholder="https://drive.google.com/..." className="flex-1 rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-sm text-[#E8E8EC]/80">
                  <input type="checkbox" name="designHelp" onChange={handleChange} /> {t.designHelp}
                </label>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">Email</label>
                  <input name="email" type="email" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">WhatsApp</label>
                  <input name="wa" onChange={handleChange} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" placeholder="+62…" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-[#E8E8EC]/80">{t.ship}</label>
                  <textarea name="address" onChange={handleChange} rows={3} className="w-full rounded-md border border-[#E8E8EC]/10 bg-[#0D0D10] p-3 text-sm outline-none focus:border-[#FFD23A]" />
                </div>
                <label className="flex items-center gap-2 text-sm text-[#E8E8EC]/80">
                  <input type="checkbox" name="sendWA" checked={form.sendWA} onChange={handleChange} /> {t.sendWA}
                </label>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <button disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))} className="rounded-full border border-[#E8E8EC]/20 px-5 py-2 text-sm text-[#E8E8EC]/80 hover:bg-[#0D0D10] disabled:opacity-40">
                {t.back}
              </button>
              {step < 4 ? (
                <button onClick={() => setStep((s) => Math.min(4, s + 1))} className="rounded-full bg-[#FF7A00] px-6 py-2 text-sm font-semibold text-[#0D0D10]">
                  {t.next}
                </button>
              ) : (
                <div className="flex gap-3">
                  <a href={form.sendWA ? whatsappHref : '#'} target={form.sendWA ? '_blank' : undefined} rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#E8E8EC]/20 bg-[#0D0D10] px-5 py-2 text-sm hover:bg-[#1d1f24]">
                    <Send className="h-4 w-4 text-[#70E000]" /> WhatsApp
                  </a>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#FF7A00] px-6 py-2 text-sm font-semibold text-[#0D0D10]">
                    <Send className="h-4 w-4" /> {t.submit}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact block */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
              <h3 className="mb-4 text-xl font-bold uppercase">{t.contactTitle}</h3>
              <div className="space-y-3 text-[#E8E8EC]/80">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[#FFD23A]" /><span>{t.address}</span></div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#FFD23A]" /><a className="hover:underline" href="mailto:jakteesstudio@gmail.com">{t.email}</a></div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#FFD23A]" /><a className="hover:underline" href="tel:+6282114917878">{t.phone}</a></div>
              </div>
            </div>

            <div className="rounded-xl border border-[#E8E8EC]/10 bg-[#17181C] p-6">
              <div className="mb-3 text-xs uppercase tracking-wider text-[#E8E8EC]/60">Fast lane</div>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFD23A] px-6 py-3 font-semibold text-[#0D0D10]">
                <Send className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
