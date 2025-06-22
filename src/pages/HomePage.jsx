// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // This CSS will be completely dedicated to the game menu look

// Define the menu items for the main screen, matching the Rewrite image order
const gameMenuItems = [
  // To keep it "cleaner" and avoid the previous confusion with WelcomePage,
  // let's make "Start" initially go to the beats catalog, same as "Moon".
  // You can change this destination later if you build a specific intro/hub page.
  { label: 'Start', path: '/beats' },
  { label: 'Moon', path: '/beats' },
  { label: 'Terra', path: '/artist' },
  { label: 'Load', path: '/saved' },
  { label: 'Gallery', path: '/more-info' },
  { label: 'Config', path: '/licenses-faq' },
  { label: 'Exit', path: '/contact' }
];

function HomePage() {
  return (
    <div className="game-main-menu-container"> {/* Renamed class for clarity */}
      <div className="game-logo-area">
        {/* ACTION: Replace with your actual logo image */}
        <img src="/bgr/rl.png" alt="Your Platform Logo" className="game-logo-image" />
      </div>

      <nav className="game-menu-options-bar">
        {gameMenuItems.map((item) => (
          <Link key={item.label} to={item.path} className="game-menu-button">
            <span className="game-menu-button-icon">◆</span> {/* Diamond icon */}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default HomePage;