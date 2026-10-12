import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Calendar,
  ChevronRight,
  ChevronDown,
  Star,
  CheckCircle2,
  Volume2,
  VolumeX,
  Footprints,
  Baby,
  Smile,
  PartyPopper,
  Camera,
  MessageCircle,
  Menu,
  X,
  Layers,
  ArrowRight,
  Award,
  Sparkle,
  Gift,
  Check,
  HelpCircle,
  Lock,
  Compass,
  Zap,
  Activity,
  Palette
} from 'lucide-react'
import './App.css'

// Minimalist Baby Footprint Icon SVG
function BabyFootprintSvg({ size = 22, color = "currentColor", rotate = 0 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, display: 'inline-block' }}
    >
      <path 
        d="M20 22C14.5 22 11 26.5 11 34C11 41.5 15.5 46 20 46C24.5 46 29 41.5 29 34C29 26.5 25.5 22 20 22Z" 
        fill={color} 
      />
      <circle cx="20" cy="9" r="4.2" fill={color} />
      <circle cx="28" cy="11.5" r="3" fill={color} />
      <circle cx="33.5" cy="16" r="2.4" fill={color} />
      <circle cx="12" cy="11.5" r="3" fill={color} />
      <circle cx="6.5" cy="16" r="2.4" fill={color} />
    </svg>
  );
}

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeWonderland, setActiveWonderland] = useState('toddler');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mouse Footprint Trail
  const [footprints, setFootprints] = useState([]);
  const [footCount, setFootCount] = useState(0);

  // Shoe Studio Interactive State
  const [babyAgeMonths, setBabyAgeMonths] = useState(12);
  const [footProfile, setFootProfile] = useState('standard'); // 'standard' | 'chubby'

  // Birthday Party Builder State
  const [partyKids, setPartyKids] = useState(15);
  const [partyTheme, setPartyTheme] = useState('safari'); // 'safari', 'fairytale', 'space', 'candy'
  const [partyAddons, setPartyAddons] = useState({
    photo: true,
    cakeSmash: true,
    puppet: false,
    mascot: true
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Booking Modal Form State
  const [bookingForm, setBookingForm] = useState({
    parentName: '',
    phone: '',
    childAge: '1 - 2 Years',
    service: 'Play Session (90 Min Pass)',
    date: '',
    notes: ''
  });

  // Gentle Crystal Harp Sound Synthesizer
  const playGentleChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      // Soft gentle crystalline chord
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.09, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.5);
      });
    } catch (e) {
      // Audio fallback
    }
  };

  // Pastel Celebration Confetti
  const triggerCelebration = () => {
    playGentleChime();
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF6B8B', '#FFA07A', '#BAE6FD', '#BBF7D0', '#E9D5FF', '#FDE68A']
    });
  };

  // Mouse Footprint Trail
  const handleMouseMove = (e) => {
    if (Math.random() > 0.14) return;
    const isLeft = footCount % 2 === 0;
    const colors = ['#FF6B8B', '#0284C7', '#15803D', '#7E22CE', '#D9531E'];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    const newFp = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      rotate: isLeft ? -12 : 12,
      color: chosenColor
    };
    setFootCount((c) => c + 1);
    setFootprints((prev) => [...prev.slice(-8), newFp]);
  };

  // Calculate Birthday Total
  const calculatePartyPrice = () => {
    let base = 9500;
    if (partyKids > 10) base += (partyKids - 10) * 600;
    if (partyAddons.photo) base += 2500;
    if (partyAddons.cakeSmash) base += 2000;
    if (partyAddons.puppet) base += 1800;
    if (partyAddons.mascot) base += 1500;
    return base;
  };

  // Calculate Shoe Sizing & Scale
  const getShoeSizeData = (months, profile) => {
    let sizeEU = 16;
    let sizeUK = "0.5";
    let sizeUS = "1";
    let footCm = 9.2;
    let shoeType = "Pure Cotton Pre-Walker Bootie";
    let tip = "Ultra-soft breathable cotton preserving natural cartilage flexion and toe spread.";

    if (months <= 3) {
      sizeEU = 16; sizeUK = "0.5"; sizeUS = "1"; footCm = 9.0;
      shoeType = "Pure Cotton Organic Bootie";
      tip = "Gentle featherlight fabric without restrictive pressure seams.";
    } else if (months <= 6) {
      sizeEU = 17; sizeUK = "1"; sizeUS = "2"; footCm = 10.0;
      shoeType = "Stay-On Elastic Pre-Walker";
      tip = "Soft ankle collar preventing kick-offs while infant learns to roll.";
    } else if (months <= 9) {
      sizeEU = 18; sizeUK = "2"; sizeUS = "2.5"; footCm = 10.8;
      shoeType = "Silicone Anti-Slip Crawler Sole";
      tip = "Honeycomb silicone dot traction helping baby gain push-off leverage.";
    } else if (months <= 12) {
      sizeEU = 19; sizeUK = "3"; sizeUS = "3.5"; footCm = 11.5;
      shoeType = "Zero-Drop Barefoot First-Walker";
      tip = "Ergonomic barefoot sole mimicking natural balance for first steps.";
    } else if (months <= 18) {
      sizeEU = 20; sizeUK = "4"; sizeUS = "4.5"; footCm = 12.4;
      shoeType = "Active Toddler Cushioned Flex";
      tip = "Deep rounded toe box accommodating active growth spurts.";
    } else if (months <= 24) {
      sizeEU = 22; sizeUK = "5"; sizeUS = "6"; footCm = 13.4;
      shoeType = "Playground Explorer Flexible Sneaker";
      tip = "Shock-absorbing lightweight rubber sole with protective toe wrap.";
    } else {
      sizeEU = 24; sizeUK = "7"; sizeUS = "8"; footCm = 14.6;
      shoeType = "Junior High-Flex Runner";
      tip = "All-day comfort with arch contouring and breathable knit mesh.";
    }

    if (profile === 'chubby') {
      tip += " Note: For high instep / chubby feet, our dual-velcro Wide-Comfort edition is recommended.";
    }

    return { sizeEU, sizeUK, sizeUS, footCm, shoeType, tip };
  };

  const shoeData = getShoeSizeData(babyAgeMonths, footProfile);

  // Curated Wonderlands Data
  const wonderlands = {
    infant: {
      name: "Infant Sensory Sanctuary",
      ageRange: "0 – 12 Months",
      kickerColor: "#E03164",
      pillBg: "linear-gradient(135deg, #FFF1F5 0%, #FFE4EC 100%)",
      summary: "A tranquil, whisper-soft sensory cocoon engineered exclusively for non-walking infants. Filled with tactile sensory walls, soothing water mats, baby mirrors, and organic teething-safe play items.",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      features: [
        "Memory-foam anti-fall crawl mats",
        "Sensory water-mat & tactile walls",
        "Sanitized soft tactile blocks & rattles",
        "Quiet private nursing sanctum for mothers"
      ],
      metrics: { motor: "96%", sensory: "98%", safety: "100%" }
    },
    toddler: {
      name: "Toddler Soft Gym & Ball Lagoon",
      ageRange: "1 – 3 Years",
      kickerColor: "#0284C7",
      pillBg: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
      summary: "An expansive Montessori-inspired soft-play landscape featuring 10,000+ certified sanitized balls, gradual foam slopes, crawl-through tunnels, and musical balance steps designed for confident first steps.",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      features: [
        "Automated sanitized 10,000+ ball lagoon",
        "Gradual soft-foam climbing slopes",
        "Interactive musical floor tiles",
        "Wooden fine-motor cognitive tables"
      ],
      metrics: { motor: "99%", balance: "97%", joy: "100%" }
    },
    adventure: {
      name: "Junior Pretend City & Agility Park",
      ageRange: "3 – 6 Years",
      kickerColor: "#7E22CE",
      pillBg: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)",
      summary: "A miniature city designed for imaginative role-play — featuring a junior clinic, organic market, fire station, and safety-netted mini trampoline park encouraging cooperative play and gross motor agility.",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80",
      features: [
        "Pretend City: Supermarket, Chef & Doctor",
        "Safety-netted junior trampoline zones",
        "Collaborative giant foam block castles",
        "Creative craft & watercolor corner"
      ],
      metrics: { roleplay: "98%", social: "95%", agility: "97%" }
    },
    daycare: {
      name: "Manna Crèche & Early Learning Daycare",
      ageRange: "6 Months – 6 Years",
      kickerColor: "#15803D",
      pillBg: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
      summary: "A nurturing second home for your little one with certified caregivers, pediatrician-planned wholesome organic meals, designated quiet sleep suites, and private encrypted live CCTV access for parents.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
      features: [
        "1:4 Infant-to-Caretaker loving ratio",
        "Private encrypted HD CCTV stream on mobile",
        "Nutritious organic meals & purées",
        "Montessori cognitive routine & nap pods"
      ],
      metrics: { care: "100%", nutrition: "98%", peaceOfMind: "100%" }
    },
    celebrations: {
      name: "Bespoke Milestone Celebrations",
      ageRange: "All Ages",
      kickerColor: "#B45309",
      pillBg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
      summary: "Elevate your child's 1st birthday or milestone into an unforgettable, stress-free celebration. Exclusive 3-hour private arena reservation, curated decor themes, puppet shows, and dedicated party coordinators.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      features: [
        "Exclusive 3-hour private arena hire",
        "Bespoke themed balloon arch & backdrop",
        "Dedicated host, games & puppet shows",
        "Curated organic kids snack menu"
      ],
      metrics: { memories: "100%", smiles: "100%", ease: "100%" }
    }
  };

  // Boutique Showcase Data
  const boutiqueItems = [
    {
      title: "CloudSoft Pre-Walker Booties",
      category: "Infant Footwear",
      price: "₹899",
      badge: "5.0 ★ Top Rated",
      badgeBg: "#FFF1F5",
      badgeColor: "#E03164",
      spec: "Natural suede sole, breathable organic cotton, stay-on elastic.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Honeycomb Anti-Skid Grip Socks",
      category: "Play Essentials",
      price: "₹499",
      badge: "Pack of 3",
      badgeBg: "#F0F9FF",
      badgeColor: "#0284C7",
      spec: "Full-bottom medical-grade silicone traction dots, seamless toe.",
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Barefoot Flex Toddler Trainer",
      category: "First-Steps Shoes",
      price: "₹1,249",
      badge: "Orthopedic Sole",
      badgeBg: "#F0FDF4",
      badgeColor: "#15803D",
      spec: "Zero-drop flexible rubber sole, dual velcro for effortless fit.",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cherished 3D Footprint Keepsake",
      category: "Memory Keepsake",
      price: "₹1,499",
      badge: "Parent Favorite",
      badgeBg: "#FAF5FF",
      badgeColor: "#7E22CE",
      spec: "Non-toxic pediatric casting plaster with wooden display shadowbox.",
      img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: "What age groups are welcome at Manna Little Feets?",
      a: "Our playtorium is purposefully partitioned for children from 6 months up to 6 years of age. Infants enjoy their own serene, cushioned sanctuary, while active toddlers and older children explore dedicated soft-play and pretend-city zones."
    },
    {
      q: "Are grip socks mandatory for visitors?",
      a: "Yes. To uphold our hospital-grade hygiene standards and guarantee slip-free safety on padded surfaces, anti-slip grip socks must be worn by both children and accompanying adults. You may bring your own or purchase a pair at reception for ₹99."
    },
    {
      q: "How frequently is the equipment sanitized?",
      a: "Every two hours. We perform medical-grade UV-C sterilization across all soft-play apparatus, crawl tunnels, and surfaces. Ball lagoon balls are regularly cleansed through an automated washing and drying cycle."
    },
    {
      q: "Can working parents check in via CCTV during Daycare hours?",
      a: "Yes. Enrolled daycare parents receive private, encrypted login credentials to view live high-definition streaming on their mobile devices, ensuring complete peace of mind throughout the workday."
    },
    {
      q: "Where is Manna Little Feets located in Visakhapatnam?",
      a: "We are situated in Chittinaidu Colony, Old Gajuwaka, Visakhapatnam (directly above the Ola Electric Experience Centre on the main highway). Dedicated stroller parking, elevator access, and family car parking are available."
    }
  ];

  // Booking Form Submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    triggerCelebration();
    const text = encodeURIComponent(
      `Hello Manna Little Feets! 🌿\n\nI would like to reserve a visit for my child:\n- *Parent Name:* ${bookingForm.parentName}\n- *Phone:* ${bookingForm.phone}\n- *Child Age:* ${bookingForm.childAge}\n- *Experience:* ${bookingForm.service}\n- *Preferred Date:* ${bookingForm.date || 'Earliest Available'}\n- *Special Notes:* ${bookingForm.notes || 'None'}\n\nPlease share availability and slot timing!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    setIsBookingOpen(false);
  };

  return (
    <div className="page-container" onMouseMove={handleMouseMove}>
      {/* Mouse Footprint Tracer */}
      {footprints.map((fp) => (
        <div
          key={fp.id}
          className="mouse-footprint-tracer"
          style={{
            left: fp.x - 12,
            top: fp.y - 12,
            transform: `rotate(${fp.rotate}deg)`
          }}
        >
          <BabyFootprintSvg size={22} color={fp.color} />
        </div>
      ))}

      {/* Luminous Top Bar */}
      <div className="luminous-top-bar">
        <span className="top-pill-badge">
          <Sparkle size={13} />
          <span>విశాఖపట్నం's Premier Children's Playtorium & Crèche</span>
        </span>
        <span>•</span>
        <span style={{ fontSize: '0.82rem', color: '#57524C' }}>
          📍 Chittinaidu Colony, Visakhapatnam • Open 7 Days: 9:00 AM – 8:30 PM
        </span>
        <span>•</span>
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
          📞 Concierge: +91 98765 43210
        </span>
      </div>

      {/* Luminous Glass Navbar */}
      <header className="luminous-navbar">
        <div className="nav-inner-container">
          <a href="#" className="brand-anchor" onClick={triggerCelebration}>
            <div className="brand-icon-box">
              <BabyFootprintSvg size={26} color="#FF6B8B" rotate={-8} />
            </div>
            <div>
              <div className="brand-title-text">
                Manna <span>Little Feets</span>
              </div>
              <div className="brand-subtext">Playtorium • Crèche • Boutique</div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-wrap">
            <li><a href="#wonderlands" className="nav-link-item">Wonderlands</a></li>
            <li><a href="#shoe-studio" className="nav-link-item">Shoe Studio 👟</a></li>
            <li><a href="#birthday-builder" className="nav-link-item">Celebrations 🎂</a></li>
            <li><a href="#boutique" className="nav-link-item">Boutique</a></li>
            <li><a href="#safety" className="nav-link-item">Safety Standards</a></li>
            <li><a href="#reviews" className="nav-link-item">Parent Reviews</a></li>
          </ul>

          <div className="nav-cta-group">
            <button
              className="btn-icon-soft"
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playGentleChime();
              }}
              title={soundEnabled ? "Mute gentle audio" : "Enable gentle chime audio"}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <button className="btn-luminous-ghost" onClick={triggerCelebration}>
              <Sparkles size={16} color="#FF6B8B" />
              <span>Celebrate!</span>
            </button>

            <button className="btn-luminous-primary" onClick={() => setIsBookingOpen(true)}>
              <Calendar size={16} />
              <span>Reserve Play Slot</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-drawer">
            <a href="#wonderlands" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>🎪 Play Wonderlands</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>
            <a href="#shoe-studio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>👟 Smart Shoe Studio</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>
            <a href="#birthday-builder" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>🎂 Milestone Celebrations</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>
            <a href="#boutique" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>🛍️ Little Feets Boutique</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>
            <a href="#safety" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>🛡️ Child Safety Standards</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>
            <a href="#reviews" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>⭐ Verified Parent Reviews</span>
              <ChevronRight size={16} color="#FF6B8B" />
            </a>

            <button
              className="btn-luminous-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingOpen(true);
              }}
            >
              <Calendar size={16} />
              <span>Reserve Play Slot Now</span>
            </button>
          </div>
        )}
      </header>

      {/* Luminous Pastel Hero Section */}
      <section className="hero-luminous-section">
        <div className="hero-two-col-grid">
          <div className="hero-text-content">
            <div className="hero-sparkle-pill anim-aura">
              <Sparkles size={14} color="#E03164" />
              <span>Montessori Early Learning & Pure Soft-Play Bliss</span>
            </div>

            <h1 className="hero-headline-title">
              Where Little Steps <br />
              Discover <span className="gradient-text">Giant Adventures!</span> 🎈👣
            </h1>

            <p className="hero-lead-paragraph">
              Welcome to <strong>Manna Little Feets</strong> — a sunlit, sanitized haven in Visakhapatnam where infants crawl safely, toddlers build balance, and parents enjoy complete tranquility.
            </p>

            <div className="hero-actions-row">
              <button
                className="btn-luminous-primary"
                style={{ padding: '14px 28px', fontSize: '0.98rem' }}
                onClick={() => setIsBookingOpen(true)}
              >
                <span>Reserve Play Session</span>
                <ChevronRight size={18} />
              </button>

              <a
                href="#shoe-studio"
                className="btn-luminous-ghost"
                style={{ padding: '14px 24px', fontSize: '0.94rem' }}
              >
                <Footprints size={17} color="#FF6B8B" />
                <span>Interactive Shoe Finder</span>
              </a>
            </div>

            {/* Creative Sensory Discovery Micro Cards */}
            <div className="hero-sensory-grid">
              <div className="sensory-card-mini" onClick={() => { setActiveWonderland('infant'); playGentleChime(); }}>
                <div className="sensory-mini-icon" style={{ background: '#FFF1F5', color: '#E03164' }}>
                  ☁️
                </div>
                <h6>Infant Haven</h6>
                <span>0 – 12 Months</span>
              </div>

              <div className="sensory-card-mini" onClick={() => { setActiveWonderland('toddler'); playGentleChime(); }}>
                <div className="sensory-mini-icon" style={{ background: '#F0F9FF', color: '#0284C7' }}>
                  🎈
                </div>
                <h6>Ball Lagoon</h6>
                <span>1 – 3 Years</span>
              </div>

              <div className="sensory-card-mini" onClick={() => { setActiveWonderland('adventure'); playGentleChime(); }}>
                <div className="sensory-mini-icon" style={{ background: '#FAF5FF', color: '#7E22CE' }}>
                  🚀
                </div>
                <h6>Pretend City</h6>
                <span>3 – 6 Years</span>
              </div>

              <div className="sensory-card-mini" onClick={() => { setActiveWonderland('daycare'); playGentleChime(); }}>
                <div className="sensory-mini-icon" style={{ background: '#F0FDF4', color: '#15803D' }}>
                  🍼
                </div>
                <h6>Crèche Daycare</h6>
                <span>Live CCTV Feed</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Container */}
          <div className="hero-visual-container anim-float">
            <div className="hero-visual-frame">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80"
                alt="Toddler having playful fun in sanitized ball pit"
                className="hero-visual-photo"
              />
            </div>

            {/* Luminous Floating Badges */}
            <div className="luminous-floating-badge badge-pos-top-right anim-float-rev">
              <div className="badge-icon-disc" style={{ background: '#FFFBEB', color: '#B45309' }}>
                ⭐
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: '#1E1B2E' }}>4.9 / 5 Rating</strong>
                <span style={{ fontSize: '0.74rem', color: '#827E96' }}>5,200+ Vizag Families</span>
              </div>
            </div>

            <div className="luminous-floating-badge badge-pos-bottom-left anim-float">
              <div className="badge-icon-disc" style={{ background: '#F0FDF4', color: '#15803D' }}>
                🛡️
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.88rem', color: '#1E1B2E' }}>UV-C Sanitized</strong>
                <span style={{ fontSize: '0.74rem', color: '#827E96' }}>Every 2 Hours Cycle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Wonderlands Explorer */}
      <section id="wonderlands" className="section-wrapper-luminous" style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#FFF1F5', color: '#E03164', border: '1px solid #FFD4E2' }}>
            <Sparkle size={13} />
            <span>5 Specialized Play & Care Arenas</span>
          </div>
          <h2 className="section-heading-lg">Age-Tailored Montessori & Sensory Spaces</h2>
          <p className="section-subheading-lead">
            Every child blooms at their own pace. Explore our specialized arenas engineered with pediatric sensory, cognitive, and physical development milestones in mind.
          </p>
        </div>

        {/* Wonderland Pill Tabs */}
        <div className="wonderland-tabs-row">
          <button
            className={`wonderland-pill-tab ${activeWonderland === 'infant' ? 'active' : ''}`}
            onClick={() => { setActiveWonderland('infant'); playGentleChime(); }}
          >
            <span>☁️</span>
            <span>0–12m Infant Sanctuary</span>
          </button>

          <button
            className={`wonderland-pill-tab ${activeWonderland === 'toddler' ? 'active' : ''}`}
            onClick={() => { setActiveWonderland('toddler'); playGentleChime(); }}
          >
            <span>🎈</span>
            <span>1–3y Toddler Lagoon</span>
          </button>

          <button
            className={`wonderland-pill-tab ${activeWonderland === 'adventure' ? 'active' : ''}`}
            onClick={() => { setActiveWonderland('adventure'); playGentleChime(); }}
          >
            <span>🚀</span>
            <span>3–6y Pretend City</span>
          </button>

          <button
            className={`wonderland-pill-tab ${activeWonderland === 'daycare' ? 'active' : ''}`}
            onClick={() => { setActiveWonderland('daycare'); playGentleChime(); }}
          >
            <span>🍼</span>
            <span>Crèche & Daycare</span>
          </button>

          <button
            className={`wonderland-pill-tab ${activeWonderland === 'celebrations' ? 'active' : ''}`}
            onClick={() => { setActiveWonderland('celebrations'); playGentleChime(); }}
          >
            <span>🎂</span>
            <span>Milestone Celebrations</span>
          </button>
        </div>

        {/* Wonderland Showcase Card */}
        <div className="wonderland-showcase-card">
          <div className="wonderland-img-frame">
            <img
              src={wonderlands[activeWonderland].image}
              alt={wonderlands[activeWonderland].name}
              className="wonderland-photo"
            />
            <div className="wonderland-age-pill">
              <Clock size={14} color="#FF6B8B" />
              <span>Milestone Target: {wonderlands[activeWonderland].ageRange}</span>
            </div>
          </div>

          <div className="wonderland-info-pane">
            <div style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 999, background: wonderlands[activeWonderland].pillBg, color: wonderlands[activeWonderland].kickerColor, fontSize: '0.8rem', fontWeight: 700, marginBottom: 8 }}>
              {wonderlands[activeWonderland].name}
            </div>

            <h3 className="wonderland-title-text">{wonderlands[activeWonderland].name}</h3>
            <p className="wonderland-desc-text">{wonderlands[activeWonderland].summary}</p>

            <div className="wonderland-features-grid">
              {wonderlands[activeWonderland].features.map((feat, i) => (
                <div key={i} className="feature-pill-chip">
                  <CheckCircle2 size={16} color="#FF6B8B" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-luminous-primary"
              onClick={() => {
                setBookingForm({ ...bookingForm, service: `${wonderlands[activeWonderland].name} Visit` });
                setIsBookingOpen(true);
              }}
            >
              <span>Schedule Visit to This Zone</span>
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Creative Interactive Baby Shoe & Milestone Studio */}
      <section id="shoe-studio" className="section-wrapper-luminous" style={{ background: 'transparent' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#F0F9FF', color: '#0284C7', border: '1px solid #BAE6FD' }}>
            <Footprints size={13} />
            <span>Smart Pediatric Measurement Studio</span>
          </div>
          <h2 className="section-heading-lg">Smart Baby Shoe & Milestone Studio 👟</h2>
          <p className="section-subheading-lead">
            Developing infant feet feature soft cartilage that forms foundational balance. Drag the milestone slider to see the live animated foot outline scale in real-time with accurate sizing recommendations!
          </p>
        </div>

        <div className="shoe-studio-glass-box">
          <div className="shoe-studio-grid">
            {/* Left Column: Interactive Controls */}
            <div className="shoe-studio-controls">
              {/* Age Header & Live Value */}
              <div className="shoe-age-header">
                <div>
                  <span className="shoe-control-label">Baby Age:</span>
                  <span className="shoe-control-sublabel">Drag or tap milestone</span>
                </div>
                <div className="shoe-age-badge-wrap">
                  <button
                    type="button"
                    className="shoe-age-stepper-btn"
                    onClick={() => { setBabyAgeMonths((m) => Math.max(0, m - 1)); playGentleChime(); }}
                    aria-label="Decrease age"
                  >
                    −
                  </button>
                  <span className="shoe-age-pill-val">
                    {babyAgeMonths} Months Old
                  </span>
                  <button
                    type="button"
                    className="shoe-age-stepper-btn"
                    onClick={() => { setBabyAgeMonths((m) => Math.min(36, m + 1)); playGentleChime(); }}
                    aria-label="Increase age"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="0"
                max="36"
                step="1"
                value={babyAgeMonths}
                onChange={(e) => setBabyAgeMonths(Number(e.target.value))}
                className="interactive-range-slider"
                aria-label="Baby age in months"
              />

              {/* Quick Age Presets for Quick Thumb Tap on Mobile & Desktop */}
              <div className="shoe-quick-milestones">
                {[3, 6, 9, 12, 18, 24, 36].map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`shoe-milestone-chip ${babyAgeMonths === m ? 'active' : ''}`}
                    onClick={() => { setBabyAgeMonths(m); playGentleChime(); }}
                  >
                    {m}m
                  </button>
                ))}
              </div>

              {/* Foot Profile Selection */}
              <div className="shoe-profile-selector-wrap">
                <span className="shoe-control-label">Foot Profile:</span>
                <div className="shoe-profile-btn-group">
                  <button
                    type="button"
                    className={`shoe-profile-btn ${footProfile === 'standard' ? 'active' : ''}`}
                    onClick={() => { setFootProfile('standard'); playGentleChime(); }}
                  >
                    <span>Standard / Slender</span>
                  </button>
                  <button
                    type="button"
                    className={`shoe-profile-btn ${footProfile === 'chubby' ? 'active' : ''}`}
                    onClick={() => { setFootProfile('chubby'); playGentleChime(); }}
                  >
                    <span>Chubby / High Instep 🦶</span>
                  </button>
                </div>
              </div>

              {/* Live Footprint Visualizer */}
              <div className="foot-silhouette-visualizer">
                <div className="foot-visualizer-header">
                  <span className="foot-scale-badge">
                    👣 Live Foot Growth Scale
                  </span>
                  <span className="foot-cm-highlight">
                    {shoeData.footCm} cm
                  </span>
                </div>
                <div className="foot-scale-box">
                  <BabyFootprintSvg
                    size={Math.min(120, Math.max(50, 45 + babyAgeMonths * 2.2))}
                    color="#FF6B8B"
                  />
                </div>
                <div className="foot-length-caption">
                  Estimated Sole Length: <strong>{shoeData.footCm} cm</strong> at {babyAgeMonths} Months
                </div>
              </div>
            </div>

            {/* Right Column: Sizing Specification Result Card */}
            <div className="shoe-studio-result-card">
              <div>
                <div className="result-kicker-tag">
                  Pediatric Fit Specification
                </div>

                <div className="shoe-size-display-wrap">
                  <span className="shoe-primary-size">EU {shoeData.sizeEU}</span>
                  <span className="shoe-secondary-sizes">
                    UK {shoeData.sizeUK} • US {shoeData.sizeUS}
                  </span>
                </div>

                <div className="shoe-pediatric-info-card">
                  <h4 className="shoe-stage-title">{shoeData.shoeType}</h4>
                  <p className="shoe-pediatric-tip">{shoeData.tip}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/919876543210?text=Hello%20Manna%20Little%20Feets!%20I%20used%20your%20Shoe%20Studio%20for%20my%20${babyAgeMonths}m%20old%20baby%20(Size%20EU%20${shoeData.sizeEU}).%20Please%20share%20available%20options!`}
                target="_blank"
                rel="noreferrer"
                className="btn-luminous-primary shoe-inquire-cta"
              >
                <MessageCircle size={18} />
                <span>Inquire This Shoe Size on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Boutique Products Grid */}
        <div id="boutique" className="boutique-grid-four">
          {boutiqueItems.map((item, idx) => (
            <div key={idx} className="boutique-item-card">
              <div className="boutique-img-frame">
                <img src={item.img} alt={item.title} className="boutique-photo" />
                <span style={{ position: 'absolute', top: 12, left: 12, background: item.badgeBg, color: item.badgeColor, padding: '4px 10px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 800 }}>
                  {item.badge}
                </span>
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '0.72rem', color: '#827E96', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#1E1B2E', margin: '6px 0 8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#4E4A63', marginBottom: 14, flexGrow: 1, lineHeight: 1.5 }}>{item.spec}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #F0ECE6', paddingTop: 12 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#1E1B2E' }}>{item.price}</span>
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Manna%20Little%20Feets,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.title)}!`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luminous-ghost"
                    style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  >
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Birthday Celebration Builder */}
      <section id="birthday-builder" className="section-wrapper-luminous" style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#FFFBEB', color: '#B45309', border: '1px solid #FDE68A' }}>
            <PartyPopper size={13} />
            <span>Interactive Party Budget Visualizer</span>
          </div>
          <h2 className="section-heading-lg">Design Your Child's Dream Birthday Gala! 🎂</h2>
          <p className="section-subheading-lead">
            Customize the guest count, pick magical themes, toggle add-ons, and watch your total party package update dynamically. Lock in your date with one click!
          </p>
        </div>

        <div className="birthday-builder-glass-box">
          <div className="builder-inputs-pane">
            <h4 style={{ fontSize: '1.18rem', color: '#1E1B2E', marginBottom: 6 }}>1. Number of Little Explorers</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: '0.88rem', color: '#4E4A63' }}>Estimated Attendance:</span>
              <span style={{ background: '#FFF1F5', color: '#E03164', border: '1px solid #FFD4E2', padding: '3px 14px', borderRadius: 999, fontWeight: 800, fontSize: '0.9rem' }}>
                {partyKids} Children
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="40"
              step="1"
              value={partyKids}
              onChange={(e) => setPartyKids(Number(e.target.value))}
              className="interactive-range-slider"
              style={{ marginBottom: 28 }}
            />

            <h4 style={{ fontSize: '1.18rem', color: '#1E1B2E', marginBottom: 10 }}>2. Pick Your Curated Theme</h4>
            <div className="theme-selector-grid">
              {[
                { id: 'safari', label: 'Warm Woodland Safari', icon: '🦁', color: '#D9531E' },
                { id: 'fairytale', label: 'Fairytale Castle', icon: '👑', color: '#E03164' },
                { id: 'space', label: 'Starlight Galaxy', icon: '🚀', color: '#0284C7' },
                { id: 'candy', label: 'Pastel Candyland', icon: '🍭', color: '#7E22CE' }
              ].map((theme) => (
                <div
                  key={theme.id}
                  className={`theme-pill-card ${partyTheme === theme.id ? 'selected' : ''}`}
                  onClick={() => { setPartyTheme(theme.id); playGentleChime(); }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{theme.icon}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E1B2E' }}>{theme.label}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.18rem', color: '#1E1B2E', marginBottom: 10 }}>3. Curated Event Add-Ons</h4>
            <div>
              {[
                { key: 'photo', title: 'Professional Event Photographer', cost: '₹2,500' },
                { key: 'cakeSmash', title: '1st Birthday Cake Smash Sanctum', cost: '₹2,000' },
                { key: 'puppet', title: 'Interactive Puppet Magic Show', cost: '₹1,800' },
                { key: 'mascot', title: 'Friendly Costume Character Host', cost: '₹1,500' }
              ].map((item) => (
                <div
                  key={item.key}
                  className={`addon-toggle-row ${partyAddons[item.key] ? 'checked' : ''}`}
                  onClick={() => setPartyAddons({ ...partyAddons, [item.key]: !partyAddons[item.key] })}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 5, border: '1.5px solid #827E96', background: partyAddons[item.key] ? '#FF6B8B' : '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {partyAddons[item.key] && <Check size={13} color="#FFF" />}
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E1B2E' }}>{item.title}</span>
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#E03164' }}>+{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="builder-pricing-summary-pane">
            <span style={{ fontSize: '0.8rem', color: '#B2AEC2', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Estimated Package Investment
            </span>
            <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 700, margin: '6px 0 18px', color: '#FFFFFF', lineHeight: 1 }}>
              ₹{calculatePartyPrice().toLocaleString('en-IN')}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem', color: '#E2E0EC', marginBottom: 24 }}>
              <li>✓ 3 Hours Exclusive Private Arena Reservation</li>
              <li>✓ Themed Balloon Installation & Backdrop Decor</li>
              <li>✓ Dedicated Event Coordinator & Host</li>
              <li>✓ Anti-Skid Grip Socks for all {partyKids} Children</li>
            </ul>

            <a
              href={`https://wa.me/919876543210?text=Hello%20Manna%20Little%20Feets!%20I%20customized%20a%20Birthday%20Celebration:%20${partyKids}%20kids,%20${partyTheme}%20theme,%20Est.%20₹${calculatePartyPrice()}.%20Please%20check%20available%20dates!`}
              target="_blank"
              rel="noreferrer"
              className="btn-luminous-primary"
              style={{ justifyContent: 'center', padding: '14px', fontSize: '0.96rem' }}
            >
              <MessageCircle size={18} />
              <span>Reserve Date on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Safety Standards Bento Grid */}
      <section id="safety" className="section-wrapper-luminous" style={{ background: 'transparent' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#F0FDF4', color: '#15803D', border: '1px solid #BBF7D0' }}>
            <ShieldCheck size={13} />
            <span>Zero-Compromise Security</span>
          </div>
          <h2 className="section-heading-lg">The Manna Standard of Child Safety 🛡️</h2>
          <p className="section-subheading-lead">
            Parents entrust us with what is most precious to them. We operate with medical-grade hygiene protocols and verified early childhood standards.
          </p>
        </div>

        <div className="safety-bento-six">
          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#FFF1F5', color: '#E03164' }}>
              <ShieldCheck size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>UV-C Sanitization Every 2 Hours</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Hospital-grade UV-C surface and air sterilization cycles are conducted across all play apparatus, crawl tunnels, and ball lagoons every 120 minutes.
            </p>
          </div>

          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#F0F9FF', color: '#0284C7' }}>
              <Camera size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>Encrypted Mobile CCTV Stream</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Registered daycare parents receive secure access to high-definition video streaming on their smartphones throughout the workday.
            </p>
          </div>

          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#FFFBEB', color: '#B45309' }}>
              <Heart size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>CPR & First-Aid Certified Team</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Our caregivers and staff maintain active pediatric first-aid and CPR certifications, backed by an established pediatric doctor-on-call network.
            </p>
          </div>

          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#FAF5FF', color: '#7E22CE' }}>
              <Footprints size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>Anti-Microbial Grip Socks</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Strict grip-socks protocols keep outdoor debris and microbes off our floors, ensuring completely hygienic and slip-resistant surfaces.
            </p>
          </div>

          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#F0FDF4', color: '#15803D' }}>
              <Sparkles size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>Nutritious Organic Toddler Café</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Wholesome, allergen-sensitive baby purées, fresh fruit smoothies, and natural finger snacks free from refined sugars and artificial additives.
            </p>
          </div>

          <div className="safety-tile-card">
            <div className="safety-badge-icon" style={{ background: '#FFF1F5', color: '#E03164' }}>
              <Lock size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#1E1B2E', marginBottom: 8 }}>Verified Dual Check-In Security</h4>
            <p style={{ fontSize: '0.88rem', color: '#4E4A63', lineHeight: 1.6 }}>
              Strict guardian matching wristband verification guarantees that children only leave our premises with authorized parents.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Parent Reviews */}
      <section id="reviews" className="section-wrapper-luminous" style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#FFFBEB', color: '#B45309', border: '1px solid #FDE68A' }}>
            <Star size={13} fill="#B45309" />
            <span>Endorsed by Families Across Visakhapatnam</span>
          </div>
          <h2 className="section-heading-lg">Loved by Vizag Parents ⭐</h2>
          <p className="section-subheading-lead">
            Read authentic experiences from families across Visakhapatnam who love spending weekends and trusting weekdays with us.
          </p>
        </div>

        <div className="reviews-three-grid">
          <div className="review-quote-box">
            <div style={{ display: 'flex', gap: 4, color: '#F59E0B', marginBottom: 14 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#F59E0B" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#1E1B2E', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
              “The hygiene and cleanliness at Manna Little Feets is unmatched in Vizag. As parents of a 14-month-old infant, we were deeply reassured by the sanitized sensory sanctuary and thoughtful staff.”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #F0ECE6', paddingTop: 14 }}>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                alt="Snigdha Rao"
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#1E1B2E' }}>Snigdha Rao</strong>
                <span style={{ fontSize: '0.78rem', color: '#827E96' }}>Mother of Aarav (14m) • MVP Colony, Vizag</span>
              </div>
            </div>
          </div>

          <div className="review-quote-box">
            <div style={{ display: 'flex', gap: 4, color: '#F59E0B', marginBottom: 14 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#F59E0B" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#1E1B2E', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
              “We hosted our daughter’s second birthday celebration here. The private venue setup, puppet show, and coordination were flawless. It allowed all the parents to genuinely relax while the children had a wonderful time.”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #F0ECE6', paddingTop: 14 }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Dr. Rajesh Varma"
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#1E1B2E' }}>Dr. Rajesh & Sunita Varma</strong>
                <span style={{ fontSize: '0.78rem', color: '#827E96' }}>Parents of Ananya (2y) • Seethammadhara, Vizag</span>
              </div>
            </div>
          </div>

          <div className="review-quote-box">
            <div style={{ display: 'flex', gap: 4, color: '#F59E0B', marginBottom: 14 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#F59E0B" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#1E1B2E', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
              “The crèche daycare facility with live smartphone CCTV streaming has been invaluable for me as a working professional. The caretakers are attentive and provide daily developmental updates.”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #F0ECE6', paddingTop: 14 }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Priya Reddy"
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', color: '#1E1B2E' }}>Priya Reddy</strong>
                <span style={{ fontSize: '0.78rem', color: '#827E96' }}>Mother of Reyan (20m) • Gajuwaka, Vizag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-wrapper-luminous" style={{ background: 'transparent' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
          <div className="section-kicker-badge" style={{ background: '#FAF5FF', color: '#7E22CE', border: '1px solid #E9D5FF' }}>
            <HelpCircle size={13} />
            <span>Information & Advice</span>
          </div>
          <h2 className="section-heading-lg">Frequently Asked Questions</h2>
          <p className="section-subheading-lead">Practical details regarding admissions, safety, and center visits.</p>
        </div>

        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 20,
                border: openFaq === idx ? '1.5px solid #FFB4C8' : '1.5px solid #F0ECE6',
                overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.02rem',
                  fontWeight: 700,
                  color: '#1E1B2E',
                  textAlign: 'left'
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: '#FF6B8B'
                  }}
                />
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 24px 20px', color: '#4E4A63', fontSize: '0.94rem', lineHeight: 1.65 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Luminous Footer */}
      <footer className="luminous-footer">
        <div className="footer-four-col">
          <div>
            <div className="brand-anchor" style={{ marginBottom: 16 }}>
              <div className="brand-icon-box" style={{ background: '#2D2744', borderColor: '#453D66' }}>
                <BabyFootprintSvg size={24} color="#FF6B8B" />
              </div>
              <div>
                <div className="brand-title-text" style={{ color: '#FFFFFF' }}>
                  Manna <span style={{ color: '#FF6B8B' }}>Little Feets</span>
                </div>
                <div className="brand-subtext" style={{ color: '#827E96' }}>Visakhapatnam, Andhra Pradesh</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#A6A2B8', maxWidth: 360 }}>
              Visakhapatnam's premier destination for safe sensory early learning, joyful Montessori soft-play, accredited day care, and boutique children's footwear.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: 16 }}>Wonderlands</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
              <li><a href="#wonderlands" style={{ color: '#A6A2B8' }}>Infant Sensory Haven (0–1y)</a></li>
              <li><a href="#wonderlands" style={{ color: '#A6A2B8' }}>Toddler Soft Gym & Ball Lagoon</a></li>
              <li><a href="#wonderlands" style={{ color: '#A6A2B8' }}>Junior Pretend City (3–6y)</a></li>
              <li><a href="#wonderlands" style={{ color: '#A6A2B8' }}>Crèche & Daytime Daycare</a></li>
              <li><a href="#birthday-builder" style={{ color: '#A6A2B8' }}>Milestone Celebrations</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
              <li><a href="#shoe-studio" style={{ color: '#A6A2B8' }}>Shoe Measurement Studio</a></li>
              <li><a href="#birthday-builder" style={{ color: '#A6A2B8' }}>Event Cost Calculator</a></li>
              <li><a href="#boutique" style={{ color: '#A6A2B8' }}>Little Feets Boutique</a></li>
              <li><a href="#safety" style={{ color: '#A6A2B8' }}>Sanitization Standards</a></li>
              <li><a href="#reviews" style={{ color: '#A6A2B8' }}>Verified Parent Quotes</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: 16 }}>Center Location</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem', color: '#A6A2B8' }}>
              <li>📍 Chittinaidu Colony, Old Gajuwaka (Above Ola Electric), Visakhapatnam - 530026</li>
              <li>⏰ Monday to Sunday: 9:00 AM – 8:30 PM</li>
              <li>📞 Direct Line: +91 98765 43210</li>
              <li>✉️ concierge@mannalittlefeets.com</li>
            </ul>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '24px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#827E96', flexWrap: 'wrap', gap: 12 }}>
          <div>© {new Date().getFullYear()} Manna Little Feets. All rights reserved.</div>
          <div>Visakhapatnam • www.mannalittlefeets.com</div>
        </div>
      </footer>

      {/* Floating WhatsApp Concierge Pill */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Manna%20Little%20Feets!%20I%20would%20like%20to%20learn%20more%20about%20your%20playtorium%20and%20daycare%20services."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-pill-vibrant"
        title="Inquire on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp Concierge</span>
      </a>

      {/* Interactive Reservation Modal */}
      {isBookingOpen && (
        <div className="modal-scrim-layer" onClick={() => setIsBookingOpen(false)}>
          <div className="modal-content-panel" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsBookingOpen(false)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: '#F8F7F4',
                border: '1px solid #EAE5DC',
                width: 36,
                height: 36,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#57524C',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: 20 }}>
              <div className="section-kicker-badge" style={{ background: '#FFF1F5', color: '#E03164', border: '1px solid #FFD4E2' }}>
                Online Concierge
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#1E1B2E', margin: '4px 0 6px' }}>Reserve Your Child's Session 🎈</h3>
              <p style={{ color: '#4E4A63', fontSize: '0.9rem' }}>
                Share your details below and our concierge team will promptly confirm slot availability on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Swathi Varma"
                  value={bookingForm.parentName}
                  onChange={(e) => setBookingForm({ ...bookingForm, parentName: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                    Child's Age *
                  </label>
                  <select
                    value={bookingForm.childAge}
                    onChange={(e) => setBookingForm({ ...bookingForm, childAge: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none', background: '#FFF' }}
                  >
                    <option value="6 - 12 Months (Infant)">6 - 12 Months (Infant)</option>
                    <option value="1 - 2 Years (Toddler)">1 - 2 Years (Toddler)</option>
                    <option value="2 - 4 Years">2 - 4 Years</option>
                    <option value="4 - 6 Years">4 - 6 Years</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                  Service / Experience *
                </label>
                <select
                  value={bookingForm.service}
                  onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none', background: '#FFF' }}
                >
                  <option value="Play Session (90 Min Pass - ₹499)">Play Session (90 Min Pass - ₹499)</option>
                  <option value="Weekend Mega Joy Pass (2.5 Hr - ₹799)">Weekend Mega Joy Pass (2.5 Hr - ₹799)</option>
                  <option value="Monthly Play Club (10 Visits - ₹3,999)">Monthly Play Club (10 Visits - ₹3,999)</option>
                  <option value="Daycare / Crèche Enrollment Inquiry">Daycare / Crèche Enrollment Inquiry</option>
                  <option value="Bespoke Milestone Birthday Package">Bespoke Milestone Birthday Package</option>
                  <option value="Boutique Footwear / Keepsake Kit">Boutique Footwear / Keepsake Kit</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E1B2E', marginBottom: 6 }}>
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="Allergies, specific timings, or celebration requirements..."
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #F0ECE6', fontSize: '0.92rem', outline: 'none' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-luminous-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: 6 }}
              >
                <MessageCircle size={18} />
                <span>Confirm & Send on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
