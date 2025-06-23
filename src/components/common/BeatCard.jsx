// src/components/common/BeatCard.jsx
import React from 'react';
import './BeatCard.css'; // Linking to the new, beautified CSS

// A sleeker, more modern Play icon
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// A sleeker, more modern Pause icon
const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// An icon for the purchase button for better UX
const PurchaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10H21M7 15H9M12 15H14M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      <div className="beat-card-artwork-wrapper">
        <img src={beat.artworkUrl} alt={beat.title} className="beat-card-artwork" />
        <button onClick={handlePlayToggle} className="play-pause-trigger">
          <div className="play-pause-button">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
        </button>
      </div>
      <div className="beat-card-content">
        <div className="beat-card-header">
            <h3 className="beat-card-title">{beat.title}</h3>
            <p className="beat-card-producer">{beat.producer || 'N/A'}</p>
        </div>
        <div className="beat-card-tags">
          <span className="tag">{beat.bpm} BPM</span>
          <span className="tag">{beat.key}</span>
          <span className="tag">{beat.genre}</span>
        </div>
        <div className="beat-card-footer">
          <button className="purchase-button">
            <PurchaseIcon />
            <span>{displayPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeatCard;