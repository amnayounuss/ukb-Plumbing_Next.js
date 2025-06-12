
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from './ui/badge';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Southampton",
    quote: "UKB Plumbing responded to my emergency call within 30 minutes. The plumber was professional, friendly, and fixed my leaking pipe quickly. Highly recommend their services!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "David Thompson",
    location: "Eastleigh",
    quote: "I've used UKB Plumbing for several jobs at my home, from fixing a boiler to installing a new bathroom. Their work is always excellent and fairly priced. Would use again without hesitation.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    name: "Emma Roberts",
    location: "Winchester",
    quote: "After trying several plumbers who couldn't solve my persistent drainage issue, UKB Plumbing diagnosed and fixed the problem in one visit. Excellent service and clear communication throughout.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "James Wilson",
    location: "Southampton",
    quote: "Prompt, professional and reasonably priced. UKB installed a new boiler for us and the experience was smooth from start to finish. The plumber explained everything clearly and left the area spotless.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 5,
    name: "Olivia Brown",
    location: "Totton",
    quote: "Called UKB for an emergency leak at 10pm and they were at my door within an hour. The plumber was courteous and efficient despite the late hour. Saved us from serious water damage!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=9",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);
  const autoPlayRef = useRef<number | null>(null);

  const maxIndex = testimonials.length - 1;

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    setVisibleCount(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
  };

  useEffect(() => {
    // Only run on client
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === maxIndex - (visibleCount - 1) ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex - (visibleCount - 1) : prev - 1));
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, visibleCount]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">What Our Customers Say</h2>
          <p className="text-lg text-ukb-darkgray">
            Don't just take our word for it - hear from the people who have experienced our service firsthand.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 z-10 bg-white rounded-full p-2 shadow-subtle hover:shadow-elevated transition-all duration-300"
            onClick={() => {
              prevTestimonial();
              pauseAutoPlay();
            }}
            onMouseLeave={resumeAutoPlay}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-ukb-blue" />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 z-10 bg-white rounded-full p-2 shadow-subtle hover:shadow-elevated transition-all duration-300"
            onClick={() => {
              nextTestimonial();
              pauseAutoPlay();
            }}
            onMouseLeave={resumeAutoPlay}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-ukb-blue" />
          </button>

          {/* Testimonials slider */}
          <div className="overflow-hidden py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(testimonials.length / visibleCount) * 100}%`,
                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`w-[${100 / testimonials.length}%] px-4`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-subtle h-full border border-gray-100">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-ukb-darkblue">{testimonial.name}</h4>
                        <p className="text-sm text-ukb-darkgray">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-ukb-darkgray italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex - visibleCount + 2 }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-ukb-blue w-6' : 'bg-ukb-blue/30'
                  }`}
                onClick={() => {
                  setCurrentIndex(index);
                  pauseAutoPlay();
                }}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
