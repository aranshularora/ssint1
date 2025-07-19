import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Settings, Award } from 'lucide-react';
import Button from '../ui/Button';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData: { [key: string]: any } = {
    'cement-testing-equipment': {
      title: 'Cement Testing Equipment',
      description: 'Complete range of cement testing instruments for quality control and compliance testing.',
      image: '/tunnel-2316267_640.jpg',
      products: [
        {
          name: 'Compression Testing Machine (CTM)',
          capacity: 'up to 7000kN',
          description: 'High-precision testing machine for compressive strength testing of cement cubes and concrete specimens.',
          image: '/Amt Comp testing.jpg'
        },
        {
          name: 'Vibrating Machine',
          capacity: 'Variable frequency',
          description: 'Essential for proper compaction of cement and concrete specimens during testing.',
          image: '/umilkf2d.3fl.jpg'
        },
        {
          name: 'Vibrating Table',
          capacity: 'Heavy duty motor',
          description: 'Used for compacting concrete specimens and removing air bubbles from test samples.',
          image: '/umilkf2d.3fl.jpg'
        },
        {
          name: 'Cube Moulds',
          capacity: '100mm to 200mm',
          description: 'Precision-engineered moulds for preparing concrete test cubes.',
          image: '/pexels-johnnymckane-237950.jpg'
        },
        {
          name: 'Beam Moulds',
          capacity: '100mm to 150mm',
          description: 'High-quality moulds for casting concrete beams for flexural strength testing.',
          image: '/pexels-pixabay-7931.jpg'
        } 
 ]
    },
    'soil-testing-equipment': {
      title: 'Soil Testing Equipment',
      description: 'Comprehensive soil analysis and testing equipment for construction and geotechnical applications.',
      image: '/sand-1232366_640.jpg',
      products: [
        {
          name: 'Standard Proctor Test Apparatus',
          capacity: '1000ml & 2250ml',
          description: 'Determines the relationship between moisture content and dry density of soils.',
          image: '/sand-1232366_640.jpg'
        },
        {
          name: 'Modified Proctor Test Apparatus',
          capacity: '1000ml & 2250ml',
          description: 'Heavy compaction test for determining maximum dry density and optimum moisture content.',
          image: '/sand-1232366_640.jpg'
        },
        {
          name: 'CBR Test Apparatus',
          capacity: 'Standard loading',
          description: 'California Bearing Ratio test equipment for evaluating subgrade strength.',
          image: '/pexels-johnnymckane-237950.jpg'
        },
        {
          name: 'Liquid Limit Device',
          capacity: 'Casagrande method',
          description: 'Casagrande apparatus for determining liquid limit of fine-grained soils.',
          image: '/industry-319580_1280.jpg'
        },
        {
          name: 'Direct Shear Test Apparatus',
          capacity: 'Variable load',
          description: 'Measures shear strength parameters of soil samples.',
          image: '/pexels-life-of-pix-2469.jpg'
        }
      ]
    },
    'concrete-testing-equipment': {
      title: 'Concrete Testing Equipment',
      description: 'Advanced concrete testing solutions for quality control and compliance testing.',
      image: '/pexels-life-of-pix-2469.jpg',
      products: [
        {
          name: 'Concrete Slump Test Apparatus',
          capacity: 'Standard cone',
          description: 'Measures workability and consistency of fresh concrete.',
          image: '/pexels-life-of-pix-2469.jpg'
        },
        {
          name: 'Concrete Core Cutting Machine',
          capacity: '50mm to 200mm',
          description: 'Precision cutting of concrete cores for strength testing.',
          image: '/tunnel-2316267_640.jpg'
        },
        {
          name: 'Schmidt Rebound Hammer',
          capacity: 'Digital display',
          description: 'Non-destructive testing for concrete compressive strength estimation.',
          image: '/industry-319580_1280.jpg'
        },
        {
          name: 'Air Entrainment Meter',
          capacity: '0.2 cubic feet',
          description: 'Measures air content in fresh concrete by pressure method.',
          image: '/pexels-life-of-pix-2469.jpg'
        },
        {
          name: 'Flexural Testing Machine',
          capacity: 'up to 100kN',
          description: 'Tests flexural strength of concrete beams and prisms.',
          image: '/tunnel-2316267_640.jpg'
        }
      ]
    },
    'bitumen-testing-equipment': {
      title: 'Bitumen Testing Equipment',
      description: 'Specialized equipment for asphalt and bitumen quality testing and analysis.',
      image: '/road-166543_640.jpg',
      products: [
        {
          name: 'Penetration Test Apparatus',
          capacity: 'Digital timer',
          description: 'Measures consistency of bituminous materials by penetration test.',
          image: '/road-166543_640.jpg'
        },
        {
          name: 'Softening Point Apparatus',
          capacity: 'Ring & Ball method',
          description: 'Determines softening point of bitumen by Ring and Ball method.',
          image: '/road-166543_640.jpg'
        },
        {
          name: 'Ductility Testing Machine',
          capacity: 'Constant speed',
          description: 'Measures ductility of bituminous materials at specified temperature.',
          image: '/pexels-life-of-pix-2469.jpg'
        },
        {
          name: 'Flash Point Apparatus',
          capacity: 'Cleveland cup',
          description: 'Determines flash point and fire point of bituminous materials.',
          image: '/road-166543_640.jpg'
        },
        {
          name: 'Marshall Stability Test Apparatus',
          capacity: 'Complete setup',
          description: 'Complete setup for Marshall stability and flow test of bituminous mixes.',
          image: '/tunnel-2316267_640.jpg'
        }
      ]
    },
    'aggregate-testing-equipment': {
      title: 'Aggregate Testing Equipment',
      description: 'Testing equipment for aggregate materials used in construction and road building.',
      image: '/pexels-johnnymckane-237950.jpg',
      products: [
        {
          name: 'Sieve Analysis Set',
          capacity: '4.75mm to 75μm',
          description: 'Complete set of sieves for particle size distribution analysis.',
          image: '/pexels-johnnymckane-237950.jpg'
        },
        {
          name: 'Aggregate Impact Testing Machine',
          capacity: 'Standard hammer',
          description: 'Determines impact value of aggregates for road construction.',
          image: '/tunnel-2316267_640.jpg'
        },
        {
          name: 'Los Angeles Abrasion Testing Machine',
          capacity: 'Rotating drum',
          description: 'Measures resistance to abrasion and degradation of aggregates.',
          image: '/industry-319580_1280.jpg'
        },
        {
          name: 'Aggregate Crushing Value Apparatus',
          capacity: 'Cylindrical mould',
          description: 'Determines crushing strength of aggregates.',
          image: '/pexels-johnnymckane-237950.jpg'
        },
        {
          name: 'Specific Gravity Test Set',
          capacity: 'Complete set',
          description: 'Determines specific gravity and water absorption of aggregates.',
          image: '/sand-1232366_640.jpg'
        }
      ]
    },
    'heating-and-cooling-equipment': {
      title: 'Heating and Cooling Equipment',
      description: 'Temperature control equipment for various testing applications and sample preparation.',
      image: '/pexels-hilmiisilak-32121261.jpg',
      products: [
        {
          name: 'Hot Air Oven',
          capacity: '50L to 500L',
          description: 'Precision temperature control for drying and heating applications.',
          image: '/pexels-hilmiisilak-32121261.jpg'
        },
        {
          name: 'Water Bath',
          capacity: '5L to 50L',
          description: 'Constant temperature water bath for various testing procedures.',
          image: '/pexels-hilmiisilak-32121261.jpg'
        },
        {
          name: 'Muffle Furnace',
          capacity: 'up to 1200°C',
          description: 'High-temperature furnace for ash content and ignition loss tests.',
          image: '/pexels-hilmiisilak-32121261.jpg'
        },
        {
          name: 'Heating Mantle',
          capacity: '100ml to 5000ml',
          description: 'Controlled heating for round bottom flasks and beakers.',
          image: '/pexels-hilmiisilak-32121261.jpg'
        },
        {
          name: 'Refrigerated Incubator',
          capacity: '-10°C to +60°C',
          description: 'Precise temperature control for sample conditioning and storage.',
          image: '/pexels-hilmiisilak-32121261.jpg'
        }
      ]
    }
  };

  const currentCategory = categoryData[category || ''];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gray-900 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${currentCategory.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/products" 
              className="flex items-center text-blue-300 hover:text-white transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Products
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{currentCategory.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Machines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All products manufactured according to IS, BS, and ASTM standards with quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      <Settings className="h-4 w-4 mr-2" />
                      {product.capacity}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link to="/contact" className="w-full">
                      <Button className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        Technical Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All products in this category are manufactured and tested according to international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">Quality management system certified</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calibration</h3>
              <p className="text-gray-600 text-sm">Factory calibrated and certified</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">24/7 technical support available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;