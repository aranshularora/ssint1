import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Settings, Award, Users, Wrench, BookOpen, Clock, CheckCircle, MessageCircle, PenTool as Tool, GraduationCap } from 'lucide-react';
import Button from '../ui/Button';

const SupportPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Support</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services to ensure your equipment performs at its best. 
              We're here to help you succeed with dedicated technical expertise and customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical queries to training programs, we provide comprehensive support 
              to maximize your equipment's performance and your team's expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Query Support */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full mr-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Technical Query Support</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Have a technical question about our equipment? Our expert engineers are here to help. 
                Get professional guidance from our team with over 15 years of average experience in material testing.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Expert technical consultation
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Equipment troubleshooting
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Performance optimization guidance
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Standards compliance assistance
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919953154009">
                  <Button className="w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Technical Team
                  </Button>
                </a>
                <a href="mailto:ssinternational13@gmail.com">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Query
                  </Button>
                </a>
              </div>
            </div>

            {/* Calibration Services */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-4 rounded-full mr-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Calibration Services</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ensure your equipment maintains peak accuracy. We offer in-house calibration services 
                and can facilitate third-party calibration certificates to meet your quality requirements.
              </p>
              <div className="space-y-4 mb-6">
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
                  Periodic calibration schedules
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Compliance documentation
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <Tool className="h-5 w-5 mr-2" />
                  Request Calibration Service
                </Button>
              </Link>
            </div>

            {/* Training & Demonstration */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-4 rounded-full mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Training & Demonstration</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Want to ensure your team is using our equipment correctly and safely? We offer comprehensive 
                product training and demonstrations to maximize efficiency and ensure proper operation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Equipment operation training
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Safety procedures guidance
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Maintenance best practices
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  On-site demonstrations
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Inquire About Training
                </Button>
              </Link>
            </div>

            {/* Service for Existing Clients */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 p-4 rounded-full mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Service for Existing Clients</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                If you are an existing client and require service or have a query about a past order, 
                please contact our dedicated support team for prompt assistance and priority service.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Priority support for existing clients
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Order history and documentation
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Warranty and service claims
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Replacement parts assistance
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <Wrench className="h-5 w-5 mr-2" />
                  Contact Support Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Our Support Stands Out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond just selling equipment - we build lasting partnerships with comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock support availability for urgent technical issues and queries.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Qualified engineers with 15+ years average experience in material testing equipment.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ISO Certified Process</h3>
              <p className="text-gray-600">
                All support services follow ISO 9001:2015 certified quality management processes.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Response</h3>
              <p className="text-gray-600">
                Committed response times for all support requests with priority handling for urgent issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Support Now</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach our support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
              <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our technical experts for immediate assistance
              </p>
              <a href="tel:+919953154009">
                <Button className="w-full">
                  +91 9953154009
                </Button>
              </a>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300">
              <div className="bg-green-600 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send detailed queries and receive comprehensive technical responses
              </p>
              <a href="mailto:ssinternational13@gmail.com">
                <Button className="w-full">
                  Send Email
                </Button>
              </a>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors duration-300">
              <div className="bg-purple-600 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Form</h3>
              <p className="text-gray-600 mb-6">
                Fill out our detailed contact form for comprehensive support requests
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Immediate Support?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our support team is standing by to help you with any technical questions, 
            calibration needs, or service requirements. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919953154009">
              <Button size="lg" className="bg-blue text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Support Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                <Mail className="h-5 w-5 mr-2" />
                Send Support Request
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;