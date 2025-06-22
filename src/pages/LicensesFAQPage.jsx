// src/pages/LicensesFAQPage.jsx
import React, { useState } from 'react';
import { mockLicenseData, mockFaqData } from '../data/mockLicenses.js';
import './LicensesFAQPage.css'; // Create this new CSS file

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="faq-answer">{faq.answer}</p>}
    </div>
  );
};

function LicensesFAQPage() {
  return (
    <div className="page-container licenses-faq-page">
      <h1 className="page-title">Lore of Licenses & Scrolls of Knowledge</h1>

      <section className="licenses-section">
        <h2>Understanding Your Echoes (Licenses)</h2>
        <p className="section-intro">
          Each beat comes with different usage rights. Choose the license that best fits your creative needs and project scope.
        </p>
        <div className="licenses-grid">
          {mockLicenseData.map((license) => (
            <div key={license.id} className="license-card">
              <h3>{license.name}</h3>
              <p className="license-price">
                {typeof license.price === 'number' ? `$${license.price.toFixed(2)}` : license.price}
              </p>
              <ul>
                <li><strong>Format:</strong> {license.format}</li>
                <li><strong>Distribution:</strong> {license.distributionLimit}</li>
                <li><strong>Music Video:</strong> {license.musicVideo}</li>
                <li><strong>Radio:</strong> {license.radioBroadcasting}</li>
                <li><strong>Performances:</strong> {license.livePerformances}</li>
                <li><strong>Commercial Use:</strong> {license.commercialUse}</li>
                <li><strong>Credit:</strong> {license.credit}</li>
                <li><strong>Delivery:</strong> {license.delivery}</li>
              </ul>
              {license.notes && <p className="license-notes"><em>Note: {license.notes}</em></p>}
              {/* Add a "Learn More" or "Select" button later */}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Scrolls of Knowledge (FAQ)</h2>
        {mockFaqData.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </section>
    </div>
  );
}
export default LicensesFAQPage;