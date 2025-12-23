import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, ChevronRight, Star, 
  ArrowRight, Instagram, Facebook, Twitter, 
  ChefHat, Flame, Users, Globe, CheckCircle,
  Clock, Mail, Phone
} from 'lucide-react';
const AnimatedNavLink = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative grid text-white text-5xl italic overflow-hidden"
    >
      {/* Top Text */}
      <span
        className="col-start-1 row-start-1 font-[Playfair_Display] transition-all duration-400
                   group-hover:opacity-0 group-hover:translate-x-12"
      >
        <SplitText text={label} />
      </span>

      {/* Bottom Text */}
      <span
        className="col-start-1 row-start-1 font-['Roboto'] opacity-0 transition-all duration-400
                   group-hover:opacity-100 group-hover:translate-x-12"
      >
        <SplitText text={label} />
      </span>
    </button>
  );
};

const SplitText = ({ text }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-transform duration-500 origin-center"
        style={{ transitionDelay: `${i * 25}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);

// --- Assets & Data Configuration ---

const BRAND_COLORS = {
  primary: '#ED206F', // Pink
  black: '#000000',
  white: '#FFFFFF',
  grey: '#817F7F',
  lightGrey: '#F5F5F5',
  offWhite: '#FAFAFA'
};

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Menu', id: 'menu' },
  { name: 'Locations', id: 'locations' },
  { name: 'About', id: 'about' },
  { name: 'Franchise', id: 'franchise' },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: "The Bombay Fire Bowl",
    category: "Bowls",
    price: "$14.50",
    description: "Char-grilled spicy chicken, saffron quinoa, kachumber slaw, and our signature makhani drizzle.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    tags: ["Spicy", "Bestseller"]
  },
  {
    id: 2,
    name: "Green Goddess Paneer",
    category: "Bowls",
    price: "$13.00",
    description: "Tandoori marinated paneer, kale mix, pickled onions, crispy chickpeas, mint-cilantro vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    tags: ["Vegetarian", "GF"]
  },
  {
    id: 3,
    name: "Naan-wich Wrap",
    category: "Wraps",
    price: "$11.50",
    description: "Slow-roasted lamb, garlic yogurt, pickled chili, wrapped in a fluffy, fresh-baked naan.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    tags: ["Chef's Pick"]
  },
  {
    id: 4,
    name: "Masala Sweet Potato",
    category: "Sides",
    price: "$5.50",
    description: "Roasted sweet potato wedges dusted with chaat masala and lime.",
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=800",
    tags: ["Vegan"]
  }
];

const LOCATIONS = [
  {
    city: "Chennai",
    spots: [
      { name: "Tambaram ", address: "124 W 34th St,Tambaram, Tamil Nadu, TN", hours: "10:30 AM - 10:00 PM", status: "Open Now" },
      { name: "Vandalur ", address: "23 E 21st St,Vandalur Tamil Nadu, TN", hours: "10:30 AM - 9:00 PM", status: "Closing Soon" }
    ]
  },
  {
    city: "Madurai",
    spots: [
      { name: "Madurai", address: "110 N Wacker Dr,Madurai, Tamil Nadu, TN", hours: "10:00 AM - 8:00 PM", status: "Open Now" }
    ]
  }
];

// --- Components ---

const Button = ({ children, primary, outline, className, onClick }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 text-sm tracking-wide uppercase";
  const primaryStyle = `bg-[#ED206F] text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl`;
  const outlineStyle = `border-2 border-[#ED206F] text-[#ED206F] hover:bg-[#ED206F] hover:text-white`;
  const whiteOutline = `border-2 border-white text-white hover:bg-white hover:text-black`;
  
  let appliedStyle = primary ? primaryStyle : outline ? outlineStyle : whiteOutline;
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${appliedStyle} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, align = "center", light = false }) => (
  <div className={`mb-12 text-${align}`}>
    {subtitle && (
      <span className={`block mb-2 font-montserrat font-bold text-xs uppercase tracking-widest ${light ? 'text-[#ED206F]' : 'text-[#ED206F]'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-montserrat font-bold text-3xl md:text-4xl ${light ? 'text-white' : 'text-black'}`}>
      {title}
    </h2>
    <div className={`mt-4 h-1 w-16 bg-[#ED206F] ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

// --- Layout Wrapper ---

export default function PiRoApp() {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [activePage]);

  // --- Views ---

  const HomeView = () => (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
            alt="PiRo Dining Experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Subtle Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Content */}

  {/* FREE RESTAURANT BACKGROUND IMAGE (UNSPLASH) */}
  <img
    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
    alt="Restaurant Interior Background"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      brightness-35
      contrast-85
      saturate-75
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 text-center max-w-4xl px-6 pt-20">

    <h1 className="font-montserrat font-bold text-4xl md:text-7xl text-white mb-6 leading-tight drop-shadow-xl">
      Global Flavours. <br />
      <span className="text-[#ED206F] drop-shadow-xl">
        Indian Soul.
      </span>
    </h1>

    <p className="font-sans text-base md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
      A modern culinary movement. Experience the fire, the spice, and the
      community of PiRo.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Button
        primary
        onClick={() => setActivePage("menu")}
        className="text-white bg-pink-600 hover:text-pink-600 hover:bg-white"
      >
        Order Online
      </Button>

      <Button
        onClick={() => setActivePage("locations")}
        className="border-2 border-white text-white hover:bg-white hover:text-black"
      >
        Find a Location
      </Button>
    </div>

  </div>
</section>


      {/* 2. The PiRo Experience */}
      <section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <SectionHeader
      title="The PiRo Experience"
      subtitle="More than just food"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <Users size={28} />,
          title: "Community Dining",
          img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          desc:
            "Spaces designed for connection. Long tables, open kitchens, and good vibes.",
        },
        {
          icon: <Clock size={28} />,
          title: "Tech-Forward Kiosks",
          img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
          desc:
            "Seamless ordering for the urban professional. Grab, go, and conquer your day.",
        },
        {
          icon: <Star size={28} />,
          title: "Curated Events",
          img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
          desc:
            "From local artist showcases to tasting menus. We are the neighborhood hub.",
        },
      ].map((item, idx) => (
        <div key={idx} className="group cursor-pointer">
          <div className="relative h-64 overflow-hidden rounded-xl mb-6">

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />

            {/* OVERLAY — DESKTOP ONLY */}
            <div className="hidden md:block absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition-all duration-500" />

            {/* ICON */}
            <div className="absolute bottom-4 left-4 bg-[#ED206F] text-white p-2 rounded-full shadow-lg">
              {item.icon}
            </div>
          </div>

          <h3 className="font-montserrat font-bold text-xl mb-2">
            {item.title}
          </h3>

          <p className="text-[#817F7F] font-sans leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 3. Signature Creations (Horizontal Scroll) */}
      <section className="py-20 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
          <SectionHeader title="Signature Bowls" subtitle="Curated for you" align="left" />
          <button 
            onClick={() => setActivePage('menu')}
            className="hidden md:flex items-center text-[#ED206F] font-bold font-montserrat hover:mr-2 transition-all"
          >
            View Full Menu <ArrowRight className="ml-2" size={20}/>
          </button>
        </div>
        
        <div className="flex overflow-x-auto pb-8 pl-6 md:pl-[calc((100vw-1280px)/2)] gap-6 scrollbar-hide">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="min-w-[280px] md:min-w-[350px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden rounded-t-xl relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.tags.includes("Bestseller") && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Bestseller
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-montserrat font-bold text-lg">{item.name}</h3>
                  <span className="text-[#ED206F] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                <button className="text-sm font-bold border-b-2 border-black pb-0.5 hover:text-[#ED206F] hover:border-[#ED206F] transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
          <div className="min-w-[100px] flex items-center justify-center">
             <div onClick={() => setActivePage('menu')} className="h-16 w-16 rounded-full border-2 border-[#ED206F] flex items-center justify-center text-[#ED206F] cursor-pointer hover:bg-[#ED206F] hover:text-white transition-colors">
               <ArrowRight />
             </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Story - Editorial */}
      <section className="py-24 px-6 relative bg-black text-white">
        {/* Curved Top Decoration */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-12">
          <div className="w-full md:w-1/2">
             <div className="relative">
               <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#ED206F]"></div>
               <img 
                 src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
                 alt="Chef Cooking" 
                 className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 w-full"
               />
               <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#ED206F]"></div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-montserrat font-bold text-4xl mb-6 hover:gray-700">Every Name Has a Story.</h2>
            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6 hover:text-pink-600 hover:text-2xl">
              PiRo is not just a kitchen; it’s a dialogue between cultures. Born from the vibrant street markets of Mumbai and refined for the fast-paced energy of New York, we bridge the gap between fast food" and fine dining.
            </p>
            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-8 hover:text-pink-600 hover:text-2xl">
              We believe in spice that awakens, ingredients that sustain, and spaces that inspire.
            </p>
            <Button onClick={() => setActivePage('about')} className="border-2 border-white text-white hover:bg-white hover:text-black">
              Read Our Manifesto
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Pillars / Ingredients */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
               { icon: <Globe size={40} />, title: "Global Inspiration", desc: "Flavors without borders." },
               { icon: <Flame size={40} />, title: "Fire-Driven", desc: "Charred to perfection daily." },
               { icon: <ChefHat size={40} />, title: "Scratch Cooking", desc: "No freezers, just fresh prep." },
               { icon: <CheckCircle size={40} />, title: "Ethical Sourcing", desc: "Good for you, good for earth." },
             ].map((pillar, idx) => (
               <div key={idx} className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                 <div className="text-[#ED206F] mb-4 flex justify-center">{pillar.icon}</div>
                 <h4 className="font-montserrat font-bold text-lg mb-2">{pillar.title}</h4>
                 <p className="text-sm text-gray-500">{pillar.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Trust (Simplified) */}
      <section className="py-16 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="font-montserrat font-bold text-2xl mb-8">Trusted by the best communities</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos represented by text for prototype */}
            <span className="text-xl font-bold font-montserrat">EATER</span>
            <span className="text-xl font-bold font-montserrat">infatuation</span>
            <span className="text-xl font-bold font-montserrat">Food&Wine</span>
            <span className="text-xl font-bold font-montserrat">TIMEOUT</span>
          </div>
        </div>
      </section>

      {/* 7. Franchise Teaser */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#ED206F] font-bold tracking-widest uppercase mb-4 block">Built for Scale</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6">Bring PiRo to Your City</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            We've engineered a scalable, system-driven model designed for high-volume efficiency without compromising on the premium experience. Join the movement.
          </p>
          <Button onClick={() => setActivePage('franchise')} primary className="text-lg px-8 py-4">
            Explore Franchise Opportunities
          </Button>
        </div>
      </section>

      {/* 8. Conversion */}
      <section className="h-[40vh] relative flex items-center justify-center bg-[#ED206F] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">Hungry yet?</h2>
          <Button onClick={() => setActivePage('menu')} className="bg-gray-800 text-pink-600 hover:bg-black hover:text-pink-600 px-10 py-4 text-xl shadow-xl">
            Order Now
          </Button>
        </div>
      </section>
    </>
  );

  const MenuView = () => {
    const categories = ["All", "Bowls", "Wraps", "Sides", "Drinks"];
    const [activeCat, setActiveCat] = useState("All");

    const filteredItems = activeCat === "All" 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === activeCat);

    return (
      <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Menu" subtitle="Fresh & Fire-Grilled" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all ${
                  activeCat === cat 
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-80">
                     <span className="text-white font-bold text-lg">{item.price}</span>
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-montserrat font-bold text-xl">{item.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.description}</p>
                  <Button primary className="w-full">Add to Order</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const FranchiseView = () => (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-black text-white py-20 px-6 text-center">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">Partner with PiRo</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The next generation of fast-casual dining is here. Scalable, profitable, and purpose-driven.
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-[#ED206F]">Why PiRo?</h3>
            <h2 className="font-montserrat font-bold text-3xl mb-6">A Model Built for the Future</h2>
            <ul className="space-y-4">
              {[
                "Streamlined kitchen operations (no master chef needed)",
                "Small footprint options (600sqft to 2000sqft)",
                "Proprietary tech stack for inventory & labor",
                "Strong unit economics & ROI potential"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#ED206F] shrink-0" size={20} />
                  <span className="text-gray-700 font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
             <span className="text-gray-400 font-bold text-lg">[Franchise Infographic Placeholder]</span>
          </div>
        </div>

        <div className="bg-[#FAFAFA] p-10 rounded-2xl border border-gray-200">
          <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">Request Information</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="p-4 rounded-lg bg-white border border-gray-200 focus:border-[#ED206F] outline-none" />
            <input type="text" placeholder="Last Name" className="p-4 rounded-lg bg-white border border-gray-200 focus:border-[#ED206F] outline-none" />
            <input type="email" placeholder="Email Address" className="p-4 rounded-lg bg-white border border-gray-200 focus:border-[#ED206F] outline-none" />
            <input type="tel" placeholder="Phone Number" className="p-4 rounded-lg bg-white border border-gray-200 focus:border-[#ED206F] outline-none" />
            <input type="text" placeholder="Desired Territory (City/State)" className="col-span-1 md:col-span-2 p-4 rounded-lg bg-white border border-gray-200 focus:border-[#ED206F] outline-none" />
            <div className="col-span-1 md:col-span-2">
              <Button primary className="w-full text-lg">Download Franchise Kit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );

  const LocationsView = () => (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FAFAFA]">
      <SectionHeader title="Find Your PiRo" subtitle="Come say hi" />
      <div className="max-w-4xl mx-auto space-y-12">
  {LOCATIONS.map((locGroup, idx) => (
    <div key={idx}>
      <div className="flex items-center gap-3 mb-4">
        <img
    src="/logom.png"
    alt={`${locGroup.city} logo`}
    className="h-7 w-auto"
  />

  <h3 className="font-montserrat font-bold text-2xl">
    {locGroup.city}
  </h3>
</div>

      <div className="grid gap-6">
        {locGroup.spots.map((spot, sIdx) => (
          <div
            key={sIdx}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition-shadow"
          >
            <div>
              <h4 className="font-montserrat font-bold text-xl text-[#ED206F] mb-1">
                {spot.name}
              </h4>
              <p className="text-gray-600 mb-1 flex items-center gap-2">
                <MapPin size={16} /> {spot.address}
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Clock size={16} /> {spot.hours}
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex gap-4">
              <span
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${
                  spot.status === "Open Now"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {spot.status}
              </span>
              <button className="text-black font-bold underline hover:text-[#ED206F]">
                Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );

  const AboutView = () => (
    <div className="pt-24 min-h-screen">
      <div className="bg-[#ED206F] text-white py-24 px-6 text-center relative overflow-hidden">
         <div className="relative z-10">
           <h1 className="font-montserrat font-bold text-5xl mb-4">The PiRo Philosophy</h1>
           <p className="text-xl max-w-2xl mx-auto">Where ancient tradition meets urban speed.</p>
         </div>
         {/* Abstract background element */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
     <div className="max-w-3xl mx-auto py-20 px-6 font-sans text-lg text-gray-700 leading-relaxed space-y-8">

  <p className="relative">

    {/* LOGO + DROP CAP WRAPPER */}
    <span className="float-left mr-4 mt-1 flex items-center gap-2">

      <img
        src="/logoi.png"
        alt="PiRo Logo"
        className="h-10 w-8 object-contain"
      />

      <span className="font-bold text-4xl leading-none text-black font-montserrat">
        P
      </span>

    </span>

    iRo began with a simple question: Why does fast food have to feel fast?
    We wanted to create a space that respects the ingredients, respects the
    chef, and most importantly, respects the guest—even if they only have
    20 minutes for lunch.
  </p>

  <p>
    Our name is derived from the combination of <strong>Pinches</strong> of
    spice and <strong>Roots</strong> of tradition. It signifies our commitment
    to the fundamental elements of Indian cooking, reimagined for the modern,
    global palate.
  </p>

  <div className="grid grid-cols-2 gap-4 py-8">
    <img
      src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=400"
      className="rounded-lg shadow-lg rotate-2"
      alt="Spices"
    />

    <img
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
      alt="Dining Experience"
      className="rounded-lg shadow-lg -rotate-2 mt-8"
    />
  </div>


        <p>
          Today, we are building a community of flavor-seekers. From our open kitchens to our sustainable packaging, every detail is designed to bring a little more warmth into your day.
        </p>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-black selection:bg-[#ED206F] selection:text-white">
      {/* Styles for font imports would normally go in Head, simulated here */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- Header --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || activePage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => setActivePage('home')} 
            className={`font-montserrat font-bold text-2xl tracking-tighter cursor-pointer z-50 ${scrolled || activePage !== 'home' || mobileMenuOpen ? 'text-black' : 'text-white'}`}
          ><div className='flex gap-2 justify-center items-center'><img src='/logo.png' className='h-10'/>
            PiRo<span className="text-[#ED206F]">.</span></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button 
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-[#ED206F] ${
                  scrolled || activePage !== 'home' ? 'text-black' : 'text-white'
                } ${activePage === link.id ? 'text-[#ED206F]' : ''}`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              primary 
              onClick={() => setActivePage('menu')}
              className="ml-4 text-white bg-pink-600 hover:text-pink-600 hover:bg-white"
            >
              Order Online
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden z-50 ${scrolled || activePage !== 'home' || mobileMenuOpen ? 'text-black' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* --- Mobile Overlay Menu --- */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map(link => (
            <button 
              key={link.id}
              onClick={() => { setActivePage(link.id); setMobileMenuOpen(false); }}
              className="font-montserrat font-bold text-3xl text-black hover:text-[#ED206F] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button primary onClick={() => { setActivePage('menu'); setMobileMenuOpen(false); }} className=" mt-4 text-xl py-4 px-10">
             Order Online
          </Button>
        </nav>
      </div>

      {/* --- Main Content Render --- */}
      <main>
        {activePage === 'home' && <HomeView />}
        {activePage === 'menu' && <MenuView />}
        {activePage === 'locations' && <LocationsView />}
        {activePage === 'franchise' && <FranchiseView />}
        {activePage === 'about' && <AboutView />}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black text-white py-16 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className='flex '>
            <img src='/logos.png' className='h-8' />
            <h2 className="font-montserrat font-bold text-2xl mb-6">PiRo<span className="text-[#ED206F]">.</span></h2></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global flavours. Indian soul.<br/>
              Redefining the fast-casual experience<br/>
              one bowl at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li onClick={() => setActivePage('menu')} className="cursor-pointer hover:text-[#ED206F]">Menu</li>
              <li onClick={() => setActivePage('locations')} className="cursor-pointer hover:text-[#ED206F]">Locations</li>
              <li onClick={() => setActivePage('about')} className="cursor-pointer hover:text-[#ED206F]">Our Story</li>
              <li className="cursor-pointer hover:text-[#ED206F]">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Business</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li onClick={() => setActivePage('franchise')} className="cursor-pointer hover:text-[#ED206F]">Franchise Opportunities</li>
              <li className="cursor-pointer hover:text-[#ED206F]">Press & Media</li>
              <li className="cursor-pointer hover:text-[#ED206F]">Investor Relations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED206F] transition-colors cursor-pointer"><Instagram size={18}/></div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED206F] transition-colors cursor-pointer"><Facebook size={18}/></div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED206F] transition-colors cursor-pointer"><Twitter size={18}/></div>
            </div>
            <p className="text-gray-500 text-xs">
              © 2025 PiRo Kitchens International.<br/>All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}