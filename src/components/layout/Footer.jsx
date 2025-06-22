// src/components/layout/Footer.jsx
import React from 'react';
import './Footer.css'; // We'll create this CSS file next

// Placeholder for social icons - you can replace with actual SVGs or an icon library later
// For example, if using Font Awesome, you'd use <i className="fab fa-youtube"></i>
const SocialIconLink = ({ href, label, iconPlaceholder }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-social-icon">
        {iconPlaceholder || label} {/* Display placeholder text or actual icon component */}
    </a>
);

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-socials">
            {/* Replace placeholders with actual icons or links */}
            <SocialIconLink href="https://youtube.com/yourchannel" label="YouTube" iconPlaceholder="YT" />
            <SocialIconLink href="https://instagram.com/yourprofile" label="Instagram" iconPlaceholder="IG" />
            <SocialIconLink href="https://soundcloud.com/yourprofile" label="SoundCloud" iconPlaceholder="SC" />
            {/* Add more social links as needed */}
        </div>
        <p className="copyright-text">
          © {currentYear} [Your Artist Name / Grove of Echoes]. All Rights Reserved.
        </p>
        <nav className="footer-links">
          <a href="/licenses-faq">Licensing Info</a>
          <span className="footer-link-separator">|</span>
          <a href="/contact">Contact</a>
          {/* Add Privacy Policy / Terms links here later if needed */}
          {/* <span className="footer-link-separator">|</span>
          <a href="/privacy-policy">Privacy Policy</a> */}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;