// src/pages/HomePage.jsx
import React, { useRef } from 'react'; // Import useRef for audio handling
import { NavLink } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const menuItems = [
    { path: "/beats", label: "New Game" },
    { path: "/saved", label: "Load Game" },
    { path: "/licenses-faq", label: "Config" },
    { path: "/contact", label: "Exit" }
  ];

  // Create references to our audio elements
  const hoverSoundRef = useRef(null);
  const clickSoundRef = useRef(null);

  // Function to play the hover sound
  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0; // Rewind to the start
      hoverSoundRef.current.play();
    }
  };

  // Function to play the click sound
  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0; // Rewind to the start
      clickSoundRef.current.play();
    }
  };

  return (
    <main className="kh-main-menu">
      {/* Audio elements - place your sound files in the public/audio folder */}
      <audio ref={hoverSoundRef} src="/audio/menu-hover.wav" preload="auto"></audio>
      <audio ref={clickSoundRef} src="/audio/menu-click.wav" preload="auto"></audio>

      <div className="kh-main-menu__logo-area">
        <img src="/bgr/rl.png" alt="Game Logo" className="kh-main-menu__logo" />
      </div>

      <nav className="kh-main-menu__nav">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              style={{ '--delay': index * 0.15 + 's' }}
              onMouseEnter={playHoverSound} // Play sound on mouse enter
            >
              <NavLink
                to={item.path}
                className="kh-main-menu__link"
                onClick={playClickSound} // Play sound on click/tap
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <footer className="kh-main-menu__footer">
        © Your Game Studio
      </footer>
    </main>
  );
}

export default HomePage;