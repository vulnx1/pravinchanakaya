import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productsList = [
    "RCC Precast Boundary Wall",
    "RCC Compound Wall", 
    "Precast Room Units",
    "Folding Compound Wall",
    "Decorative Wall Panels",
    "Security Wall Systems"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Chanakya Cement Products</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading manufacturer of high-quality RCC precast construction solutions, 
              serving the construction industry with innovative and durable products.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FileText className="w-4 h-4" />
              <span>GST Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productsList.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rupapur, Khochawa</p>
                  <p>G T Road, Varanasi</p>
                  <p>Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>
                    <a href="tel:919151577755" className="hover:text-orange-400 transition-colors">
                      91515 77755
                    </a>
                  </p>
                  <p>
                    <a href="tel:918383048884" className="hover:text-orange-400 transition-colors">
                      8383 048884
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>
                    <a href="mailto:pravinbalda79@gmail.com" className="hover:text-orange-400 transition-colors">
                      pravinbalda79@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:chanakyacp21@gmail.com" className="hover:text-orange-400 transition-colors">
                      chanakyacp21@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Chanakya Cement Products. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Designed & Developed for Quality Construction Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}