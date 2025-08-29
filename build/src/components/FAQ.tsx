import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const faqs = [
  {
    id: 1,
    category: "Products",
    question: "What types of RCC precast products do you manufacture?",
    answer: "We manufacture a wide range of RCC precast products including boundary walls, compound walls, precast room units, folding compound walls, decorative wall panels, and security wall systems. All products are customizable according to your project requirements."
  },
  {
    id: 2,
    category: "Quality",
    question: "Are your products ISI certified and what quality standards do you follow?",
    answer: "Yes, all our products are manufactured following ISI standards and we maintain ISO certification. We conduct rigorous quality testing including strength tests, durability tests, and compliance checks. Each product comes with quality certification and performance guarantee."
  },
  {
    id: 3,
    category: "Installation",
    question: "Do you provide installation services?",
    answer: "Yes, we provide complete installation services with our expert team. Our installation includes site preparation, equipment, professional installation, and post-installation support. We also provide installation guidelines for DIY projects."
  },
  {
    id: 4,
    category: "Pricing",
    question: "How is the pricing calculated for custom projects?",
    answer: "Pricing is calculated based on product type, dimensions, quantity, customization requirements, and delivery location. We provide detailed quotations after site assessment. Our prices are competitive and include material cost, manufacturing, and basic installation guidance."
  },
  {
    id: 5,
    category: "Delivery",
    question: "What are your delivery timelines and coverage areas?",
    answer: "Standard products are delivered within 7-10 days, while custom products may take 15-20 days. We primarily serve Uttar Pradesh and surrounding states. Delivery time depends on quantity and location. We provide real-time tracking for all orders."
  },
  {
    id: 6,
    category: "Durability",
    question: "How long do RCC precast products last?",
    answer: "Our RCC precast products are designed to last 50+ years with minimal maintenance. They are weather-resistant, earthquake-resistant, and suitable for all climatic conditions. We provide a 10-year structural warranty on all our products."
  },
  {
    id: 7,
    category: "Customization",
    question: "Can you create custom designs and sizes?",
    answer: "Absolutely! We specialize in custom manufacturing. Our engineering team can create products according to your specific dimensions, designs, and requirements. We work with architects and engineers to ensure perfect fit for your project."
  },
  {
    id: 8,
    category: "Payment",
    question: "What are your payment terms?",
    answer: "We accept various payment methods including bank transfer, cheque, and cash. For large orders, we offer flexible payment terms with advance payment options. We provide proper invoicing and GST billing for all transactions."
  },
  {
    id: 9,
    category: "Maintenance",
    question: "Do RCC precast products require maintenance?",
    answer: "Our RCC precast products require minimal maintenance. Periodic cleaning and inspection are recommended. We provide maintenance guidelines and offer annual maintenance contracts for large installations. Most products are self-maintaining in normal conditions."
  },
  {
    id: 10,
    category: "Technical",
    question: "What is the load-bearing capacity of your walls?",
    answer: "Load-bearing capacity varies by product type and specifications. Our boundary walls typically support 500-1000 kg/m², compound walls 800-1500 kg/m², and structural elements up to 2000 kg/m². We provide detailed technical specifications for each product."
  }
];

const categories = ["All", "Products", "Quality", "Installation", "Pricing", "Delivery", "Durability", "Customization", "Payment", "Maintenance", "Technical"];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our RCC precast products, services, and processes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <Card 
              key={faq.id}
              className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/30 transition-colors duration-300 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-white font-medium text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our team is here to help you with any specific questions about our products and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.open('tel:919151577755', '_blank')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                Call Us Now
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}