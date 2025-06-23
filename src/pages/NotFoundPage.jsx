// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Create this CSS file

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Echo Lost in the Void</h2>
        <p>The path you seek does not exist within this Grove, or has been reclaimed by the wilds.</p>
        <Link to="/" className="return-home-button">
          Return to the Heart of the Grove
        </Link>
      </div>
    </div>
  );
}
export default NotFoundPage;