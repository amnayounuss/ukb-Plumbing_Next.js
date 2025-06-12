"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-[40px] left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-subtle py-3" : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={
              isScrolled
                ? "/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png"
                : "/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png"
            }
            alt="Logo"
            className="h-16 md:h-15 lg:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "hidden md:flex items-center space-x-8",
            !isScrolled ? "text-ukb-darkblue" : "text-ukb-darkblue"
          )}
        >
          <a
            href="/"
            className="font-medium hover:text-ukb-blue transition-colors"
          >
            Home
          </a>
          <Link
            href="/servicesList"
            className="font-medium hover:text-ukb-blue transition-colors"
          >
            Services
          </Link>
          <a
            href="/#about"
            className="font-medium hover:text-ukb-blue transition-colors"
          >
            About Us
          </a>

          <Link
            href="/booking"
            className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-colors"
          >
            Book Now
          </Link>

          <a
            href="tel:07359605766"
            className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-colors"
          >
            <Phone size={16} />
            <span>07359605766</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ukb-darkblue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 flex flex-col transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-ukb-darkblue"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col space-y-6 text-center">
          <a
            href="/"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>

          <Link
            href="/servicesList"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>

          <a
            href="/#about"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>

          <a
            href="/#contact"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>

          <a
            href="/privacypolicy"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </a>

          <a
            href="/termsconditions"
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Terms & Conditions
          </a>

          <a
            href="tel:07359605766"
            className="flex items-center justify-center gap-2 font-medium bg-ukb-blue text-white py-3 px-6 rounded-md mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={18} />
            <span>07359605766</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
