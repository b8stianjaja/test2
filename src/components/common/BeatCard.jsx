// src/components/common/BeatCard.jsx
import React from 'react';
import './BeatCard.css'; // Linking to the new, beautified CSS

// A more modern, sleek Play icon
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 18.25V5.75L18.5 12L7.5 18.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// A more modern, sleek Pause icon
const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


function BeatCard({ beat, onPlay, currentPlayingId }) {
  const isPlaying = currentPlayingId === beat.id;

  const handlePlayToggle = (e) => {
    e.stopPropagation();
    onPlay(beat);
  };

  const displayPrice = beat.price.mp3 ? `$${beat.price.mp3}` : 'N/A';

  return (
    <div className={`beat-card ${isPlaying ? 'is-playing' : ''}`}>
      <div className="beat-card-artwork-container">
        <img src={beat.artworkUrl} alt={beat.title} className="beat-card-artwork" />
        <div className="artwork-overlay"></div> {/* Added for gradient effect */}
        <button onClick={handlePlayToggle} className="play-pause-button-overlay">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="beat-card-info">
        <div>
          <h3 className="beat-card-title">{beat.title}</h3>
          <p className="beat-card-details">
            <span>{beat.bpm} BPM</span>
            <span className="detail-separator">|</span>
            <span>{beat.key}</span>
          </p>
        </div>
        <div className="beat-card-footer">
          <p className="beat-card-genre">{beat.genre}</p>
          <span className="beat-card-price">{displayPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default BeatCard;