// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// import MainMenu from './components/layout/MainMenu'; // No longer needed if always hidden
// import Footer from './components/layout/Footer';   // No longer needed if always hidden

// Import your page components
import HomePage from './pages/HomePage'; // This IS your Game Main Menu screen
import BeatsCatalogPage from './pages/BeatsCatalogPage';
import ArtistProfilePage from './pages/ArtistProfilePage';
import SavedItemsPage from './pages/SavedItemsPage';
import MoreInfoPage from './pages/MoreInfoPage';
import LicensesFAQPage from './pages/LicensesFAQPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  // const location = useLocation(); // No longer needed for this specific logic
  // const showGlobalNavAndFooter = false; // Always false

  return (
    <div className="app-container">
      <main className={`content-area ${location.pathname === '/' ? 'content-hidden-by-menu' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Game Main Menu Screen */}
          {/*
            The "START" button on HomePage currently links to /beats.
            If you need a dedicated "Welcome" or "Hub" page for START,
            you would define its route here and update the link in HomePage.jsx
          */}
          <Route path="/beats" element={<BeatsCatalogPage />} />
          <Route path="/artist" element={<ArtistProfilePage />} />
          <Route path="/saved" element={<SavedItemsPage />} />
          <Route path="/more-info" element={<MoreInfoPage />} />
          <Route path="/licenses-faq" element={<LicensesFAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/*
        MainMenu and Footer are now removed from here to prevent them
        from showing on any page. Navigation relies on the HomePage options.
      */}
      {/* {showGlobalNavAndFooter && <MainMenu />} */}
      {/* {showGlobalNavAndFooter && <Footer />} */}
    </div>
  );
}

export default App;