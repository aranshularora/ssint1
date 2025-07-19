import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, TestTube, Building, Flame, Mountain, Thermometer, BookOpen } from 'lucide-react';
import Button from '../ui/Button';

const ProductsPage: React.FC = () => {
  const categories = [
    {
      title: 'Cement Testing Equipment',
      slug: 'cement-testing-equipment',
      icon: Building,
      image: '/tunnel-2316267_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete range of cement testing instruments including CTM, vibrating machines, and moulds.',
      products: ['Compression Testing Machine (CTM)', 'Vibrating Machine', 'Vibrating Table', 'Cube Moulds', 'Beam Moulds']
    },
    {
      title: 'Soil Testing Equipment',
      slug: 'soil-testing-equipment',
      icon: TestTube,
      image: '/sand-1232366_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive soil analysis and testing equipment for construction and geotechnical applications.',
      products: ['Soil Compaction Test', 'Liquid Limit Device', 'Plastic Limit Set', 'Proctor Test Equipment', 'CBR Test Set']
    },
    {
      title: 'Concrete Testing Equipment',
      slug: 'concrete-testing-equipment',
      icon: Wrench,
      image: '/pexels-life-of-pix-2469.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Advanced concrete testing solutions for quality control and compliance testing.',
      products: ['Concrete Cube Testing', 'Slump Test Apparatus', 'Air Entrainment Meter', 'Schmidt Hammer', 'Core Cutting Machine']
    },
    {
      title: 'Bitumen Testing Equipment',
      slug: 'bitumen-testing-equipment',
      icon: Flame,
      image: '/road-166543_640.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Specialized equipment for asphalt and bitumen quality testing and analysis.',
      products: ['Penetration Test', 'Softening Point Test', 'Ductility Test', 'Flash Point Test', 'Viscosity Test']
    },
    {
      title: 'Aggregate Testing Equipment',
      slug: 'aggregate-testing-equipment',
      icon: Mountain,
      image: '/pexels-johnnymckane-237950.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Testing equipment for aggregate materials used in construction and road building.',
      products: ['Sieve Analysis', 'Impact Testing Machine', 'Abrasion Testing Machine', 'Specific Gravity Test', 'Water Absorption Test']
    },
    {
      title: 'Heating and Cooling Equipment',
      slug: 'heating-and-cooling-equipment',
      icon: Thermometer,
      image: '/pexels-hilmiisilak-32121261.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Temperature control equipment for various testing applications and sample preparation.',
      products: ['Hot Air Oven', 'Water Bath', 'Heating Mantle', 'Drying Oven', 'Cooling Bath']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of material testing equipment designed to meet international standards
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manufacture equipment as per Indian (IS), British (BS), and American (ASTM) standards 
              to ensure superior quality, safety, and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/products/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 p-3 rounded-full mr-4 group-hover:bg-blue-700 transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Products:</h4>
                    <ul className="space-y-2">
                      {category.products.slice(0, 3).map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {product}
                        </li>
                      ))}
                      {category.products.length > 3 && (
                        <li className="text-blue-600 font-medium">
                          +{category.products.length - 3} more products
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                    View All Products
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/catalogue">
              <Button size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                View Complete Product Catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">International Standards Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products are manufactured according to recognized international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                IS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Indian Standards</h3>
              <p className="text-gray-600">
                Bureau of Indian Standards (BIS) specifications ensuring quality and safety for Indian market requirements.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                BS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">British Standards</h3>
              <p className="text-gray-600">
                British Standards Institution (BSI) specifications providing internationally recognized quality benchmarks.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-600 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                ASTM
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">American Standards</h3>
              <p className="text-gray-600">
                American Society for Testing and Materials standards ensuring global compatibility and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;