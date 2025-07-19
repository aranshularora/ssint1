import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const CataloguePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const catalogueImages = [
    '/semi auto comp testing.jpg',
    '/Amt Comp testing.jpg',
    '/Direct shear.jpg',
    '/core drilling.jpg',
    '/marshall-tester.webp',
    '/umilkf2d.3fl.jpg',
    '/WhatsApp Image 2025-07-11 at 15.34.52_d992e664.jpg',
    '/tunnel-2316267_640.jpg',
    '/sand-1232366_640.jpg',
    '/pexels-life-of-pix-2469.jpg',
    '/road-166543_640.jpg',
    '/pexels-johnnymckane-237950.jpg',
    '/pexels-hilmiisilak-32121261.jpg',
    '/industry-319580_1280.jpg'
  ];

  const products = [
    {
      category: 'Cement Testing Equipment',
      items: [
        'Automatic Compression Testing Machine (CTM) - Up to 7000kN',
        'Semi-Automatic Compression Testing Machine - Up to 5000kN',
        'Digital Compression Testing Machine - Up to 3000kN',
        'Vibrating Machine - Variable frequency control',
        'Vibrating Table - Heavy duty motor',
        'Cube Moulds - 100mm, 150mm, 200mm sizes',
        'Beam Moulds - 100x100x500mm, 150x150x700mm',
        'Cylinder Moulds - 150x300mm, 100x200mm',
        'Mortar Mixer - 5L capacity',
        'Flow Table - Standard specifications'
      ]
    },
    {
      category: 'Soil Testing Equipment',
      items: [
        'Standard Proctor Test Apparatus - 1000ml & 2250ml',
        'Modified Proctor Test Apparatus - 1000ml & 2250ml',
        'CBR Test Apparatus - Complete setup',
        'Direct Shear Test Apparatus - Variable load capacity',
        'Triaxial Shear Test Apparatus - Advanced model',
        'Liquid Limit Device - Casagrande method',
        'Plastic Limit Set - Complete accessories',
        'Shrinkage Limit Test Set - Standard specifications',
        'Consolidation Test Apparatus - Oedometer type',
        'Permeability Test Apparatus - Constant & falling head'
      ]
    },
    {
      category: 'Concrete Testing Equipment',
      items: [
        'Concrete Slump Test Apparatus - Standard cone',
        'Concrete Core Cutting Machine - 50mm to 200mm diameter',
        'Schmidt Rebound Hammer - Digital display',
        'Air Entrainment Meter - 0.2 cubic feet capacity',
        'Flexural Testing Machine - Up to 100kN capacity',
        'Concrete Mixer - 40L, 60L, 100L capacity',
        'Needle Penetrometer - For setting time',
        'Concrete Test Hammer - Non-destructive testing',
        'Ultrasonic Pulse Velocity Tester - Digital model',
        'Concrete Carbonation Test Kit - Complete set'
      ]
    },
    {
      category: 'Bitumen Testing Equipment',
      items: [
        'Penetration Test Apparatus - Digital timer control',
        'Softening Point Apparatus - Ring & Ball method',
        'Ductility Testing Machine - Constant speed motor',
        'Flash Point Apparatus - Cleveland open cup',
        'Marshall Stability Test Apparatus - Complete setup',
        'Bitumen Extractor - Centrifuge type',
        'Viscosity Test Apparatus - Saybolt viscometer',
        'Specific Gravity Test Set - Pycnometer method',
        'Solubility Test Apparatus - Standard specifications',
        'Thin Film Oven Test - Rolling thin film oven'
      ]
    },
    {
      category: 'Aggregate Testing Equipment',
      items: [
        'Sieve Analysis Set - 4.75mm to 75μm complete set',
        'Aggregate Impact Testing Machine - Standard hammer',
        'Los Angeles Abrasion Testing Machine - Rotating drum',
        'Aggregate Crushing Value Apparatus - Cylindrical mould',
        'Ten Percent Fines Value Apparatus - Complete setup',
        'Specific Gravity Test Set - Complete accessories',
        'Water Absorption Test Set - Standard method',
        'Flakiness & Elongation Index Apparatus - Gauge set',
        'Soundness Test Apparatus - Sodium/Magnesium sulfate',
        'Aggregate Polishing Test Machine - British wheel'
      ]
    },
    {
      category: 'Heating and Cooling Equipment',
      items: [
        'Hot Air Oven - 50L to 500L capacity, up to 300°C',
        'Water Bath - 5L to 50L capacity, digital control',
        'Muffle Furnace - Up to 1200°C, programmable',
        'Heating Mantle - 100ml to 5000ml capacity',
        'Refrigerated Incubator - -10°C to +60°C range',
        'Drying Oven - Forced air circulation',
        'Cooling Bath - Refrigerated circulator',
        'Temperature Controller - Digital PID control',
        'Thermostatic Water Bath - Precision control',
        'Laboratory Freezer - -20°C to -80°C range'
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % catalogueImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + catalogueImages.length) % catalogueImages.length);
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
            <span className="text-gray-900">Product Catalogue</span>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalogue</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of material testing equipment manufactured to international standards
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Product Gallery</h2>
              
              {/* Main Image */}
              <div className="relative mb-6">
                <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={catalogueImages[currentImageIndex]} 
                    alt={`Product ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
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
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-7 gap-2">
                {catalogueImages.map((image, index) => (
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

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentImageIndex + 1} of {catalogueImages.length}
                </span>
              </div>
            </div>

            {/* Right Side - Product List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Product List</h2>
              
              <div className="space-y-8 max-h-96 overflow-y-auto pr-4">
                {products.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-lg font-semibold text-blue-600 mb-4 border-b border-gray-200 pb-2">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <span className="text-blue-500 mr-3 mt-2">•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">Need More Information?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Contact us for detailed specifications, pricing, or custom requirements.
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
    </div>
  );
};

export default CataloguePage;