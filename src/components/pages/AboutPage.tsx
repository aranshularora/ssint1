import React from 'react';
import { Award, Target, Eye, Building, Users, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About S.S. International</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering excellence in material testing equipment manufacturing since 2003
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Established in <strong className="text-gray-900">2003</strong>, S.S. International is a privately owned 
                  and professionally run business enterprise. Today, the SSINT name is branded and widely recognized 
                  for quality and perfection across India.
                </p>
                <p>
                  We have a team of <strong className="text-gray-900">highly qualified engineers</strong> and dedicated 
                  customer support specialists with an average experience of more than 15 years. Our commitment to 
                  excellence has made us a trusted partner for material testing solutions.
                </p>
                <p>
                  From our humble beginnings to becoming a leading manufacturer, we have consistently focused on 
                  innovation, quality, and customer satisfaction. Our journey reflects our dedication to advancing 
                  the field of material testing equipment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" 
                alt="Manufacturing facility" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">21+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To design and manufacture reliable products, as well as to offer qualified technical services, 
                becoming customers' preferred partner for the supply of material testing equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be constantly committed to new developments in material testing, meeting the requirements 
                of new Standards, customers' changing needs, and taking on the new challenges of the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/WhatsApp Image 2025-07-11 at 15.34.52_d992e664.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Manufacturing infrastructure" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center">
                  <Building className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1500</div>
                    <div className="text-sm text-gray-600">Sq ft Facility</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Infrastructure & Quality</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our <strong className="text-gray-900">1500 Sq ft office and factory</strong> in Delhi is equipped 
                  with modern infrastructure designed to support high-quality manufacturing processes.
                </p>
                <p>
                  We use <strong className="text-gray-900">advanced and precise master equipment</strong> for 
                  manufacturing, which is periodically calibrated to maintain the highest quality assurance. 
                  This ensures that every product meets our stringent quality standards.
                </p>
                <p>
                  Our quality control processes are comprehensive, involving rigorous testing at every stage 
                  of production to deliver equipment that exceeds customer expectations and industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Certifications</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Recognized for quality, compliance, and excellence in manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 ClassName="text-2xl font-bold mb-4">ISO 9001:2015</h3>
              <p className="text-blue-100">
                International standard for quality management systems, ensuring consistent quality in our processes.
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">MSME Certified</h3>
              <p className="text-blue-100">
                Recognized under the Micro, Small and Medium Enterprises development program by the Government of India.
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CE Certified</h3>
              <p className="text-blue-100">
                European Conformity marking indicating compliance with health, safety, and environmental protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">21+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Avg Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;