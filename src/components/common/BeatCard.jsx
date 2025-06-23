// src/components/common/BeatCard.jsx
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BeatCard.css';

const PlayIcon = () => ( <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg> );
const PauseIcon = () => ( <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> );

const BeatCard = React.memo(function BeatCard({ beat, onPlay, currentPlayingId }) {
  if (!beat) return null;

  const cardRef = useRef(null);
  const isPlaying = currentPlayingId === beat.id;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handlePlayToggle = (e) => {
    e.stopPropagation();
    onPlay(beat);
  };

  const displayPrice = beat.price?.mp3 ? `$${beat.price.mp3}` : 'FREE';

  return (
    <div
      ref={cardRef}
      className={`beat-card ${isPlaying ? 'is-playing' : ''}`}
    >
      <div className="card-content">
        <div className="media-zone">
          <div className="artwork-wrapper">
            <img src={beat.artworkUrl} alt={beat.title} className="artwork-img" />
          </div>
          <button 
            onClick={handlePlayToggle} 
            className="play-pause-btn"
            aria-label={isPlaying ? `Pause ${beat.title}` : `Play ${beat.title}`}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
        <div className="info-zone">
          <div className="info-header">
            <h3 className="beat-title">{beat.title}</h3>
            <p className="beat-producer">{beat.producer || 'Anonymous'}</p>
          </div>
          <div className="info-footer">
            <div className="beat-tags">
              {beat.bpm && <span className="tag">{beat.bpm} BPM</span>}
              {beat.key && <span className="tag">{beat.key}</span>}
            </div>
            <div className="price-tag">{displayPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

BeatCard.propTypes = {
  beat: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    artworkUrl: PropTypes.string.isRequired,
    producer: PropTypes.string,
    bpm: PropTypes.number,
    key: PropTypes.string,
    price: PropTypes.shape({
      mp3: PropTypes.number,
    }),
  }).isRequired,
  onPlay: PropTypes.func.isRequired,
  currentPlayingId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BeatCard;