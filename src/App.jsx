import { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import QuoteContactSection from './components/QuoteContactSection';
import { Globe2 } from 'lucide-react';

function App() {
  const [lang, setLang] = useState('en');
  const quoteRef = useRef(null);

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const nav = {
    en: ['Home', 'Services', 'Portfolio', 'Pricing', 'Order/Quote', 'About', 'Blog', 'Contact'],
    id: ['Beranda', 'Layanan', 'Portofolio', 'Harga', 'Pesan/Penawaran', 'Tentang', 'Blog', 'Kontak']
  }[lang];

  return (
    <div className="min-h-screen bg-[#0D0D10] text-[#E8E8EC]">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-[#E8E8EC]/10 bg-[#0D0D10]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          <a href="#home" className="text-lg font-black tracking-wider">
            <span className="italic text-[#FFD23A]">Jaktees</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a className="text-[#E8E8EC]/80 hover:text-white" href="#services">{nav[1]}</a>
            <a className="text-[#E8E8EC]/80 hover:text-white" href="#portfolio">{nav[2]}</a>
            <a className="text-[#E8E8EC]/80 hover:text-white" onClick={scrollToQuote}>{nav[4]}</a>
            <a className="text-[#E8E8EC]/80 hover:text-white" href="#quote">{nav[7]}</a>
          </nav>
          <button onClick={() => setLang((l) => (l === 'en' ? 'id' : 'en'))} className="inline-flex items-center gap-2 rounded-full border border-[#E8E8EC]/15 px-3 py-1 text-xs text-[#E8E8EC]/80 hover:bg-[#17181C]">
            <Globe2 className="h-3.5 w-3.5" /> {lang === 'en' ? 'ID' : 'EN'}
          </button>
        </div>
      </header>

      <main id="home">
        <HeroSection lang={lang} onGetQuote={scrollToQuote} />
        <ServicesSection lang={lang} />
        <PortfolioSection lang={lang} />
        <QuoteContactSection lang={lang} ref={quoteRef} />
      </main>

      <footer className="border-t border-[#E8E8EC]/10 bg-[#0D0D10] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-[#E8E8EC]/60 md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Jaktees — Jakarta T-Shirt Co.</div>
          <div className="flex gap-3">
            <span>High contrast • Lazy-loaded sections • SEO-ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
