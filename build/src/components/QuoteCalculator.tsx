import React, { useState, useEffect } from 'react';
import { Calculator, FileText, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

const productPrices = {
  'boundary-wall': { name: 'RCC Precast Boundary Wall', price: 120, unit: 'sq ft' },
  'compound-wall': { name: 'RCC Compound Wall', price: 150, unit: 'sq ft' },
  'room-units': { name: 'Precast Room Units', price: 25000, unit: 'unit' },
  'folding-wall': { name: 'Folding Compound Wall', price: 180, unit: 'sq ft' },
  'decorative-panels': { name: 'Decorative Wall Panels', price: 200, unit: 'sq ft' },
  'security-walls': { name: 'Security Wall Systems', price: 220, unit: 'sq ft' }
};

const locations = {
  'varanasi': { name: 'Varanasi', deliveryCharge: 0 },
  'mirzapur': { name: 'Mirzapur', deliveryCharge: 500 },
  'allahabad': { name: 'Allahabad', deliveryCharge: 800 },
  'gorakhpur': { name: 'Gorakhpur', deliveryCharge: 1200 },
  'lucknow': { name: 'Lucknow', deliveryCharge: 1500 },
  'other': { name: 'Other Location', deliveryCharge: 2000 }
};

export function QuoteCalculator() {
  const [formData, setFormData] = useState({
    productType: '',
    quantity: '',
    location: '',
    height: '',
    width: '',
    installationRequired: 'no',
    urgentDelivery: 'no',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    additionalRequirements: ''
  });

  const [estimate, setEstimate] = useState({
    materialCost: 0,
    deliveryCharge: 0,
    installationCharge: 0,
    urgencyCharge: 0,
    total: 0
  });

  const [showEstimate, setShowEstimate] = useState(false);

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    if (!formData.productType || !formData.quantity) {
      setShowEstimate(false);
      return;
    }

    const product = productPrices[formData.productType as keyof typeof productPrices];
    const location = locations[formData.location as keyof typeof locations];
    
    if (!product) return;

    let quantity = parseFloat(formData.quantity) || 0;
    
    // For area-based products, calculate area
    if (product.unit === 'sq ft' && formData.height && formData.width) {
      const height = parseFloat(formData.height) || 0;
      const width = parseFloat(formData.width) || 0;
      quantity = height * width;
    }

    const materialCost = product.price * quantity;
    const deliveryCharge = location ? location.deliveryCharge : 0;
    const installationCharge = formData.installationRequired === 'yes' ? materialCost * 0.15 : 0;
    const urgencyCharge = formData.urgentDelivery === 'yes' ? materialCost * 0.1 : 0;
    const total = materialCost + deliveryCharge + installationCharge + urgencyCharge;

    setEstimate({
      materialCost,
      deliveryCharge,
      installationCharge,
      urgencyCharge,
      total
    });

    setShowEstimate(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendQuoteRequest = () => {
    const product = productPrices[formData.productType as keyof typeof productPrices];
    const message = `
Quote Request - ${product?.name}

Customer Details:
Name: ${formData.customerName}
Phone: ${formData.customerPhone}
Email: ${formData.customerEmail}

Project Details:
Product: ${product?.name}
Quantity: ${formData.quantity} ${product?.unit}
${formData.height && formData.width ? `Dimensions: ${formData.height}ft x ${formData.width}ft` : ''}
Location: ${locations[formData.location as keyof typeof locations]?.name}
Installation Required: ${formData.installationRequired}
Urgent Delivery: ${formData.urgentDelivery}

Estimated Total: ₹${estimate.total.toLocaleString()}

Additional Requirements:
${formData.additionalRequirements}
    `.trim();

    const phoneNumber = "919151577755";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600/20 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Quote Calculator</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent mb-6">
            Get Instant Quote
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate estimated costs for your RCC precast project instantly. Get detailed pricing breakdown and request official quotation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <Card className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-400" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Selection */}
              <div>
                <Label htmlFor="productType" className="text-gray-300">Product Type *</Label>
                <Select onValueChange={(value) => handleInputChange('productType', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(productPrices).map(([key, product]) => (
                      <SelectItem key={key} value={key}>
                        {product.name} - ₹{product.price}/{product.unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Dimensions for area-based products */}
              {formData.productType && productPrices[formData.productType as keyof typeof productPrices]?.unit === 'sq ft' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height" className="text-gray-300">Height (ft)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      placeholder="Height in feet"
                      className="bg-gray-800/50 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="width" className="text-gray-300">Width (ft)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={formData.width}
                      onChange={(e) => handleInputChange('width', e.target.value)}
                      placeholder="Width in feet"
                      className="bg-gray-800/50 border-gray-600 text-white"
                    />
                  </div>
                </div>
              )}

              {/* Quantity for unit-based products */}
              {formData.productType && productPrices[formData.productType as keyof typeof productPrices]?.unit === 'unit' && (
                <div>
                  <Label htmlFor="quantity" className="text-gray-300">Quantity (units) *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder="Number of units"
                    className="bg-gray-800/50 border-gray-600 text-white"
                  />
                </div>
              )}

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-gray-300">Delivery Location *</Label>
                <Select onValueChange={(value) => handleInputChange('location', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(locations).map(([key, location]) => (
                      <SelectItem key={key} value={key}>
                        {location.name} {location.deliveryCharge > 0 && `(+₹${location.deliveryCharge})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Installation & Urgent Delivery */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="installation" className="text-gray-300">Installation Required</Label>
                  <Select onValueChange={(value) => handleInputChange('installationRequired', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No (+₹0)</SelectItem>
                      <SelectItem value="yes">Yes (+15%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="urgentDelivery" className="text-gray-300">Urgent Delivery</Label>
                  <Select onValueChange={(value) => handleInputChange('urgentDelivery', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">Standard (+₹0)</SelectItem>
                      <SelectItem value="yes">Urgent (+10%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Customer Details */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-medium mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    className="bg-gray-800/50 border-gray-600 text-white"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number"
                      value={formData.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      className="bg-gray-800/50 border-gray-600 text-white"
                    />
                    <Input
                      placeholder="Email Address"
                      value={formData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                      className="bg-gray-800/50 border-gray-600 text-white"
                    />
                  </div>
                  <Textarea
                    placeholder="Additional requirements or specifications..."
                    value={formData.additionalRequirements}
                    onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                    className="bg-gray-800/50 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estimate Display */}
          <div className="space-y-8">
            {showEstimate && (
              <Card className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm border border-green-700/50 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-400" />
                    Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Material Cost:</span>
                      <span className="text-white font-medium">₹{estimate.materialCost.toLocaleString()}</span>
                    </div>
                    {estimate.deliveryCharge > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Delivery Charge:</span>
                        <span className="text-white font-medium">₹{estimate.deliveryCharge.toLocaleString()}</span>
                      </div>
                    )}
                    {estimate.installationCharge > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Installation (15%):</span>
                        <span className="text-white font-medium">₹{estimate.installationCharge.toLocaleString()}</span>
                      </div>
                    )}
                    {estimate.urgencyCharge > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Urgent Delivery (10%):</span>
                        <span className="text-white font-medium">₹{estimate.urgencyCharge.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">Total Estimate:</span>
                        <span className="text-2xl font-bold text-green-400">₹{estimate.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-600/20 rounded-lg p-4 mt-6">
                    <p className="text-blue-300 text-sm">
                      * This is an estimated cost. Final pricing may vary based on specific requirements, site conditions, and current material rates.
                    </p>
                  </div>

                  {formData.customerName && formData.customerPhone && (
                    <Button 
                      onClick={sendQuoteRequest}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                    >
                      Request Official Quote
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Contact Options */}
            <Card className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50">
              <CardContent className="p-6">
                <h3 className="text-white font-bold text-lg mb-4">Need Help with Your Quote?</h3>
                <p className="text-gray-300 mb-6">
                  Our experts are available to help you with technical specifications, custom requirements, and detailed project planning.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={() => window.open('tel:919151577755', '_blank')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Expert
                  </Button>
                  <Button 
                    onClick={() => window.open('mailto:pravinbalda79@gmail.com', '_blank')}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}