import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import React from 'react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'
    }`}>
      {/* Contact Info Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href="tel:9151577755" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              aria-label="Call us at 91515 77755"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">9151577755</span>
            </a>
            <a 
              href="tel:8383048884" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              aria-label="Call us at 8383 048884"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">8383048884</span>
            </a>
            <a 
              href="mailto:pravinbalda79@gmail.com" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors break-words"
              aria-label="Email us at pravinbalda79@gmail.com"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="sm:hidden">Email Us</span>
            </a>
          <div className="hidden sm:flex items-center gap-2 text-gray-300">
            <FileText className="w-4 h-4 flex-shrink-0" />
            <span>GST: Registered</span>
          </div>
        </div>
      </div>
    </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-bold text-white">Chanakya Cement Products</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-gray-300 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-gray-300 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-orange-600 hover:bg-orange-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-600 hover:bg-orange-700 w-fit">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}