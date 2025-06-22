import React, { useState, useRef, useEffect } from 'react';
import './BeatCard.css'; // We'll create this CSS file next

// Simple play/pause icons (you can replace with SVGs or an icon library later)
const PlayIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>;
const PauseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>;

function BeatCard({ beat, onPlay, currentPlayingId }) {
  const isPlaying = currentPlayingId === beat.id;

  const handlePlayToggle = (e) => {
    e.stopPropagation(); // Prevent card click if defined later
    onPlay(beat);
  };

  // Basic price display - you can make this more complex for multiple licenses
  const displayPrice = beat.price.mp3 ? `$${beat.price.mp3}` : 'N/A';

  return (
    <div className="beat-card">
      <div className="beat-card-artwork-container">
        <img src={beat.artworkUrl} alt={beat.title} className="beat-card-artwork" />
        <button onClick={handlePlayToggle} className="play-pause-button-overlay">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="beat-card-info">
        <h3 className="beat-card-title">{beat.title}</h3>
        <p className="beat-card-details">
          <span>{beat.bpm} BPM</span> | <span>{beat.key}</span>
        </p>
        <p className="beat-card-genre">{beat.genre}</p>
        <div className="beat-card-footer">
          <span className="beat-card-price">{displayPrice} (MP3)</span>
          {/* Future: Add to cart button or view details link */}
        </div>
      </div>
    </div>
  );
}

export default BeatCard;