import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Choosing the Right Print Method: Screen vs DTF vs DTG',
    excerpt: 'Understand durability, feel, and cost to pick the method that fits your project and timeline.',
    date: 'Oct 2025',
    tag: 'Production'
  },
  {
    title: 'Color Management 101 for Apparel Printing',
    excerpt: 'From Pantone matching to underbase tricks—how we keep colors punchy and consistent.',
    date: 'Sep 2025',
    tag: 'Color'
  },
  {
    title: 'Merch Checklist for Events and Launches',
    excerpt: 'Quantities, sizes, timelines, and logistics—what to prepare so your drop goes smoothly.',
    date: 'Aug 2025',
    tag: 'Operations'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative w-full bg-[#0D0D10] py-20 text-[#E8E8EC]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden style={{
        backgroundImage: 'radial-gradient(600px_200px at 20% 0%, rgba(255,122,0,0.15), transparent), radial-gradient(500px_200px at 80% 100%, rgba(168,85,247,0.15), transparent)'
      }} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-3xl font-extrabold uppercase tracking-wide">
          Blog
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E8E8EC]/10 bg-[#17181C]"
            >
              <div className="h-40 w-full bg-gradient-to-br from-[#FF7A00]/30 to-[#A855F7]/30" />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wider text-[#E8E8EC]/60">
                  <span>{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-[#E8E8EC]/70">{p.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm text-[#FFD23A]">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
