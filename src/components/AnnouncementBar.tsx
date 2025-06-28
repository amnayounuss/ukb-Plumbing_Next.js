"use client"
import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Define a state to toggle between light and dark mode for the announcement bar
  const [isLight, setIsLight] = useState(false);
  // Use state to track the current announcement
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  const announcements = [
    <>
      <span className="font-large">Urgent boiler breakdown and boiler installation - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-large">24/7 emergency plumbing services - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-bold">Urgent plumbing repair for leaking toilets, showers & taps - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-bold">Same-day plumbing services for plumbing emergencies - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-bold">Gas leak repair & washing machine installation by our emergency plumbing company - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-bold">Local emergency plumber for radiators not working & leaking radiator issues - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>,
    <>
      <span className="font-bold">Affordable emergency plumber - Call Now on </span>
      <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
        07359605766
      </a>
    </>
  ];

  useEffect(() => {
    // Set visible after component mounts for the animation to work
    setIsVisible(true);
    
    // Rotate through announcements every 6 seconds
    const rotateInterval = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
    }, 6000);
    
    return () => clearInterval(rotateInterval);
  }, [announcements.length]);

  return <div className={cn("py-2 sticky top-0 z-[60] transition-transform duration-500 ease-out overflow-hidden", isVisible ? "translate-x-0" : "-translate-x-full", isLight ? "bg-white text-ukb-darkblue" : "bg-ukb-blue text-white")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between">
          
          <div className="flex-1 overflow-hidden">
            <div className="marquee-container">
            <div className="marquee-content flex items-center justify-center text-xl">
                {announcements[currentAnnouncement]}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button for light/dark mode */}
      <button onClick={() => setIsLight(!isLight)} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full" aria-label="Toggle announcement bar theme">
        
      </button>
    </div>;
};

export default AnnouncementBar;
