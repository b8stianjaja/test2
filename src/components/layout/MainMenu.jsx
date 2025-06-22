import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  const menuItems = [
    { path: "/beats", label: "Enter the Grove" }, // More evocative language
    { path: "/licenses-faq", label: "The Accord" },
    { path: "/artist", label: "About the Guardian" },
    { path: "/contact", label: "Send a Whisper" }
  ];

  return (
    <div className="main-menu-container">
      <div className="game-title-container">
        <h1 className="game-title">Grove of Echoes</h1>
        <h2 className="game-subtitle">A Sonic Rewrite</h2>
      </div>
      <nav className="main-menu-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="menu-item">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;