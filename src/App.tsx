import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

// Official Category Data
const CATEGORIES = [
  { id: 'tshirts', name: 'T-SHIRTS', image: 'c57c1732-bff3-40f5-820d-a8862315390e.jfif' },
  { id: 'hoodies', name: 'HOODIES', image: 'coll hodie.jpg' },
  { id: 'jackets', name: 'JACKETS', image: 'hctdyufu.jpg' },
  { id: 'jeans', name: 'JEANS', image: 'dnkk.jpeg' },
  { id: 'sweatpants', name: 'SWEATPANTS', image: 'dwmkwh.jpg' },
];

// Official Product Inventory
const products = [
  { id: 'tshirt-1', name: 'MAKSOUME CALLIGRAPHY TEE', price: 350, category: 'T-SHIRTS', image: 'c57c1732-bff3-40f5-820d-a8862315390e.jfif' },
  { id: 'tshirt-2', name: 'GRAPHIC BACK TEE', price: 350, category: 'T-SHIRTS', image: 'lmxka.png' },
  { id: 'tshirt-3', name: 'COMING SOON VAPOR TEE', price: 350, category: 'T-SHIRTS', image: 'ad597b1d4f904e1a681fb2ac2900bc53.jpg' },
  { id: 'tshirt-4', name: 'COMING SOON +18 TEE', price: 350, category: 'T-SHIRTS', image: 'c838112da7072efd068a9dd28582609f.jpg' },
  { id: 'tshirt-5', name: 'COMING SOON X TEE', price: 350, category: 'T-SHIRTS', image: 'mkankx.png' },
  { id: 'hoodie-1', name: 'COMIC GRAPHIC HOODIE', price: 599, category: 'HOODIES', image: 'coll hodie.jpg' },
  { id: 'hoodie-2', name: 'TUL8TE SPECIAL HOODIE', price: 599, category: 'HOODIES', image: 'unnamed.jpg' },
  { id: 'hoodie-3', name: 'MAKSOUME GOLD CALLIGRAPHY HOODIE', price: 599, category: 'HOODIES', image: 'lxlx.jpg' },
  { id: 'jacket-1', name: 'ZIP-UP LIGHT BLUE', price: 499, category: 'JACKETS', image: 'hctdyufu.jpg' },
  { id: 'jacket-2', name: 'ZIP-UP PHANTOM BLACK', price: 499, category: 'JACKETS', image: 'hfryrt.jpg' },
  { id: 'jacket-3', name: 'ZIP-UP HEATHER GREY', price: 499, category: 'JACKETS', image: 'mncejej.png' },
  { id: 'jacket-4', name: 'ZIP-UP BURGUNDY', price: 499, category: 'JACKETS', image: 'unnamed (7).jpg' },
  { id: 'jacket-5', name: 'OVERSIZED ZIP BURGUNDY', price: 499, category: 'JACKETS', image: 'unnamed (8).jpg' },
  { id: 'jacket-6', name: 'OVERSIZED ZIP BLACK', price: 499, category: 'JACKETS', image: 'unnamed (9).jpg' },
  { id: 'jacket-7', name: 'OVERSIZED ZIP WHITE', price: 499, category: 'JACKETS', image: 'unnamed (10).jpg' },
  { id: 'jacket-8', name: 'OVERSIZED ZIP POWDER BLUE', price: 499, category: 'JACKETS', image: 'unnamed (11).jpg' },
  { id: 'jacket-9', name: 'OVERSIZED ZIP CHOCOLATE', price: 499, category: 'JACKETS', image: 'unnamed (12).jpg' },
  { id: 'jeans-1', name: 'BAGGY DENIM CALLIGRAPHY', price: 550, category: 'JEANS', image: 'c57c1732-bff3-40f5-820d-a8862315390e.jfif' },
  { id: 'jeans-2', name: 'PAINT SPLATTER MID-BLUE', price: 550, category: 'JEANS', image: 'dnkk.jpeg' },
  { id: 'jeans-3', name: 'PAINT SPLATTER LIGHT BLUE', price: 550, category: 'JEANS', image: 'mcekdwhi.jpeg' },
  { id: 'jeans-4', name: 'DARK DENIM BAGGY', price: 550, category: 'JEANS', image: 'mdkw.jpeg' },
  { id: 'jeans-5', name: 'VINTAGE GREY DENIM', price: 550, category: 'JEANS', image: 'kdnkwhi.jpg' },
  { id: 'jeans-6', name: 'BLUE WASH DENIM', price: 550, category: 'JEANS', image: 'mkncepopc.jpeg' },
  { id: 'jeans-7', name: 'CHARCOAL BLACK DENIM', price: 550, category: 'JEANS', image: 'mwdej.jpeg' },
  { id: 'jeans-8', name: 'HERITAGE LIGHT DENIM', price: 550, category: 'JEANS', image: 'unnamed (13).jpg' },
  { id: 'sweats-1', name: 'EYE GRAPHIC SWEATS BLACK', price: 550, category: 'SWEATPANTS', image: 'dwmkwh.jpg' },
  { id: 'sweats-2', name: 'EYE GRAPHIC SWEATS GREY', price: 550, category: 'SWEATPANTS', image: 'grey better pants.jpg' },
  { id: 'sweats-3', name: 'PURPLE CALLIGRAPHY GREY', price: 550, category: 'SWEATPANTS', image: 'croped pants.jpg' },
  { id: 'sweats-4', name: 'PURPLE CALLIGRAPHY CHOCOLATE', price: 550, category: 'SWEATPANTS', image: 'd3wdtjkwj.jpg' },
  { id: 'sweats-5', name: 'PURPLE CALLIGRAPHY BLACK', price: 550, category: 'SWEATPANTS', image: 'hxwnhwfwgj.jpg' },
  { id: 'sweats-6', name: 'EYE GRAPHIC SWEATS PHANTOM', price: 550, category: 'SWEATPANTS', image: 'nckef.jpg' },
  { id: 'sweats-7', name: 'EYE GRAPHIC SWEATS BURGUNDY', price: 550, category: 'SWEATPANTS', image: 'unnamed (18).jpg' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8D9C5] text-[#141414] selection:bg-[#141414] selection:text-[#E8D9C5] font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#E8D9C5]/90 backdrop-blur-xl py-4 border-b border-black/5' : 'py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="group flex items-center gap-3 p-2 hover:bg-black/5 rounded-full transition-all"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center gap-1">
                <span className="w-full h-0.5 bg-black transition-all group-hover:w-3/4" />
                <span className="w-full h-0.5 bg-black transition-all group-hover:w-1/2" />
              </div>
              <span className="hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase">Explore</span>
            </button>
            <div className="hidden lg:flex gap-8">
              {CATEGORIES.map(cat => (
                <a 
                  key={cat.id} 
                  href={`#${cat.id}`} 
                  className="text-[10px] font-bold tracking-[0.3em] hover:opacity-100 opacity-40 transition-all uppercase"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-3xl font-black tracking-[-0.05em] uppercase italic">
            مَقْسُوم
          </div>

          <div className="flex items-center gap-6">
            <button className="relative group p-2 hover:bg-black/5 rounded-full transition-all">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#002395] text-[9px] text-white flex items-center justify-center rounded-full font-black ring-4 ring-[#E8D9C5]">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#F5F5F0] flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-between border-r border-black/10">
              <button onClick={() => setIsMenuOpen(false)} className="self-start p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={32} />
              </button>
              <div className="flex flex-col gap-6 my-10">
                {CATEGORIES.map((cat, i) => (
                  <motion.a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onMouseEnter={() => setActiveCategory(cat)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-6xl font-bold hover:italic transition-all uppercase tracking-tighter"
                  >
                    {cat.name}
                  </motion.a>
                ))}
              </div>
              <div className="text-[10px] tracking-[0.3em] opacity-40 uppercase font-bold">Maksoume Architecture © 2026</div>
            </div>
            <div className="hidden md:block flex-1 p-12 bg-black/5 overflow-hidden">
               <motion.div 
                 key={activeCategory?.id}
                 initial={{ scale: 1.1, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="h-full bg-cover bg-center rounded-3xl shadow-2xl"
                 style={{ backgroundImage: `url(${activeCategory?.image})` }}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.05, scale: 1 }} 
            transition={{ duration: 3, ease: "easeOut" }} 
            className="text-[30vw] font-black tracking-[-0.05em] leading-none"
          >
            MAKSOUME
          </motion.h2>
        </div>
        
        <div className="z-10 text-center px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/10 text-[10px] uppercase tracking-[0.4em] font-black bg-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#002395] animate-pulse shadow-[0_0_12px_rgba(0,35,149,0.5)]" />
            Built Different Luxury Tech
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[160px] font-black tracking-[-0.06em] leading-[0.8] mb-12 uppercase italic"
          >
            BUILT<br />DIFFERENT.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="group relative mt-4 px-12 py-6 bg-black text-white rounded-full flex items-center gap-6 mx-auto transition-all hover:bg-[#002395] hover:scale-105 active:scale-95">
              <span className="text-[11px] font-black uppercase tracking-[0.4em]">Shop Collection</span>
              <div className="w-8 h-px bg-white/30 transition-all group-hover:w-12" />
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-12 hidden xl:block">
          <div className="flex flex-col gap-8">
            <div className="h-24 w-px bg-black/10 origin-bottom scale-y-100" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase vertical-text opacity-40">Scroll to Explore</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 bg-white rounded-t-[60px] shadow-[0_-20px_60px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="mb-48 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
                <div>
                  <div className="text-[10px] font-black tracking-[0.4em] uppercase text-[#002395] mb-4">Collection / 2026</div>
                  <h3 className="text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-none">{category.name}</h3>
                </div>
                <div className="md:w-1/3 text-[11px] font-medium leading-relaxed opacity-60 uppercase tracking-widest text-right">
                  Engineered for the modern aesthetic. Built for those who defy the standard.
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
                {products.filter(p => p.category === category.name).map((product) => (
                  <motion.div 
                    key={product.id} 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    className="group flex flex-col"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F0] rounded-3xl relative mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                      />
                      <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 backdrop-blur-md text-black text-[9px] font-black rounded-full shadow-xl">
                        LIMITED
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-black uppercase tracking-tight max-w-[70%]">{product.name}</h3>
                        <div className="text-sm font-black text-[#002395]">{product.price} LE</div>
                      </div>
                      <p className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-6">In Stock / Quick Ship</p>
                      <button 
                        onClick={() => window.open(`https://wa.me/201021668541?text=Order: ${product.name}`, '_blank')}
                        className="w-full py-5 bg-[#002395] text-white text-[11px] font-black rounded-2xl hover:bg-black transition-all duration-500 uppercase tracking-[0.2em] shadow-lg hover:shadow-[#002395]/20 active:scale-[0.98]"
                      >
                        PURCHASE
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-[#E8D9C5] border-t border-black/5">
        <div className="container mx-auto px-10">
          <div className="flex flex-col items-center">
            <div className="text-7xl font-black tracking-[-0.05em] mb-4 italic uppercase">مَقْسُوم</div>
            <p className="text-[12px] font-black tracking-[0.5em] uppercase mb-16 opacity-30">The Architecture of Tech-Streetwear</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl mb-24">
              <a 
                href="https://instagram.com/maksoum.eg" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-12 rounded-[40px] border border-black/5 hover:bg-black/5 transition-all"
              >
                <Instagram className="mb-6 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase mb-2">Instagram</span>
                <span className="text-[9px] font-bold opacity-30 uppercase">@maksoum.eg</span>
              </a>
              <a 
                href="https://wa.me/201021668541" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-12 rounded-[40px] border border-black/5 hover:bg-black/5 transition-all"
              >
                <Phone className="mb-6 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase mb-2">WhatsApp</span>
                <span className="text-[9px] font-bold opacity-30 uppercase">+20 102 166 8541</span>
              </a>
            </div>
            
            <div className="pt-12 border-t border-black/5 w-full flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] font-black tracking-[0.2em] opacity-40 uppercase">© 2026 MAKSOUME INC. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] opacity-40 uppercase">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Shipping</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}