
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceBanner from '@/components/ServiceBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import AboutUs from '@/components/AboutUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BrandCarousel from '@/components/BrandCarousel';
import AnnouncementBar from '@/components/AnnouncementBar';

const Index = () => {
  // SEO and document metadata updates
  useEffect(() => {
    // Primary title with main keyword and location
    document.title = "24/7 Emergency Plumbers Southampton | UKB Plumbing | Fast Response";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "24/7 emergency plumbers in Southampton. Gas Safe registered engineers for leaks, boiler repairs & installations. Fast response, same-day service. Call +447359605766 now for immediate help!");

    // Viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      metaViewport.setAttribute('content', "width=device-width, initial-scale=1, maximum-scale=5");
      document.head.appendChild(metaViewport);
    }

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', "https://ukbplumbing.co.uk/");

    // Local Business Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "UKB Plumbing",
      "image": "https://ukbplumbing.co.uk/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png",
      "@id": "https://ukbplumbing.co.uk",
      "url": "https://ukbplumbing.co.uk",
      "telephone": "+44 7359 605766",
      "priceRange": "££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Fuchsia Gardens",
        "addressLocality": "Southampton",
        "postalCode": "SO16 6TY",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.9358",
        "longitude": "-1.4316"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/ukbplumbing",
        "https://www.instagram.com/ukbplumbing"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "67",
        "bestRating": "5",
        "worstRating": "1"
      }
    });
    document.head.appendChild(schemaScript);

    // Service schema for all services offered
    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Emergency plumbing",
        "provider": {
          "@type": "LocalBusiness",
          "name": "UKB Plumbing"
        },
        "description": "24/7 emergency plumbing services for leaks, blockages and urgent repairs",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "50.9358",
            "longitude": "-1.4316"
          },
          "geoRadius": "20000"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Boiler repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "UKB Plumbing"
        },
        "description": "Expert boiler repair services for all makes and models"
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Toilet Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "UKB Plumbing"
        },
        "description": "Professional toilet installation services"
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Plumbing Leak Detection",
        "provider": {
          "@type": "LocalBusiness",
          "name": "UKB Plumbing"
        },
        "description": "Advanced leak detection and repair services"
      }
    ]);
    document.head.appendChild(serviceSchema);

    // Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ukbplumbing.co.uk/"
      }]
    });
    document.head.appendChild(breadcrumbScript);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Language and region meta */}
      <meta httpEquiv="content-language" content="en-gb" />
      <meta name="geo.region" content="GB-SOX" />
      <meta name="geo.placename" content="Southampton" />
      
      <AnnouncementBar />
      <Header />
      
      {/* Main content with semantic HTML5 structure */}
      <main>
        <HeroSection />
        <ServiceBanner />
        
        {/* Hidden h1 for SEO (visible in DOM but not visually) */}
        <h1 className="sr-only">UKB Plumbing - 24/7 Emergency Plumbers in Southampton | Fast Response Plumbing Services</h1>
        
        <ServicesSection />
        <BrandCarousel />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <CallToAction />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button with enhanced accessibility */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-ukb-blue text-white p-3 rounded-full shadow-button hover:bg-ukb-darkblue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ukb-blue focus:ring-offset-2"
        aria-label="Scroll back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
