// src/components/layout/InnerPageNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './InnerPageNav.css';

function InnerPageNav({ pageTitle }) {
  return (
    <header className="inner-page-nav-header">
      <div className="nav-content">
        <Link to="/" className="return-to-menu-button">
          <span className="return-icon">&laquo;</span>
          <span>Return to Menu</span>
        </Link>
        <h1 className="inner-page-title">{pageTitle}</h1>
        {/* A spacer to help with centering the title */}
        <div className="nav-spacer"></div>
      </div>
    </header>
  );
}

export default InnerPageNav;