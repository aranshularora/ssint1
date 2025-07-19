import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We heartily welcome all our prestigious customers to visit our facility. 
              We appreciate your business and trust in our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Reach out to us for inquiries, quotations, or technical support. 
                  Our team is ready to assist you with all your material testing equipment needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      279 SriNagar, Street No-4, Rani Bagh<br />
                      Delhi-110034 (INDIA)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919953154009" className="hover:text-green-600 transition-colors duration-200">
                        +91 9953154009
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:ssinternational13@gmail.com" className="hover:text-purple-600 transition-colors duration-200">
                        ssinternational13@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-green-600 font-medium">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome you to visit our modern manufacturing facility in Delhi. 
              Schedule an appointment to see our equipment and discuss your requirements in person.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5435555656794!2d77.1417!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85ca4e53c5%3A0x7dd7d6ab1db7c5e7!2sRani%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635759284943!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S.S. International Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need a quote, technical specifications, or want to discuss a custom solution, 
            our team is here to help. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919953154009">
              <Button size="lg" className="bg-blue text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="mailto:ssinternational13@gmail.com">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;