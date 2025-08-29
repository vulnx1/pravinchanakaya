import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
// Import local image
const img1 = new URL('../assets/images/img1.png', import.meta.url).href;
const img2 = new URL('../assets/images/img2.png', import.meta.url).href;
const img3 = new URL('../assets/images/img3.png', import.meta.url).href;
const img4 = new URL('../assets/images/img4.png', import.meta.url).href;
const img5 = new URL('../assets/images/img5.png', import.meta.url).href;
const img6 = new URL('../assets/images/img6.png', import.meta.url).href;
const img7 = new URL('../assets/images/img7.png', import.meta.url).href;
const img8 = new URL('../assets/images/img8.png', import.meta.url).href;
const img9 = new URL('../assets/images/img9.png', import.meta.url).href;

const products = [
  {
    id: 1,
    name: "RCC Precast Boundary Wall",
    price: "₹120",
    unit: "per sq ft",
    image: img3,
    description: "High-quality precast boundary walls for residential and commercial properties",
    features: ["Durable Construction", "Weather Resistant", "Easy Installation", "Low Maintenance"]
  },
  {
    id: 2,
    name: "RCC Compound Wall",
    price: "₹120",
    unit: "per sq ft",
    image:img4,
    description: "Robust compound walls providing security and aesthetic appeal",
    features: ["High Security", "Attractive Design", "Quick Setup", "Cost Effective"]
  },
  {
    id: 3,
    name: "Precast Room Units",
    price: "₹120",
    unit: "per unit",
    images: [
      img1,
    ],
    description: "Complete modular room units for quick construction solutions",
    features: ["Modular Design", "Complete Units", "Fast Construction", "Quality Assured"]
  },
  {
    id: 4,
    name: "Folding Compound Wall",
    price: "₹120",
    unit: "per sq ft",
    image: img8,
    description: "Innovative folding walls for flexible space management",
    features: ["Flexible Design", "Space Efficient", "Modern Look", "Easy Operation"]
  },
  {
    id: 5,
    name: "Decorative Wall Panels",
    price: "₹120",
    unit: "per sq ft",
    image: img7,
    description: "Aesthetic decorative panels for interior and exterior applications",
    features: ["Decorative Finish", "Multiple Patterns", "Interior/Exterior", "Premium Quality"]
  },
  {
    id: 6,
    name: "Security Wall Systems",
    price: "₹120",
    unit: "per sq ft",
    image: img9,
    description: "High-security wall systems for critical infrastructure and facilities",
    features: ["Maximum Security", "Reinforced Design", "Professional Grade", "Long Lasting"]
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const handleEnquiry = (productName: string) => {
    const phoneNumber = "919151577755";
    const message = `Hi, I'm interested in ${productName}. Please provide more details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuote = (productName: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = (productId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % imageCount
    }));
  };

  const prevImage = (productId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + imageCount) % imageCount
    }));
  };

  const getCurrentImage = (product: any) => {
    if (product.images && Array.isArray(product.images)) {
      const index = currentImageIndex[product.id] || 0;
      return product.images[index];
    }
    return product.image;
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-ping delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">Our Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of RCC precast products designed for modern construction needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={getCurrentImage(product)}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image Navigation for products with multiple images */}
                  {product.images && Array.isArray(product.images) && product.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(product.id, product.images.length);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(product.id, product.images.length);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === (currentImageIndex[product.id] || 0) 
                                ? 'bg-orange-500' 
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {product.price} {product.unit}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-white">
                <CardTitle className="text-xl mb-3 group-hover:text-orange-400 transition-colors duration-300">{product.name}</CardTitle>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300 hover:bg-orange-600/20 hover:text-orange-300 transition-colors duration-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleEnquiry(product.name)}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
                  >
                    Enquiry
                  </Button>
                  <Button 
                    onClick={() => handleQuote(product.name)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact us for customized RCC precast products tailored to your specific requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => window.open('tel:919151577755', '_blank')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              onClick={() => window.open('mailto:pravinbalda79@gmail.com', '_blank')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}