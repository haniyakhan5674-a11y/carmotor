import React from 'react'
// import './About.css';

function Footer() {
  return (
    <div>
     {/* Call to Action */}
      <section className="call-to-action-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your Dream Car?</h2>
          <p className="cta-description">Visit our showroom or browse our online inventory to find the perfect vehicle for you. Schedule a test drive today!</p>
          <div className="cta-buttons-container">
            <a href="/inventory" className="cta-primary-button">Browse Inventory</a>
            <a href="/contact" className="cta-secondary-button">Schedule Test Drive</a>
            <a href="/contact" className="cta-tertiary-button">Contact Us</a>
          </div>
          <div className="cta-contacts">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-info">(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-info">info@autoelite.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-info">123 Auto Drive, City, State 12345</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer