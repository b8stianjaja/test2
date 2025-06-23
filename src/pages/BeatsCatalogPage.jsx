// src/pages/BeatsCatalogPage.jsx
import React, { useState, useMemo } from 'react';
import { mockBeatsData } from '../data/mockBeats.js';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

// FIX: InnerPageNav import is no longer needed and has been removed.
// import InnerPageNav from '../components/layout/InnerPageNav'; 
import BeatCard from '../components/common/BeatCard';
import Pagination from '../components/common/Pagination';

import './BeatsCatalogPage.css';

function BeatsCatalogPage() {
  const { currentPlayingId, handlePlayToggle } = useAudioPlayer(mockBeatsData);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({ genres: [], tags: [] });
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const beatsPerPage = 6;

  const allGenres = useMemo(() => [...new Set(mockBeatsData.map(b => b.genre))], []);
  const allTags = useMemo(() => [...new Set(mockBeatsData.flatMap(b => b.tags))], []);

  const handleFilterToggle = (type, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[type];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [type]: newValues };
    });
    setCurrentPage(1);
  };

  const processedBeats = useMemo(() => {
    let beats = [...mockBeatsData];

    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      beats = beats.filter(beat => beat.title.toLowerCase().includes(lowercasedFilter));
    }
    if (activeFilters.genres.length > 0) {
      beats = beats.filter(beat => activeFilters.genres.includes(beat.genre));
    }
    if (activeFilters.tags.length > 0) {
      beats = beats.filter(beat => activeFilters.tags.some(tag => beat.tags.includes(tag)));
    }

    switch (sortBy) {
      case 'bpm_asc': beats.sort((a, b) => a.bpm - b.bpm); break;
      case 'bpm_desc': beats.sort((a, b) => b.bpm - a.bpm); break;
      case 'newest': default: beats.reverse(); break;
    }

    return beats;
  }, [searchTerm, activeFilters, sortBy]);

  const currentBeatsToDisplay = processedBeats.slice((currentPage - 1) * beatsPerPage, currentPage * beatsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    // FIX: The <InnerPageNav /> component call has been completely removed from here.
    <div className="page-container catalog-layout-container">
      
      <aside className="catalog-sidebar">
        <div className="filter-group">
          <h3 className="filter-title">Sort By</h3>
          <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="bpm_asc">BPM (Low to High)</option>
            <option value="bpm_desc">BPM (High to Low)</option>
          </select>
        </div>
        <div className="filter-group">
          <h3 className="filter-title">Genres</h3>
          <div className="filter-options">
            {allGenres.map(genre => (
              <button
                key={genre}
                className={`filter-button ${activeFilters.genres.includes(genre) ? 'active' : ''}`}
                onClick={() => handleFilterToggle('genres', genre)}
              >{genre}</button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <h3 className="filter-title">Tags</h3>
          <div className="filter-options">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-button ${activeFilters.tags.includes(tag) ? 'active' : ''}`}
                onClick={() => handleFilterToggle('tags', tag)}
              >{tag}</button>
            ))}
          </div>
        </div>
      </aside>

      <main className="catalog-main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
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
                currentPlayingId={currentPlayingId}
              />
            ))}
          </div>
        ) : (
          <p className="no-beats-message">The woods are quiet... no echoes match your search.</p>
        )}

        {processedBeats.length > beatsPerPage && (
          <Pagination
            beatsPerPage={beatsPerPage}
            totalBeats={processedBeats.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </main>
    </div>
  );
}

export default BeatsCatalogPage;