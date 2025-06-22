// src/pages/WelcomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BeatCard from '../components/common/BeatCard';
import { mockBeatsData } from '../data/mockBeats.js';
// import './WelcomePage.css'; // You'll create this CSS file

// If you had a HomePage.css for the multi-section layout, RENAME it to WelcomePage.css
// and import it here. For now, I'll assume you'll create/copy styles.
// For this example, I'll use inline styles for brevity for the container,
// but you should use a WelcomePage.css file.

function WelcomePage() {
  const [featuredBeats, setFeaturedBeats] = useState([]);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setFeaturedBeats(mockBeatsData.slice(0, 3));
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) audioElement.pause();
    if (currentPlayingId) {
      const currentBeat = mockBeatsData.find(b => b.id === currentPlayingId);
      if (currentBeat && audioElement) {
        audioElement.src = currentBeat.audioUrl;
        audioElement.play().catch(error => console.error("Error playing audio:", error));
      }
    }
    return () => { if (audioElement) audioElement.pause(); };
  }, [currentPlayingId]);

  const handlePlayBeat = (beatToPlay) => {
    if (currentPlayingId === beatToPlay.id) {
      if (audioRef.current) audioRef.current.pause();
      setCurrentPlayingId(null);
    } else {
      setCurrentPlayingId(beatToPlay.id);
    }
  };

  return (
    // You would typically have a .page-container and .welcome-page class here
    // styled by WelcomePage.css (which would be your old HomePage.css content)
    <div className="page-container" style={{ paddingTop: '2rem' }}> {/* Added basic page-container for spacing */}
      <audio ref={audioRef} id="welcome-page-audio-player" onEnded={() => setCurrentPlayingId(null)}></audio>

      {/* This content is from your previous multi-section HomePage */}
      <section className="hero-section" style={{ backgroundColor: 'rgba(23, 30, 43, 0.6)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', color: '#e0e7ff' }}>Welcome to the Grove!</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: '#a3b3c9' }}>
          Your journey into sound begins. Explore featured echoes or dive into the full catalog.
        </p>
        <Link to="/beats" className="cta-button hero-cta" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'rgba(129,230,217,0.8)', color: '#1a202c', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Explore All Beats</Link>
      </section>

      <section className="featured-beats-section" style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '10px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', color: '#c9d2ff', marginBottom: '1.5rem' }}>Featured Echoes</h2>
        {featuredBeats.length > 0 ? (
          <div className="beats-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {featuredBeats.map((beat) => (
              <BeatCard
                key={beat.id}
                beat={beat}
                onPlay={handlePlayBeat}
                currentPlayingId={currentPlayingId}
              />
            ))}
          </div>
        ) : (
          <p>Loading featured beats...</p>
        )}
      </section>

      <section className="artist-intro-snippet" style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '10px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', color: '#c9d2ff', marginBottom: '1.5rem' }}>The Storyteller</h2>
        <div className="artist-snippet-content" style={{ textAlign: 'center', color: '#c5d3e6' }}>
          <p>
            [Your artist name/platform name] weaves auditory tales...
            <Link to="/artist" className="inline-link" style={{ color: '#81e6d9', fontWeight: 'bold' }}> Learn More...</Link>
          </p>
        </div>
      </section>

       <section className="why-choose-us" style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '10px' }}>
         <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', color: '#c9d2ff', marginBottom: '1.5rem' }}>Why This Grove?</h2>
         <div className="features-grid" style={{ display: 'flex', justifyContent: 'space-around', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div className="feature-item" style={{ backgroundColor: 'rgba(23,30,43,0.7)', padding: '1rem', borderRadius: '8px', flexBasis: '30%', textAlign: 'center' }}><h3>Unique Sound</h3> <p>...</p> </div>
            <div className="feature-item" style={{ backgroundColor: 'rgba(23,30,43,0.7)', padding: '1rem', borderRadius: '8px', flexBasis: '30%', textAlign: 'center' }}><h3>Flexible Licensing</h3><p>...</p></div>
            <div className="feature-item" style={{ backgroundColor: 'rgba(23,30,43,0.7)', padding: '1rem', borderRadius: '8px', flexBasis: '30%', textAlign: 'center' }}><h3>Artistically Inspired</h3><p>...</p></div>
         </div>
       </section>
       <div style={{ display:'none' }} id="welcome-page-audio-player"></div> {/* Ensure audio element exists but is hidden */}
    </div>
  );
}

export default WelcomePage;