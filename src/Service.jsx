import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaCar, FaGasPump, FaTachometerAlt, FaCogs, FaRoad, FaCalendarAlt } from 'react-icons/fa';
import './Cars.css';

const CarSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSwiped, setIsSwiped] = useState(false);

  const carData = {
    'Tesla': [
      {
        id: 1,
        name: 'Model S Plaid',
        price: '$129,999',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop',
        shortDesc: 'Fastest production car',
        longDesc: 'The Tesla Model S Plaid is the fastest production car ever made with 1,020 horsepower and 396 miles range.',
        specs: ['1020 HP', '396 miles', '1.99s 0-60'],
        color: '#e82127'
      },
      {
        id: 2,
        name: 'Model X',
        price: '$99,990',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1752499273852/front-left-side-47.jpg',
        shortDesc: 'SUV with Falcon Doors',
        longDesc: 'Tesla Model X combines SUV practicality with supercar performance and unique Falcon Wing doors.',
        specs: ['670 HP', '348 miles', '2.5s 0-60'],
        color: '#e82127'
      },
      {
        id: 3,
        name: 'Model 3',
        price: '$46,990',
        image: 'https://media.architecturaldigest.com/photos/560c4205eb21ffb53156c362/4:3/w_3999,h_3000,c_limit/tesla-unveils-model-x-suv-01.jpg',
        shortDesc: 'Best-selling electric',
        longDesc: 'Model 3 offers the perfect balance of range, performance, and value. Best-selling electric car worldwide.',
        specs: ['450 HP', '358 miles', '3.1s 0-60'],
        color: '#e82127'
      }
    ],
    'Porsche': [
      {
        id: 4,
        name: '911 Turbo S',
        price: '$215,000',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop',
        shortDesc: 'Iconic sports car',
        longDesc: 'Porsche 911 Turbo S represents the pinnacle of sports car engineering with 640 horsepower.',
        specs: ['640 HP', '205 mph', '2.6s 0-60'],
        color: '#ffb800'
      },
      {
        id: 5,
        name: 'Taycan Turbo',
        price: '$185,000',
        image: 'https://models.porsche.com/_next/image?url=%2Fmodel-start%2Fimages%2Ftaycan%2Fextcam01.webp&w=3840&q=100',
        shortDesc: 'Electric sports sedan',
        longDesc: 'Porsche Taycan Turbo S combines electric innovation with Porsche performance DNA.',
        specs: ['750 HP', '201 miles', '2.6s 0-60'],
        color: '#ffb800'
      },
      {
        id: 6,
        name: 'Cayenne Turbo',
        price: '$135,000',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QmhFIU_Fz5uAXdGGdZpG-l1J5QwB1ev5VA&s',
        shortDesc: 'Performance SUV',
        longDesc: 'Cayenne Turbo GT is the ultimate performance SUV with racetrack capability.',
        specs: ['631 HP', '186 mph', '3.1s 0-60'],
        color: '#ffb800'
      }
    ],
    'BMW': [
      {
        id: 7,
        name: 'M8 Competition',
        price: '$146,000',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop',
        shortDesc: 'Luxury performance',
        longDesc: 'BMW M8 Competition combines luxury grand touring with racetrack performance.',
        specs: ['617 HP', '190 mph', '3.0s 0-60'],
        color: '#0066b1'
      },
      {
        id: 8,
        name: 'i8 Roadster',
        price: '$147,500',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
        shortDesc: 'Hybrid sports car',
        longDesc: 'BMW i8 combines futuristic design with hybrid efficiency and butterfly doors.',
        specs: ['369 HP', '155 mph', '4.4s 0-60'],
        color: '#0066b1'
      },
      {
        id: 9,
        name: 'X7 M60i',
        price: '$105,000',
        image: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_250,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/af2cd34f6926961b5f821fcaac70a4dd/image001_2_.png',
        shortDesc: 'Luxury SUV',
        longDesc: 'BMW X7 M60i combines the space of a luxury SUV with M Performance power.',
        specs: ['523 HP', '155 mph', '4.5s 0-60'],
        color: '#0066b1'
      }
    ],
    'Mercedes': [
      {
        id: 10,
        name: 'AMG GT',
        price: '$163,000',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgqoYcrvzD8BBgycdxwk5z5aUcgTRILo6sA&s',
        shortDesc: '4-Door Coupe',
        longDesc: 'Mercedes-AMG GT combines sports car performance with executive sedan luxury.',
        specs: ['630 HP', '196 mph', '3.1s 0-60'],
        color: '#00a0e3'
      },
      {
        id: 11,
        name: 'S-Class',
        price: '$111,100',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
        shortDesc: 'Ultimate luxury',
        longDesc: 'Mercedes-Maybach S-Class represents the pinnacle of automotive luxury.',
        specs: ['621 HP', '155 mph', '4.8s 0-60'],
        color: '#00a0e3'
      },
      {
        id: 12,
        name: 'G-Wagon',
        price: '$139,900',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
        shortDesc: 'Iconic luxury SUV',
        longDesc: 'Mercedes-AMG G63 combines legendary off-road capability with AMG performance.',
        specs: ['577 HP', '149 mph', '4.4s 0-60'],
        color: '#00a0e3'
      }
    ]
  };

  const brands = Object.keys(carData);
  const filteredBrands = brands.filter(brand =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedCar(null);
    setIsSwiped(false);
  };

  const handleCarClick = (car) => {
    if (selectedCar?.id === car.id) {
      setIsSwiped(!isSwiped);
    } else {
      setSelectedCar(car);
      setIsSwiped(true);
    }
  };

  const handleBack = () => {
    if (selectedCar) {
      setSelectedCar(null);
      setIsSwiped(false);
    } else if (selectedBrand) {
      setSelectedBrand(null);
    }
  };

  return (
    <div className="car-search">
      {/* Header */}
      <div className="search-header">
        <div className="header-content">
          {selectedBrand && (
            <button className="back-btn" onClick={handleBack}>
              <FaArrowLeft /> Back to Brands
            </button>
          )}
          <h1 className="page-title">
            {selectedBrand ? `${selectedBrand} Cars` : 'Find Your Car'}
          </h1>
        </div>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm('')}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {!selectedBrand ? (
          /* Brand Selection */
          <div className="brands-container">
            <h2 className="section-title">Select a Brand</h2>
            <div className="brands-grid">
              <AnimatePresence>
                {filteredBrands.map((brand, index) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="brand-card"
                    onClick={() => handleBrandClick(brand)}
                  >
                    <div className="brand-icon">
                      <FaCar />
                    </div>
                    <h3>{brand}</h3>
                    <p>{carData[brand].length} models available</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Car Cards for Selected Brand */
          <div className="cars-container">
            <h2 className="brand-header">{selectedBrand} Models</h2>
            <div className="cars-grid">
              {carData[selectedBrand].map((car, index) => (
                <div
                  key={car.id}
                  className={`car-card ${selectedCar?.id === car.id && isSwiped ? 'swiped' : ''}`}
                  onClick={() => handleCarClick(car)}
                >
                  {/* Front of Card */}
                  <motion.div
                    className="card-front"
                    animate={{ x: selectedCar?.id === car.id && isSwiped ? '-100%' : '0' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <div className="car-image">
                      <img src={car.image} alt={car.name} />
                      <div className="price-tag">{car.price}</div>
                      <div className="brand-tag" style={{ backgroundColor: car.color }}>
                        {selectedBrand}
                      </div>
                    </div>
                    
                    <div className="car-info">
                      <h3>{car.name}</h3>
                      <p className="car-desc">{car.shortDesc}</p>
                      
                      <div className="specs">
                        {car.specs.map((spec, i) => (
                          <span key={i} className="spec-badge">{spec}</span>
                        ))}
                      </div>
                      
                      <div className="click-hint">
                        Click for details →
                      </div>
                    </div>
                  </motion.div>

                  {/* Back of Card (Description) */}
                  <div className="card-back" style={{ backgroundColor: car.color + '20' }}>
                    <div className="back-header" style={{ backgroundColor: car.color }}>
                      <h3>{car.name}</h3>
                      <span className="back-price">{car.price}</span>
                    </div>
                    
                    <div className="back-content">
                      <p className="description">{car.longDesc}</p>
                      
                      <div className="detailed-specs">
                        <div className="spec-item">
                          <FaTachometerAlt />
                          <span>Power: {car.specs[0]}</span>
                        </div>
                        <div className="spec-item">
                          <FaGasPump />
                          <span>Acceleration: {car.specs[2]}</span>
                        </div>
                        <div className="spec-item">
                          <FaRoad />
                          <span>Top Speed: {car.specs[1]}</span>
                        </div>
                      </div>
                      
                      <button 
                        className="close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSwiped(false);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarSearch;