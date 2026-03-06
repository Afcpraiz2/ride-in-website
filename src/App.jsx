import React, { useState, useEffect } from 'react';
import { 
  Car, ShieldCheck, Banknote, Users, Lightbulb, 
  HeartHandshake, MapPin, Route, Briefcase, 
  GraduationCap, ChevronDown, Star, Send, 
  Menu, X, Phone, Mail, ArrowRight, CheckCircle,
  Navigation2, Clock, Shield
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hero Widget State
  const [activeTab, setActiveTab] = useState('ride'); // 'ride' or 'drive'
  
  // Fare Estimator State
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicleClass, setVehicleClass] = useState('economy');
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Email Subscribe State
  const [subscribed, setSubscribed] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalculateFare = (e) => {
    e.preventDefault();
    if (!pickup || !dropoff) return;
    setIsCalculating(true);
    setEstimate(null);
    setTimeout(() => {
      let baseFare = 4500;
      if (pickup === 'Lagos' && dropoff === 'Ibadan') baseFare = 8000;
      if (vehicleClass === 'comfort') baseFare *= 1.4; // 40% premium for comfort
      
      const randomVariance = Math.floor(Math.random() * 1000);
      setEstimate(baseFare + randomVariance);
      setIsCalculating(false);
    }, 1000);
  };

  const faqs = [
    { q: "How do I book an interstate ride?", a: "Book directly through the Ride-in app. Enter your current location and destination city, select your vehicle class, and you'll be matched with a verified driver." },
    { q: "Are drivers verified for highway travel?", a: "Yes. All interstate drivers undergo rigorous background checks, advanced driving tests, and must have verified highway experience." },
    { q: "Can I schedule a ride in advance?", a: "Absolutely! You can schedule a ride up to 7 days in advance to secure your spot." },
    { q: "What happens if my car breaks down?", a: "Ride-in provides 24/7 on-road support for all drivers and passengers, ensuring a replacement vehicle is dispatched immediately." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-zinc-300 selection:bg-blue-500 selection:text-white overflow-x-hidden w-full relative">
      
      {/* Custom Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .pulse-ring::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          display: block;
          width: 100%; height: 100%;
          background-color: #3b82f6;
          border-radius: 50%;
          z-index: -1;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>

      {/* Floating Glassmorphic Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 mt-4 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-full ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-2xl py-2 px-4' : 'bg-transparent py-2'}`}>
          <div className="flex justify-between items-center h-12 sm:h-14">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer pl-2">
              <div className="bg-blue-600 p-1.5 sm:p-2 rounded-full">
                <Car className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">Ride-in</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
              <a href="#map" className="px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">Route Map</a>
              <a href="#services" className="px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">Features</a>
              <a href="#drive" className="px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">Drive</a>
            </div>

            {/* CTA */}
            <div className="hidden md:block pr-2">
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200">
                Get App
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center pr-2">
              <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 z-50">
            <div className="p-4 flex flex-col gap-2">
              <a href="#map" onClick={toggleMenu} className="px-5 py-4 text-base font-bold text-white hover:bg-zinc-800 rounded-2xl transition-colors">Route Map</a>
              <a href="#services" onClick={toggleMenu} className="px-5 py-4 text-base font-bold text-white hover:bg-zinc-800 rounded-2xl transition-colors">Features</a>
              <a href="#drive" onClick={toggleMenu} className="px-5 py-4 text-base font-bold text-white hover:bg-zinc-800 rounded-2xl transition-colors">Drive for Us</a>
              <button className="mt-4 w-full bg-blue-600 text-white px-5 py-4 rounded-2xl font-bold shadow-lg text-lg">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Ultra Modern Dark Mode */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:min-h-screen flex items-center">
        {/* Deep ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] sm:h-[600px] bg-blue-900/30 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Typography */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 font-bold text-xs sm:text-sm mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Interstate Mobility Redefined
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tighter mb-6">
                Connect Cities.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Move Smarter.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience premium, reliable, and affordable interstate travel across Lagos, Ogun, and Oyo. Your journey, simplified.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm font-bold text-zinc-500">
                <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-emerald-500" /> Verified Drivers</div>
                <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-500" /> 24/7 Service</div>
              </div>
            </div>
            
            {/* Interactive Hero Widget (Fare Estimator & Drive Tabs) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mr-0">
              <div className="bg-zinc-900/80 backdrop-blur-2xl rounded-[2rem] border border-zinc-800 shadow-2xl overflow-hidden p-2">
                
                {/* Tabs */}
                <div className="flex bg-zinc-950 rounded-full p-1 mb-4">
                  <button 
                    onClick={() => setActiveTab('ride')}
                    className={`flex-1 py-3 text-sm font-bold rounded-full transition-all duration-300 ${activeTab === 'ride' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Book a Ride
                  </button>
                  <button 
                    onClick={() => setActiveTab('drive')}
                    className={`flex-1 py-3 text-sm font-bold rounded-full transition-all duration-300 ${activeTab === 'drive' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Become a Driver
                  </button>
                </div>

                {/* Tab Content: Book a Ride */}
                {activeTab === 'ride' && (
                  <form onSubmit={handleCalculateFare} className="p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-300">
                    <div className="space-y-4 relative">
                      {/* Connection Line */}
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-zinc-800 z-0"></div>
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-blue-500 shrink-0 border-4 border-zinc-900 ml-4"></div>
                        <select value={pickup} onChange={(e) => setPickup(e.target.value)} required
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                          <option value="" className="text-zinc-500">Pickup location</option>
                          <option value="Lagos">Lagos State</option>
                          <option value="Abeokuta">Abeokuta, Ogun</option>
                          <option value="Ibadan">Ibadan, Oyo</option>
                        </select>
                      </div>
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 shrink-0 border-4 border-zinc-900 ml-4"></div>
                        <select value={dropoff} onChange={(e) => setDropoff(e.target.value)} required
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                          <option value="" className="text-zinc-500">Dropoff destination</option>
                          <option value="Ago Iwoye">Ago Iwoye, Ogun</option>
                          <option value="Ibadan">Ibadan, Oyo</option>
                          <option value="Lagos">Lagos State</option>
                        </select>
                      </div>
                    </div>

                    {/* Vehicle Class Selector */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => setVehicleClass('economy')}
                        className={`flex flex-col items-center p-3 rounded-xl border transition-all ${vehicleClass === 'economy' ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'}`}>
                        <Car className={`h-6 w-6 mb-2 ${vehicleClass === 'economy' ? 'text-blue-500' : 'text-zinc-500'}`} />
                        <span className={`text-xs font-bold ${vehicleClass === 'economy' ? 'text-white' : 'text-zinc-500'}`}>Economy</span>
                      </button>
                      <button type="button" onClick={() => setVehicleClass('comfort')}
                        className={`flex flex-col items-center p-3 rounded-xl border transition-all ${vehicleClass === 'comfort' ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'}`}>
                        <Briefcase className={`h-6 w-6 mb-2 ${vehicleClass === 'comfort' ? 'text-blue-500' : 'text-zinc-500'}`} />
                        <span className={`text-xs font-bold ${vehicleClass === 'comfort' ? 'text-white' : 'text-zinc-500'}`}>Comfort</span>
                      </button>
                    </div>

                    <button type="submit" disabled={isCalculating}
                      className="mt-6 w-full bg-white text-black font-extrabold py-4 rounded-xl hover:bg-zinc-200 transition-colors flex justify-center items-center h-[56px]">
                      {isCalculating ? <span className="w-6 h-6 border-3 border-zinc-300 border-t-black rounded-full animate-spin"></span> : "See Prices"}
                    </button>

                    {estimate && (
                      <div className="mt-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex justify-between items-center animate-in fade-in slide-in-from-bottom-2">
                        <span className="text-zinc-400 text-sm font-medium">Estimated Fare</span>
                        <span className="text-2xl font-black text-white">₦{estimate.toLocaleString()}</span>
                      </div>
                    )}
                  </form>
                )}

                {/* Tab Content: Become a Driver */}
                {activeTab === 'drive' && (
                  <div className="p-6 text-center animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Drive & Earn on Your Terms</h3>
                    <p className="text-zinc-400 text-sm mb-8 px-4">Accept long-distance interstate trips and maximize your weekly earnings.</p>
                    <button className="w-full bg-emerald-500 text-black font-extrabold py-4 rounded-xl hover:bg-emerald-400 transition-colors">
                      Start Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bento Box Features Section */}
      <section id="services" className="py-24 bg-white text-zinc-900 rounded-t-[2.5rem] sm:rounded-t-[4rem] relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Built for the long road.</h2>
              <p className="text-xl text-zinc-500 font-medium">Everything you need for safe, reliable interstate travel in one ecosystem.</p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Big Feature 1 */}
            <div className="md:col-span-2 bg-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 max-w-sm">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">Uncompromising Safety</h3>
                <p className="text-zinc-600 font-medium">Every vehicle is inspected and every driver is thoroughly vetted and tracked in real-time. Your peace of mind is our priority.</p>
              </div>
              {/* Decorative graphic */}
              <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply opacity-50 blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Small Feature 1 */}
            <div className="bg-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col relative group">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Banknote className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">Upfront Pricing</h3>
              <p className="text-zinc-600 font-medium text-sm">No haggling at motor parks. Know exactly what you'll pay before you book.</p>
            </div>

            {/* Small Feature 2 */}
            <div className="bg-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col relative group">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">On-Demand Booking</h3>
              <p className="text-zinc-600 font-medium text-sm">Need to move now? Or next week? Schedule rides that fit your timeline perfectly.</p>
            </div>

            {/* Big Feature 2 */}
            <div className="md:col-span-2 bg-zinc-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 max-w-sm">
                <div className="bg-zinc-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">Community First</h3>
                <p className="text-zinc-400 font-medium">We empower local drivers with sustainable income opportunities, creating jobs where mobility options were previously limited.</p>
              </div>
              {/* Decorative graphic */}
              <div className="absolute right-0 bottom-0 opacity-20 group-hover:scale-105 transition-transform duration-700 origin-bottom-right">
                <MapPin className="w-48 h-48 text-zinc-500 translate-x-1/4 translate-y-1/4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Route Map Visualizer */}
      <section id="map" className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Map Area */}
            <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto w-full bg-white rounded-full shadow-2xl border-8 border-zinc-50 flex items-center justify-center">
              {/* Map Nodes Simulation */}
              <div className="relative w-[80%] h-[80%]">
                {/* SVG Route Lines */}
                <svg className="absolute inset-0 w-full h-full text-zinc-200" style={{ zIndex: 0 }}>
                  <line x1="20%" y1="80%" x2="50%" y2="20%" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="20%" y1="80%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                </svg>

                {/* Lagos Node */}
                <div className="absolute bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg relative pulse-ring"></div>
                  <span className="mt-2 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">Lagos</span>
                </div>
                
                {/* Ibadan Node */}
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="w-5 h-5 bg-zinc-800 rounded-full border-4 border-white shadow-lg"></div>
                  <span className="mt-2 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">Ibadan</span>
                </div>

                {/* Ogun Node */}
                <div className="absolute top-[50%] right-[20%] translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  <span className="mt-2 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">Ogun</span>
                </div>
              </div>
            </div>

            {/* Text Area */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                <Navigation2 className="h-4 w-4" /> Active Corridors
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Bridging the Gap<br/>Between Cities.</h2>
              <p className="text-lg text-zinc-600 mb-8 font-medium">
                Our pilot operations currently connect major economic and educational hubs across Southwest Nigeria. We focus on underserved routes where reliable mobility is essential.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Abeokuta', 'Ijebu Ode', 'Ago Iwoye', 'Sagamu', 'Ibadan', 'Lagos Mainland'].map(city => (
                  <span key={city} className="bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-bold text-zinc-700 shadow-sm">{city}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Scrolling Testimonial Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Loved by Commuters</h2>
          <p className="text-zinc-500 font-medium">Real stories from our early adopters.</p>
        </div>
        
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:w-16 sm:before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 sm:after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div className="animate-marquee flex gap-6 pb-4 pt-2">
            {[1, 2].map((group) => ( // Duplicate array for infinite loop effect
              <React.Fragment key={group}>
                {[
                  { name: "Oluwaseun A.", tag: "Student", route: "Lagos → Ago Iwoye", review: "The safest interstate trip I've had. App showed exact fare upfront!" },
                  { name: "Chika M.", tag: "Trader", route: "Ibadan → Lagos", review: "No more motor park haggling. AC was working perfectly." },
                  { name: "Tunde O.", tag: "Business", route: "Abeokuta → Lagos", review: "Driver was extremely professional and on time. 5 stars." },
                  { name: "Sarah K.", tag: "Commuter", route: "Sagamu → Ibadan", review: "Clean cars, smooth ride, and very affordable pricing." }
                ].map((testimonial, idx) => (
                  <div key={idx} className="w-[300px] sm:w-[400px] shrink-0 bg-zinc-50 border border-zinc-100 p-6 rounded-3xl shadow-sm">
                    <div className="flex text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="text-zinc-800 font-medium text-lg leading-snug mb-6">"{testimonial.review}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-zinc-900">{testimonial.name}</p>
                        <p className="text-xs text-zinc-500">{testimonial.route}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist FAQ Accordion */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Got questions?</h2>
            <p className="text-zinc-500 font-medium">Everything you need to know about Ride-in.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-zinc-900 text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Waitlist (Dark Theme) */}
      <footer className="bg-[#0a0a0a] pt-24 pb-12 rounded-t-[2.5rem] sm:rounded-t-[4rem] border-t border-zinc-900 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Minimal Waitlist Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get early access</h3>
              <p className="text-zinc-400">Join our waitlist for exclusive promo codes on launch.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="w-full md:max-w-md">
              {subscribed ? (
                <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-xl py-4 px-6 font-bold flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" /> Added to Waitlist!
                </div>
              ) : (
                <div className="flex bg-zinc-950 border border-zinc-800 rounded-xl p-1 relative">
                  <input type="email" placeholder="Enter email address" required
                    className="w-full bg-transparent px-4 text-white focus:outline-none" />
                  <button type="submit" className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors">
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white p-1.5 rounded-lg"><Car className="h-5 w-5 text-black" /></div>
                <span className="font-extrabold text-2xl text-white">Ride-in</span>
              </div>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Transforming interstate mobility by providing safe, reliable, and affordable cross-city transportation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Passenger App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Driver Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +234 (0) XX XXX XXXX</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@ridein.com</li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 font-medium">
            <p>&copy; {new Date().getFullYear()} Ride-in Mobility. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}