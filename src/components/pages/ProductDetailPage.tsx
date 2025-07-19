import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  Settings, 
  Award, 
  Download,
  Play,
  Star,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import Button from '../ui/Button';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('description');

  // Sample product data - in a real app, this would come from an API or database
  const productData: { [key: string]: any } = {
    'automatic-ctm': {
      name: 'Automatic Compression Testing Machine',
      category: 'Cement Testing Equipment',
      image: '/semi auto comp testing.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'Our Automatic Compression Testing Machine represents the pinnacle of precision engineering in material testing. Designed for high-volume testing environments, this machine delivers consistent, accurate results with minimal operator intervention. The advanced digital control system ensures precise load application and measurement, making it ideal for cement plants, construction companies, and quality control laboratories.',
      specifications: {
        'Model Number': 'SSINT-ACTM-7000',
        'Maximum Capacity': '7000 kN',
        'Loading Rate': '0.1 to 50 kN/s (Variable)',
        'Accuracy': '±1% of indicated load',
        'Standards Compliance': 'IS 516, BS 1881, ASTM C39',
        'Power Supply': '415V, 3 Phase, 50Hz',
        'Dimensions (L×W×H)': '1200×800×2200 mm',
        'Weight': '2500 kg',
        'Display': '7" Color Touch Screen',
        'Data Storage': '10,000+ test records',
        'Connectivity': 'USB, Ethernet, RS-232'
      },
      features: [
        'Fully automatic operation with programmable test sequences',
        'High-precision load cell with digital calibration',
        'Advanced safety features including emergency stop and overload protection',
        'Real-time data logging and analysis',
        'Automatic specimen height measurement',
        'Multi-language support interface',
        'Built-in printer for instant test reports',
        'Remote monitoring capabilities',
        'Self-diagnostic system for preventive maintenance',
        'Compliance with international testing standards'
      ],
      applications: [
        'Cement manufacturing plants for quality control',
        'Construction companies for concrete strength testing',
        'Government testing laboratories',
        'University research facilities',
        'Independent testing and calibration laboratories',
        'Precast concrete manufacturers',
        'Ready-mix concrete plants',
        'Infrastructure development projects'
      ],
      benefits: [
        'Increased testing throughput with automated operation',
        'Reduced operator fatigue and human error',
        'Consistent and repeatable test results',
        'Comprehensive data management and reporting',
        'Lower long-term operational costs',
        'Enhanced safety features for operator protection'
      ]
    },
    'semi-automatic-ctm': {
      name: 'Digital Compression Testing Machine',
      category: 'Cement Testing Equipment',
      image: '/Amt Comp testing.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'Digital Compression Testing Machine offers the perfect balance between manual control and automated precision. This versatile machine is designed for medium-scale testing operations where operator involvement is desired while maintaining high accuracy and reliability. Ideal for laboratories that require flexibility in testing procedures.',
      specifications: {
        'Model Number': 'SSINT-SACTM-5000',
        'Maximum Capacity': '5000 kN',
        'Loading Rate': '0.2 to 30 kN/s (Adjustable)',
        'Accuracy': '±1% of indicated load',
        'Standards Compliance': 'IS 516, BS 1881, ASTM C39',
        'Power Supply': '230V, Single Phase, 50Hz',
        'Dimensions (L×W×H)': '1000×700×2000 mm',
        'Weight': '1800 kg',
        'Display': '5" LCD Display',
        'Data Storage': '5,000+ test records',
        'Connectivity': 'USB, RS-232'
      },
      features: [
        'Semi-automatic operation with manual specimen placement',
        'Digital load measurement and display',
        'Programmable loading rates',
        'Data logging and basic analysis',
        'Safety interlocks and emergency stop',
        'User-friendly control panel',
        'Optional printer connectivity',
        'Robust mechanical construction',
        'Easy maintenance and calibration',
        'Cost-effective testing solution'
      ],
      applications: [
        'Medium-scale construction projects',
        'Educational institutions and training centers',
        'Quality control laboratories',
        'Research and development facilities',
        'Consulting engineering firms',
        'Material testing service providers',
        'Government testing facilities',
        'Concrete block manufacturers'
      ],
      benefits: [
        'Lower initial investment compared to fully automatic systems',
        'Operator control over testing procedures',
        'Reliable and accurate test results',
        'Easy to operate and maintain',
        'Suitable for various specimen sizes',
        'Flexible testing capabilities'
      ]
    }
  };

  const currentProduct = productData[productId || ''];

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'description', label: 'Description', icon: Settings },
    { id: 'specifications', label: 'Specifications', icon: Award },
    { id: 'features', label: 'Key Features', icon: CheckCircle },
    { id: 'applications', label: 'Applications', icon: Users }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{currentProduct.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/products" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {currentProduct.gallery.map((image: string, index: number) => (
                  <div key={index} className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity duration-200">
                    <img 
                      src={image} 
                      alt={`${currentProduct.name} view ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {currentProduct.category}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.9/5 rating)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentProduct.name}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProduct.benefits.slice(0, 4).map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button size="lg" className="w-full">
                    <Zap className="h-5 w-5 mr-2" />
                    Get Instant Quote
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">CE Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Factory Calibrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Description</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentProduct.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose This Product?</h3>
                      <ul className="space-y-3">
                        {currentProduct.benefits.map((benefit: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Video</h3>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">Product demonstration video coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                          Parameter
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(currentProduct.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                            {key}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 text-gray-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentProduct.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications & Industries</h2>
                <p className="text-lg text-gray-600 mb-8">
                  This equipment is ideal for various industries and testing applications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProduct.applications.map((application: string, index: number) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors duration-200">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">{application}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our technical experts to discuss your requirements and get a customized quote for this product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                <Zap className="h-5 w-5 mr-2" />
                Get Instant Quote
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                <Settings className="h-5 w-5 mr-2" />
                Technical Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;