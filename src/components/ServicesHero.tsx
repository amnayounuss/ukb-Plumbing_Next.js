
import React from 'react';
import { cn } from '@/lib/utils';

interface ServicesHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServicesHero = ({ title, description, image }: ServicesHeroProps) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ukb-lightblue">
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ukb-blue/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
        <h1 className="mt-[30px] md:mt-0 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ukb-darkblue">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-ukb-darkgray max-w-2xl">
            {description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="/booking" 
              className={cn(
                "bg-ukb-blue text-white py-3 px-6 rounded-md",
                "hover:bg-ukb-darkblue transition-colors duration-300"
              )}
            >
              Book This Service
            </a>
            <a 
              href="tel:07359605766" 
              className={cn(
                "bg-white text-ukb-blue py-3 px-6 rounded-md border border-ukb-blue",
                "hover:bg-ukb-lightblue transition-colors duration-300"
              )}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;