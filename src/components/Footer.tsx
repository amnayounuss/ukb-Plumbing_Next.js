
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ukb-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <img
                src="/lovable-uploads/footerlogo.png"
                alt="UKB Plumbing Logo"
                className="h-16 mb-4"
              />
            </div>
            <p className="mb-6 text-white/80">
              Professional plumbing #services in Southampton and surrounding areas. Available 24/7 for all your plumbing needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/196J65W6BF/" target='blank' className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - #services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">Emergency Plumbing</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">Blocked Drains</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">Water Leak Repairs</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">Radiator Repairs</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">Boiler services</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">services</a>
              </li>
              <li>
                <a href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="/privacypolicy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-ukb-white" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+447954719411" className="text-white/80 hover:text-white transition-colors">
                    07359605766
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-ukb-white" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@ukbplumbing.co.uk" className="text-white/80 hover:text-white transition-colors">
                    info@ukbplumbing.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-ukb-white" />
                <div>
                  <p className="font-medium">Address</p>
                  <address className="text-white/80 not-italic">
                    123 High Street<br />
                    Southampton, SO14 2DY
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Video section */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
            <video
              className="absolute inset-0 w-full h-full"
              src="lovable-uploads/video.mp4"
              title="UKB Plumbing #services"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>


        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-center md:text-left">
            &copy; {currentYear} UKB Plumbing. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="/termsconditions" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="text-white/70 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
