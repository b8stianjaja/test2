// src/pages/LicensesFAQPage.jsx
import React, { useState } from 'react';
import { mockLicenseData, mockFaqData } from '../data/mockLicenses.js';
import './LicensesFAQPage.css';

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open the first FAQ by default
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

function LicensesFAQPage() {
  return (
    <>
      <section className="licenses-section">
        <h2>Understanding Your Echoes (Licenses)</h2>
        <p className="section-intro">
          Each beat comes with different usage rights. Choose the license that best fits your creative journey and project scope.
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
                <li><strong>Credit:</strong> {license.credit}</li>
              </ul>
              {license.notes && <p className="license-notes"><em>{license.notes}</em></p>}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Scrolls of Knowledge (FAQ)</h2>
        {mockFaqData.map((faq, index) => (
          <FAQItem key={faq.id} faq={faq} index={index} />
        ))}
      </section>
    </>
  );
}
export default LicensesFAQPage;