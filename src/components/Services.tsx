import React from 'react';
import { Wrench, Truck, Shield, Users, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const services = [
  {
    id: 1,
    icon: Wrench,
    title: "Custom Manufacturing",
    description: "Tailored RCC precast solutions designed to meet your specific project requirements and dimensions.",
    features: ["Custom Designs", "Precise Specifications", "Quality Materials", "Expert Craftsmanship"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Truck,
    title: "Installation & Delivery",
    description: "Complete end-to-end service including timely delivery and professional installation by our expert team.",
    features: ["On-Time Delivery", "Professional Installation", "Equipment Provided", "Site Supervision"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring every product meets industry standards and specifications.",
    features: ["Quality Testing", "Compliance Checks", "Material Certification", "Performance Guarantee"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 4,
    icon: Users,
    title: "Technical Consultation",
    description: "Expert guidance and consultation to help you choose the right precast solutions for your project.",
    features: ["Site Assessment", "Design Consultation", "Cost Estimation", "Technical Support"],
    color: "from-orange-500 to-red-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial discussion about your project requirements and site assessment."
  },
  {
    step: "02",
    title: "Design & Quote",
    description: "Custom design development and detailed quotation preparation."
  },
  {
    step: "03",
    title: "Manufacturing",
    description: "Production of your RCC precast components with quality control."
  },
  {
    step: "04",
    title: "Installation",
    description: "Professional delivery and installation with complete support."
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-ping delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive RCC precast solutions with end-to-end services to ensure your project's success from concept to completion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-lg bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From initial consultation to final installation, we follow a systematic approach to ensure quality and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-600 w-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Chanakya Cement Products?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">18+ Years Experience</h4>
                    <p className="text-gray-300 text-sm">Proven track record in delivering quality RCC precast solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Quality Guaranteed</h4>
                    <p className="text-gray-300 text-sm">All products undergo rigorous quality testing and certification.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Skilled professionals ensuring precise manufacturing and installation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Complete Service</h4>
                    <p className="text-gray-300 text-sm">End-to-end solutions from consultation to installation support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 rounded-full px-4 py-2 mb-4">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-medium">ISO Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-600/20 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium">Quality Assured</span>
                </div>
              </div>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}