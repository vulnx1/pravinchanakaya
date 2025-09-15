import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sejal Singh",
    company: "Kumar Construction Ltd.",
    designation: "Project Manager",
    rating: 4.5,
    text: "Chanakya Cement Products delivered exceptional quality RCC precast walls for our residential project. The installation was quick and the durability is outstanding. Highly recommended for any construction project.",
    project: "Green Valley Residency",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Sharma Builders",
    designation: "Managing Director",
    rating: 4,
    text: "We've been using Chanakya's compound walls for over 3 years now. Their products are cost-effective, durable, and always delivered on time. The team is professional and supportive.",
    project: "Commercial Complex, Varanasi",
  },
  {
    id: 3,
    name: "Amit Singh",
    company: "Singh Infrastructure",
    designation: "Site Engineer",
    rating: 4,
    text: "The decorative wall panels from Chanakya transformed our office building facade. Excellent finish quality and the installation team was knowledgeable. Will definitely use their services again.",
    project: "Tech Park Phase-II",
  },
  {
    id: 4,
    name: "Dr. Vikash Gupta",
    company: "Gupta Developers",
    designation: "Architect",
    rating: 5,
    text: "Quality that speaks for itself! The precast room units saved us significant time and costs. The precision and finishing are remarkable. Chanakya is our go-to supplier for all RCC requirements.",
    project: "Hospital Complex Project",
  },
  {
    id: 5,
    name: "Sunita Agarwal",
    company: "Agarwal Constructions",
    designation: "Director",
    rating: 4,
    text: "Impressed with the security wall systems for our industrial project. The strength and durability exceeded our expectations. Professional service from inquiry to installation.",
    project: "Industrial Park, Mirzapur",
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeOffset, setSwipeOffset] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setSwipeOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);
    // Calculate swipe offset for visual feedback
    setSwipeOffset(currentX - touchStart);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimum distance to trigger swipe
    
    if (swipeDistance > swipeThreshold) {
      // Swipe left - go to next testimonial
      nextTestimonial();
    } else if (swipeDistance < -swipeThreshold) {
      // Swipe right - go to previous testimonial
      prevTestimonial();
    }
    
    // Reset swipe offset
    setSwipeOffset(0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our RCC precast solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${swipeOffset}px)` }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>

                    {/* Project */}
                    <div className="mb-4">
                      <span className="text-yellow-400 font-medium">Project: </span>
                      <span className="text-gray-300">{testimonials[currentTestimonial].project}</span>
                    </div>

                    {/* Client Info */}
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-yellow-400 font-medium">
                        {testimonials[currentTestimonial].designation}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 hover:border-yellow-500 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 hover:border-yellow-500 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}