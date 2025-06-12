"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesList } from '@/data/servicesData';
const ServicesListPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Our Services - UKB Plumbing";
  }, []);
  return <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 bg-ukb-lightblue py-[130px] mx-0 my-[30px]">
        <div className="container px-4 mx-0 my-[20px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">Our Plumbing Services</h1>
          <p className="text-lg text-ukb-darkgray max-w-3xl">
            We offer comprehensive plumbing services for residential and commercial properties in Southampton and surrounding areas. 
            Our skilled team is available 24/7 to handle all your plumbing needs.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map(service => <Link href={`/services/${service.slug}`} key={service.id} className="group bg-white rounded-lg overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-ukb-blue/40 group-hover:bg-ukb-blue/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-ukb-darkblue group-hover:text-ukb-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-ukb-darkgray">{service.description}</p>
              </div>
            </Link>)}
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default ServicesListPage;