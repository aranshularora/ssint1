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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of material testing equipment designed to meet international standards
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We manufacture equipment as per Indian (IS), British (BS), and American (ASTM) standards 
              to ensure superior quality, safety, and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/products/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:bg-blue-700 transition-colors duration-300">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Products:</h4>
                    <ul className="space-y-1">
                      {category.products.slice(0, 3).map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {product}
                        </li>
                      ))}
                      {category.products.length > 3 && (
                        <li className="text-blue-600 font-medium text-sm">
                          +{category.products.length - 3} more products
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                    View All Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogue">
              <Button size="md">
                <BookOpen className="mr-2 h-5 w-5" />
                View Complete Product Catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">International Standards Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products are manufactured according to recognized international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-600 text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                IS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Indian Standards</h3>
              <p className="text-gray-600">
                Bureau of Indian Standards (BIS) specifications ensuring quality and safety for Indian market requirements.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                BS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">British Standards</h3>
              <p className="text-gray-600">
                British Standards Institution (BSI) specifications providing internationally recognized quality benchmarks.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-600 text-white text-lg font-bold rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                ASTM
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">American Standards</h3>
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