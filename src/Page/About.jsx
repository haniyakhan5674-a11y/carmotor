import React, { useState} from 'react';
import './About.css';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('history');
  
  // Team members data
  const teamMembers = [
    { id: 1, name: "Sarah Johnson", role: "CEO & Founder", experience: "15+ years", imgColor: "blue" },
    { id: 2, name: "Michael Chen", role: "Head of Sales", experience: "12+ years", imgColor: "green" },
    { id: 3, name: "David Rodriguez", role: "Lead Technician", experience: "18+ years", imgColor: "red" },
    // { id: 4, name: "Emma Williams", role: "Customer Experience", experience: "10+ years", imgColor: "purple" },
  ];

  // Company milestones
  const milestones = [
    // { year: "2005", title: "Company Founded", description: "Started with a single dealership in downtown" },
    // { year: "2010", title: "Expansion", description: "Opened 5 new locations across the state" },
    { year: "2015", title: "Online Platform", description: "Launched our digital car buying experience" },
    { year: "2020", title: "Electric Fleet", description: "Introduced our first line of electric vehicles" },
    { year: "2023", title: "Award Winner", description: "Recognized as 'Best Car Retailer' by Auto Magazine" },
  ];

  // Values data
  const values = [
    { icon: "🔍", title: "Transparency", description: "No hidden fees, clear pricing, and honest vehicle history reports." },
    { icon: "🤝", title: "Integrity", description: "We treat every customer like family and stand behind every vehicle we sell." },
    { icon: "⚡", title: "Innovation", description: "Constantly improving our services with the latest technology and electric vehicles." },
    { icon: "🌟", title: "Excellence", description: "From vehicle selection to after-sales service, we strive for perfection." },
  ];

  return (
    <div className="about-page">
      {/* Hero Section - UPDATED */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-container">
          <div className="hero-text-content">
            <h1 className="hero-main-title">Driving Excellence <span className="highlight">Since 2005</span></h1>
            <p className="hero-subtitle">
              We're more than just a car dealership. We're your trusted partner in finding the perfect vehicle for your lifestyle, with over 50,000 satisfied customers and counting.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">18+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Cars Sold</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#our-story" className="primary-button">Explore Our Story</a>
              <a href="/inventory" className="secondary-button">View Inventory</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-car-image">
              <div className="car-silhouette"></div>
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation for About Sections */}
      <nav className="about-navigation">
        <button 
          className={`nav-button ${activeSection === 'history' ? 'active-nav' : ''}`}
          onClick={() => setActiveSection('history')}
        >
          <span className="nav-icon">🏢</span>
          <span className="nav-text">Our History</span>
        </button>
        <button 
          className={`nav-button ${activeSection === 'mission' ? 'active-nav' : ''}`}
          onClick={() => setActiveSection('mission')}
        >
          <span className="nav-icon">🎯</span>
          <span className="nav-text">Mission & Values</span>
        </button>
        <button 
          className={`nav-button ${activeSection === 'team' ? 'active-nav' : ''}`}
          onClick={() => setActiveSection('team')}
        >
          <span className="nav-icon">👥</span>
          <span className="nav-text">Our Team</span>
        </button>
        <button 
          className={`nav-button ${activeSection === 'milestones' ? 'active-nav' : ''}`}
          onClick={() => setActiveSection('milestones')}
        >
          <span className="nav-icon">📅</span>
          <span className="nav-text">Milestones</span>
        </button>
      </nav>

      {/* Content Sections */}
      <div className="about-content-container">
        {/* History Section */}
        {activeSection === 'history' && (
          <section id="our-story" className="content-section active-section">
            <h2 className="section-main-title">Our <span className="text-highlight">Journey</span> from Humble Beginnings</h2>
            <div className="history-grid">
              <div className="history-story">
                <p className="story-paragraph">
                  Founded in 2005 by automotive enthusiast Sarah Johnson, <strong>AutoElite Motors</strong> began as a small family-run dealership with a simple mission: to make car buying transparent, stress-free, and enjoyable.
                </p>
                <p className="story-paragraph">
                  What started as a single showroom with just 10 pre-owned vehicles has grown into a premier automotive retailer with multiple locations across the state. Despite our growth, we've never lost sight of our core values of honesty, integrity, and exceptional customer service.
                </p>
                {/* <p className="story-paragraph">
                  Today, we offer a curated selection of both new and pre-owned vehicles, with a focus on quality, reliability, and customer satisfaction. Our team of experts is passionate about helping you find the perfect vehicle to match your needs and budget.
                </p> */}
              </div>
              <div className="history-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">🏆</div>
                  <h3 className="highlight-title">Award-Winning Service</h3>
                  <p className="highlight-description">Recognized as "Best Car Dealer" 3 years in a row by Auto Excellence Magazine</p>
                </div>
                {/* <div className="highlight-card"> */}
                  {/* <div className="highlight-icon">🌱</div>
                  <h3 className="highlight-title">Eco-Friendly Initiative</h3>
                  <p className="highlight-description">Committed to offering 30% electric/hybrid vehicles by 2025</p> */}
                {/* </div> */}
              </div>
            </div>
          </section>
        )}

        {/* Mission & Values Section */}
        {activeSection === 'mission' && (
          <section className="content-section active-section">
            <h2 className="section-main-title">Our Mission & <span className="text-highlight">Core Values</span></h2>
            {/* <div className="mission-container"> */}
              {/* <div className="mission-card"> */}
                {/* <h3 className="mission-title">Our Mission Statement</h3>
                <p className="mission-statement">
                  To revolutionize the car buying experience by providing transparent pricing, exceptional customer service, and quality vehicles that empower our customers to move forward with confidence and peace of mind.
                </p> */}
                {/* <div className="mission-vision">
                  <h4>Our Vision</h4>
                  <p>To become the most trusted automotive retailer in the region, known for innovation, sustainability, and customer-first approach.</p>
                </div> */}
              {/* </div> */}
              
              <div className="values-container">
                <h3 className="values-title">Our Guiding Principles</h3>
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-item">
                      <div className="value-icon-container">{value.icon}</div>
                      <h4 className="value-item-title">{value.title}</h4>
                      <p className="value-item-description">{value.description}</p>
                    </div>
                  ))}
                </div>
              {/* </div> */}
            </div>
          </section>
        )}

        {/* Team Section - UPDATED */}
        {activeSection === 'team' && (
          <section className="content-section active-section">
            <h2 className="section-main-title">Meet Our <span className="text-highlight">Leadership</span> Team</h2>
            <p className="section-description">Our experienced team of automotive professionals is dedicated to providing you with the best car buying experience.</p>
            
            <div className="team-container">
              <div className="team-header">
                <h3>Executive Leadership</h3>
                <p>Combined experience of over 55 years in the automotive industry</p>
              </div>
              
              <div className="team-grid">
                {teamMembers.map(member => (
                  <div key={member.id} className="team-member-card">
                    <div className={`member-avatar ${member.imgColor}`}>
                      <div className="avatar-initials">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="member-experience-badge">{member.experience}</div>
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p className="member-bio">
                        Passionate about delivering exceptional service and helping customers find their perfect vehicle. Specializes in customer satisfaction and long-term relationships.
                      </p>
                      <div className="member-expertise">
                        <span className="expertise-tag">Customer Service</span>
                        <span className="expertise-tag">Automotive</span>
                        <span className="expertise-tag">Leadership</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Milestones Section - UPDATED */}
        {activeSection === 'milestones' && (
          <section className="content-section active-section">
            <h2 className="section-main-title">Our <span className="text-highlight">Journey</span> Through Time</h2>
            <p className="section-description">Key milestones that shaped our company's growth and success</p>
            
            <div className="milestones-container">
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-circle"></div>
                      {index < milestones.length - 1 && <div className="marker-line"></div>}
                    </div>
                    <div className="timeline-content-card">
                      <div className="timeline-year">{milestone.year}</div>
                      <h3 className="timeline-title">{milestone.title}</h3>
                      <p className="timeline-description">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="milestones-summary">
                <h3>Our Growth Timeline</h3>
                <p>From a single dealership to a regional leader, our journey has been marked by continuous innovation and customer-focused growth.</p>
                <div className="growth-stats">
                  <div className="growth-stat">
                    <div className="growth-number">+450%</div>
                    <div className="growth-label">Revenue Growth</div>
                  </div>
                  <div className="growth-stat">
                    <div className="growth-number">7x</div>
                    <div className="growth-label">Location Expansion</div>
                  </div>
                  <div className="growth-stat">
                    <div className="growth-number">15+</div>
                    <div className="growth-label">Industry Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      
    </div>
  );
};

export default AboutPage;