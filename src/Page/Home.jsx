import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
// import  '../Component/Footer';

// Icons
import { 
  FaFacebook, FaInstagram, FaYoutube, FaCar, 
  FaTachometerAlt, FaGasPump, FaCogs, FaTimes,
  FaChevronLeft, FaChevronRight, FaPlay, FaPause
} from 'react-icons/fa';

const CarWebsite = () => {
  const [activeCar, setActiveCar] = useState(null);
  const [currentBrand, setCurrentBrand] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const brands = [
    'Audi', 'BMW', 'Mercedes', 'Tesla', 'Porsche', 'Ferrari',
    'Lamborghini', 'Ford', 'Toyota', 'Honda', 'Nissan', 'Hyundai'
  ];

  const cars = [
    {
      id: 1,
      name: 'Tesla Model S Plaid',
      brand: 'Tesla',
      price: '$129,999',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop',
      specs: { 
        power: '1020 HP', 
        acceleration: '1.99s 0-60', 
        topSpeed: '200 mph', 
        type: 'Electric',
        range: '396 miles',
        charging: '15 min to 200 miles'
      },
      description: 'The Tesla Model S Plaid represents the pinnacle of electric vehicle technology with unprecedented acceleration and range.',
      color: '#e82127'
    },
    {
      id: 2,
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      price: '$215,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop',
      specs: { 
        power: '640 HP', 
        acceleration: '2.6s 0-60', 
        topSpeed: '205 mph', 
        type: 'Gasoline',
        engine: '3.8L Twin-Turbo',
        transmission: '8-Speed PDK'
      },
      description: 'The ultimate expression of Porsche performance with legendary handling and breathtaking acceleration.',
      color: '#ffb800'
    },
    {
      id: 3,
      name: 'Audi R8 V10',
      brand: 'Audi',
      price: '$169,900',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
      specs: { 
        power: '602 HP', 
        acceleration: '3.2s 0-60', 
        topSpeed: '205 mph', 
        type: 'Gasoline',
        engine: '5.2L V10',
        drive: 'Quattro AWD'
      },
      description: 'Audi\'s flagship supercar combines everyday usability with race-track performance.',
      color: '#0076c0'
    },
    {
      id: 4,
      name: 'BMW M8 Competition',
      brand: 'BMW',
      price: '$146,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop',
      specs: { 
        power: '617 HP', 
        acceleration: '3.0s 0-60', 
        topSpeed: '190 mph', 
        type: 'Gasoline',
        engine: '4.4L V8',
        features: 'xDrive, M Sport'
      },
      description: 'The BMW M8 Competition offers luxury and performance in one exquisite package.',
      color: '#0066b1'
    },
    {
      id: 5,
      name: 'Mercedes-AMG GT',
      brand: 'Mercedes',
      price: '$163,000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4y5SlwGL853bRyUZKU8EV3KLxyFKJxnkPw&s',
      specs: { 
        power: '577 HP', 
        acceleration: '3.7s 0-60', 
        topSpeed: '198 mph', 
        type: 'Gasoline',
        engine: '4.0L V8',
        features: 'AMG Performance'
      },
      description: 'Mercedes-AMG\'s flagship sports car with a front-mid-engine layout for perfect weight distribution.',
      color: '#00a0e3'
    },
    {
      id: 6,
      name: 'Lamborghini Huracan',
      brand: 'Lamborghini',
      price: '$261,274',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop',
      specs: { 
        power: '631 HP', 
        acceleration: '2.9s 0-60', 
        topSpeed: '202 mph', 
        type: 'Gasoline',
        engine: '5.2L V10',
        drive: 'AWD System'
      },
      description: 'Lamborghini\'s entry-level supercar with a screaming V10 and aggressive Italian styling.',
      color: '#ffd700'
    }
  ];

  // Auto scroll brands
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentBrand((prev) => (prev + 1) % brands.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCarClick = (car) => {
    setActiveCar(car);
  };

  const nextCar = () => {
    if (activeCar) {
      const currentIndex = cars.findIndex(car => car.id === activeCar.id);
      const nextIndex = (currentIndex + 1) % cars.length;
      setActiveCar(cars[nextIndex]);
    }
  };

  const prevCar = () => {
    if (activeCar) {
      const currentIndex = cars.findIndex(car => car.id === activeCar.id);
      const prevIndex = (currentIndex - 1 + cars.length) % cars.length;
      setActiveCar(cars[prevIndex]);
    }
  };

  return (
    <div className="car-website">
      {/* Social Media Icons */}
      <div className="social-icons">
        <motion.a 
          whileHover={{ scale: 1.2, y: -5 }}
          href="#" 
          className="social-icon facebook"
        >
          <FaFacebook />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2, y: -5 }}
          href="#" 
          className="social-icon instagram"
        >
          <FaInstagram />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2, y: -5 }}
          href="#" 
          className="social-icon youtube"
        >
          <FaYoutube />
        </motion.a>
      </div>

      <div className="container">
        {/* Hero Section with Background Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-section"
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-title"
            >
              <span className="hero-highlight">ELITE</span> AUTOMOBILES
            </motion.h1>
            <motion.p 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-subtitle"
            >
              Where <span className="gradient-text">Performance</span> Meets Luxury
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="hero-stats"
            >
              <div className="stat">
                <h3>500+</h3>
                <p>Premium Cars</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Brands</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Test Drive</p>
              </div>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="cta-button"
            >
              Book Test Drive
            </motion.button>
          </div>
        </motion.div>

        {/* Small Car Cards Grid (First 3 cards) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="small-cars-grid"
        >
          <h2 className="section-title">Featured Collection</h2>
          <div className="small-cards-container">
            {cars.slice(0, 3).map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className="small-car-card"
                onClick={() => handleCarClick(car)}
                style={{ borderLeftColor: car.color }}
              >
                <div className="small-car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="small-car-badge">{car.brand}</div>
                </div>
                <div className="small-car-info">
                  <h4>{car.name}</h4>
                  <p className="small-car-price">{car.price}</p>
                  <div className="small-car-specs">
                    <span><FaTachometerAlt /> {car.specs.power}</span>
                    <span><FaCar /> {car.specs.acceleration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brands Scroll Bar (After first 3 cards) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="brands-section"
        >
          <div className="brands-header">
            <h2 className="section-title">Popular Brands</h2>
            <button 
              className="play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
          <div className="brands-scroll">
            <div className="bronds-container" style={{ transform: `translateX(-${currentBrand * 100}px)` }}>
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  className={`brand-item ${index === currentBrand ? 'active' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentBrand(index)}
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Car Cards Grid */}
        <div className="cars-grid">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
              }}
              className="car-card"
              onClick={() => handleCarClick(car)}
            >
              <div className="car-image-container">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="car-image"
                />
                <div className="car-price">{car.price}</div>
                <div className="car-badge">{car.brand}</div>
                <div className="car-overlay">
                  <span className="view-details">Click for Details</span>
                </div>
              </div>
              
              <div className="car-content">
                <h3 className="car-name">{car.name}</h3>
                
                <div className="car-specs">
                  <div className="spec-item">
                    <FaTachometerAlt className="spec-icon" />
                    <div>
                      <span className="spec-value">{car.specs.power}</span>
                      <span className="spec-label">Power</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <FaCar className="spec-icon" />
                    <div>
                      <span className="spec-value">{car.specs.acceleration}</span>
                      <span className="spec-label">0-60</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <FaGasPump className="spec-icon" />
                    <div>
                      <span className="spec-value">{car.specs.type}</span>
                      <span className="spec-label">Fuel Type</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <FaCogs className="spec-icon" />
                    <div>
                      <span className="spec-value">{car.specs.topSpeed}</span>
                      <span className="spec-label">Top Speed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Car Details Modal */}
      <AnimatePresence>
        {activeCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="car-modal-overlay"
            onClick={() => setActiveCar(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="car-modal"
              onClick={(e) => e.stopPropagation()}
              style={{ borderColor: activeCar.color }}
            >
              <button className="close-modal" onClick={() => setActiveCar(null)}>
                <FaTimes />
              </button>
              
              <div className="modal-navigation">
                <button className="nav-btn prev-btn" onClick={prevCar}>
                  <FaChevronLeft />
                </button>
                <button className="nav-btn next-btn" onClick={nextCar}>
                  <FaChevronRight />
                </button>
              </div>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={activeCar.image} alt={activeCar.name} />
                  <div className="modal-badge" style={{ background: activeCar.color }}>
                    {activeCar.brand}
                  </div>
                </div>
                
                <div className="modal-details">
                  <h2>{activeCar.name}</h2>
                  <h3 className="modal-price">{activeCar.price}</h3>
                  
                  <p className="modal-description">{activeCar.description}</p>
                  
                  <div className="modal-specs-grid">
                    {Object.entries(activeCar.specs).map(([key, value]) => (
                      <div key={key} className="modal-spec">
                        <span className="modal-spec-label">{key.toUpperCase()}</span>
                        <span className="modal-spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="modal-actions">
                    <button className="modal-btn primary-btn">
                      Book Test Drive
                    </button>
                    <button className="modal-btn secondary-btn">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Footer/> */}
    </div>
  );
};

export default CarWebsite;