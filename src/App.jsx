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
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-200 selection:text-blue-900">
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

      {/* Modern Glassmorphic Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="bg-zinc-900 p-2.5 rounded-xl shadow-md relative overflow-hidden flex items-center justify-center">
                <Car className="h-6 w-6 text-white relative z-10 group-hover:animate-[driveRight_0.8s_ease-in-out]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-zinc-900">Ride-in</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center bg-white/60 backdrop-blur-md px-8 py-3 rounded-full border border-zinc-200/50 shadow-sm">
              <a href="#about" className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#services" className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#drive" className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors">Drive</a>
              <a href="#estimator" className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors">Estimate Fare</a>
            </div>

            <div className="hidden md:flex">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Get the App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="bg-white p-2 rounded-full shadow-sm border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl py-4 px-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
            <a href="#about" onClick={toggleMenu} className="px-4 py-3 text-base font-bold text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors">About Us</a>
            <a href="#services" onClick={toggleMenu} className="px-4 py-3 text-base font-bold text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors">Services</a>
            <a href="#estimator" onClick={toggleMenu} className="px-4 py-3 text-base font-bold text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors">Estimate Fare</a>
            <a href="#drive" onClick={toggleMenu} className="px-4 py-3 text-base font-bold text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors">Drive for Us</a>
            <button className="mt-2 w-full bg-blue-600 text-white px-5 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm text-lg">
              Get the App
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - Clean, Bright, and Premium */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-zinc-50">
        {/* Soft Modern Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-700 font-bold text-xs sm:text-sm mb-8 shadow-sm border border-blue-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span>Interstate: Lagos, Ogun & Oyo</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Connecting Cities,<br />
                <span className="text-blue-600">Empowering Communities.</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Safe, reliable, and affordable interstate mobility. Whether you are heading to Lagos, Ibadan, Ago Iwoye, or Abeokuta, we simplify your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Ride with Us <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 text-lg shadow-sm w-full sm:w-auto">
                  Drive for Ride-in
                </button>
              </div>
            </div>
            
            {/* Hero Interactive App Mockup */}
            <div className="lg:col-span-6 relative block animate-float">
              <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[320px] sm:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[3rem] opacity-10 blur-2xl transform rotate-6" />
                <div className="absolute inset-2 sm:inset-6 bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 border border-zinc-100">
                  
                  {/* Mock App UI Top Bar */}
                  <div className="bg-white px-6 py-5 flex justify-between items-center border-b border-zinc-100">
                    <span className="font-bold text-zinc-900 flex items-center gap-2 text-lg">
                      <div className="bg-blue-600 p-1.5 rounded-md"><Car className="h-4 w-4 text-white" /></div> 
                      Interstate Ride
                    </span>
                    <Menu className="h-6 w-6 text-zinc-400" />
                  </div>
                  
                  {/* Mock App UI Body */}
                  <div className="flex-1 p-6 flex flex-col relative bg-zinc-50/50">
                    
                    {/* Route Container with Animation */}
                    <div className="flex gap-4 relative z-10 flex-1 mt-2">
                      {/* Route Visuals Column */}
                      <div className="flex flex-col items-center justify-between py-5 relative w-10 shrink-0">
                         <div className="bg-white p-2.5 rounded-full text-zinc-900 z-10 relative shadow-sm border border-zinc-200">
                            <MapPin className="h-5 w-5" />
                         </div>
                         
                         {/* Dashed line */}
                         <div className="absolute top-12 bottom-12 w-0.5 border-l-2 border-dashed border-zinc-300 z-0"></div>
                         
                         {/* Animated Car */}
                         <div className="absolute w-10 h-10 z-10 animate-car-route bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] border-2 border-white flex items-center justify-center">
                            <Car className="h-5 w-5 text-white" />
                         </div>
                         
                         <div className="bg-zinc-900 p-2.5 rounded-full text-white z-10 relative shadow-sm border border-zinc-900">
                            <Route className="h-5 w-5" />
                         </div>
                      </div>
                      
                      {/* Location Text Column */}
                      <div className="flex flex-col justify-between w-full gap-5">
                         <div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 w-full relative">
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Pickup</p>
                            <p className="text-base font-extrabold text-zinc-900">Lagos Mainland</p>
                         </div>
                         <div className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 w-full relative">
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Dropoff</p>
                            <p className="text-base font-extrabold text-zinc-900">Ago Iwoye, Ogun</p>
                         </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-blue-600 text-white py-4 rounded-2xl text-center text-lg font-bold relative z-10 shadow-lg hover:bg-blue-700 transition-colors cursor-pointer w-full flex items-center justify-center gap-2">
                      Confirm Ride <span className="text-blue-200">|</span> ₦4,500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Fare Estimator Widget - Pulled up to overlap hero */}
      <section id="estimator" className="relative z-20 -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-6 sm:p-10 border border-zinc-100 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600">
                <Calculator className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Fare Estimator</h2>
                <p className="text-zinc-500 font-medium mt-1">Plan your interstate budget instantly</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleCalculateFare} className="grid md:grid-cols-12 gap-5 items-end">
            <div className="md:col-span-4">
              <label className="block text-sm font-bold text-zinc-700 mb-2.5">Pickup City</label>
              <select 
                value={pickup} onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
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
              <label className="block text-sm font-bold text-zinc-700 mb-2.5">Destination City</label>
              <select 
                value={dropoff} onChange={(e) => setDropoff(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
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
                className="w-full bg-zinc-900 text-white font-bold py-4 rounded-2xl hover:bg-zinc-800 transition-colors flex justify-center items-center h-[56px] shadow-md"
              >
                {isCalculating ? (
                  <span className="w-6 h-6 border-3 border-zinc-500 border-t-white rounded-full animate-spin"></span>
                ) : "Calculate Price"}
              </button>
            </div>
          </form>

          {/* Estimate Result */}
          {estimate && (
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
              <div>
                <p className="text-blue-800 font-bold text-lg mb-1">Estimated Route Fare</p>
                <p className="text-sm text-blue-600/80 font-medium">Actual prices may vary slightly based on traffic & time</p>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-tight">
                ₦{estimate.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Why Choose Ride-in?</h2>
            <p className="text-lg md:text-xl text-zinc-500 font-medium">The principles that drive every ride, every partnership, and every decision we make.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous driver screening and safe vehicles for long trips.", color: "bg-emerald-50 text-emerald-600" },
              { icon: Route, title: "Reliability", desc: "Dependable interstate rides when and where you need them.", color: "bg-blue-50 text-blue-600" },
              { icon: Banknote, title: "Affordability", desc: "Transparent, fair pricing for intercity travel without haggling.", color: "bg-indigo-50 text-indigo-600" },
              { icon: Users, title: "Community Focus", desc: "Creating local jobs and economic opportunities across states.", color: "bg-purple-50 text-purple-600" },
              { icon: Lightbulb, title: "Smart Tech", desc: "Easy-to-use app with live tracking and secure payments.", color: "bg-amber-50 text-amber-600" },
              { icon: HeartHandshake, title: "Top Support", desc: "24/7 customer service ensuring a pleasant experience.", color: "bg-rose-50 text-rose-600" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">{value.title}</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Recruitment - High Contrast Dark Mode Section */}
      <section id="drive" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 font-bold text-sm mb-8 border border-zinc-700">
                Join Our Fleet
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white leading-tight tracking-tight">
                Turn your vehicle into a <span className="text-blue-500">lucrative business.</span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed">
                We are looking for experienced drivers to facilitate our safe interstate routes across Southwest Nigeria. Enjoy higher earnings with long-distance trips.
              </p>
              
              <ul className="space-y-6 mb-12">
                {["Flexible working hours to suit your schedule", "Access to steady intercity commuters", "Continuous driver support and training"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-1.5 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-blue-500" />
                    </div>
                    <span className="text-zinc-200 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-colors shadow-lg text-lg flex items-center justify-center gap-2">
                Apply to Drive Now <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="bg-zinc-900 p-8 sm:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full mix-blend-screen filter blur-[40px] opacity-50"></div>
              
              <h3 className="text-3xl font-bold mb-8 text-white tracking-tight flex items-center gap-3">
                Requirements
              </h3>
              <ul className="space-y-6">
                {[
                  "Valid driver's license for highway transport",
                  "Roadworthy, clean, and comfortable vehicle",
                  "Excellent knowledge of Lagos, Ogun, and Oyo routes",
                  "Passing our standard background check"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 pb-6 border-b border-zinc-800 last:border-0 last:pb-0">
                    <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0 mt-1">
                      <ChevronRight className="h-5 w-5 text-zinc-400" />
                    </div>
                    <span className="text-zinc-300 text-lg font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Loved by Commuters</h2>
            <p className="text-lg md:text-xl text-zinc-500 font-medium">See what our early users are saying about the Ride-in experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Oluwaseun A.", route: "Lagos to Ago Iwoye", review: "The safest interstate trip I've had. The app showed the exact fare upfront, and the driver was extremely professional. Highly recommended for students!" },
              { name: "Chika M.", route: "Ibadan to Lagos", review: "Finally, a reliable way to commute between cities without going to a crowded park. The vehicle was air-conditioned and comfortable." },
              { name: "Tunde O.", route: "Abeokuta to Lagos", review: "As a businessman, time is money. Ride-in picked me up exactly on time. The driver knew the best routes to avoid major highway traffic." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-zinc-700 text-lg font-medium leading-relaxed mb-10">"{testimonial.review}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-extrabold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500 font-medium">{testimonial.route}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-500 font-medium">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-zinc-50 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'ring-2 ring-blue-500 shadow-md bg-white' : 'hover:bg-zinc-100'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 sm:p-8 text-left focus:outline-none"
                >
                  <span className="font-bold text-zinc-900 text-lg sm:text-xl pr-4">{faq.q}</span>
                  <div className={`p-2 rounded-full shrink-0 transition-colors ${openFaq === idx ? 'bg-blue-100 text-blue-600' : 'bg-zinc-200 text-zinc-500'}`}>
                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`px-6 sm:px-8 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-600 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & App Waitlist */}
      <footer className="bg-zinc-950 text-zinc-400 pt-24 pb-12 rounded-t-[3rem] mt-12 border-t-8 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Waitlist Form Section */}
          <div className="bg-zinc-900 rounded-[3rem] p-8 sm:p-12 md:p-16 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 border border-zinc-800 shadow-2xl">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready for your first ride?</h3>
              <p className="text-zinc-400 text-lg font-medium">Join our waitlist to get early access and exclusive promo codes for your first 3 trips.</p>
            </div>
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="w-full lg:w-auto flex-1 max-w-lg relative"
            >
              {subscribed ? (
                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl py-5 px-6 font-bold flex items-center justify-center gap-3 text-lg">
                  <CheckCircle2 className="h-7 w-7" /> You're on the list!
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    required
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl py-5 px-6 text-white text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
                  />
                  <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-8 rounded-2xl transition-colors flex items-center justify-center gap-2 text-lg shrink-0">
                    Join Waitlist
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-zinc-800 p-2.5 rounded-xl">
                  <Car className="h-7 w-7 text-white" />
                </div>
                <span className="font-extrabold text-3xl text-white tracking-tight">Ride-in</span>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-medium">
                Transforming interstate mobility by providing safe, reliable, and affordable cross-city transportation.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-xl mb-8 tracking-tight">Quick Links</h4>
              <ul className="space-y-5 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#drive" className="hover:text-white transition-colors">Become a Driver</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-white font-bold text-xl mb-8 tracking-tight">Contact Us</h4>
              <ul className="space-y-5 font-medium">
                <li className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-zinc-500 flex-shrink-0" />
                  <span className="text-zinc-300">+234 (0) XX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-zinc-500 flex-shrink-0" />
                  <span className="text-zinc-300">hello@ridein.com</span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-zinc-500 flex-shrink-0" />
                  <span className="text-zinc-300">HQ: Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 font-medium">
              &copy; {new Date().getFullYear()} Ride-in Mobility Services. All rights reserved.
            </p>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}