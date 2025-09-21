import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initCounters } from './utils/counter';

// Add no-js class to HTML if JavaScript is disabled
if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('no-js');
}

export default function App() {
  useEffect(() => {
    // Initialize counters when the component mounts
    initCounters();
    
    // Re-run counter initialization after route changes (if using client-side routing)
    const handleRouteChange = () => {
      // Small delay to ensure new content is in the DOM
      setTimeout(initCounters, 100);
    };
    
    // If using a router, you might want to listen to route changes
    // For example, with Next.js: Router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      // Cleanup if needed
      // For example: Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen no-js">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Gallery />
        <Testimonials />
        <QuoteCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}