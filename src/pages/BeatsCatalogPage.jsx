// src/pages/BeatsCatalogPage.jsx
import React, { useState, useMemo } from 'react';
import { mockBeatsData } from '../data/mockBeats.js';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import BeatCard from '../components/common/BeatCard';
import Pagination from '../components/common/Pagination';
import './BeatsCatalogPage.css';

function BeatsCatalogPage() {
  const { currentPlayingId, handlePlayToggle } = useAudioPlayer(mockBeatsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const beatsPerPage = 6;

  const filteredBeats = useMemo(() => {
    if (!searchTerm) {
      return mockBeatsData;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return mockBeatsData.filter(beat => {
      return (
        beat.title.toLowerCase().includes(lowercasedFilter) ||
        beat.genre.toLowerCase().includes(lowercasedFilter) ||
        beat.tags.some(tag => tag.toLowerCase().includes(lowercasedFilter))
      );
    });
  }, [searchTerm]);

  // Pagination logic
  const indexOfLastBeat = currentPage * beatsPerPage;
  const indexOfFirstBeat = indexOfLastBeat - beatsPerPage;
  const currentBeatsToDisplay = filteredBeats.slice(indexOfFirstBeat, indexOfLastBeat);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title, genre, or tag..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
        />
      </div>

      {currentBeatsToDisplay.length > 0 ? (
        <div className="beats-grid">
          {currentBeatsToDisplay.map((beat) => (
            <BeatCard
              key={beat.id}
              beat={beat}
              onPlay={handlePlayToggle}
              isPlaying={currentPlayingId === beat.id}
            />
          ))}
        </div>
      ) : (
        <p className="no-beats-message">The woods are quiet... no echoes match your search.</p>
      )}

      {filteredBeats.length > beatsPerPage && (
        <Pagination
          beatsPerPage={beatsPerPage}
          totalBeats={filteredBeats.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </>
  );
}

export default BeatsCatalogPage;