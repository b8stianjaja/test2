// src/pages/BeatsCatalogPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import BeatCard from '../components/common/BeatCard';
import Pagination from '../components/common/Pagination'; // Import the new Pagination component
import { mockBeatsData } from '../data/mockBeats.js';
import './BeatsCatalogPage.css';

function BeatsCatalogPage() {
  const [beats, setBeats] = useState([]);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const audioRef = useRef(null);

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const [beatsPerPage] = useState(6); // Or 9, 12 - choose how many beats per page

  useEffect(() => {
    setBeats(mockBeatsData);
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) audioElement.pause();
    if (currentPlayingId) {
      const currentBeat = beats.find(b => b.id === currentPlayingId);
      if (currentBeat && audioElement) {
        audioElement.src = currentBeat.audioUrl;
        audioElement.play().catch(error => console.error("Error playing audio:", error));
      }
    }
    return () => { if (audioElement) audioElement.pause(); };
  }, [currentPlayingId, beats]);

  const handlePlay = (beatToPlay) => {
    if (currentPlayingId === beatToPlay.id) {
      if (audioRef.current) audioRef.current.pause();
      setCurrentPlayingId(null);
    } else {
      setCurrentPlayingId(beatToPlay.id);
    }
  };

  const filteredBeats = beats.filter(beat =>
    beat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beat.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (beat.tags && beat.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  // --- Pagination Logic ---
  const indexOfLastBeat = currentPage * beatsPerPage;
  const indexOfFirstBeat = indexOfLastBeat - beatsPerPage;
  const currentBeatsToDisplay = filteredBeats.slice(indexOfFirstBeat, indexOfLastBeat);

  // Change page handler
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: scroll to top on page change
  };

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="page-container beats-catalog-page">
      <h1 className="page-title">The Beatwood</h1>
      <audio ref={audioRef} id="page-audio-player" onEnded={() => setCurrentPlayingId(null)}></audio>

      <div className="catalog-controls">
        <input
          type="text"
          placeholder="Search by title, genre, tags..."
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
              onPlay={handlePlay}
              currentPlayingId={currentPlayingId}
            />
          ))}
        </div>
      ) : (
        <p className="no-beats-message">
          No echoes match your search in the Beatwood. Try different whispers.
        </p>
      )}

      {/* --- Render Pagination Component --- */}
      {filteredBeats.length > beatsPerPage && ( // Only show pagination if there's more than one page
        <Pagination
          beatsPerPage={beatsPerPage}
          totalBeats={filteredBeats.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default BeatsCatalogPage;