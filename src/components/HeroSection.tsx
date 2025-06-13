
import React from "react";
import { Phone } from "lucide-react";
const HeroSection = () => {
  return <section className="relative h-[800px] flex items-center overflow-hidden bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
    {/* Overlay for Better Readability */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Inline Styles for Animation */}
    <style>
      {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slideInRight 1s ease-out forwards;
          }
        `}
    </style>

    {/* Content */}
    <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
      {/* Left Side: Text Content */}
      <div className="max-w-2xl text-white">
        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-sm font-medium rounded-full mb-4">
          Professional Plumbing Services in Southampton
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          PLUMBING <span className="text-yellow-400">EMERGENCIES?</span>
          <br />
          <span className="text-white">NO PROBLEM!</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Need urgent plumbing repair for leaking toilet, leaking shower, or leaking tap issues? Our emergency plumbing company is here for all your plumbing emergencies!<br />
          From gas leak repair to washing machine installation, radiators not working to leaking radiator problems - our expert team is available for same-day plumbing services in Southampton.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+447359605766" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition font-semibold">
            <Phone size={20} />
            <span>Call Now: 07359605766</span>
          </a>
          <a href="/servicesList" className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition font-semibold">
            Our Services
          </a>
        </div>
      </div>

      {/* Right Side: Image with Animation */}
      <div className="hidden md:block mt-16 ml-10 animate-slide-in-right">
        <img src="/lovable-uploads/hero.png" alt="Cartoon Plumber with Tools" className="w-full h-auto object-contain drop-shadow-lg" />
      </div>
    </div>
  </section>;
};
export default HeroSection;