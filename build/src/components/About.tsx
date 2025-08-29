import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-ping delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6">About Chanakya Cement Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading manufacturer of high-quality RCC precast construction solutions, 
            serving the construction industry with innovative and durable products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission & Vision</h3>
            <p className="text-gray-300 mb-6 leading-relaxed hover:text-gray-100 transition-colors duration-300">
              At Chanakya Cement Products, we are committed to revolutionizing the construction 
              industry with our superior quality RCC precast solutions. Our mission is to provide 
              durable, cost-effective, and quick-install construction components that meet the 
              evolving needs of modern infrastructure.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed hover:text-gray-100 transition-colors duration-300">
              With over 15 years of experience in the industry, we have established ourselves 
              as a trusted partner for residential, commercial, and industrial construction projects 
              across Uttar Pradesh and beyond.
            </p>

            {/* Company Highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">ISO Certified Manufacturing Process</span>
              </div>
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Quality Assured Products</span>
              </div>
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Timely Delivery & Installation</span>
              </div>
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Competitive Pricing</span>
              </div>
            </div>
          </div>

          {/* Company Details Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Our Location</h4>
                    <p className="text-gray-300">
                      Rupapur, Khochawa<br />
                      G T Road, Varanasi<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Certifications</h4>
                    <p className="text-gray-300">
                      GST Registered Business<br />
                      Quality Certification<br />
                      Environmental Compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Our Team</h4>
                    <p className="text-gray-300">
                      Experienced Engineers<br />
                      Skilled Technicians<br />
                      Dedicated Support Staff
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}