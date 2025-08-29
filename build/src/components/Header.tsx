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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>91515 77755, 8383 048884</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>pravinbalda79@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>GST: Registered</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Chanakya Cement Products</h1>
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