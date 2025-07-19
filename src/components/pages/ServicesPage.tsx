import React from 'react';
import { CheckCircle, Settings, Wrench, CreditCard, Award, Clock, Users, Shield } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Hallmark Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services designed to ensure your complete satisfaction and equipment longevity
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Quality Control & Calibration */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Quality Control & Calibration</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our products are the best in the market. We invest heavily in R&D and test our equipment 
                in various conditions. We provide in-house calibration and can also arrange third-party 
                calibration certificates as per customer requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  In-house calibration services
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Third-party calibration certificates
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Rigorous R&D testing
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Multi-condition performance validation
                </div>
              </div>
            </div>

            {/* After-Sales Service */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-4 rounded-full mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">After-Sales Service</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide constant after-sales service and maintain it as it should be. We believe in 
                complete customer satisfaction and have a dedicated team for quality care support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  24/7 customer support
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Dedicated support team
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Qualified engineers
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Complete customer satisfaction focus
                </div>
              </div>
            </div>

            {/* Annual Maintenance Contract */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-4 rounded-full mr-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Annual Maintenance Contract (AMC)</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We offer Annual Maintenance for our products to ensure their longevity and performance. 
                We also provide trouble servicing for other brand equipment's.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Preventive maintenance schedules
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Performance optimization
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Multi-brand servicing
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Extended equipment lifespan
                </div>
              </div>
            </div>

            {/* Flexible Purchase Terms */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 p-4 rounded-full mr-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Flexible Purchase Terms</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We give flexible payment terms to make sure that our customers and clients are happy 
                with the products as well as the commercial aspect.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Customized payment plans
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Competitive pricing
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Transparent quotations
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Customer-friendly terms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond manufacturing to comprehensive service support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support and customer service availability.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Qualified engineers with 15+ years average experience in the field.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art calibration and testing equipment for precision service.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                ISO 9001:2015 certified processes ensuring consistent service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined process ensuring efficient and effective service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600">
                Reach out to our support team via phone, email, or contact form.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Our experts assess your requirements and recommend the best solution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service</h3>
              <p className="text-gray-600">
                Professional service delivery by our qualified engineering team.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up</h3>
              <p className="text-gray-600">
                Continuous support and follow-up to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and discover how our services can benefit your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="border-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;