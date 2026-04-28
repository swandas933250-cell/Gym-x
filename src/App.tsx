import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  Trophy, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Star,
  Quote
} from 'lucide-react';

// --- Components ---

const LogoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-white" fill="currentColor">
    <path d="M5 38h35v4H10v4h25v4H15v4h20v4H20z" />
    <path d="M95 38H60v4h30v4H65v4h25v4H70v4h10z" />
    <circle cx="50" cy="51" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M40 51l5-5 5 5 5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M38 37c0-12 24-12 24 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <path d="M30 78q20 10 40 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M26 71v14M22 75v6M74 71v14M78 75v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'} border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <LogoIcon />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter uppercase italic leading-none">Gym X</span>
            <span className="text-[7px] font-black tracking-[0.3em] uppercase text-brand mt-1.5 border-t border-brand/20 pt-1">Fitness for FearlessLife</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 hover:opacity-100 hover:text-brand transition-all"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all transform -skew-x-6">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full bg-black py-10 flex flex-col items-center gap-8 md:hidden border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display uppercase tracking-widest hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand text-white w-2/3 py-4 rounded-none font-display uppercase tracking-wider skew-card">
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center border-b border-white/10">
      {/* Background Layer with Video */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-110 grayscale opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-strong-man-lifting-a-barbell-in-a-gym-2343-large.mp4" type="video/mp4" />
        </video>
        {/* Animated Scanline Effect */}
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent h-20 z-10 opacity-30 pointer-events-none"
        />
      </motion.div>

      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand/5 z-10" />
      
      <div className="relative z-20 px-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-0 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-10"
        >
          <motion.p 
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.4em' }}
            className="text-brand font-black text-sm uppercase mb-8"
          >
            EST. 2024 — GLOBAL PERFORMANCE
          </motion.p>
          <h1 className="relative text-[14vw] lg:text-[110px] leading-[0.85] font-black uppercase tracking-tighter mb-10 italic">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              TRANSFORM
            </motion.span>
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              YOUR <span className="text-stroke">BODY</span>
            </motion.span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-md text-lg text-white/60 font-medium leading-relaxed"
            >
              Expert trainers, cutting-edge equipment, and a high-performance community built for those who refuse to settle.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <button className="bg-white text-black px-12 py-5 font-bold text-sm uppercase tracking-widest transition-all skew-card h-fit hover:bg-brand hover:text-white">
                Start Trial
              </button>
              <button className="group flex items-center gap-4 text-white/60 hover:text-white transition-all uppercase text-[10px] tracking-[0.3em] font-black">
                View All Programs <div className="w-12 h-px bg-white/20 group-hover:bg-brand transition-all" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stat Dividers */}
        <div className="col-span-12 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-l-2 border-brand pl-6 py-2">
            <span className="block text-4xl font-black italic">500+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-black">Active Members</span>
          </div>
          <div className="border-l-2 border-brand pl-6 py-2">
            <span className="block text-4xl font-black italic">24/7</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-black">Full Access</span>
          </div>
          <div className="border-l-2 border-brand pl-6 py-2">
            <span className="block text-4xl font-black italic">15+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-black">Elite Coaches</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-12 flex flex-col md:flex-row md:items-baseline md:gap-8">
    <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-4 md:mb-0 block whitespace-nowrap">
      {subtitle}
    </span>
    <h2 
      className={`text-6xl md:text-8xl leading-[0.85] italic font-black uppercase tracking-tighter ${light ? 'text-white' : 'text-white'}`}
      dangerouslySetInnerHTML={{ __html: title.replace(/<br\s*\/?>/gi, ' ') }}
    />
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-10 mb-16 lg:mb-0">
          <SectionHeading subtitle="Architectural Performance" title="Built For Those Who Refuse To Settle" />
          <p className="text-white/60 mb-12 text-lg leading-relaxed font-medium max-w-2xl">
            Gym X started with a simple vision: to create a space where hard work is the only currency. We believe that fitness is about character, discipline, and the pursuit of your absolute best self.
          </p>
          <button className="px-8 py-4 border border-brand text-brand font-black text-sm uppercase tracking-widest hover:bg-brand hover:text-white transition-all skew-card">
            Learn Our Story
          </button>
        </div>
        
        <div className="col-span-12 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { label: "Elite Gear", value: "State-of-the-art Rogue and Eleiko labs." },
              { label: "24/7 Access", value: "Available whenever your drive strikes." },
              { label: "Pro Coaching", value: "Masters of human physiology." },
              { label: "Recovery", value: "Advanced biomechanical repair suite." }
            ].map((item) => (
              <div key={item.label} className="bg-[#0A0A0A] p-8 group">
                <span className="block text-brand text-sm font-black uppercase tracking-widest mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                <p className="text-white/60 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { title: "Strength & Power", id: "01" },
    { title: "HIIT Conditioning", id: "02" },
    { title: "Olympic Lifting", id: "03" },
    { title: "Personal Training", id: "04" },
    { title: "Nutrition Lab", id: "05" },
  ];

  return (
    <section id="programs" className="border-b border-white/10 grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-8 p-10 md:p-20 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
        <div className="relative z-10">
          <SectionHeading subtitle="Curated Disciplines" title="Superior Training" />
          <p className="max-w-md text-white/50 text-sm uppercase tracking-[0.2em] leading-relaxed mb-12">
            Our programs are engineered to produce maximum output for every specialized athlete.
          </p>
          <div className="w-full h-[400px] bg-zinc-900 border border-white/5 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200&h=800" 
               alt="Training" 
               className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </div>

      <div className="md:col-span-4 flex flex-col divide-y divide-white/10">
        <div className="p-8 md:p-12 flex justify-between items-end">
          <h3 className="text-2xl font-black uppercase italic">Programs</h3>
          <span className="text-[10px] uppercase font-black tracking-widest opacity-30">01 — 05</span>
        </div>
        {programs.map((prog) => (
          <div key={prog.id} className="p-8 md:p-10 group cursor-pointer hover:bg-white/5 transition-all flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <span className="text-[10px] font-black text-brand opacity-0 group-hover:opacity-100 transition-opacity">{prog.id}</span>
              <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand transition-colors">{prog.title}</span>
            </div>
            <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-brand transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
};

const Membership = () => {
  const plans = [
    { name: "Global Tier", price: "49", savings: "Monthly" },
    { name: "Pro Tier", price: "89", savings: "Save 20%", popular: true },
    { name: "Elite Tier", price: "159", savings: "All-Access" },
  ];

  return (
    <section id="membership" className="py-24 border-b border-white/10 px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-16">
        <div className="w-full">
          <SectionHeading subtitle="Access Levels" title="Elite Partnerships" />
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] leading-loose max-w-2xl">
            No long-term contracts. Just pure commitment to excellence. All tiers include full access to our global network of performance labs.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-white/5">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 ${plan.popular ? 'bg-white/5' : ''}`}>
              <div>
                <span className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">{plan.name}</span>
                <div className="flex justify-between items-baseline mb-12">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}<span className="text-sm">/mo</span></span>
                  <span className={`text-[10px] px-2 py-1 uppercase font-black skew-tag ${plan.popular ? 'bg-brand' : 'bg-white/10'}`}>
                    {plan.savings}
                  </span>
                </div>
              </div>
              <button className="w-full py-4 border border-brand text-brand font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-all skew-card">
                Start Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    { name: "Alex Iron", role: "Strength Lab", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=1000" },
    { name: "Sarah Vane", role: "Conditioning Specialist", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800&h=1000" },
    { name: "Damon K.", role: "Lead Recovery", img: "https://images.unsplash.com/photo-1491752289445-586791e3674c?auto=format&fit=crop&q=80&w=800&h=1000" },
    { name: "Jax Steel", role: "Mobility Coach", img: "https://images.unsplash.com/photo-1549476464-37392f719918?auto=format&fit=crop&q=80&w=800&h=1000" },
  ];

  return (
    <section id="trainers" className="py-0 border-b border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {trainers.map((t, idx) => (
          <div key={idx} className="group relative h-[600px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <img src={t.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-2">{t.role}</span>
                <h3 className="text-3xl text-white italic">{t.name}</h3>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 border-b border-white/10 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/3">
           <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Client Success</span>
           <p className="text-3xl font-black italic leading-tight text-white mb-8">"Gym X is the first place that treated me like an elite athlete, regardless of my starting point."</p>
           <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full border border-white/20 p-2 overflow-hidden flex items-center justify-center font-black">M.R</div>
              <div>
                <span className="block font-black text-xs uppercase tracking-widest">Marcus R.</span>
                <span className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Powerlifter</span>
              </div>
           </div>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
           <div className="aspect-video bg-zinc-900 border border-white/10 grayscale overflow-hidden">
             <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800&h=600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
           </div>
           <div className="aspect-video bg-zinc-800 border border-white/10 grayscale overflow-hidden">
             <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
           </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="h-40 border-b border-white/10 grid grid-cols-5 divide-x divide-white/10">
       {[...Array(5)].map((_, i) => (
         <div key={i} className="hover:bg-brand/10 transition-colors cursor-pointer group flex items-center justify-center overflow-hidden">
            <div className="text-[10px] font-black opacity-20 group-hover:opacity-100 group-hover:text-brand transition-all -rotate-90">VIEW FACILITY</div>
         </div>
       ))}
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/10 mb-24">
      <div className="lg:col-span-4 lg:border-r border-white/10 pr-10 mb-20 lg:mb-0 flex flex-col justify-between">
        <div>
          <SectionHeading subtitle="Get Access" title="Contact Us" />
          <div className="space-y-4 mt-12">
            <p className="text-xs font-black uppercase tracking-widest">CHONDA, HABRA</p>
            <p className="text-xs opacity-50 uppercase font-bold tracking-widest">NORTH 24 PARGANAS</p>
          </div>
        </div>
        <div className="flex gap-4 mt-20">
          {['IG', 'TW', 'YT'].map(s => (
            <div key={s} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black hover:border-brand hover:text-brand transition-colors cursor-pointer">{s}</div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8 lg:pl-20">
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-b border-white/20 py-4 focus-within:border-brand transition-colors">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Identifier</label>
              <input type="text" placeholder="FULL NAME" className="w-full bg-transparent outline-none uppercase text-xs font-black placeholder:text-white/10" />
            </div>
            <div className="border-b border-white/20 py-4 focus-within:border-brand transition-colors">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Protocol</label>
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent outline-none uppercase text-xs font-black placeholder:text-white/10" />
            </div>
          </div>
          <div className="border-b border-white/20 py-4 focus-within:border-brand transition-colors">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Message</label>
            <textarea rows={1} placeholder="DESCRIBE YOUR OBJECTIVE" className="w-full bg-transparent outline-none uppercase text-xs font-black placeholder:text-white/10 resize-none" />
          </div>
          <button className="px-12 py-5 bg-brand text-white font-black text-xs uppercase tracking-[0.3em] skew-card hover:bg-white hover:text-brand transition-all">
            Initiate Contact
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
         <div>
            <h2 className="text-4xl text-brand italic tracking-tighter mb-4">GYM X</h2>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">&copy; 2026 ARCHITECTURAL PERFORMANCE SYSTEMS</p>
         </div>
         <div className="flex gap-12">
            <div className="space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-widest text-brand">Programs</span>
              <ul className="text-white/40 text-[10px] space-y-1 uppercase font-bold tracking-widest">
                <li>Strength</li>
                <li>HIIT</li>
                <li>Personal</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-widest text-brand">Connect</span>
              <ul className="text-white/40 text-[10px] space-y-1 uppercase font-bold tracking-widest">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
