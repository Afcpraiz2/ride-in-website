import React, { useState } from 'react';
import { 
  Car, ShieldCheck, Banknote, Users, Lightbulb, 
  HeartHandshake, MapPin, Route, Briefcase, 
  GraduationCap, TrendingUp, ChevronRight, 
  Menu, X, Phone, Mail, Map, ArrowRight, CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Ride-in</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#drive" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Drive</a>
              <a href="#partners" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Partners</a>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Get the App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-blue-600 focus:outline-none">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <a href="#about" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">About Us</a>
            <a href="#services" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Services</a>
            <a href="#drive" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Drive for Us</a>
            <a href="#partners" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Partners</a>
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Get the App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 transform origin-top-left -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                <MapPin className="h-4 w-4" />
                <span>Launching in Ogun State</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Connecting People,<br />
                <span className="text-blue-600">Empowering Communities.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Safe, reliable, and affordable mobility for people in developing areas. We simplify your daily movement so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                  Ride with Us <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 text-lg">
                  Drive for Ride-in
                </button>
              </div>
            </div>
            
            {/* Hero Graphic Representation */}
            <div className="lg:col-span-6 mt-16 lg:mt-0 relative hidden md:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full opacity-10 animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full opacity-20" />
                <div className="absolute inset-10 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                  {/* Mock App UI */}
                  <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                    <span className="font-semibold">Where to?</span>
                    <Menu className="h-5 w-5" />
                  </div>
                  <div className="flex-1 bg-slate-50 p-6 flex flex-col gap-4 relative">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-100 to-transparent" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative z-10 flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600"><MapPin className="h-5 w-5" /></div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Current Location</p>
                        <p className="text-sm font-bold text-slate-800">Abeokuta City Center</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative z-10 flex items-center gap-4">
                      <div className="bg-teal-100 p-2 rounded-full text-teal-600"><Route className="h-5 w-5" /></div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Destination</p>
                        <p className="text-sm font-bold text-slate-800">Ijebu Ode</p>
                      </div>
                    </div>

                    <div className="mt-auto bg-blue-600 text-white py-3 rounded-xl text-center font-semibold relative z-10 shadow-md">
                      Confirm Ride - ₦2,500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="bg-blue-50 p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-blue-100 opacity-50"><Map className="h-48 w-48" /></div>
              <h3 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Vision</h3>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug relative z-10">
                To become the most <span className="text-blue-600">trusted mobility platform</span> providing safe, affordable, and accessible transportation for developing communities worldwide.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Mission</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To simplify daily movement through dependable ride services, empower local drivers with sustainable income opportunities, and connect communities to education, employment, healthcare, and economic activities.
              </p>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that drive every ride, every partnership, and every decision we make.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous driver screening and safe vehicles." },
              { icon: Route, title: "Reliability", desc: "Dependable rides when and where you need them." },
              { icon: Banknote, title: "Affordability", desc: "Transparent, fair pricing for our target communities." },
              { icon: Users, title: "Community Empowerment", desc: "Creating local jobs and economic opportunities." },
              { icon: Lightbulb, title: "Innovation", desc: "Technology-driven solutions for everyday mobility." },
              { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Ensuring a comfortable, pleasant experience every time." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market & Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Serve</h2>
              <p className="text-lg text-slate-600 mb-8">
                We provide on-demand transportation for individuals and groups within towns and between nearby cities, ensuring safety, comfort, and timely arrival.
              </p>
              
              <ul className="space-y-4">
                {[
                  { text: "Residents of developing towns", icon: MapPin },
                  { text: "Students and school commuters", icon: GraduationCap },
                  { text: "Workers and professionals", icon: Briefcase },
                  { text: "Business owners and traders", icon: Banknote },
                  { text: "Visitors within the state", icon: Users }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Why Choose Ride-in?</h3>
                <div className="space-y-6">
                  {[
                    "Focus on underserved and rural routes",
                    "Affordable and transparent pricing",
                    "Locally recruited and trained drivers",
                    "Fast response time",
                    "Safe and comfortable ride experience"
                  ].map((uvp, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-slate-200">{uvp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Driver Recruitment */}
      <section id="drive" className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" style={{backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Drive with Ride-in</h2>
            <p className="text-xl text-blue-100">
              We are committed to creating sustainable employment opportunities within our operating communities. Turn your vehicle into a business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-teal-300" />
                Benefits
              </h3>
              <ul className="space-y-5">
                {[
                  "Flexible working hours to suit your lifestyle",
                  "Competitive and transparent earnings",
                  "Access to a rapidly growing customer base",
                  "Continuous driver support and training",
                  "Safe, structured, and respected work environment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-teal-400/20 p-1 rounded-full mt-1">
                      <CheckCircle2 className="h-4 w-4 text-teal-300" />
                    </div>
                    <span className="text-lg text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-amber-300" />
                Requirements
              </h3>
              <ul className="space-y-5">
                {[
                  "Valid driver's license",
                  "Roadworthy and clean vehicle",
                  "Good knowledge of local routes",
                  "Commitment to safety and professionalism",
                  "Passing our standard background check"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-amber-400/20 p-1 rounded-full mt-1">
                      <ChevronRight className="h-4 w-4 text-amber-300" />
                    </div>
                    <span className="text-lg text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button className="w-full bg-white text-blue-700 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                  Apply to Drive Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap & Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Growth Roadmap</h2>
            <p className="text-lg text-slate-600">
              A clear vision for phased expansion, ensuring sustainable growth and strong social impact across developing regions.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { phase: "Phase 1", title: "Launch Pilot", desc: "Key towns in Ogun State (Abeokuta, Ijebu Ode, Ago Iwoye, Sagamu).", active: true },
                { phase: "Phase 2", title: "Regional Growth", desc: "Expansion across Southwest Nigeria.", active: false },
                { phase: "Phase 3", title: "National Rollout", desc: "Scaling operations nationwide across Nigeria.", active: false },
                { phase: "Phase 4", title: "Global Reach", desc: "Expansion into other developing countries.", active: false }
              ].map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-xl border-4 mb-4 ${step.active ? 'bg-blue-600 border-blue-200 text-white shadow-lg' : 'bg-white border-blue-100 text-blue-600'}`}>
                    {idx + 1}
                  </div>
                  <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">{step.phase}</h4>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h5>
                  <p className="text-slate-600 text-sm px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships CTA */}
      <section id="partners" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartHandshake className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partnership & Investment</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            We are open to strategic partnerships with mobility platforms, investors, and local stakeholders who share our vision. We seek collaboration in technology integration, fleet expansion, and scaling.
          </p>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg text-lg">
            Discuss Partnership Opportunities
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Ride-in</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Committed to transforming mobility in underserved communities by providing safe, reliable, and affordable transportation. Join us in building a platform that moves people, creates jobs, and connects communities.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
                <li><a href="#drive" className="hover:text-blue-400 transition-colors">Become a Driver</a></li>
                <li><a href="#partners" className="hover:text-blue-400 transition-colors">Partnerships</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>+234 (0) XX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>hello@ridein.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>HQ: Ogun State, Nigeria</span>
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