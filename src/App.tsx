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
import { ShaderAnimation } from './components/ui/shader-lines';

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
            <span className="text-2xl font-black tracking-tighter uppercase italic leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Gym X</span>
            <span className="text-[7px] font-black tracking-[0.3em] uppercase text-brand mt-1.5 border-t border-brand/20 pt-1 shadow-[0_0_15px_rgba(0,242,255,0.2)]">Fitness for FearlessLife</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
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
          className="lg:hidden text-white"
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
            className="absolute top-full left-0 w-full bg-[#0A0A0A] py-10 flex flex-col items-center gap-8 lg:hidden border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-widest hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand text-white w-2/3 py-4 rounded-none font-black uppercase tracking-wider skew-card">
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
    <section className="relative min-h-screen w-full overflow-hidden flex items-center border-b border-white/10 py-20 lg:py-0 bg-black">
      {/* Background Layer with Shader */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <ShaderAnimation />
        {/* Animated Scanline Effect */}
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent h-20 z-10 opacity-30 pointer-events-none"
        />
      </motion.div>

      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/5 z-10" />
      
      <div className="relative z-20 px-6 sm:px-10 max-w-7xl mx-auto w-full pt-10 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.p 
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.6em' }}
            className="text-brand font-black text-xs uppercase mb-8 drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]"
          >
            EST. 2024 — DIGITAL PERFORMANCE LAB
          </motion.p>
          
          <h1 className="relative text-[14vw] sm:text-[12vw] lg:text-[130px] leading-[0.8] font-black uppercase tracking-tighter mb-10 italic">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              TRANSFORM
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block text-stroke"
            >
              YOUR BODY
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-xl text-white/70 font-medium leading-relaxed mb-12"
          >
            Where raw human power meets digital precision. Our facility is engineered for those who seek the ultimate performance edge.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="bg-brand text-black px-14 py-6 font-black text-sm uppercase tracking-widest transition-all skew-card hover:bg-white hover:text-brand shadow-[0_0_30px_rgba(0,242,255,0.3)]">
              Start The Process
            </button>
            <button className="group flex items-center gap-4 text-white/60 hover:text-white transition-all uppercase text-[10px] tracking-[0.3em] font-black border-white/10 border px-8 py-6 skew-card hover:border-brand hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]">
              View Labs <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Stat Dividers */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-12">
          <div>
            <span className="block text-3xl font-black italic">500+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-50 font-black">Performance Athletes</span>
          </div>
          <div>
            <span className="block text-3xl font-black italic">24/7</span>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-50 font-black">Digital Access</span>
          </div>
          <div>
            <span className="block text-3xl font-black italic">22+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-50 font-black">Specialized Labs</span>
          </div>
          <div>
            <span className="block text-3xl font-black italic">Elite</span>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-50 font-black">Level Recovery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-12 flex flex-col lg:flex-row lg:items-baseline lg:gap-8">
    <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-4 lg:mb-0 block whitespace-nowrap">
      {subtitle}
    </span>
    <h2 
      className={`text-6xl md:text-8xl leading-[0.85] italic font-black uppercase tracking-tighter ${light ? 'text-white' : 'text-white'}`}
      dangerouslySetInnerHTML={{ __html: title.split('<br/>').join(' ') }}
    />
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-12 gap-0 lg:gap-20">
        <div className="col-span-12 lg:col-span-7 mb-16 lg:mb-0">
          <SectionHeading subtitle="Architectural Performance" title="Built For Those Who Refuse To Settle" />
          <p className="text-white/60 mb-12 text-lg leading-relaxed font-medium max-w-2xl">
            Gym X started with a simple vision: to create a space where hard work is the only currency. We believe that fitness is about character, discipline, and the pursuit of your absolute best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button className="px-8 py-4 border border-brand text-brand font-black text-sm uppercase tracking-widest hover:bg-brand hover:text-black transition-all skew-card shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              Learn Our Story
            </button>
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
              <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-white/40">+2k Members Joined</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
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
        
        <div className="col-span-12 lg:col-span-5 h-[400px] lg:h-full relative overflow-hidden skew-card">
          <img 
            src="https://lh3.googleusercontent.com/d/14kK_Tihmyp3akybgRuIloQ5M4w8VDN_q" 
            alt="About Gym X" 
            className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Founding Principles</span>
            <p className="text-xl font-bold italic uppercase tracking-tighter text-white">"The iron never lies to you."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const [activeImg, setActiveImg] = useState("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200&h=800");

  const programs = [
    { title: "Strength & Power", id: "01", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=1000" },
    { title: "HIIT Conditioning", id: "02", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=1000" },
    { title: "Olympic Lifting", id: "03", img: "/regenerated_image_1777451933677.png" },
    { title: "Personal Training", id: "04", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800&h=1000" },
    { title: "Nutrition Lab", id: "05", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800&h=1000" },
  ];

  return (
    <section id="programs" className="border-b border-white/10 grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-8 p-6 md:p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors" />
        <div className="relative z-10">
          <SectionHeading subtitle="Curated Disciplines" title="Superior Training" />
          <p className="max-w-md text-white/50 text-sm uppercase tracking-[0.2em] leading-relaxed mb-8 md:mb-12">
            Our programs are engineered to produce maximum output for every specialized athlete.
          </p>
          <div className="w-full h-[300px] md:h-[500px] bg-zinc-900 border border-white/5 overflow-hidden shadow-2xl skew-card">
             <AnimatePresence mode="wait">
               <motion.img 
                 key={activeImg}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 0.7, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.5 }}
                 src={activeImg} 
                 alt="Training" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
             </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col divide-y divide-white/10">
        <div className="p-8 lg:p-12 flex justify-between items-end">
          <h3 className="text-2xl font-black uppercase italic">Programs</h3>
          <span className="text-[10px] uppercase font-black tracking-widest opacity-30">01 — 05</span>
        </div>
        {programs.map((prog) => (
          <div 
            key={prog.id} 
            onMouseEnter={() => setActiveImg(prog.img)}
            className="p-6 md:p-10 group cursor-pointer hover:bg-white/5 transition-all flex items-center justify-between"
          >
            <div className="flex gap-6 items-center">
              <span className="text-[10px] font-black text-brand opacity-0 group-hover:opacity-100 transition-opacity">{prog.id}</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand transition-colors">{prog.title}</span>
                <div className="lg:hidden h-24 mt-4 overflow-hidden rounded border border-white/10">
                   <img src={prog.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 transition-all" alt={prog.title} />
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-brand transition-all" />
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
                  <span className={`text-[10px] px-2 py-1 uppercase font-black skew-tag ${plan.popular ? 'bg-brand text-black' : 'bg-white/10 text-white'}`}>
                    {plan.savings}
                  </span>
                </div>
              </div>
              <button className="w-full py-4 border border-brand text-brand font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand hover:text-black transition-all skew-card">
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
    { name: "Sarah Vane", role: "Conditioning Specialist", img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=800&h=1000" },
    { name: "Damon K.", role: "Lead Recovery", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800&h=1000" },
  ];

  return (
    <section id="trainers" className="py-0 border-b border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {trainers.map((t, idx) => (
          <div key={idx} className="group relative h-[450px] sm:h-[600px] lg:h-[700px] overflow-hidden transition-all duration-700 bg-zinc-900">
             <img 
               src={t.img} 
               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
               referrerPolicy="no-referrer" 
               alt={t.name} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 sm:p-8 md:p-12 flex flex-col justify-end">
                <span className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-2">{t.role}</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white italic font-black uppercase tracking-tighter leading-none">{t.name}</h3>
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
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=800",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800&h=800",
    "https://lh3.googleusercontent.com/d/14kK_Tihmyp3akybgRuIloQ5M4w8VDN_q",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=800",
    "/regenerated_image_1777451794919.png",
    "/regenerated_image_1777451792589.png",
  ];

  return (
    <section className="border-b border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
       {images.map((img, i) => (
         <div key={i} className="relative aspect-square transition-all cursor-pointer group flex items-center justify-center overflow-hidden grayscale hover:grayscale-0">
            <img 
              src={img} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
              alt={`Gym Facility ${i + 1}`}
            />
            <div className="relative z-10 text-[9px] font-black opacity-60 group-hover:opacity-0 transition-opacity -rotate-90 tracking-[0.3em] uppercase">VIEW FACILITY</div>
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
          <button className="px-12 py-5 bg-brand text-black font-black text-xs uppercase tracking-[0.3em] skew-card hover:bg-white hover:text-brand transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]">
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
