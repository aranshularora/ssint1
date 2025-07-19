import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Globe, Award, Wrench, Building, Factory, Star, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

const HomePage: React.FC = () => {
  const hotSellingProducts = [
    {
      id: 'automatic-ctm',
      name: 'Automatic Compression Testing Machine',
      image: '/semi auto comp testing.jpg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      description: 'High-precision automatic CTM with digital controls and data logging capabilities.',
      capacity: 'Up to 7000kN'
    },
    {
      id: 'semi-automatic-ctm',
      name: 'Digital Compression Testing Machine',
      image: '/Amt Comp testing.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Reliable semi-automatic CTM perfect for medium-scale testing operations.',
      capacity: 'Up to 5000kN'
    },
    {
      id: 'marshall-stability',
      name: 'Marshall Stability Test Apparatus',
      image: '/marshall-tester.webp?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Complete Marshall stability testing solution for asphalt mix design.',
      capacity: 'Standard Load Range'
    },
    {
      id: 'bitumen-extractor',
      name: 'Direct Share Apparatus',
      image: '/Direct shear.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Direct Shear Apparatus for different type of soil Testing.',
      capacity: 'Multiple Soil Type'
    },
    {
      id: 'core-cutting-machine',
      name: 'Core Cutting & Grinding Machine',
      image: '/core drilling.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Precision core cutting and grinding for concrete sample preparation.',
      capacity: 'Various Core Sizes'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gray-900 text-white py-24 lg:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/pexels-pixabay-7931.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              S.S. International: India's Leading Manufacturer of 
              <span className="text-blue-400"> Material Testing Equipment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Delivering Precision, Quality, and Reliability Since 2003. 
              An ISO 9001:2015 Certified Company - Where Accuracy Meets Reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Recognition Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Government Recognized & Certified</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Officially recognized by the Government of India under the MSME (Micro, Small & Medium Enterprises) program, 
              ensuring quality, reliability, and compliance with national standards.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* MSME Certificate */}
            <div className="flex-shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-blue-100">
                <img 
                  src="/WhatsApp Image 2025-06-29 at 13.33.41_6ba4b301.jpg" 
                  alt="MSME Certification - Ministry of MSME, Government of India"
                  className="w-80 h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="flex-1 max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Certification Means for You</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Government Verified Quality</h4>
                    <p className="text-gray-600">Our manufacturing processes and quality standards are verified and approved by the Government of India.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trusted Business Partner</h4>
                    <p className="text-gray-600">MSME certification ensures we meet stringent business and operational standards for reliability.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Advantages</h4>
                    <p className="text-gray-600">Access to government schemes and priority in procurement, ensuring better pricing and service for our customers.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Financial Stability</h4>
                    <p className="text-gray-600">Government recognition provides assurance of our financial stability and business continuity.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="font-bold text-blue-900">Official Recognition</h4>
                </div>
                <p className="text-blue-800">
                  <strong>"Our Strength"</strong> - As recognized by the Ministry of MSME, Government of India. 
                  This certification validates our commitment to excellence and positions us as a trusted partner 
                  in India's manufacturing ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose S.S. International?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in material testing equipment with proven expertise and unwavering commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Over 15 Years of Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years in the industry and a team with deep technical experience, 
                we are a trusted partner in material testing.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We are an ISO 9001:2015 certified company, manufacturing to IS, BS, and ASTM standards. 
                Our in-house R&D and rigorous testing ensure product reliability.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We offer flexible payment terms, dedicated 24/7 support, 
                and comprehensive after-sales service and maintenance contracts.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">300+ Satisfied Customers</h3>
              <p className="text-gray-600 leading-relaxed">
                We have a proven track record with over 300 satisfied customers across the government, 
                public, and private sectors in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Selling Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Our Hot Selling Instruments</h2>
              <Star className="h-8 w-8 text-yellow-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and trusted testing equipment, chosen by industry professionals across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotSellingProducts.map((product, index) => (
              <Link 
                key={index}
                to={"/products"}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Hot Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {product.capacity}
                    </span>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leaders in the Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience, SSINT is a leading and widely recognized manufacturer 
                in the construction testing industry. We are a family company with a managerial spirit, 
                committed to innovation with a dedicated R&D division.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Quality Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                We manufacture equipment as per Indian (IS), British (BS), and American (ASTM) standards 
                to ensure superior quality, safety, and consistency. Our products are tested in various 
                conditions and are proven for performance.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our motto is to create a culture based on good business values and ethics. We offer 
                prompt support 24/7 and believe in complete customer satisfaction with a strong, 
                dedicated team and qualified engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of material testing equipment designed to meet international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cement Testing Equipment',
                image: '/tunnel-2316267_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Complete range of cement testing instruments including compression testing machines and cube moulds.'
              },
              {
                title: 'Soil Testing Equipment',
                image: '/sand-1232366_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Soil analysis and testing equipment for construction and geotechnical applications.'
              },
              {
                title: 'Concrete Testing Equipment',
                image: '/pexels-life-of-pix-2469.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Concrete testing solutions including vibrating tables and beam moulds.'
              },
              {
                title: 'Bitumen Testing Equipment',
                image: '/road-166543_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Specialized equipment for asphalt and bitumen quality testing.'
              },
              {
                title: 'Aggregate Testing Equipment',
                image: '/pexels-johnnymckane-237950.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Testing equipment for aggregate materials used in construction.'
              },
              {
                title: 'Heating and Cooling Equipment',
                image: '/pexels-hilmiisilak-32121261.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Temperature control equipment for various testing applications.'
              },
            ].map((category, index) => (
              <Link 
                key={index}
                to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We have over 300 satisfied customers across India and have catered to diverse needs 
              in the Government, Semi-Government, Private, and Public sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Building, title: 'Road Contractors' },
              { icon: Factory, title: 'Construction Companies' },
              { icon: Award, title: 'Government Authorities' },
              { icon: Users, title: 'Educational Entities' },
              { icon: CheckCircle, title: 'Quality Control Labs' },
              { icon: Wrench, title: 'Asphalt Manufacturers' },
            ].map((customer, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <customer.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900">{customer.title}</h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">
                Join Our Customer Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;