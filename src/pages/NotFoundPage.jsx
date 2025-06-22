// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page-container not-found-page" style={{ textAlign: 'center' }}>
      <h1 className="page-title">404 - Echo Lost in the Void</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#4A5568', color: 'white', borderRadius: '5px', display: 'inline-block', marginTop: '1rem' }}>
        Return to the Grove (Home)
      </Link>
    </div>
  );
}
export default NotFoundPage;