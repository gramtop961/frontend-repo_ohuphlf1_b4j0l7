import { motion } from 'framer-motion';

// Simple abstract SVG marks to represent client logos without external assets
function LogoMark({ variant = 1 }) {
  const common = 'h-7 w-7';
  switch (variant) {
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FFD23A" />
            </linearGradient>
          </defs>
          <path d="M12 3l8 5v8l-8 5-8-5V8z" fill="url(#g1)" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#70E000" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="9" fill="none" stroke="url(#g2)" strokeWidth="2.5" />
          <path d="M7 13l3 3 7-7" fill="none" stroke="#E8E8EC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <defs>
            <linearGradient id="g3" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <rect x="4" y="5" width="16" height="14" rx="3" fill="url(#g3)" />
          <rect x="7" y="8" width="10" height="2" rx="1" fill="#0D0D10" />
          <rect x="7" y="12" width="7" height="2" rx="1" fill="#0D0D10" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <defs>
            <linearGradient id="g4" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD23A" />
              <stop offset="100%" stopColor="#70E000" />
            </linearGradient>
          </defs>
          <path d="M12 4l6 16H6z" fill="url(#g4)" />
        </svg>
      );
  }
}

export default function ClientsSection() {
  const clients = [
    { name: 'Client One', v: 1 },
    { name: 'Client Two', v: 2 },
    { name: 'Client Three', v: 3 },
    { name: 'Client Four', v: 4 },
    { name: 'Client Five', v: 2 },
    { name: 'Client Six', v: 1 }
  ];

  return (
    <section className="relative w-full bg-[#0D0D10] py-10 text-[#E8E8EC]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-4 text-xs uppercase tracking-wider text-[#E8E8EC]/60">Trusted by teams & brands</div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3 rounded-lg border border-[#E8E8EC]/10 bg-[#17181C] px-4 py-3"
            >
              <LogoMark variant={c.v} />
              <span className="text-sm text-[#E8E8EC]/80">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
