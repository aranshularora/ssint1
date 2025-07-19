import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Settings, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categoryData: { [key: string]: any } = {
    'cement-testing-equipment': {
      title: 'Cement Testing Equipment',
      description: 'Complete range of cement testing instruments for quality control and compliance testing.',
      images: [
        '/automatic comp.png',
        '/digital comp.png',
        '/tunnel-2316267_640.jpg',
        '/umilkf2d.3fl.jpg',
        '/pexels-pixabay-7931.jpg'
      ],
      products: [
        'Automatic Compression Testing Machine (CTM) - Up to 7000kN capacity',
        'Semi-Automatic Compression Testing Machine - Up to 5000kN capacity',
        'Digital Compression Testing Machine - Up to 3000kN capacity',
        'Vibrating Machine - Variable frequency control for proper compaction',
        'Vibrating Table - Heavy duty motor for concrete specimen preparation',
        'Cube Moulds - 100mm, 150mm, 200mm sizes available',
        'Beam Moulds - 100x100x500mm, 150x150x700mm specifications',
        'Cylinder Moulds - 150x300mm, 100x200mm standard sizes',
        'Mortar Mixer - 5L capacity with variable speed control',
        'Flow Table - Standard specifications for consistency testing',
        'Cement Fineness Apparatus - Blaine air permeability method',
        'Le Chatelier Apparatus - For soundness testing of cement',
        'Vicat Apparatus - Initial and final setting time determination',
        'Autoclave - For expansion testing of cement',
        'Ball Bearing Apparatus - For ball bearing test on cement'
      ]
    },
    'soil-testing-equipment': {
      title: 'Soil Testing Equipment',
      description: 'Comprehensive soil analysis and testing equipment for construction and geotechnical applications.',
      images: [
        '/Direct shear.jpg',
        '/sand-1232366_640.jpg',
        '/pexels-johnnymckane-237950.jpg',
        '/industry-319580_1280.jpg',
        '/pexels-life-of-pix-2469.jpg'
      ],
      products: [
        'Standard Proctor Test Apparatus - 1000ml & 2250ml mould capacity',
        'Modified Proctor Test Apparatus - 1000ml & 2250ml heavy compaction',
        'CBR Test Apparatus - California Bearing Ratio complete setup',
        'Direct Shear Test Apparatus - Variable load capacity with proving ring',
        'Triaxial Shear Test Apparatus - Advanced model with pressure control',
        'Liquid Limit Device - Casagrande method with grooving tool',
        'Plastic Limit Set - Complete accessories for plasticity index',
        'Shrinkage Limit Test Set - Standard specifications with mercury',
        'Consolidation Test Apparatus - Oedometer type with loading frame',
        'Permeability Test Apparatus - Constant & falling head methods',
        'Field Density Test Kit - Sand replacement method equipment',
        'Core Cutter Method Apparatus - For field density determination',
        'Hydrometer Analysis Set - For particle size distribution',
        'Specific Gravity Test Set - Pycnometer method for soil solids',
        'Unconfined Compression Test Apparatus - For cohesive soil strength'
      ]
    },
    'concrete-testing-equipment': {
      title: 'Concrete Testing Equipment',
      description: 'Advanced concrete testing solutions for quality control and compliance testing.',
      images: [
        '/core drilling.jpg',
        '/pexels-life-of-pix-2469.jpg',
        '/tunnel-2316267_640.jpg',
        '/industry-319580_1280.jpg',
        '/pexels-pixabay-7931.jpg'
      ],
      products: [
        'Concrete Slump Test Apparatus - Standard cone with base plate',
        'Concrete Core Cutting Machine - 50mm to 200mm diameter capacity',
        'Schmidt Rebound Hammer - Digital display with calibration anvil',
        'Air Entrainment Meter - 0.2 cubic feet capacity pressure method',
        'Flexural Testing Machine - Up to 100kN capacity for beam testing',
        'Concrete Mixer - 40L, 60L, 100L capacity with tilting mechanism',
        'Needle Penetrometer - For setting time determination',
        'Concrete Test Hammer - Non-destructive testing equipment',
        'Ultrasonic Pulse Velocity Tester - Digital model with transducers',
        'Concrete Carbonation Test Kit - Complete set with indicators',
        'Compressive Strength Test Cubes - 100mm, 150mm, 200mm sizes',
        'Concrete Beam Moulds - For flexural strength testing',
        'Concrete Cylinder Moulds - Standard sizes with base plates',
        'Concrete Density Meter - For fresh concrete density measurement',
        'Concrete Temperature Meter - Digital thermometer for concrete'
      ]
    },
    'bitumen-testing-equipment': {
      title: 'Bitumen Testing Equipment',
      description: 'Specialized equipment for asphalt and bitumen quality testing and analysis.',
      images: [
        '/marshall-tester.webp',
        '/road-166543_640.jpg',
        '/pexels-life-of-pix-2469.jpg',
        '/tunnel-2316267_640.jpg',
        '/industry-319580_1280.jpg'
      ],
      products: [
        'Penetration Test Apparatus - Digital timer control with needle assembly',
        'Softening Point Apparatus - Ring & Ball method with heating bath',
        'Ductility Testing Machine - Constant speed motor with water bath',
        'Flash Point Apparatus - Cleveland open cup method',
        'Marshall Stability Test Apparatus - Complete setup with loading frame',
        'Bitumen Extractor - Centrifuge type for aggregate extraction',
        'Viscosity Test Apparatus - Saybolt viscometer with heating system',
        'Specific Gravity Test Set - Pycnometer method for bitumen',
        'Solubility Test Apparatus - Standard specifications with solvents',
        'Thin Film Oven Test - Rolling thin film oven for aging',
        'Spot Test Apparatus - For bitumen quality assessment',
        'Float Test Apparatus - For consistency measurement',
        'Fraass Breaking Point Apparatus - For low temperature properties',
        'Elastic Recovery Test Apparatus - For modified bitumen testing',
        'Brookfield Viscometer - For viscosity measurement at various temperatures'
      ]
    },
    'aggregate-testing-equipment': {
      title: 'Aggregate Testing Equipment',
      description: 'Testing equipment for aggregate materials used in construction and road building.',
      images: [
        '/pexels-johnnymckane-237950.jpg',
        '/tunnel-2316267_640.jpg',
        '/industry-319580_1280.jpg',
        '/sand-1232366_640.jpg',
        '/pexels-life-of-pix-2469.jpg'
      ],
      products: [
        'Sieve Analysis Set - 4.75mm to 75μm complete set with shaker',
        'Aggregate Impact Testing Machine - Standard hammer with anvil',
        'Los Angeles Abrasion Testing Machine - Rotating drum with steel balls',
        'Aggregate Crushing Value Apparatus - Cylindrical mould with plunger',
        'Ten Percent Fines Value Apparatus - Complete setup with sieves',
        'Specific Gravity Test Set - Complete accessories for coarse aggregates',
        'Water Absorption Test Set - Standard method for aggregate porosity',
        'Flakiness & Elongation Index Apparatus - Gauge set for shape determination',
        'Soundness Test Apparatus - Sodium/Magnesium sulfate method',
        'Aggregate Polishing Test Machine - British wheel method',
        'Sand Equivalent Test Apparatus - For clay content determination',
        'Aggregate Abrasion Value Test - Dorry abrasion testing machine',
        'Stripping Value Test Apparatus - For adhesion of bitumen to aggregates',
        'Angularity Number Test Set - For fine aggregate angularity',
        'Bulk Density Test Apparatus - For loose and compacted density'
      ]
    },
    'heating-and-cooling-equipment': {
      title: 'Heating and Cooling Equipment',
      description: 'Temperature control equipment for various testing applications and sample preparation.',
      images: [
        '/pexels-hilmiisilak-32121261.jpg',
        '/industry-319580_1280.jpg',
        '/tunnel-2316267_640.jpg',
        '/pexels-life-of-pix-2469.jpg'
      ],
      products: [
        'Hot Air Oven - 50L to 500L capacity, up to 300°C temperature range',
        'Water Bath - 5L to 50L capacity with digital temperature control',
        'Muffle Furnace - Up to 1200°C, programmable temperature controller',
        'Heating Mantle - 100ml to 5000ml capacity with variable heat control',
        'Refrigerated Incubator - -10°C to +60°C range with humidity control',
        'Drying Oven - Forced air circulation with uniform temperature',
        'Cooling Bath - Refrigerated circulator with temperature stability',
        'Temperature Controller - Digital PID control with alarm functions',
        'Thermostatic Water Bath - Precision control ±0.1°C accuracy',
        'Laboratory Freezer - -20°C to -80°C range for sample storage',
        'Heating Plate - Digital control with ceramic top surface',
        'Oil Bath - High temperature heating with thermal oil',
        'Paraffin Wax Bath - For embedding and sectioning applications',
        'Constant Temperature Room - Walk-in chambers for large specimens',
        'Environmental Chamber - Combined temperature and humidity control'
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentCategory.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentCategory.images.length) % currentCategory.images.length);
  };

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
            <span className="text-gray-900">{currentCategory.title}</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-white border-b">
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
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentCategory.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Photo Carousel */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Product Images</h2>
              
              {/* Main Image */}
              <div className="relative mb-6">
                <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={currentCategory.images[currentImageIndex]} 
                    alt={`${currentCategory.title} ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
                {currentCategory.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {currentCategory.images.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {currentCategory.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image Counter */}
              {currentCategory.images.length > 1 && (
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    {currentImageIndex + 1} of {currentCategory.images.length}
                  </span>
                </div>
              )}
            </div>

            {/* Right Side - Product List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Products</h2>
              
              <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
                {currentCategory.products.map((product: string, index: number) => (
                  <div key={index} className="flex items-start py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-blue-500 mr-3 mt-2 text-lg">•</span>
                    <span className="text-gray-700 leading-relaxed">{product}</span>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">Need More Information?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Contact us for detailed specifications, pricing, or custom requirements for any of these products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button size="sm" className="w-full">
                      Get Quote
                    </Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Technical Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-white">
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