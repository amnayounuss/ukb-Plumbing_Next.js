"use client"
import AboutUs from "@/components/AboutUs"
import AnnouncementBar from "@/components/AnnouncementBar"
import BrandCarousel from "@/components/BrandCarousel"
import CallToAction from "@/components/CallToAction"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServiceBanner from "@/components/ServiceBanner"
import ServicesSection from "@/components/ServicesSection"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"


export default function Page() {
  return <div className="min-h-screen bg-white">
  <AnnouncementBar />
  <Header />
  <HeroSection />
  <ServiceBanner />
  <ServicesSection />
  <BrandCarousel />
  <WhyChooseUs />
  {/* <GoogleReviews /> */}
  <AboutUs />
  <Testimonials />
  <CallToAction />
  <ContactSection />
  <Footer />
  
  {/* Scroll to top button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 z-40 bg-ukb-blue text-white p-3 rounded-full shadow-button hover:bg-ukb-darkblue transition-colors duration-300"
    aria-label="Scroll to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  </button>
</div>
}