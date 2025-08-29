import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen">
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