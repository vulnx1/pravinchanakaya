import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { sendContactEmail, ContactFormData } from '../utils/emailService';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    // Simple and practical email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === 'phone') {
      // Keep only digits and limit to 10
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      value = digitsOnly;
      setErrors(prev => ({
        ...prev,
        phone: digitsOnly.length === 0 || digitsOnly.length === 10 ? undefined : 'Phone number must be exactly 10 digits'
      }));
    }

    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value.length === 0 || validateEmail(value) ? undefined : 'Please enter a valid email address'
      }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    // Final client-side validation before submit
    const phoneValid = /^\d{10}$/.test(formData.phone);
    const emailValid = validateEmail(formData.email);

    const newErrors: { email?: string; phone?: string } = {};
    if (!phoneValid) newErrors.phone = 'Phone number must be exactly 10 digits';
    if (!emailValid) newErrors.email = 'Please enter a valid email address';
    setErrors(prev => ({ ...prev, ...newErrors }));

    if (!phoneValid || !emailValid) {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'error', message: 'Please fix the highlighted errors before submitting.' });
      return;
    }
    
    try {
      const response = await sendContactEmail(formData as ContactFormData);
      
      if (response.success) {
        setSubmitStatus({ type: 'success', message: response.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: response.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ Sorry, there was an issue sending your message. Please try contacting us directly:\n📞 Call: 91515 77755 / 8383 048884\n📧 Email: pravinbalda79@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-ping delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your construction project? Contact us for quotes, consultations, and more information about our products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Phone Numbers</h4>
                      <p className="text-gray-300">
                        <a href="tel:9151577755" className="hover:text-cyan-400 transition-colors duration-300">
                          9151577755
                        </a>
                      </p>
                      <p className="text-gray-300">
                        <a href="tel:8383048884" className="hover:text-cyan-400 transition-colors duration-300">
                          8383048884
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Email Addresses</h4>
                      <p className="text-gray-300">
                        <a href="mailto:pravinbalda79@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
                          pravinbalda79@gmail.com
                        </a>
                      </p>
                      <p className="text-gray-300">
                        <a href="mailto:chanakyacp21@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
                          chanakyacp21@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Our Address</h4>
                      <p className="text-gray-300">
                        Rupapur, Khochawa<br />
                        G T Road, Varanasi<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Business Hours</h4>
                      <p className="text-gray-300">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Button 
                onClick={() => window.open('https://wa.me/9151577755', '_blank')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => window.open('tel:9151577755', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="\\d{10}"
                        minLength={10}
                        maxLength={10}
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        aria-invalid={!!errors.phone}
                        title="Enter exactly 10 digits"
                        className={`bg-gray-800/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-300 ${errors.phone ? 'border-red-500/70' : 'border-gray-600'}`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      aria-invalid={!!errors.email}
                      className={`bg-gray-800/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-300 ${errors.email ? 'border-red-500/70' : 'border-gray-600'}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements..."
                      rows={5}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-300"
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg border ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-900/20 border-green-500/50 text-green-300' 
                        : 'bg-red-900/20 border-red-500/50 text-red-300'
                    }`}>
                      <div className="flex items-start gap-3">
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="whitespace-pre-line text-sm">
                          {submitStatus.message}
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}