import React, { useState, useEffect } from 'react';
import { 
  Car, ShieldCheck, Banknote, Users, Lightbulb, 
  HeartHandshake, MapPin, Route, Briefcase, 
  GraduationCap, TrendingUp, ChevronRight, 
  Menu, X, Phone, Mail, ArrowRight, CheckCircle2,
  Calculator, ChevronDown, Star, Send
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Fare Estimator State
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Email Subscribe State
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle Scroll for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fare Calculator Logic
  const handleCalculateFare = (e) => {
    e.preventDefault();
    if (!pickup || !dropoff) return;
    setIsCalculating(true);
    setEstimate(null);
    // Simulate API call
    setTimeout(() => {
      const baseFare = 3500;
      const randomVariance = Math.floor(Math.random() * 2000);
      setEstimate(baseFare + randomVariance);
      setIsCalculating(false);
    }, 1200);
  };

  const faqs = [
    { q: "How do I book an interstate ride?", a: "You can book directly through the Ride-in app. Simply enter your current location and your destination city, and you'll be matched with a verified driver." },
    { q: "Are your drivers verified for highway travel?", a: "Yes. All our interstate drivers undergo rigorous background checks, driving tests, and must have a verified history of highway driving experience." },
    { q: "Can I schedule a ride in advance?", a: "Absolutely! You can schedule a ride up to 7 days in advance to secure your spot for important trips." },
    { q: "What happens if my car breaks down?", a: "Ride-in provides 24/7 on-road support for all our drivers and passengers, ensuring a replacement vehicle is dispatched immediately." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-cyan-300 selection:text-slate-900">
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes driveRoute {
          0% { top: 12%; opacity: 0; transform: scale(0.8); }
          15% { opacity: 1; top: 12%; transform: scale(1); }
          85% { opacity: 1; top: 78%; transform: scale(1); }
          100% { top: 78%; opacity: 0; transform: scale(0.8); }
        }
        .animate-car-route { animation: driveRoute 3s infinite cubic-bezier(0.4, 0, 0.2, 1); }
        @keyframes driveRight {
          0% { transform: translateX(0); }
          40% { transform: translateX(30px); opacity: 0; }
          41% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-xl shadow-lg relative overflow-hidden">
                <Car className="h-6 w-6 text-cyan-400 relative z-10 group-hover:animate-[driveRight_0.8s_ease-in-out]" />
              </div>
              <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Ride-in</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className={`font-medium transition-colors hover:text-cyan-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>About Us</a>
              <a href="#services" className={`font-medium transition-colors hover:text-cyan-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Services</a>
              <a href="#drive" className={`font-medium transition-colors hover:text-cyan-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Drive</a>
              <a href="#estimator" className={`font-medium transition-colors hover:text-cyan-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Estimate Fare</a>
              <button className="bg-cyan-500 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                Get the App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className={`focus:outline-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-2xl absolute w-full left-0">
            <a href="#about" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md">About Us</a>
            <a href="#services" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md">Services</a>
            <a href="#estimator" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md">Estimate Fare</a>
            <a href="#drive" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md">Drive for Us</a>
            <div className="pt-4">
              <button className="w-full bg-slate-900 text-cyan-400 px-5 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm">
                Get the App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Vibrant Dark Tech Grey */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Vibrant Glowing Orbs for Brightness */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md text-cyan-400 font-semibold text-sm mb-6 border border-slate-700 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span>Interstate: Lagos, Ogun & Oyo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Connecting Cities,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Empowering Communities.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                Safe, reliable, and affordable interstate mobility. Whether you are heading to Lagos, Ibadan, Ago Iwoye, or Abeokuta, we simplify your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 text-lg">
                  Ride with Us <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-slate-800/50 backdrop-blur-md text-white border-2 border-slate-600 px-8 py-4 rounded-full font-bold hover:border-cyan-400 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-lg">
                  Drive for Ride-in
                </button>
              </div>
            </div>
            
            {/* Hero Interactive Graphic */}
            <div className="lg:col-span-6 mt-16 lg:mt-0 relative block animate-float">
              <div className="relative w-full aspect-square max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto">
                <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] opacity-20 blur-2xl" />
                <div className="absolute inset-6 sm:inset-10 bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-700">
                  
                  {/* Mock App UI Top Bar */}
                  <div className="bg-slate-900 text-white p-4 flex justify-between items-center border-b border-slate-700">
                    <span className="font-bold text-sm sm:text-base flex items-center gap-2">
                      <Car className="h-4 w-4 text-cyan-400" /> Ride-in Interstate
                    </span>
                    <Menu className="h-5 w-5 text-slate-400" />
                  </div>
                  
                  {/* Mock App UI Body */}
                  <div className="flex-1 p-4 sm:p-6 flex flex-col relative bg-slate-800">
                    
                    {/* Route Container with Animation */}
                    <div className="flex gap-3 sm:gap-4 relative z-10 flex-1 mt-2">
                      {/* Route Visuals Column */}
                      <div className="flex flex-col items-center justify-between py-4 sm:py-5 relative w-8 sm:w-10 shrink-0">
                         <div className="bg-slate-900 p-2 rounded-full text-cyan-400 z-10 relative shadow-sm border border-slate-700">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                         </div>
                         
                         {/* Dashed line */}
                         <div className="absolute top-10 bottom-10 w-0.5 border-l-2 border-dashed border-slate-600 z-0"></div>
                         
                         {/* Animated Car */}
                         <div className="absolute w-8 h-8 z-10 animate-car-route bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] border border-cyan-200 flex items-center justify-center">
                            <Car className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900" />
                         </div>
                         
                         <div className="bg-slate-900 p-2 rounded-full text-blue-400 z-10 relative shadow-sm border border-slate-700">
                            <Route className="h-4 w-4 sm:h-5 sm:w-5" />
                         </div>
                      </div>
                      
                      {/* Location Text Column */}
                      <div className="flex flex-col justify-between w-full gap-4">
                         <div className="bg-slate-700 p-3 sm:p-4 rounded-xl shadow-inner border border-slate-600 w-full relative group hover:border-cyan-500 transition-colors">
                            <p className="text-[10px] sm:text-xs text-cyan-400 font-bold uppercase tracking-wider mb-0.5">Pickup</p>
                            <p className="text-xs sm:text-sm font-bold text-white">Lagos Mainland</p>
                         </div>
                         <div className="bg-slate-700 p-3 sm:p-4 rounded-xl shadow-inner border border-slate-600 w-full relative group hover:border-blue-500 transition-colors">
                            <p className="text-[10px] sm:text-xs text-blue-400 font-bold uppercase tracking-wider mb-0.5">Dropoff</p>
                            <p className="text-xs sm:text-sm font-bold text-white">Ago Iwoye, Ogun</p>
                         </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 py-3 rounded-xl text-center text-sm sm:text-base font-bold relative z-10 shadow-lg hover:opacity-90 transition-opacity cursor-pointer">
                      Confirm Ride - ₦4,500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FUNCTIONALITY: Fare Estimator Widget */}
      <section id="estimator" className="relative z-20 -mt-10 sm:-mt-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-cyan-100 p-3 rounded-xl">
              <Calculator className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Fare Estimator</h2>
              <p className="text-slate-500 text-sm">Get a quick estimate for your interstate trip</p>
            </div>
          </div>
          
          <form onSubmit={handleCalculateFare} className="grid md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Pickup City</label>
              <select 
                value={pickup} onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              >
                <option value="">Select Pickup</option>
                <option value="Lagos">Lagos</option>
                <option value="Abeokuta">Abeokuta</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Sagamu">Sagamu</option>
              </select>
            </div>
            <div className="md:col-span-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Destination City</label>
              <select 
                value={dropoff} onChange={(e) => setDropoff(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              >
                <option value="">Select Destination</option>
                <option value="Ago Iwoye">Ago Iwoye</option>
                <option value="Abeokuta">Abeokuta</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>
            <div className="md:col-span-4">
              <button 
                type="submit" 
                disabled={isCalculating}
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors flex justify-center items-center h-[50px]"
              >
                {isCalculating ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : "Calculate Price"}
              </button>
            </div>
          </form>

          {/* Estimate Result */}
          {estimate && (
            <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-2xl p-5 flex justify-between items-center animate-[float_0.3s_ease-out]">
              <div>
                <p className="text-cyan-800 font-semibold mb-1">Estimated Fare</p>
                <p className="text-sm text-cyan-600">Prices may vary slightly based on traffic</p>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                ₦{estimate.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section with Brighter Cards */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Choose Ride-in?</h2>
            <p className="text-lg text-slate-600">The principles that drive every ride, every partnership, and every decision we make.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous driver screening and safe vehicles for long trips.", color: "bg-emerald-100 text-emerald-600" },
              { icon: Route, title: "Reliability", desc: "Dependable interstate rides when and where you need them.", color: "bg-blue-100 text-blue-600" },
              { icon: Banknote, title: "Affordability", desc: "Transparent, fair pricing for intercity travel.", color: "bg-cyan-100 text-cyan-600" },
              { icon: Users, title: "Community Empowerment", desc: "Creating local jobs and economic opportunities.", color: "bg-purple-100 text-purple-600" },
              { icon: Lightbulb, title: "Innovation", desc: "Technology-driven solutions for cross-city mobility.", color: "bg-amber-100 text-amber-600" },
              { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Ensuring a comfortable, pleasant experience on every journey.", color: "bg-rose-100 text-rose-600" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Recruitment - High Contrast */}
      <section id="drive" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm mb-6 border border-cyan-500/30">
                Join Our Fleet
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                Turn your vehicle into a <span className="text-cyan-400">lucrative business.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                We are looking for experienced drivers to facilitate our safe interstate routes across Southwest Nigeria. Enjoy higher earnings with long-distance trips.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Flexible working hours to suit your schedule", "Access to steady intercity commuters", "Continuous driver support and training"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-lg text-lg">
                Apply to Drive Now
              </button>
            </div>
            
            <div className="mt-12 lg:mt-0 bg-slate-800/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-cyan-400" /> Driver Requirements
              </h3>
              <ul className="space-y-6">
                {[
                  "Valid driver's license for highway transport",
                  "Roadworthy, clean, and comfortable vehicle",
                  "Excellent knowledge of Lagos, Ogun, and Oyo routes",
                  "Passing our standard background check"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50">
                    <div className="bg-cyan-500/10 p-2 rounded-lg mt-0.5">
                      <ChevronRight className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FUNCTIONALITY: Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Loved by Commuters</h2>
            <p className="text-lg text-slate-600">See what our early users are saying about the Ride-in experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Oluwaseun A.", route: "Lagos to Ago Iwoye", review: "The safest interstate trip I've had. The app showed the exact fare upfront, and the driver was extremely professional. Highly recommended for students!" },
              { name: "Chika M.", route: "Ibadan to Lagos", review: "Finally, a reliable way to commute between cities without going to a crowded park. The vehicle was air-conditioned and comfortable." },
              { name: "Tunde O.", route: "Abeokuta to Lagos", review: "As a businessman, time is money. Ride-in picked me up exactly on time. The driver knew the best routes to avoid major highway traffic." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-cyan-600 font-medium">{testimonial.route}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW FUNCTIONALITY: Interactive FAQ Accordion */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-cyan-500 shadow-md' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-500' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & App Waitlist */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Waitlist Form Section */}
          <div className="bg-slate-800 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Be the first to know when we launch!</h3>
              <p className="text-slate-400">Join our waitlist to get early access and exclusive promo codes for your first 3 rides.</p>
            </div>
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="w-full md:w-auto flex-1 max-w-md relative"
            >
              {subscribed ? (
                <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-xl py-4 px-6 font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-6 w-6" /> You're on the list!
                </div>
              ) : (
                <div className="flex relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-xl py-4 pl-6 pr-32 text-white focus:outline-none focus:border-cyan-400"
                  />
                  <button type="submit" className="absolute right-2 top-2 bottom-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 rounded-lg transition-colors flex items-center gap-2">
                    Join <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-cyan-500 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-slate-900" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Ride-in</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Transforming interstate mobility by providing safe, reliable, and affordable cross-city transportation. Join us in building a platform that moves people and connects communities.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Our Services</a></li>
                <li><a href="#drive" className="hover:text-cyan-400 transition-colors">Become a Driver</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>+234 (0) XX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>hello@ridein.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>HQ: Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Ride-in Mobility Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}