import { useState, useEffect } from 'react';
    import { ChevronLeft, ChevronRight, Shield, Clock, DollarSign } from 'lucide-react';
    import { Button } from './ui/button';
    import { ImageWithFallback } from './figma/ImageWithFallback';
    import { useSwipeable } from 'react-swipeable';
    import React from 'react';
    import { useRef } from 'react';

const img12 = new URL('../assets/images/img12.png', import.meta.url).href;
const img13 = new URL('../assets/images/img13.png', import.meta.url).href;
const img3 = new URL('../assets/images/img3.png', import.meta.url).href;
const img10 = new URL('../assets/images/img10.png', import.meta.url).href;

const heroImages = [img3, img12, img13, img10];

  export function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [animatedStats, setAnimatedStats] = useState({
      experience: 0,
      projects: 0,
      clients: 0
    });
  
  // Shared styles for CTA buttons to ensure identical color and sizing
  const ctaButtonClass = "bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        const progress = step / steps;
        setAnimatedStats({
          experience: Math.floor(18 * progress),
          projects: Math.floor(500 * progress),
          clients: Math.floor(200 * progress)
        });
        
        step++;
        if (step > steps) {
          clearInterval(interval);
          setAnimatedStats({ experience: 18, projects: 500, clients: 200 });
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden" {...handlers}>
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Cement product ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' as any : 'auto' as any}
              decoding="async"
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navigation handled by swipe gestures */}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quality RCC Precast Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Leading manufacturer of durable RCC precast walls, compound walls, and modular construction solutions in Varanasi
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-6 h-6 text-orange-400" />
              <span className="text-lg">Durable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-6 h-6 text-orange-400" />
              <span className="text-lg">Quick Install</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <DollarSign className="w-6 h-6 text-orange-400" />
              <span className="text-lg">Cost Effective</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              className={ctaButtonClass}
            >
              Get Quote
            </Button>
            <Button 
              onClick={() => scrollToSection('products')}
              className={ctaButtonClass}
            >
              View Products
            </Button>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2" translate="no">
                {animatedStats.experience}+
              </div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2" translate="no">
                {animatedStats.projects}+
              </div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2" translate="no">
                {animatedStats.clients}+
              </div>
              <div className="text-lg">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}