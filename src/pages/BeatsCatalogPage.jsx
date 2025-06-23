// src/pages/BeatsCatalogPage.jsx (Refactored)
import React, { useState, useEffect } from 'react';
import { mockBeatsData } from '../data/mockBeats.js';
import { useAudioPlayer } from '../hooks/useAudioPlayer'; // Import hook
import BeatCard from '../components/common/BeatCard';
import Pagination from '../components/common/Pagination';
import './BeatsCatalogPage.css';

function BeatsCatalogPage() {
  // Clean, centralized audio logic
  const { currentPlayingId, handlePlayToggle } = useAudioPlayer(mockBeatsData);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const beatsPerPage = 6;

  // ... (rest of your filtering and pagination logic is great!)
  const filteredBeats = mockBeatsData.filter(/*...*/);
  const currentBeatsToDisplay = filteredBeats.slice(/*...*/);
  const paginate = (pageNumber) => {/*...*/};

  return (
    <div className="beats-catalog-container">
      {/* Use the reusable title class from index.css */}
      <h1 className="game-title">The Beatwood</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search the echoes..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {currentBeatsToDisplay.length > 0 ? (
        <div className="beats-grid">
          {currentBeatsToDisplay.map((beat) => (
            <BeatCard
              key={beat.id}
              beat={beat}
              onPlay={handlePlayToggle}
              isPlaying={currentPlayingId === beat.id} // Pass down playing state
            />
          ))}
        </div>
      ) : (
        <p className="no-beats-message">The woods are quiet... no echoes found.</p>
      )}

      {filteredBeats.length > beatsPerPage && (
        <Pagination /* ...props... */ />
      )}
    </div>
  );
}

export default BeatsCatalogPage;